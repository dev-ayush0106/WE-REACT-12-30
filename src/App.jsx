import "./App.css"
import ConditionalRendering from "./Class 1/ConditionalRendering";
import First, { First1 } from "./Class 1/First";
import StateManage from "./Class 1/StateManage";
import UseJs from "./Class 1/UseJs";
import Product from "./Class 2/Props/PropsDrilling/Product";
import PropsStudy from "./Class 2/Props/PropsStudy";
import StateManage1 from "./Class 2/StateManage1";
function App() {
  return (
    // <h1>Hello</h1>
    <>
    {/* First Class */}
      {/* <First />
      <First1 />
      <UseJs/> */}
      {/* <ConditionalRendering/> */}
      {/* <StateManage/> */}

    {/* Second Class */}
      {/* <StateManage1/> */}
      {/* <PropsStudy/> */}
      <Product/>
    </>
  )
}

export default App;