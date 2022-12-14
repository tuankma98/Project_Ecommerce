import Layout from '@/components/templates/layout';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

import { Box } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import Editor from '@/components/blog/Editor';
import Notification from '@/components/notification/Notification';
import Error from '@/components/notification/Error';
import RioUpload from '@/components/RioUpload';
import useCreateBlogStyles from '~/createBlog';
import { useAppDispatch } from '@/store/hook';
import { postCreateBlogData } from '@/store/createBlogSlice';
import { useRouter } from 'next/router';

const CreateBlog = () => {
  const classes = { ...useCreateBlogStyles() };
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [dataBlog, setDataBlog] = useState<{}>();

  const [popup, setPopup] = useState(false);
  const [found, setFound] = useState(false);

  const formRef = useRef(null);

  // SET DATA BLOG
  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Image
  const handleChangeFeaturedImage = (newImageUrl) => {
    setDataBlog((prev) => ({
      ...prev,
      featured_image: newImageUrl,
    }));
  };

  const successCallback = () => {
    router.push('/blog');
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const localTokens = localStorage.getItem('tokens');
    const token = JSON.parse(localTokens);
    const formData = { ...dataBlog, token };
    dispatch(postCreateBlogData({ formData, successCallback }));
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
          title="Th??m b??i vi???t th??nh c??ng"
          content={`B???n ???? th??m b??i vi???t th??nh c??ng. Nh???n ????ng ????? ti???p t???c.`}
          handleClose={() => setPopup(false)}
          mail={false}
        />
      )}

      {found && (
        <Error
          title="L???i"
          content={`????ng b??i vi???t kh??ng th??nh c??ng. Vui l??ng ki???m tra l???i !`}
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
            Th??m b??i vi???t m???i
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
          sx={{ mt: 1 }}
        >
          <Box>
            <Grid container spacing={3}>
              <Grid item lg={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Title"
                  name="title"
                  onChange={handleChange}
                  className={classes.blogPostText}
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Slug"
                  name="slug"
                  onChange={handleChange}
                  className={classes.blogPostText}
                />
              </Grid>

              <Grid item lg={12}>
                <TextField
                  fullWidth
                  required
                  multiline
                  label="Description"
                  name="description"
                  onChange={handleChange}
                  rows={6}
                  className={classes.blogPostText}
                />
              </Grid>
            </Grid>

            <Box>
              <RioUpload isVideo={false} setValue={handleChangeFeaturedImage} />
            </Box>
          </Box>

          <Editor
            name="description-1"
            onChange={(data) => {
              setDataBlog((prev) => ({
                ...prev,
                content: data,
              }));
            }}
            editorLoaded={editorLoaded}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => formRef.current.reportValidity()}
          >
            Xu???t b???n
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
