import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useCreateBlogStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    blogPostText: {
      '& .css-1k80tlq-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
        color: '#1976d2',
      },
      '& .css-t21z12-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, & .css-lheug8-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
        {
          borderColor: '#1976d2',
        },
    },
    fileUpload: {
      opacity: 0.7,

      '&:hover': {
        opacity: 1,
      },
    },
  }),
);

export default useCreateBlogStyles;
