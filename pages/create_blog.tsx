import Layout from '@/components/templates/layout';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

import { Box } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import Editor from '@/components/blog/Editor';
import Notification from '@/components/notification/Notification';
import Error from '@/components/notification/Error';
import RioUpload from '@/components/RioUpload';

const CreateBlog = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [dataContent, setDataContent] = useState('');
  const [dataBlog, setDataBlog] = useState<{}>();
  const [popup, setPopup] = useState(false);
  const [found, setFound] = useState(false);

  const formRef = useRef(null);

  // SET DATA BLOG
  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataBlog({
      ...dataBlog,
      content: dataContent,
      [name]: value,
    });
  };

  // Image
  const handleChangeFeaturedImage = (newImageUrl) => {
    setDataBlog({
      ...dataBlog,
      content: dataContent,
      featured_image: newImageUrl,
    });
  };

  // ADD BLOG
  // const { addBlogAPI } = addBlog();
  const addBlogByAuthor = async (dataBlog) => {
    // const data = await addBlogAPI(dataBlog);
    // if (data === 200) setPopup(true);
    // if (data === 401) setFound(true);
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    addBlogByAuthor(dataBlog);
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
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
      {popup && (
        <Notification
          title="Thêm bài viết thành công"
          content={`Bạn đã thêm bài viết thành công. Nhấn đóng để tiếp tục.`}
          handleClose={() => setPopup(false)}
          mail={false}
        />
      )}

      {found && (
        <Error
          title="Lỗi"
          content={`Đăng bài viết không thành công. Vui lòng kiểm tra lại !`}
          handleClose={() => setFound(false)}
        />
      )}

      <Container
        className="settings-container profile-container blog-post"
        sx={{ mt: 15 }}
      >
        <Box className="">
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Thêm bài viết mới
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
          sx={{ mt: 1 }}
        >
          <Box>
            <Box style={{ display: 'flex' }}>
              <Grid item lg={6}>
                <Box className="blog-post-title">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Title"
                    name="title"
                    onChange={handleChange}
                  />
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box className="blog-post-title">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Slug"
                    name="slug"
                    onChange={handleChange}
                  />
                </Box>
              </Grid>

              <Grid item lg={12}>
                <TextField
                  fullWidth
                  required
                  multiline
                  label="Description"
                  className="settings-form-input"
                  name="description"
                  onChange={handleChange}
                  rows={4}
                />
              </Grid>
            </Box>

            <Box>
              <RioUpload isVideo={false} setValue={handleChangeFeaturedImage} />
            </Box>
          </Box>

          <Editor
            name="description"
            onChange={(data) => {
              setDataBlog((prev) => ({
                ...prev,
                content: data,
              }));
              setDataContent(data);
            }}
            editorLoaded={editorLoaded}
          />

          {/* {dataBlog && JSON.stringify(dataBlog.content)} */}

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => formRef.current.reportValidity()}
          >
            Xuất bản
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateBlog;

CreateBlog.getLayout = function getLayout(page) {
  return (
    <Layout title="create-blog" showNavbar showSidebar>
      {page}
    </Layout>
  );
};
