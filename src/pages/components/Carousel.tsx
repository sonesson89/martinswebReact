import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const MyCarousel = styled(Carousel)`
  .slide div,
  .slider-wrapper {
    border-radius: 10px;
  }

  .control-arrow.control-next {
    background: rgba(0, 0, 0, 1);
    height: auto;
    top: 45%;
    bottom: auto;
    padding: 0;
    border-radius: 50%;

    padding-bottom: 4px;
    padding-left: 15px;
    padding-right: 13px;

    border: 1px solid white;
    opacity: 1;

    &:hover {
      background: black;
    }
  }
  .control-arrow.control-prev {
    background: rgba(0, 0, 0, 1);
    height: auto;
    top: 45%;
    bottom: auto;
    padding: 0;
    border-radius: 50%;

    padding-bottom: 4px;
    padding-left: 13px;
    padding-right: 15px;

    border: 1px solid white;
    opacity: 1;

    &:hover {
      background: black;
    }
  }
  ul.slider {
    padding: 0;
  }
`;

export default MyCarousel;
