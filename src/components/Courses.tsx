import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { getUserLogin, userDataSelector } from '../store/userSlice';

const Courses = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(userDataSelector);

  console.log(data);

  useEffect(() => {
    dispatch(getUserLogin());
  }, []);

  return <div>Courses</div>;
};

export default Courses;
