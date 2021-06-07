import "./css/addDetail.css";

const AnimeGenres = [
  "None",
  "Kodomo",
  "Shonen",
  "Shojo",
  "Seinen",
  "Josei",
  "Harem",
  "Rev Harem",
  "Hentai",
  "Romance",
  "Horror",
  "Comedy",
  "Fanatsy",
  "Ecchi",
  "Mecha",
  "Loli",
  "Shota",
  "Isekai",
  "Yaoi",
  "Yuri",
  "Drama",
  "Supernatural",
  "Thriller",
  "Slice of Life",
  "Adventure",
  "Battle",
  "Magic",
];
const VideoGameGenres = [
  "None",
  "Platform",
  "Shooter",
  "Beat em Up",
  "Fighting",
  "RPG",
  "JRPG",
  "Sim",
  "Strategy",
  "Sports",
  "MMO",
  "Dating Sim",
  "Gatcha",
  "Idle",
  "Racing",
  "Tower Defense",
  "First-Person",
  "Thrid Person",
  "Real Time",
  "Rougelike",
  "Action",
  "Stealth",
  "Survival",
  "Rhythm",
  "Battle Royal",
];

export default function AddDetail(props) {
  const makeDisplay = (item) => {
    let details;
    switch (item.type) {
      case "Anime":
        details = (
          <>
            <label>Name:</label>
            <input
              type="text"
              name="addDetailName"
              id="addDetailName"
              className="inputEdit"
              defaultValue={item.details.name ? item.details.name : ""}
            />
            <label>Media Type:</label>
            <select
              name="addDetailMediaType"
              id="addDetailMediaType"
              className="inputEdit"
              defaultValue={
                item.details.mediaType ? item.details.mediaType : "DVD"
              }
            >
              <option value="DVD">DVD</option>
              <option value="BluRay">BluRay</option>
              <option value="VHS">VHS</option>
              <option value="Digital">Digital</option>
            </select>
            <label>Release Date:</label>
            <input
              type="Date"
              name="addDetailReleaseDate"
              id="addDetailReleaseDate"
              className="inputEdit"
            />
            <label>Publisher:</label>
            <input
              type="text"
              id="addDetailPublisher"
              name="addDetailPublisher"
              className="inputEdit"
              defaultValue={
                item.details.publisher ? item.details.publisher : ""
              }
            />
            <label>Limited Edition:</label>
            <select
              id="addDetailLimitedEdition"
              name="addLimitedEdition"
              className="inputEdit"
              defaultValue={
                item.details.limitedEdition === undefined
                  ? "no"
                  : item.details.limitedEdition
                  ? "yes"
                  : "no"
              }
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            <label>Condition:</label>
            <input
              type="text"
              id="addDetailCondition"
              name="addDetailCondition"
              className="inputEdit"
              defaultValue={
                item.details.condition ? item.details.condition : ""
              }
            />
            <label>Genres:</label>
            <select
              id="addDetailGenres"
              name="addDetailGenres"
              className="inputEdit"
            >
              {AnimeGenres.map((genreName, index) => {
                return (
                  <option key={index} value={genreName}>
                    {genreName}
                  </option>
                );
              })}
            </select>
          </>
        );
        break;
      default:
        return;
    }
    return details;
  };
  return (
    <form
      id="addDetailForm"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {makeDisplay(props.item)}
      <input type="submit" />
      <button
        onClick={() => {
          props.setShowAddDetail(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
}
