import { createStyles, makeStyles } from '@mui/styles';

const useSliderStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      '& > .slick-slider > .slick-track': {
        height: '100%',
      },
    },
    slider: {
      height: '270px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 16,

      '& .slick-list': {
        height: '270px',
      },

      '& > .slick-prev': {
        left: '-10px',
        zIndex: 100,
        width: 30,
        height: 30,

        '&:before': {
          fontSize: 32,
          color: '#4b4b4b',
        },
      },
      '& > .slick-next': {
        right: '-10px',
        zIndex: 100,
        width: 30,
        height: 30,

        '&:before': {
          fontSize: 32,
          color: '#4b4b4b',
        },
      },
      '& .slick-dots': {
        textAlign: 'start',
      },
    },
    sliderList: {
      display: 'flex',
    },
    sliderContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      padding: 36,
      borderBottomLeftRadius: '16px',
      borderTopLeftRadius: '16px',
    },
    cardWrapper: {
      outline: 'none',
      '&:focus': {
        outline: 'none!important',
      },
    },
    cardMarginTop: {
      marginTop: '16px',
    },
    slickDotInline: {
      '& .slick-dots ul': {
        padding: 0,
        margin: 0,
        display: 'flex',
        maxWidth: '100%',
        overflowX: 'auto',
        justifyContent: 'center',

        '& li': {
          marginBottom: 10,
          '&:not(.slick-active) button': {
            '&:hover:before, &:focus:before': {
              opacity: 0.25,
            },
          },
        },
      },
    },
  }),
);

export default useSliderStyles;
