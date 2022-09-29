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
export const FieldsBasket = ({ DropEnd }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item)=>DropEnd(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  const Styleobj = isActive
    ? { ...style, backgroundColor: "lightyellow" }
    : style;

  return (
    <div ref={drop} style={Styleobj}>
      {isActive ? "" : "Drag a form element here"}
    </div>
  );
};
