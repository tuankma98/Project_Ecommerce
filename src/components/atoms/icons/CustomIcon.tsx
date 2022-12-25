import React from 'react';

import { ICON_FONT_SIZE } from '../../../../styles/ui';

type IconSize =
  | 'xlarge'
  | 'tiny'
  | 'small'
  | 'normal'
  | 'medium'
  | 'large'
  | 'big'
  | 'huge'
  | 'super_huge'
  | 'xxlarge';

type CustomIconProps = {
  customClass: string; // TODO: DEFINE ALL THE TYPES
  customStyles?: React.CSSProperties;
  size?: IconSize;
  onClick?: (e: React.MouseEvent) => void;
};

const CustomIcon: React.FunctionComponent<CustomIconProps> = ({
  customClass,
  customStyles,
  size,
  onClick,
}) => {
  const getSize = (size) => {
    switch (size) {
      case 'xlarge':
        return ICON_FONT_SIZE.xlargeIcon;
      case 'large':
        return ICON_FONT_SIZE.largeIcon;
      case 'medium':
        return ICON_FONT_SIZE.mediumIcon;
      case 'normal':
        return ICON_FONT_SIZE.normalIcon;
      case 'small':
        return ICON_FONT_SIZE.smallIcon;
      case 'tiny':
        return ICON_FONT_SIZE.tinyIcon;
      case 'huge':
        return ICON_FONT_SIZE.hugeIcon;
      case 'super_huge':
        return ICON_FONT_SIZE.superHugeIcon;
      case 'xxlarge':
        return ICON_FONT_SIZE.xxlargeIcon;
      default:
        return 'xlarge';
    }
  };
  return (
    <i
      className={customClass}
      style={
        (customStyles && size) || size //TODO: あとで変更する
          ? {
              ...customStyles,
              fontSize: size ? getSize(size) : ICON_FONT_SIZE.normalIcon,
            }
          : { ...customStyles }
      }
      {...(onClick && { role: 'presentation', onClick })}
    />
  );
};

export default CustomIcon;
