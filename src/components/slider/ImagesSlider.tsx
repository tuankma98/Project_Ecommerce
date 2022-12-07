import Box from '@mui/material/Box';
import Image from 'next/image';
import Slider from 'react-slick';
import useSliderStyles from '~/slider';
// import useSliderStyles from '../../../styles/slider';
import SliderScrollButton from '../atoms/buttons/SliderScrollButton';
import youtube from '~@/images/youtube.png';
import reactjs from '~@/images/reactjs.png';
import banner from '~@/images/banner.png';
import course from '~@/images/course.png';

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
    <Box width="100%">
      <Slider {...settings} className={classes.slider}>
        <Box textAlign="center">
          <Image
            src={banner}
            alt="banner"
            style={{
              objectFit: 'cover',
              height: '100%',
            }}
          />
        </Box>
        <Box textAlign="center">
          <Image
            src={youtube}
            alt="banner"
            style={{
              objectFit: 'cover',
              height: '100%',
            }}
          />
        </Box>
        <Box textAlign="center">
          <Image
            src={course}
            alt="banner"
            style={{
              objectFit: 'cover',
              height: '100%',
            }}
          />
        </Box>
        <Box textAlign="center">
          <Image
            src={reactjs}
            alt="banner"
            style={{
              objectFit: 'cover',
              height: '100%',
            }}
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default ImagesSlider;
