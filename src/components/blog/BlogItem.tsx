import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React, { useEffect } from 'react';

const BlogItem = ({ blog }) => {
  // const router = useRouter();

  const handleShare = () => {};

  const handleViewBlog = () => {
    // router.push({
    //   pathname: '/blog/[blogId]',
    //   query: { blogId: blog.slug },
    // });
  };

  const linkShare = (slug) => {
    // return `${API_LINK}/blog/${slug}`;
  };

  useEffect(() => {
    linkShare('blog-1');
  }, []);

  return (
    <Grid item xs={12} sm={12} md={4} className="blog-item">
      <Card className="blog-card">
        <CardActionArea onClick={handleViewBlog}>
          <CardMedia
            className="blog-card-img"
            image={blog.featured_image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {blog.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {blog.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="blog-card__actions">
          <Box className="blog-card__author">
            <Avatar src={blog?.created_by.avatar} />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {blog.created_by.username}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {/* May 14, 2020 */}
                {blog.created_by.createdAt.slice(0, 10)}
              </Typography>
            </Box>
          </Box>
          <Box>{/* <BookmarkBorderIcon /> */}</Box>
          <Button size="small" onClick={handleShare}>
            <Link
              color="inherit"
              href={`https://www.facebook.com/sharer/sharer.php?u=${linkShare(
                blog.slug,
              )}`}
              passHref
            >
              Share
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BlogItem;
