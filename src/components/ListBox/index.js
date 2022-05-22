import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, TrackContainer } from "./style";

const Listbox = (props) => {
  const navigate = useNavigate();

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
              <img
                onClick={() =>
                  navigate(`https://open.spotify.com/track/${item.track.id}`)
                }
                src={item.track.album.images[0].url}
                alt={item.track.name}
              />
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
