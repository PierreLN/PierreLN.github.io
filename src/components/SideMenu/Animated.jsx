import { Fragment } from "react";
import AnimatedItem from "./AnimatedItem";

const Animated = (props) => {
  const arrayWord = props.children.split("");

  const wordList = arrayWord.map((data, index) => (
    
    <AnimatedItem key={index} delayTime={index}>{data}</AnimatedItem>
  ));

  return <Fragment>{wordList}</Fragment>;
};

export default Animated;
