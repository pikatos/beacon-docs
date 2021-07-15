(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return r}));var a=t(3),i=t(7),o=(t(0),t(212)),s={title:"Standalone Delegation"},c={unversionedId:"guides/standalone-delegation",id:"guides/standalone-delegation",isDocsHomePage:!1,title:"Standalone Delegation",description:"You can easily integrate beacon into your website, even if it's just a simple landing page or wordpress site.",source:"@site/docs/guides/standalone-delegation.mdx",slug:"/guides/standalone-delegation",permalink:"/guides/standalone-delegation",editUrl:"https://github.com/airgap-it/beacon-docs/edit/main/src/docs/guides/standalone-delegation.mdx",version:"current",sidebar:"docs",previous:{title:"Subscribe To Event",permalink:"/guides/subscribe-to-event"},next:{title:"UI Elements",permalink:"/advanced/ui-elements"}},d=[],l={toc:d};function r(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can easily integrate beacon into your website, even if it's just a simple landing page or wordpress site."),Object(o.b)("p",null,'Below is an example of a very simple page that adds a "delegate" button that establishes a beacon connection and then sends a delegation request to the wallet.'),Object(o.b)("p",null,"To try this example, you can copy and paste the following snippet into a local file called ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," and open it in the browser."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Browser Extensions")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Browser Extensions don't work if the ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file is opened directly. Instead, you have to start a small webserver.\nYou can do this with python: ",Object(o.b)("inlineCode",{parentName:"p"},"python -m SimpleHTTPServer 8080")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">\n<html lang="en">\n  <head>\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n    <meta http-equiv="Content-Style-Type" content="text/css" />\n    <title>Beacon Delegation Example</title>\n    \x3c!--\n      Make sure you replace "2.2.3" with the latest version.\n      https://www.srihash.org/\n    --\x3e\n    <script\n      src="https://unpkg.com/@airgap/beacon-sdk@2.2.3/dist/walletbeacon.min.js"\n      integrity="sha384-12/A3/UyuGF7Hdkd8eaSXef8lEO7Jzz4FtJd4NpfZ2j/wlhPM2GWZPoxo8DkxwkI"\n      crossorigin="anonymous"\n    ><\/script>\n  </head>\n  <body>\n    Beacon Delegation Example\n    <button id="connect">Connect and Delegate</button>\n\n    <script>\n      const bakerAddress = "tz1MJx9vhaNRSimcuXPK2rW4fLccQnDAnVKJ"; // Replace with baker address\n      const bakerName = "Delegation Example DApp"; // Replace with baker name / website\n\n      // Initiate DAppClient\n      const client = new beacon.DAppClient({\n        name: bakerName,\n      });\n\n      const delegate = () => {\n        client.requestOperation({\n          operationDetails: [\n            {\n              kind: beacon.TezosOperationType.DELEGATION,\n              delegate: bakerAddress,\n            },\n          ],\n        });\n      };\n\n      // Add event listener to the button\n      document.getElementById("connect").addEventListener("click", () => {\n        // Check if we have an active account\n        client.getActiveAccount().then((activeAccount) => {\n          if (activeAccount) {\n            // If we have an active account, send the delegate operation directly\n            delegate();\n          } else {\n            // If we don\'t have an active account, we need to request permissions first and then send the delegate operation\n            client.requestPermissions().then((permissions) => {\n              delegate();\n            });\n          }\n        });\n      });\n    <\/script>\n  </body>\n</html>\n')))}r.isMDXComponent=!0}}]);