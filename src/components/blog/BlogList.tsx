import { getAllDataCreateBlog } from '@/store/createBlogSlice';
import { useAppDispatch } from '@/store/hook';
import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';

const BlogList = () => {
  const [listBlogs, setListBlogs] = useState([]);
  const dispatch = useAppDispatch();

  // GET ALL BLOGS
  // const { getAllBlogAPI } = getAllBlog();
  // const getAllBlogByAll = async () => {
  //   // const data = await getAllBlogAPI();
  //   // if (data) setListBlogs(data.blog);
  // };

  useEffect(() => {
    dispatch(getAllDataCreateBlog(null));
  }, []);

  return (
    <Container className="blog-list" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" className="blog-title">
        Articles
      </Typography>

      <Grid container spacing={3}>
        {listBlogs.map((blog, index) => (
          <BlogItem key={index} blog={blog} />
        ))}
      </Grid>
    </Container>
  );
};

export default BlogList;
