import React from "react";
import { Container, TrackContainer } from "./style";

const Listbox = (props) => {
  console.log(props);
  return (
    <Container>
      {props.items.map((item, idx) => (
        <div
          key={idx}
          className="list-group-item list-group-item-action list-group-item-light"
          id={item.track.id}
        >
          <TrackContainer>
            <div className="row col-sm-12 px-0">
              <img src={item.track.album.images[0].url} alt={item.track.name} />
            </div>
            <div>
              <label
                htmlFor={item.track.name}
                className="form-label col-sm-12 track-name"
              >
                {item.track.name}
              </label>
            </div>
            <div className="row col-sm-12 px-0">
              <label
                htmlFor={item.track.artists[0].name}
                className="form-label col-sm-12 artist-name"
              >
                {item.track.artists[0].name}
              </label>
            </div>
          </TrackContainer>
        </div>
      ))}
    </Container>
  );
};

export default Listbox;
