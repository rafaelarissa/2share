import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 20px;
  margin-left: 56px;
`;

const TrackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  max-width: 200px;

  img {
    display: flex;

    width: 100%;
  }

  .track-name {
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  .artist-name {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 800px) {
    max-width: 100px;
    .track-name {
      font-size: 13px;
    }

    .artist-name {
      font-size: 12px;
    }
  }
`;

export { Container, TrackContainer };
