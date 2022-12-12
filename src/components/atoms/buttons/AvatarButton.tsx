import { ButtonProps, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';

import CustomIcon from '@/components/atoms/icons/CustomIcon';
import useButtonStyles from '~/button';
import useImageStyles from '~/image';
// import useImageStyles from '~/image';

const ICON_SIZES = {
  BIG: 50,
  SMALL: 30,
};

type AvatarButtonProps = {
  customRef?: React.MutableRefObject<HTMLButtonElement>;
  showUploadIcon: boolean;
  uploadedImage: string;
  uploadMode: boolean;
};
const AvatarButton: React.FunctionComponent<
  AvatarButtonProps & ButtonProps
> = ({ customRef, showUploadIcon, uploadedImage, uploadMode, ...rest }) => {
  const classes = {
    ...useButtonStyles(),
    ...useImageStyles(),
  };
  const theme = useTheme();
  return (
    <Button
      ref={customRef}
      {...rest}
      className={
        uploadMode
          ? classes.constructorMemberAvatarButton
          : classes.newRoundAvatarButton
      }
      style={{ padding: 0 }}
    >
      {uploadedImage ? (
        <img
          src={uploadedImage}
          alt="アップロードしたファイル"
          width="100%"
          className={
            uploadMode ? classes.profileImageBig : classes.profileImageSmall
          }
        />
      ) : (
        <CustomIcon
          customClass="icon-ap_user_line"
          customStyles={{
            fontSize: uploadMode ? ICON_SIZES.BIG : ICON_SIZES.SMALL,
            color: '#5987E0',
          }}
        />
      )}
      {showUploadIcon && (
        <CustomIcon
          customClass="icon-ap_photo_line"
          customStyles={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            padding: theme.spacing(1),
            backgroundColor: '#5987E0',
            color: '#fff',
            borderRadius: '50%',
          }}
        />
      )}
    </Button>
  );
};

export default React.memo(AvatarButton);
