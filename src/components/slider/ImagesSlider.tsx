import Box from '@mui/material/Box';
import Slider from 'react-slick';
import useSliderStyles from '../../../styles/slider';
import SliderScrollButton from '../atoms/buttons/SliderScrollButton';

const ImagesSlider = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  const classes = { ...useSliderStyles() };

  return (
    <Box width="100vh">
      <h2> Single Item</h2>
      <Slider {...settings} className={classes.slider}>
        <Box textAlign="center">
          <img
            src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png"
            alt="banner"
          />
        </Box>
        <Box textAlign="center">
          <img
            src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png"
            alt="banner"
          />
        </Box>
        <Box textAlign="center">
          <img
            src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png"
            alt="banner"
          />
        </Box>
        <Box textAlign="center">
          <img
            src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png"
            alt="banner"
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default ImagesSlider;
