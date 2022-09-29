import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
const style = {
  border: "1px dashed gray",
  height: "12rem",
  width: "12rem",
  margin: "auto",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
};
export const Dustbin = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  // if (isActive) {
  //   backgroundColor = "darkgreen";
  // } else if (canDrop) {
  //   backgroundColor = "darkkhaki";
  // }
  return (
    <div ref={drop} style={{ ...style }}>
      {isActive ? "" : "Drag a form element here"}
    </div>
  );
};
