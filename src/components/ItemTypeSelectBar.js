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
                    opacity: props.disableButtons || props.fade ? 0.5 : 1,
                    backgroundColor: props.mode
                      ? lessDarkColor
                      : lessLightColor,
                    flexGrow: 1.75,
                  }
                : { opacity: props.disableButtons || props.fade ? 0.5 : 1 }
            }
            onClick={() => {
              if (!(props.disableButtons || props.fade))
                props.setSelectedItemType(index);
            }}
          >
            {itemType.toUpperCase()}
          </li>
        );
      })}
    </ul>
  );
}
