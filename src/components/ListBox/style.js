import styled from "styled-components";

const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  align-items: start;

  @media (max-width: 800px) {
    margin-left: 50px;
    grid-template-columns: repeat(3, 1fr);
  }
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

  @media (max-width: 800px) {
    img {
      width: 95%;
      height: 95%;
    }

    .track-name {
      font-size: 13px;
    }

    .artist-name {
      font-size: 12px;
    }
  }
`;

export { Container, TrackContainer };
