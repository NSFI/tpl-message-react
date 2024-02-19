import CustomMessage from "./CustomMessage.tsx";
import { libReady } from "./react-umd-loader";

const LIB_NAME = "ysf";

async function main() {
  libReady(LIB_NAME, { CustomMessage });
}

main().catch(console.error);

// // avoid isolatedModules warning
export default "Ysf Module Index file";
