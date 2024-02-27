import CustomMessage from "./CustomMessage";
import { libReady } from "./react-umd-loader";

const LIB_NAME = "ysf";

async function main() {
  const libObject = { default: CustomMessage };
  libReady(LIB_NAME, libObject);
}

main().catch(console.error);

// // avoid isolatedModules warning
export default "Ysf Module Index file";
