import styled from 'styled-components';
import { Box } from 'rebass';

const StyledHeaderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  min-height: 600px;
  padding: 2em;
  overflow-y: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vw;

  /* Phones */
  @media only screen and (max-width: 414px) and (max-height: 830px) {
    min-height: 50vw;
    margin-top: 0;
  }

  /* Tablets */
  @media (min-width: 768px) and (max-width: 1280px) {
    margin-top: 12vh;
    min-height: 50vw;
  }
`;

const StyledBGVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0%, -50);
  visibility: visible;
  width: 100vw;
`;

const StyledOverlay = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #0f1325;
  opacity: 0.7;
  position: absolute;
  left: 0;
  top: 0;

  @media only screen and (max-width: 320px) {
    height: 90%;
  }
`;

const StyledCTA = styled(Box)({
  position: 'relative',
  opacity: 0.9,
  backgroundColor: '#0f1325',
  padding: '4%',
  color: 'white',
  margin: '0 auto',
});

export { StyledHeaderContainer, StyledBGVideo, StyledCTA, StyledOverlay };
