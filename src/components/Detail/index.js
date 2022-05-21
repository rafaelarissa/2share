import React from "react";
import { ImageContainer } from "./style";

const Detail = ({ album, artists, name }) => {
  return (
    <div className="offset-md-1 col-sm-4">
      <ImageContainer className="row col-sm-12 px-0">
        <img src={album.images[0].url} alt={name}></img>
      </ImageContainer>
      <div className="row col-sm-12 px-0">
        <label htmlFor={name} className="form-label col-sm-12">
          {name}
        </label>
      </div>
      <div className="row col-sm-12 px-0">
        <label htmlFor={artists[0].name} className="form-label col-sm-12">
          {artists[0].name}
        </label>
      </div>
    </div>
  );
};

export default Detail;
