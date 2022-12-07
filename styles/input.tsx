import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { UI_WIDTHS } from './ui';

const useInputStyles = makeStyles((theme: Theme) =>
  createStyles({
    mentionsInput: {
      backgroundColor: '#fff',
      borderRadius: '6px',
      height: 100,
      '& > .mentions__control': {
        lineHeight: 'initial',
        pointerEvents: 'all',
      },
      '&> div> textarea': {
        border: 'none !important',
        padding: theme.spacing(1),
        caretColor: '#000',
        margin: '0 !important',
      },
      '&> div> .mentions__highlighter': {
        padding: theme.spacing(1),
        border: 'none !important',
        height: 100,
        zIndex: 101,
        pointerEvents: 'none',
      },
      '&> div> .mentions__highlighter > strong': {
        color: '#3A67BE',
        zIndex: 100,
      },
      '& ::placeholder': {
        fontSize: 14,
      },
    },
    taskNameInput: {
      maxWidth: '400px',
    },
    taskTodoCheckbox: {
      paddingLeft: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    taskTodoInput: {
      border: '1px solid #B9B9B9',
      borderRadius: 6,
      padding: theme.spacing(1.5),
      position: 'relative',
    },
    taskWorkDaysInput: {
      width: UI_WIDTHS.workDaysInput,
      marginRight: theme.spacing(1),
      border: 'none',
    },
    numberForm: {
      width: UI_WIDTHS.numberForm,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    ratioForm: {
      width: `${UI_WIDTHS.ratioForm}px !important`,
      marginLeft: `${theme.spacing(1)}px !important`,
      marginRight: `${theme.spacing(1)}px !important`,
    },
    inputDisabled: {
      '& input': {
        color: '#ADADAD!important',
        borderRadius: '6px',
        backgroundColor: '#EDEDED!important',
        '-webkit-text-fill-color': 'unset!important',
      },
      '& fieldset': {
        border: 'none',
      },
    },
    customInput: {
      '& .Mui-disabled.MuiInputBase-input': {
        color: 'rgba(0, 0, 0, 0.6)', // Safariで文字が見えなくなるバグ対応 https://github.com/flywheel-jp/panasonic-daikoku-frontend/issues/1210
      },
    },
    textField: {
      '& > .MuiInputBase-root > input': {
        borderRadius: 6,
        border: '1px #B9B9B9',
        fontSize: 14,
        padding: '14px',
      },
    },
    inputTextEllipsis: {
      '& .MuiSelect-select .MuiBox-root': {
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
    readOnly: {
      color: '#343434',
      backgroundColor: '#EDEDED',
    },
    inputBgLight: {
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#FFFFFF',
      },
      '& input': {
        backgroundColor: '#FFFFFF',
      },
    },
    requiredLabel: {
      display: 'inline-block',
      fontSize: '12px',
      lineHeight: '16px',
      padding: '4px 8px',
      backgroundColor: '#5987E0',
      color: 'white',
      marginLeft: '8px',
      borderRadius: '2px',
    },
    largeFontTextField: {
      '& .MuiInputBase-root > input': {
        fontSize: 16,
      },
    },
    inputSearchClientProfile: {
      width: '225px',
      height: '40px',
      backgroundColor: '#FFFFFF',
      borderRadius: '6px',
      marginRight: '16px',
    },
  }),
);

export const useOverwriteInputStylesWithProps = (props: {
  iOSVersion: string;
}) =>
  makeStyles(() => {
    return createStyles({
      mentionsInputForIOS: {
        '&> div> .mentions__highlighter': {
          // In iOS 12, mentions__highlighter isn't same position with shadow content in safari 12
          ...(props?.iOSVersion === '12' && { paddingLeft: 11 }),
        },
      },
    });
  });

export default useInputStyles;
