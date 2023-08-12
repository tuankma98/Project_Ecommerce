import { createStyles, makeStyles } from '@mui/styles';
import { UI_HEIGHTS } from './ui';

// import { UI_HEIGHTS } from '@/utils/constants/ui';

const useChartStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      padding: 0,
      border: '1px solid',
      borderRadius: '4px',
    },
    demo: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
    },
    pie: {
      margin: '10px',
    },
    '@keyframes donut-fill': {
      to: {
        strokeDasharray: '0 100',
      },
    },
    '@keyframes text-slideup': {
      form: {
        opacity: 0,
        transform: 'translateY(0)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(-50%)',
      },
    },
    donut: {
      position: 'relative',
      // width: 12.5rem;
      width: '100%',
      height: '300px',
      margin: 0,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#18222f',

      '& isNegative donutCircle': {
        transform: 'rotate(-90deg) scaleY(-1)',
      },
    },
    donutFrame: {
      strokeWidth: '1.25px',
      fill: 'none',
      stroke: '#ccc',
    },
    donutCircle: {
      strokeWidth: '1.25px',
      fill: 'none',
      stroke: 'url(#gradient-2)',
      strokeLinecap: 'round',

      transform: 'rotate(-90deg)',
      transformOrigin: '50% 50%',
      animation: `$donut-fill 2s reverse`,

      "&[stroke-dasharray='0 100']": {
        stroke: 'none',
      },
    },
    donutCanvas: {
      width: '100%',
      height: '200px',
      //   height: '100%',
      display: 'block',
      position: 'relative',
      zIndex: '2',
    },
    // "donutCircle[stroke-dasharray='0 100']": {
    //   stroke: 'none',
    // },
    donutContent: {
      animation: `$text-slideup 2s linear`,
      fontFamily: 'monospace',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    donutText: {
      letterSpacing: '-0.15rem',
      textAlign: 'center',
      zIndex: 3,
      color: '#fff',
      fontSize: '30px',
    },
    donutName: {
      letterSpacing: '-1.5px',
      textAlign: 'center',
      zIndex: 3,
      color: '#fff',
      fontSize: '18px',
    },
    donutComplex: {
      fontFamily: 'monospace',
      fontSize: '10px',
      fontWeight: 'bold',
      textShadow: '0 0 5px #fff',
      opacity: 0,
      transition: 'opacity 0.35s ease-in-out 1s',

      '& circle': {
        fill: 'none',
        transition: 'stroke-dashoffset 1s ease-in-out',
      },
      '&:not(donutComplexLoaded) circle': {
        strokeDashoffset: 0,
      },
      'donutComplexLoaded text': {
        opacity: 1,
      },
    },
  }),
);
export default useChartStyles;
