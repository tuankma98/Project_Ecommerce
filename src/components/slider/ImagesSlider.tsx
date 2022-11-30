import Box from '@mui/material/Box';
import clsx from 'clsx';
import React, { MutableRefObject, useRef, useState } from 'react';
import Slider from 'react-slick';
import useSliderStyles from '../../../styles/slider';
import SliderScrollButton from '../atoms/buttons/SliderScrollButton';

const SliderSwipe = ({ children, onNext, onPrev }) => {
  const [sliderScrollButtonShow, setSliderScrollButtonShow] =
    useState<boolean>(false);
  return (
    <Box
      mt={2}
      style={{
        position: 'relative',
      }}
      onMouseEnter={() => {
        setSliderScrollButtonShow(true);
      }}
      onMouseLeave={() => {
        setSliderScrollButtonShow(false);
      }}
    >
      {sliderScrollButtonShow && (
        <>
          <SliderScrollButton
            onClick={() => {
              onPrev();
            }}
          />
          <SliderScrollButton
            right
            onClick={() => {
              onNext();
            }}
          />
        </>
      )}
      {children}
    </Box>
  );
};

const ImagesSlider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const classes = { ...useSliderStyles() };

  return (
    <Box width="100%" className={classes.wrapper}>
      <h2> Single Item</h2>
      <Slider {...settings} className={classes.slider}>
        <Box textAlign="center" height="100%">
          6
        </Box>
        <Box textAlign="center">7</Box>
        <Box textAlign="center">8</Box>
        <Box textAlign="center">9</Box>
      </Slider>
    </Box>
  );
};

export default ImagesSlider;
