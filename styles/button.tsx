import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { UI_HEIGHTS, UI_WIDTHS } from './ui';

const useButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    taskEditPageButton: {
      width: 220,
      margin: theme.spacing(2),
    },
    buttonToCustomerChart: {
      padding: '14px 38px',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      whiteSpace: 'nowrap',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: theme.palette.background.default,
        color: '#343434',
      },
    },
    customCreateButtonCircle: {
      marginTop: theme.spacing(1),
      minWidth: 44,
      minHeight: 44,
      width: 44,
      height: 44,
      borderRadius: '50%',
      '& span.icon-ap_add_line': {
        marginLeft: '0!important',
      },
    },
    buttonInModal: {
      width: 180,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    buttonWithoutHover: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    createButton: {
      width: UI_WIDTHS.createButton,
      color: '#fff',
      display: 'flex',
      justifyContent: 'flex-start',
      fontSize: theme.spacing(1.75),
      padding: theme.spacing(1.25),
      fontFamily: 'NotoSansJpBold',
      backgroundColor: theme.palette.primary.light,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    clientRecordButton: {
      background: '#fff',
      color: theme.palette.primary.light,
      paddingLeft: theme.spacing(2),
      padding: 0,
      fontFamily: 'NotoSansJpBold',
      '&:hover': {
        color: theme.palette.primary.light,
        backgroundColor: '#FFF',
      },
    },
    cancelButton: {
      backgroundColor: 'inherit',
      border: 'none',
      boxShadow: 'none',
      textDecoration: 'underline',
      width: UI_WIDTHS.bigButton,
      '&:hover': {
        backgroundColor: 'inherit',
        border: 'none',
        boxShadow: 'none',
        textDecoration: 'underline',
        color: theme.palette.primary.main,
      },
    },
    cancelDeleteButton: {
      fontWeight: 700,
      backgroundColor: '#707070 !important',
      border: 'none',
      boxShadow: 'none',
      width: UI_WIDTHS.bigButton,
      padding: theme.spacing(1.5),
      color: '#FFF !important',
      borderRadius: 6,
      '&:hover': {
        backgroundColor: theme.palette.text.secondary,
      },
    },
    constructorMemberAvatarButton: {
      borderRadius: '50%',
      width: 96,
      height: 90,
      boxShadow: '0px 3px 6px #00000029',
    },
    deleteButton: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.error.main,
      },
    },
    deleteTaskButton: {
      backgroundColor: theme.palette.text.secondary,
      color: '#fff',
      width: 76,
      fontFamily: 'NotoSansJpBold',
      paddingLeft: 3,
      paddingRight: 3,
      '&:hover': {
        backgroundColor: theme.palette.text.secondary,
      },
    },
    downloadButton: {
      minWidth: 25,
      backgroundColor: '#fff',
      boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
      width: 35,
      borderRadius: '50%',
      height: 35,
      color: '#5987E0',
      '&:hover': {
        backgroundColor: '#fff',
      },
    },
    editButton: {
      backgroundColor: theme.palette.primary.light,
      color: '#fff',
      width: 110,
      fontFamily: 'NotoSansJpBold',
      paddingLeft: 3,
      paddingRight: 3,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    deleteDependency: {
      backgroundColor: theme.palette.text.secondary,
      color: '#fff',
      '&:hover': {
        backgroundColor: theme.palette.text.secondary,
      },
    },
    editRoundButton: {
      backgroundColor: '#5987E0',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#5987E0',
      },
    },
    outlinedEditButton: {
      fontSize: 12,
      color: '#5987E0',
      border: '1px solid #5B87E4',
      padding: 6,
      backgroundColor: '#FFF',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#FFF',
      },
    },
    removeRoundButton: {
      backgroundColor: theme.palette.text.secondary,
      color: '#fff',
      '&:hover': {
        backgroundColor: theme.palette.text.secondary,
      },
    },
    linkButton: {
      color: '#000',
      backgroundColor: 'rgba(0,0,0,.10)',
    },
    linkMuiButton: {
      borderRadius: 4,
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
      cursor: 'pointer',
      padding: '6px 16px',
      fontSize: '1rem',
      fontWeight: 500,
    },
    roundIconButton: {
      borderRadius: 80,
      width: 40,
      height: 40,
      minWidth: 'auto',
    },
    moreButton: {
      borderRadius: 80,
      width: 40,
      height: 40,
      minWidth: 'auto',
    },
    addDependencyRoundButton: {
      backgroundColor: '#5B87E4',
      color: '#fff',
    },
    projectCreatePageButton: {
      width: 220,
      margin: theme.spacing(2),
    },
    projectTableScrollButton: {
      position: 'absolute',
      top: 10,
      zIndex: 2,
    },
    setInputButton: {
      color: theme.palette.primary.light,
      boxShadow: theme.shadows[2],
    },
    toTaskDetails: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
    saveWorkflow: {
      position: 'absolute',
      right: 0,
      top: 0,
      fontSize: theme.spacing(2),
    },
    sendEmailButton: {
      fontSize: '1rem',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    newBigButton: {
      fontWeight: 700,
      background: `${theme.palette.primary.light} 0% 0% no-repeat padding-box`,
      boxShadow: '0px 3px 6px #5987E033',
      borderRadius: '6px',
      color: '#FFFFFF',
      width: UI_WIDTHS.bigButton,
      padding: theme.spacing(1.5),
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    newSmallButton: {
      background: `#f05123 0% 0% no-repeat padding-box`,
      boxShadow: '0px 3px 6px #5987E033',
      color: '#FFFFFF',
      padding: '5px 29px',
      borderRadius: '999px',

      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    grayButton: {
      backgroundColor: 'inherit',
      border: 'none',
      boxShadow: 'none',
      textDecoration: 'underline',
      fontSize: '0.875rem',
      color: '#707070',
      '&:hover': {
        backgroundColor: 'inherit',
        border: 'none',
        boxShadow: 'none',
        textDecoration: 'underline',
      },
    },
    primaryButton: {
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
      background: `${theme.palette.primary.light} 0% 0% no-repeat padding-box`,
      boxShadow: '0px 3px 6px #5987E033',
      borderRadius: '6px',
      color: '#FFFFFF',
      padding: theme.spacing(1.5),
      fontFamily: 'NotoSansJpBold',
    },
    modalButton: {
      width: UI_WIDTHS.modalButton,
      '@media(max-width:600px)': {
        padding: theme.spacing(1),
        width: 'calc(100vw - 40px)',
      },
    },
    secondaryButton: {
      color: '#5987E0',
      border: '2px solid #5987E0',
      borderRadius: 6,
      backgroundColor: '#FFFFFF',
      fontWeight: 'bold',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
    },
    secondaryButtonLight: {
      color: '#5987E0',
      border: '2px solid #5987E0',
      borderRadius: 6,
      backgroundColor: '#FFFFFF',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
    },
    roundDownload: {
      height: 40,
      minWidth: 40,
      color: theme.palette.primary.light,
      borderRadius: '50%',
      backgroundColor: '#ffffff',
      '& :hover': {
        color: '#ffffff',
      },
    },
    newRoundAvatarButton: {
      boxShadow: '0px 3px 6px #00000029',
      height: '52px',
      minWidth: '52px',
      borderRadius: '50%',
      backgroundColor: '#FFFFFF',
      '@media (max-width: 768px)': {
        height: 40,
        minWidth: 40,
      },
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
    },
    searchButton: {
      width: '100px',
      padding: theme.spacing(1),
      background: `${theme.palette.primary.light} 0% 0% no-repeat padding-box`,
      borderRadius: '80px',
      color: '#FFFFFF',
      fontSize: '12px',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    logoutButton: {
      width: '90%',
      padding: theme.spacing(1),
      backgroundColor: '#FFF',
      color: '#707070',
      '&:hover': {
        backgroundColor: '#F97721',
        color: '#FFF',
      },
    },
    roundEditButton: {
      height: 62,
      width: 62,
      boxShadow: '0px 3px 6px #5987E033',
      backgroundColor: theme.palette.primary.light,
      color: '#FFFFFF',
      borderRadius: '50%',
      fontSize: 13,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    roundCreateButton: {
      height: 40,
      minWidth: 40,
      backgroundColor: theme.palette.primary.light,
      color: '#FFFFFF',
      borderRadius: '50%',
      padding: 0,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    roundCreateWhiteButton: {
      height: 30,
      minWidth: 30,
      backgroundColor: '#FFFFFF',
      color: theme.palette.primary.light,
      borderRadius: '50%',
      padding: 0,
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
    },
    roundCreateGreenButton: {
      height: 40,
      minWidth: 40,
      backgroundColor: '#63BC71',
      color: '#FFFFFF',
      borderRadius: '50%',
      padding: 0,
      '&:hover': {
        backgroundColor: '#63BC71',
      },
    },
    roundUnpinButton: {
      height: 25,
      minWidth: 25,
      backgroundColor: '#FFFFFF',
      color: theme.palette.primary.light,
      borderRadius: '50%',
      padding: 0,
      paddingTop: 3,
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
    },
    roundPinButton: {
      height: 25,
      minWidth: 25,
      backgroundColor: theme.palette.primary.light,
      color: '#FFFFFF',
      borderRadius: '50%',
      padding: 0,
      paddingTop: 3,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    roundLockedButton: {
      height: 25,
      minWidth: 25,
      backgroundColor: '#FFFFFF',
      color: theme.palette.primary.light,
      borderRadius: '50%',
      padding: 0,
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
    },
    roundUnlockedButton: {
      height: 25,
      minWidth: 25,
      backgroundColor: theme.palette.primary.light,
      color: '#FFFFFF',
      borderRadius: '50%',
      padding: 0,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    roundSmallEditButton: {
      height: 40,
      minWidth: 40,
      backgroundColor: theme.palette.primary.light,
      color: '#FFFFFF',
      borderRadius: '50%',
      padding: 0,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    roundSmallDeleteButton: {
      height: 40,
      minWidth: 40,
      backgroundColor: '#707070',
      color: '#FFFFFF',
      borderRadius: '50%',
      padding: 0,
      '&:hover': {
        backgroundColor: '#707070',
      },
    },
    roundTinyEditButton: {
      height: 30,
      minWidth: 30,
      backgroundColor: theme.palette.primary.light,
      color: '#FFFFFF',
      borderRadius: '50%',
      padding: 0,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    roundTinyDeleteButton: {
      height: 30,
      minWidth: 30,
      backgroundColor: '#707070',
      color: '#FFFFFF',
      borderRadius: '50%',
      padding: 0,
      '&:hover': {
        backgroundColor: '#707070',
      },
    },
    largeButton: {
      background: `${theme.palette.primary.light} 0% 0% no-repeat padding-box`,
      boxShadow: '0px 3px 6px #5987E033',
      borderRadius: '6px',
      color: '#FFFFFF',
      width: UI_WIDTHS.largeButton,
      padding: theme.spacing(2),
      fontFamily: 'NotoSansJpBold',
      fontSize: '18px',
      lineHeight: '28px',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    largeDeleteButton: {
      background: `${theme.palette.error.main} 0% 0% no-repeat padding-box`,
      border: 'none',
      boxShadow: 'none',
      width: UI_WIDTHS.bigButton,
      padding: theme.spacing(1.5),
      color: '#FFF',
      borderRadius: 6,
      '&:hover': {
        backgroundColor: theme.palette.error.main,
      },
    },
    largeDeleteBoldButton: {
      background: `${theme.palette.error.main}`,
      border: 'none',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.161)',
      width: UI_WIDTHS.bigButton,
      padding: theme.spacing(1.5),
      color: '#FFF',
      fontFamily: 'NotoSansJpBold',
      fontSize: '18px',
      lineHeight: '28px',
      borderRadius: 6,
      '&:hover': {
        backgroundColor: theme.palette.error.main,
      },
    },
    iconButton: {
      padding: 0,
      justifyContent: 'flex-end',
      minWidth: 'auto',
    },
    whiteBackgroundBlueBorder: {
      width: '100%',
      color: '#5987E0',
      border: '2px solid #5987E0',
      borderRadius: 6,
      backgroundColor: '#FFFFFF',
      fontWeight: 'bold',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
    },
    changeTemplateButton: {
      background: '#E0E0E0',
      color: 'inherit',
      padding: theme.spacing(1),
      borderRadius: 6,
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#E0E0E0',
      },
    },
    memoToggleButton: {
      borderColor: '#5987E0',
      color: '#5987E0',
      '&.Mui-selected': {
        color: '#fff',
        backgroundColor: '#5987E0',
      },
      '&.Mui-selected:hover': {
        backgroundColor: '#5987E0',
      },
    },
    outlinedButton: {
      color: '#5987E0',
      border: '1.2px solid #5B87E4',
      '&:hover': {
        border: '1.2px solid #5B87E4',
      },
    },
    smallButton: {
      width: UI_WIDTHS.smallButton,
    },
    propertyOutlinedButton: {
      minWidth: UI_WIDTHS.ratioForm,
      fontSize: 16,
      fontWeight: 'bold',
      padding: theme.spacing(2),
      height: UI_HEIGHTS.memberList,
    },
    buttonScroll: {
      position: 'absolute',
      top: 0,
      zIndex: 2,
    },
    buttonRounded: {
      borderRadius: '50%',
      width: 26,
      height: 26,
      backgroundColor: '#ffffff',
      color: '#5987E0',
    },
    buttonUploadImage: {
      borderRadius: '50%',
      width: 26,
      height: 26,
      backgroundColor: '#ffffff',
      color: '#5987E0',
    },
    buttonBulkDelete: {
      marginRight: theme.spacing(1),
      backgroundColor: '#707070',
      padding: theme.spacing(1),
      '&:hover': {
        backgroundColor: '#707070',
      },
    },
    xs: {
      boxShadow: '0px 3px 6px #5987E033',
      color: '#FFFFFF',
      padding: '5px 29px',
      borderRadius: '999px',
      background: 'transparent',

      '&:hover': {
        backgroundColor: '#FFFFFF',
      },
    },
    cancelOrDeleteButton: {
      backgroundColor: '#707070',
      padding: theme.spacing(1),
      fontFamily: 'NotoSansJpBold',
      fontSize: '18px',
      lineHeight: '28px',
      '&:hover': {
        backgroundColor: '#707070',
      },
    },
    notificationHeaderButton: {
      height: '52px',
      minWidth: '52px',
      borderRadius: '50%',
      backgroundColor: '#0041C0',
      padding: '6px',
      '@media (max-width: 768px)': {
        height: 40,
        minWidth: 40,
      },
      '&:hover': {
        backgroundColor: '#0041C0',
      },
    },
    btnSearchHeader: {
      border: '1px solid #5987E0',
      borderRadius: '6px',
      fontWeight: 400,
      fontSize: 16,
      fontFamily: 'Noto Sans',
      fontStyle: 'normal',
      color: '#5987E0',
      height: '40px',
    },
  }),
);

export default useButtonStyles;
