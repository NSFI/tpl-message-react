import React from "react";
import ReactDOM from "react-dom/client";
import { bindReactRuntime, ensureShared } from "../react-umd-loader";

// Ensure that the shared module is loaded before the app
ensureShared();

// Bind the React runtime to the window object
bindReactRuntime({ React, ReactDOM });

async function main() {
  await import("./loadApp");
}

main().catch(console.error);
