import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  align-items: start;
`;

const TrackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  img {
    display: flex;

    width: 200px;
    height: 200px;
  }

  .track-name {
    font-weight: bold;
  }

  .artist-name {
    font-size: 14px;
  }
`;

export { Container, TrackContainer };
