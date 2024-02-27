import mock from "../mock.json";
import { UmdComponent } from "../react-umd-loader";


function RemoteTest() {
  return (
    <UmdComponent
      libName='ysf'
      libUrl='http://localhost:3000/ysf.umd.js'
      componentProps={{ content: mock }}
      fallback={<div>loading...</div>}
    />
  );
}

export default RemoteTest;
