import BlogList from '@/components/blog/BlogList';
import Copyright from '@/components/molecules/Copyright';
import Layout from '@/components/templates/layout';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Blog = () => {
  return (
    <Layout title="Blog" showNavbar showSidebar>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Box className="blog-container" component="main">
          <Toolbar />
          <AppBar className="blog-appbar" position="static" sx={{ mb: 4 }}>
            <Toolbar className="blog-hero">
              <Typography variant="h6" color="primary">
                Blog
              </Typography>
            </Toolbar>
          </AppBar>

          {/* Blog List  */}
          <BlogList />
        </Box>

        <Copyright />
      </Box>
    </Layout>
  );
};

export default Blog;
