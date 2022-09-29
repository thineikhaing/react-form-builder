import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
const style = {
  border: "1px solid gray",
  backgroundColor: "",
  padding: "0.5rem 1rem",
  marginRight: "0.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
  borderRadius: "4px",
  fontSize: "0.875rem",
  textTransform: "uppercase",
  fontWeight: "500",
  fontFamily: "Roboto",
};
export const Box = ({ name, show }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { name },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          show();
          console.log(`You dropped ${item.name} into ${dropResult.name}!`);
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [name]
  );
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}
    </div>
  );
};
