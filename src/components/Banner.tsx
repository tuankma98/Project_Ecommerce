import { getUserLogin, userDataSelector } from '@/store/userSlice';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import ImagesSlider from './slider/ImagesSlider';

const Banner = () => {
  // const dispatch = useAppDispatch();
  // const data = useAppSelector(userDataSelector);

  // console.log(data);

  // useEffect(() => {
  //   dispatch(getUserLogin());
  // }, []);

  return <ImagesSlider />;
};

export default Banner;