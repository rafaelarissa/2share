import React from "react";
import { useNavigate } from "react-router-dom";
import { ImageContainer } from "../Detail/style";

const Listbox = (props) => {
  const navigate = useNavigate();

  return (
    <div className="col-sm-6 px-0">
      <div className="list-group">
        {props.items.map((item, idx) => (
          <div
            key={idx}
            className="list-group-item list-group-item-action list-group-item-light"
            id={item.track.id}
          >
            <div className="offset-md-1 col-sm-4">
              <ImageContainer className="row col-sm-12 px-0">
                <img
                  onClick={() =>
                    navigate(`https://open.spotify.com/track/${item.track.id}`)
                  }
                  src={item.track.album.images[0].url}
                  alt={item.track.name}
                />
              </ImageContainer>
              <div className="row col-sm-12 px-0">
                <label
                  htmlFor={item.track.name}
                  className="form-label col-sm-12"
                >
                  {item.track.name}
                </label>
              </div>
              <div className="row col-sm-12 px-0">
                <label
                  htmlFor={item.track.artists[0].name}
                  className="form-label col-sm-12"
                >
                  {item.track.artists[0].name}
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listbox;
