import Box from '@mui/material/Box';
import Image from 'next/image';
import Slider from 'react-slick';
import useSliderStyles from '~/slider';
// import useSliderStyles from '../../../styles/slider';
import SliderScrollButton from '../atoms/buttons/SliderScrollButton';
import youtube from '~@/images/youtube.png';
import reactjs from '~@/images/reactjs.png';
import facebook from '~@/images/facebook.png';
import course from '~@/images/course.png';
import banner from '~@/images/banner.png';
import { Typography } from '@mui/material';
import CustomButton from '../atoms/CustomButton';
import { useState } from 'react';

const imageSlider = [
  {
    src: course,
    title: 'Khoá học HTML CSS Pro *',
    description:
      'Đây là khóa học đầy đủ và chi tiết nhất bạn có thể tìm thấy được ở trên Internet!',
    btnTitle: 'Tìm hiểu thêm',
    background:
      'linear-gradient(to right, rgb(104, 40, 250), rgb(255, 186, 164))',
    color: '#6828fa',
    boxShadow: 'rgb(255, 186, 164)',
  },
  {
    src: reactjs,
    title: 'Học ReactJS Miễn Phí!',
    description:
      'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
    btnTitle: 'Đăng ký ngay',
    background:
      'linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))',
    color: '#2877FA',
    boxShadow: 'rgb(103, 23, 205)',
  },
  {
    src: banner,
    title: 'Thành Quả Của Học Viên',
    description:
      'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
    btnTitle: 'Xem thành quả',
    background:
      'linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255))',
    color: '#7612ff',
    boxShadow: 'rgb(5, 178, 255)',
  },
  {
    src: youtube,
    title: 'F8 Trên Youtube',
    description:
      'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
    btnTitle: 'Truy cập Facebook',
    background: 'linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))',
    color: '#fe215e',
    boxShadow: 'rgb(255, 148, 2)',
  },
  {
    src: facebook,
    title: 'F8 Trên Facebook',
    description:
      'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
    btnTitle: 'Truy cập kênh',
    background: 'linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254))',
    color: '#007efe',
    boxShadow: 'rgb(6, 195, 254)',
  },
];

const SliderBanner = () => {
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
  const [isHover, setIsHover] = useState(false);

  const handleonMouseMove = () => {
    setIsHover(true);
  };

  const handleonMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Box width="100%">
      <Slider {...settings} className={classes.slider}>
        {imageSlider.map((item, index) => (
          <Box textAlign="center" key={index}>
            <Box className={classes.sliderList}>
              <Box
                className={classes.sliderContent}
                style={{
                  background: `${item.background}`,
                  boxShadow: `530px 5px 100px 530px ${item.boxShadow}`,
                }}
              >
                <Typography fontSize={32}>{item.title}</Typography>
                <Typography>{item.description}</Typography>
                <CustomButton
                  message={item.btnTitle}
                  customMessageStyles={{
                    color: `${isHover ? item.color : '#FFF'}`,
                  }}
                  customStyle={{
                    border: '1px solid #FFFFFF',
                  }}
                  handleonMouseMove={handleonMouseMove}
                  handleonMouseLeave={handleonMouseLeave}
                  buttonType={41}
                />
              </Box>
              <Box
                style={{
                  borderBottomRightRadius: '16px',
                  borderTopRightRadius: '16px',
                }}
              >
                <Image
                  src={item.src}
                  alt="item.src"
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                  }}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderBanner;
