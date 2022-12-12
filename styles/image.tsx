import { createStyles, makeStyles } from '@mui/styles';
import { UI_HEIGHTS } from './ui';

// import { UI_HEIGHTS } from '@/utils/constants/ui';

const useImageStyles = makeStyles(() =>
  createStyles({
    profileImageBig: {
      borderRadius: '50%',
      height: UI_HEIGHTS.profileImageBig,
      width: UI_HEIGHTS.profileImageBig,
      objectFit: 'cover',
    },
    profileImageSmall: {
      borderRadius: '50%',
      height: UI_HEIGHTS.profileImageSmall,
      width: UI_HEIGHTS.profileImageSmall,
      objectFit: 'cover',
    },
    memberListImage: {
      height: UI_HEIGHTS.memberList,
      width: UI_HEIGHTS.memberList,
    },
  }),
);
export default useImageStyles;
