import "./css/ItemDisplay.css";

export default function ItemDisplay(props) {
  /**
   * Format an items detail obj for user
   * @param {Object} jsonObj
   * @returns A formatted string describing the details
   */
  const formatDetails = (jsonObj) => {
    let str = "";
    Object.entries(jsonObj).forEach(([key, value]) => {
      str = `${str}\n ${key} : ${value}`;
    });
    return str;
  };

  return (
    <div className="itemDisplay">
      <img src={props.item.imgPath} alt={props.alt} />
      <div className="itemDetails">
        {props.item.type}
        <br />
        {formatDetails(props.item.details)}
      </div>
    </div>
  );
}
