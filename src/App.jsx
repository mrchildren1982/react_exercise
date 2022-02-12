import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
// import { CssModules } from "./components/CssModules";
// import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
// import { useEffect } from "react";
export const App = () => {
  // const [num, setNum] = useState(0);

  // const onClickButton = () => {
  //   // setNum(num + 1);
  //   console.log("レンダリング");
  //   setNum((prev) => prev + 1);
  // };

  return (
    <>
      <h1 style={{ color: "red" }}>こんんちは!</h1>
      <ColoredMessage color="blue">お元気ですか</ColoredMessage>
      <ColoredMessage color="pink">元気です</ColoredMessage>
      {/* <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p> */}
      {/* <CssModules /> */}
      <Emotion />
    </>
  );
};
