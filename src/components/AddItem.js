import { useRef } from "react";

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

export default function AddItem(props) {
  const itemTypeRef = useRef(null);
  const imgPathRef = useRef(null);
  const nameRef = useRef(null);
  const mediaTypeRef = useRef(null);
  const releaseDateRef = useRef(null);
  const publisherRef = useRef(null);
  const limitedEditionRef = useRef(null);
  const genreRefs = [useRef(null), useRef(null), useRef(null)];
  const sealedRef = useRef(null);
  const typeRef = useRef(null);
  const fromRef = useRef(null);
  const conditionRef = useRef(null);
  const ageRestrictedRef = useRef(null);
  const seriesRef = useRef(null);
  const volumeRef = useRef(null);
  const authorRef = useRef(null);
  const platformRef = useRef(null);
  const hasCaseRef = useRef(null);

  const resetDetails = async (newItemType) => {
    props.setItemType(newItemType);
    props.setImagePath("");
    imgPathRef.current.value = "";
    props.setName("");
    props.setMediaType("DVD");
    props.setReleaseDate(null);
    props.setPublisher("");
    props.setLimitedEdition(false);
    props.setGenres([]);
    props.setSealed(false);
    props.setType("");
    props.setFrom("");
    props.setCondition("");
    props.setAgeRestricted(false);
    props.setSeries("");
    props.setVolume(0);
    props.setAuthor("");
    props.setPlatform("PS2");
    props.setHasCase(false);
  };

  const makeDetails = (itemType) => {
    if (itemType === "Anime") {
      return (
        <>
          <label htmlFor="name">
            <div className="addItemLabel">Name:</div>
            <input
              id="name"
              name="name"
              ref={nameRef}
              onChange={() => {
                props.setName(nameRef.current.value);
              }}
            />
          </label>
          <label htmlFor="mediaType">
            <div className="addItemLabel">Media Type:</div>
            <select
              id="mediaType"
              defaultValue="DVD"
              ref={mediaTypeRef}
              onChange={() => {
                props.setMediaType(mediaTypeRef.current.value);
              }}
            >
              <option value="DVD">DVD</option>
              <option value="BluRay">BluRay</option>
              <option value="VHS">VHS</option>
              <option value="Digital">Digital</option>
            </select>
          </label>
          <label>
            <div className="addItemLabel">Genres:</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <select
                id="genreOne"
                defaultValue="None"
                ref={genreRefs[0]}
                onChange={() => {
                  const genres = [];
                  genreRefs.forEach((ref) => {
                    if (ref) {
                      if (ref.current.value !== "None")
                        genres.push(ref.current.value);
                    }
                  });
                  props.setGenres([...genres]);
                }}
              >
                {AnimeGenres.map((genreName, index) => {
                  return (
                    <option key={index} value={genreName}>
                      {genreName}
                    </option>
                  );
                })}
              </select>
              <select
                id="genreTwo"
                defaultValue="None"
                ref={genreRefs[1]}
                onChange={() => {
                  const genres = [];
                  genreRefs.forEach((ref) => {
                    if (ref) {
                      if (ref.current.value !== "None")
                        genres.push(ref.current.value);
                    }
                  });
                  props.setGenres([...genres]);
                }}
              >
                {AnimeGenres.map((genreName, index) => {
                  return (
                    <option key={index} value={genreName}>
                      {genreName}
                    </option>
                  );
                })}
              </select>
              <select
                id="genreThree"
                defaultValue="None"
                ref={genreRefs[2]}
                onChange={() => {
                  const genres = [];
                  genreRefs.forEach((ref) => {
                    if (ref) {
                      if (ref.current.value !== "None")
                        genres.push(ref.current.value);
                    }
                  });
                  props.setGenres([...genres]);
                }}
              >
                {AnimeGenres.map((genreName, index) => {
                  return (
                    <option key={index} value={genreName}>
                      {genreName}
                    </option>
                  );
                })}
              </select>
            </div>
          </label>
          <label htmlFor="releaseDate">
            <div className="addItemLabel">Release Date:</div>
            <input
              id="releaseDate"
              name="releaseDate"
              type="date"
              ref={releaseDateRef}
              onChange={() => {
                let date = new Date(releaseDateRef.current.value);
                date.setDate(date.getDate() + 1);
                props.setReleaseDate(date);
              }}
            />
          </label>
          <label htmlFor="publisher">
            <div className="addItemLabel">Publisher:</div>
            <input
              id="publisher"
              name="publisher"
              type="text"
              ref={publisherRef}
              onChange={() => props.setPublisher(publisherRef.current.value)}
            />
          </label>
          <label htmlFor="condition">
            <div className="addItemLabel">Condition:</div>
            <input
              id="condition"
              name="condition"
              required
              ref={conditionRef}
              onChange={() => {
                props.setCondition(conditionRef.current.value);
              }}
            />
          </label>
          <label htmlFor="limitedEdition">
            <div className="addItemLabel">Limited Edition:</div>
            <select
              id="limitedEdition"
              defaultValue="no"
              ref={limitedEditionRef}
              onChange={() => {
                props.setLimitedEdition(
                  limitedEditionRef.current.value === "no" ? false : true
                );
              }}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
        </>
      );
    }
    if (itemType === "Figure") {
      return (
        <>
          <label htmlFor="type">
            <div className="addItemLabel">Type:</div>
            <input
              id="type"
              name="type"
              type="text"
              ref={typeRef}
              onChange={() => {
                props.setType(typeRef.current.value);
              }}
            />
          </label>
          <label htmlFor="name">
            <div className="addItemLabel">Name:</div>
            <input
              id="name"
              name="name"
              ref={nameRef}
              onChange={() => {
                props.setName(nameRef.current.value);
              }}
            />
          </label>
          <label htmlFor="from">
            <div className="addItemLabel">From:</div>
            <input
              id="from"
              name="from"
              ref={fromRef}
              onChange={() => {
                props.setFrom(fromRef.current.value);
              }}
            />
          </label>
          <label htmlFor="condition">
            <div className="addItemLabel">Condition:</div>
            <input
              id="condition"
              name="condition"
              ref={conditionRef}
              onChange={() => {
                props.setCondition(conditionRef.current.value);
              }}
            />
          </label>
          <label htmlFor="sealed">
            <div className="addItemLabel">Sealed:</div>
            <select
              id="sealed"
              name="sealed"
              defaultValue="no"
              ref={sealedRef}
              onChange={() => {
                props.setSealed(
                  sealedRef.current.value === "no" ? false : true
                );
              }}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
          <label htmlFor="ageRestricted">
            <div className="addItemLabel">Age Restricted:</div>
            <select
              id="ageRestricted"
              name="ageRestricted"
              defaultValue="no"
              ref={ageRestrictedRef}
              onChange={() => {
                props.setAgeRestricted(
                  ageRestrictedRef.current.value === "no" ? false : true
                );
              }}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
          <label htmlFor="series">
            <div className="addItemLabel">Series:</div>
            <input
              id="series"
              name="series"
              ref={seriesRef}
              onChange={() => {
                props.setSeries(seriesRef.current.value);
              }}
            />
          </label>
        </>
      );
    }
    if (itemType === "Manga") {
      return (
        <>
          <label htmlFor="Name">
            <div className="addItemLabel">Name:</div>
            <input
              id="name"
              name="name"
              ref={nameRef}
              onChange={() => {
                props.setName(nameRef.current.value);
              }}
            />
          </label>
          <label htmlFor="volume">
            <div className="addItemLabel">Volume:</div>
            <input
              id="volume"
              name="volume"
              type="number"
              defaultValue="0"
              ref={volumeRef}
              onChange={() => {
                props.setVolume(Number.parseInt(volumeRef.current.value));
              }}
            />
          </label>
          <label htmlFor="publisher">
            <div className="addItemLabel">Publisher:</div>
            <input
              id="publisher"
              name="publisher"
              ref={publisherRef}
              onChange={() => {
                props.setPublisher(publisherRef.current.value);
              }}
            />
          </label>
          <label htmlFor="author">
            <div className="addItemLabel">Author:</div>
            <input
              id="author"
              name="author"
              ref={authorRef}
              onChange={() => {
                props.setAuthor(authorRef.current.value);
              }}
            />
          </label>
          <label htmlFor="condition">
            <div className="addItemLabel">Condition:</div>
            <input
              id="condition"
              name="condition"
              ref={conditionRef}
              onChange={() => {
                props.setCondition(conditionRef.current.value);
              }}
            />
          </label>
        </>
      );
    }
    if (itemType === "Video Game") {
      return (
        <>
          <label htmlFor="Name">
            <div className="addItemLabel">Name:</div>
            <input
              id="name"
              name="name"
              required
              ref={nameRef}
              onChange={() => {
                props.setName(nameRef.current.value);
              }}
            />
          </label>
          <label htmlFor="mediaType">
            <div className="addItemLabel">Platform:</div>
            <select
              id="platform"
              defaultValue="PS2"
              required
              ref={platformRef}
              onChange={() => {
                props.setPlatform(platformRef.current.value);
              }}
            >
              <option value="PS1">PS1</option>
              <option value="PS2">PS2</option>
              <option value="PS3">PS3</option>
              <option value="PS4">PS4</option>
              <option value="PS5">PS5</option>
              <option value="NES">NES</option>
              <option value="SNES">SNES</option>
              <option value="N64">N64</option>
              <option value="GC">GC</option>
              <option value="WII">WII</option>
              <option value="WIIU">WIIU</option>
              <option value="SWITCH">SWITCH</option>
              <option value="SEGAMS">SEGAMS</option>
              <option value="SEGAGEN">SEGAGEN</option>
              <option value="32X">32X</option>
              <option value="SEGADC">SEGADC</option>
              <option value="PC">PC</option>
              <option value="GB">GB</option>
              <option value="GBC">GBC</option>
              <option value="GBA">GBA</option>
              <option value="DS">DS</option>
              <option value="3DS">3DS</option>
            </select>
          </label>
          <label htmlFor="publisher">
            <div className="addItemLabel">Publisher:</div>
            <input
              id="publisher"
              name="publisher"
              ref={publisherRef}
              onChange={() => {
                props.setPublisher(publisherRef.current.value);
              }}
            />
          </label>
          <label htmlFor="condition">
            <div className="addItemLabel">Condition:</div>
            <input
              id="condition"
              name="condition"
              required
              ref={conditionRef}
              onChange={() => {
                props.setCondition(conditionRef.current.value);
              }}
            />
          </label>
          <label htmlFor="releaseDate">
            <div className="addItemLabel">Release Date:</div>
            <input
              id="releaseDate"
              name="releaseDate"
              type="date"
              ref={releaseDateRef}
              onChange={() => {
                let date = new Date(releaseDateRef.current.value);
                date.setDate(date.getDate() + 1);
                props.setReleaseDate(date);
              }}
            />
          </label>
          <label>
            <div className="addItemLabel">Genres:</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <select
                id="genreOne"
                defaultValue="None"
                ref={genreRefs[0]}
                onChange={() => {
                  const genres = [];
                  genreRefs.forEach((ref) => {
                    if (ref) {
                      if (ref.current.value !== "None")
                        genres.push(ref.current.value);
                    }
                  });
                  props.setGenres([...genres]);
                }}
              >
                {VideoGameGenres.map((genreName, index) => {
                  return (
                    <option key={index} value={genreName}>
                      {genreName}
                    </option>
                  );
                })}
              </select>
              <select
                id="genreTwo"
                defaultValue="None"
                ref={genreRefs[1]}
                onChange={() => {
                  const genres = [];
                  genreRefs.forEach((ref) => {
                    if (ref) {
                      if (ref.current.value !== "None")
                        genres.push(ref.current.value);
                    }
                  });
                  props.setGenres([...genres]);
                }}
              >
                {VideoGameGenres.map((genreName, index) => {
                  return (
                    <option key={index} value={genreName}>
                      {genreName}
                    </option>
                  );
                })}
              </select>
              <select
                id="genreThree"
                defaultValue="None"
                ref={genreRefs[2]}
                onChange={() => {
                  const genres = [];
                  genreRefs.forEach((ref) => {
                    if (ref) {
                      if (ref.current.value !== "None")
                        genres.push(ref.current.value);
                    }
                  });
                  props.setGenres([...genres]);
                }}
              >
                {VideoGameGenres.map((genreName, index) => {
                  return (
                    <option key={index} value={genreName}>
                      {genreName}
                    </option>
                  );
                })}
              </select>
            </div>
          </label>
          <label htmlFor="sealed">
            <div className="addItemLabel">Sealed:</div>
            <select
              id="sealed"
              name="sealed"
              defaultValue="no"
              ref={sealedRef}
              onChange={() => {
                props.setSealed(
                  sealedRef.current.value === "no" ? false : true
                );
              }}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
          <label htmlFor="hasCase">
            <div className="addItemLabel">Has Case:</div>
            <select
              id="hasCase"
              name="hasCase"
              defaultValue="no"
              required
              ref={hasCaseRef}
              onChange={() => {
                props.setHasCase(
                  hasCaseRef.current.value === "no" ? false : true
                );
              }}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
        </>
      );
    }
    return <></>;
  };
  return (
    <div id="addItemContainer">
      <label htmlFor="item">
        <div className="addItemLabel">Item:</div>
        <select
          id="addItemTypeSelect"
          name="item"
          value={props.itemType}
          ref={itemTypeRef}
          onChange={async () => {
            await resetDetails();
            props.setItemType(itemTypeRef.current.value);
          }}
          required
        >
          <option value="Anime">Anime</option>
          <option value="Figure">Figure</option>
          <option value="Manga">Manga</option>
          <option value="Video Game">Video Game</option>
        </select>
      </label>
      <label htmlFor="imagePath">
        <div className="addItemLabel">Image Path:</div>
        <input
          id="addImagePathInput"
          type="text"
          name="imagePath"
          ref={imgPathRef}
          onChange={() => {
            props.setImagePath(imgPathRef.current.value);
          }}
          required
        />
      </label>
      {makeDetails(props.itemType)}
    </div>
  );
}
