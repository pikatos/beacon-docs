import { SDK_VERSION } from "@airgap/beacon-sdk";
import React from "react";

import data from "../data/dapps.json";

const getDate = (date: number) => {
  const d = new Date(date);
  return (
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2)
  );
};
const isGreater = (a: any, b: any) => {
  return (a.sdkVersion ?? "0.0.0").localeCompare(
    b.sdkVersion ?? "0.0.0",
    undefined,
    {
      numeric: true,
    }
  ) === 1
    ? -1
    : 1;
};

const DAppTable = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>DApp</th>
            <th>SDK Version</th>
            <th>Last Updated</th>
            <th>Source Code</th>
          </tr>
        </thead>
        <tbody>
          {data.dapps.sort(isGreater).map((dApp, i) => (
            <tr key={i}>
              <td>
                <a href={dApp.url}>{dApp.name}</a>
              </td>
              <td>
                {dApp.sdkVersion}{" "}
                {dApp.sdkVersion === SDK_VERSION || dApp.sdkVersion === "2.2.9"
                  ? "✅"
                  : ""}
              </td>
              <td>{getDate(dApp.lastUpdate)}</td>
              <td>
                {dApp.sourceCode ? (
                  <a href={dApp.sourceCode}>Source Code</a>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Last check: {getDate(data.lastCheck)}</p>
    </>
  );
};
export default DAppTable;
