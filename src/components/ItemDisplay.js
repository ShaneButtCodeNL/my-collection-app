import "./css/ItemDisplay.css";

export default function ItemDisplay(props) {
  const formatDetail = (detailName, detailData) => {
    //If detail data is a boolean value will display "yes" for true and "No" for false
    if (detailData === true) detailData = "Yes";
    if (detailData === false) detailData = "No";
    //Handles Age Restricted
    if (detailName === "Age Restricted") {
      return (
        <div style={{ display: "flex" }}>
          <div className="detailName">
            18<sup>+</sup>
            {" : "}
          </div>
          <div className="detailData" style={{ marginTop: "auto" }}>
            {detailData}
          </div>
        </div>
      );
    }
    // Handles Genres
    if (detailName === "Genres") {
      return (
        <div style={{ display: "flex" }}>
          <div className="detailName">Genres : </div>
          <div className="detailData">
            {detailData.map((value, index) => {
              return (
                <span key={index} style={{ whiteSpace: "pre" }}>
                  {`${index ? "\n" : ""}${value}`}
                </span>
              );
            })}
          </div>
        </div>
      );
    }

    // Handles Everything Else that doesn't need a special format
    return (
      <div style={{ display: "flex" }}>
        <div className="detailName">{`${detailName} : `}</div>
        <div className="detailData">{`${detailData}`}</div>
      </div>
    );
  };

  const formatDetails = (details) => {
    return (
      <div>
        {details.type ? formatDetail("Type", details.type) : <></>}
        {details.platform ? formatDetail("Platform", details.platform) : <></>}
        {details.series ? formatDetail("Collection", details.series) : <></>}
        {details.name ? formatDetail("Name", details.name) : <></>}
        {details.volume !== undefined ? (
          formatDetail("Volume", details.volume)
        ) : (
          <></>
        )}
        {details.from ? formatDetail("From", details.from) : <></>}
        {details.mediaType ? (
          formatDetail("Media Type", details.mediaType)
        ) : (
          <></>
        )}
        {details.releaseDate ? (
          formatDetail("Release Date", details.releaseDate)
        ) : (
          <></>
        )}
        {details.author ? formatDetail("Author", details.author) : <></>}
        {details.publisher ? (
          formatDetail("Publisher", details.publisher)
        ) : (
          <></>
        )}
        {details.limitedEdition ? (
          formatDetail("Limited Edition", details.limitedEdition)
        ) : (
          <></>
        )}
        {details.hasCase !== undefined ? (
          formatDetail("Has A Case", details.hasCase)
        ) : (
          <></>
        )}
        {details.condition ? (
          formatDetail("Condition", details.condition)
        ) : (
          <></>
        )}
        {details.sealed !== undefined ? (
          formatDetail("Sealed", details.sealed)
        ) : (
          <></>
        )}
        {details.ageRestricted !== undefined ? (
          formatDetail("Age Restricted", details.ageRestricted)
        ) : (
          <></>
        )}
        {details.genres ? formatDetail("Genres", details.genres) : <></>}
      </div>
    );
  };

  return (
    <fieldset className="itemDisplay">
      <legend>{props.item.type}</legend>
      <img src={props.item.imgPath} alt={props.alt} />
      <div className="itemDetails">{formatDetails(props.item.details)}</div>
    </fieldset>
  );
}
