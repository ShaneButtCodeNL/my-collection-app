import "./css/ItemTypeSelectorBar.css";

const lessDarkColor = "rgba(100, 100, 100, 1)";
const lessLightColor = "rgba(200, 200, 200, 1)";

export default function ItemSelectBar(props) {
  return (
    <ul id="navBar">
      {props.items.map((itemType, index) => {
        return (
          <li
            key={index}
            className="navItem"
            style={
              index === props.selectedItemType
                ? {
                    backgroundColor: props.mode
                      ? lessDarkColor
                      : lessLightColor,
                    flexGrow: 1.75,
                  }
                : {}
            }
            onClick={() => props.setSelectedItemType(index)}
          >
            {itemType.toUpperCase()}
          </li>
        );
      })}
    </ul>
  );
}
