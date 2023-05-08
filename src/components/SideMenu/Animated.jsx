import { Fragment } from "react";
import AnimatedItem from "./AnimatedItem";

function Animated({children}) {
  const arrayWord = children.split("");

  const wordList = arrayWord.map((data, index) => (
    
    <AnimatedItem key={index} delayTime={index}>{data}</AnimatedItem>
  ));

  return <Fragment>{wordList}</Fragment>;
};

export default Animated;
