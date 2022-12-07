import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useSelectStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebarSelect: {
      width: '100%',
      textAlign: 'left',
    },
    outlinedSelect: {
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
      height: 46,
    },
    disabledBackgroundColor: {
      backgroundColor: '#EDEDED',
    },
    outlinedSelectLabel: {
      color: '#343434',
    },
    outlineInputSelect: {
      border: '1px solid #B9B9B9 !important',
      borderRadius: 6,
    },
    filterSelect: {
      width: '100%',
    },
    // TODO: あとで変える
    minWidthLimitedSelect: {
      minWidth: 200,
    },
    taskEditPageDependencies: {
      maxWidth: 400,
      width: '100%',
    },
    MemberRoleSelect: {
      width: '100%',
    },
    MemberOccupationSelect: {
      width: '100%',
      marginBottom: theme.spacing(0.75),
    },
    selectClientProject: {
      width: '100%',
    },
    isActiveSelect: {
      width: 120,
    },
    contractUserSelect: {
      width: 300,
    },
    selectIcon: {
      width: '10px',
      right: '12px',
      position: 'absolute',
    },
    statusLabel: {
      borderRadius: 5,
      color: '#FFFFFF',
      padding: 0,
      fontSize: 13,
      height: 32,
      width: 85,
      '&:before': {
        display: 'none',
      },
      '& .MuiSelect-icon': {
        color: '#fff',
      },
      '&.Mui-focused::after': {
        border: 'none',
      },
      '& .Mui-disabled': {
        '-webkit-text-fill-color': '#FFFFFF',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ffffff !important',
        borderWidth: '0px !important',
      },
    },
    statusLabelLarge: {
      borderRadius: 6,
      color: '#FFFFFF',
      padding: 0,
      fontSize: 16,
      height: 38,
      width: 94,
      '&:before': {
        display: 'none',
      },
      '& .MuiSelect-icon': {
        color: '#fff',
      },
      '&.Mui-focused::after': {
        border: 'none',
      },
      '& .Mui-disabled': {
        '-webkit-text-fill-color': '#FFFFFF',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ffffff !important',
        borderWidth: '0px !important',
      },
    },
    statusNotStartedLabel: {
      backgroundColor: '#FF9800',
    },
    statusOngoingLabel: {
      backgroundColor: '#5987E0',
    },
    statusFinishedLabel: {
      backgroundColor: '#63BC71',
    },
    statusSurveyLabel: {
      backgroundColor: '#8F76C6',
    },
    statusEstimationLabel: {
      backgroundColor: '#2792DF',
    },
    statusContractLabel: {
      backgroundColor: '#02C3B8',
    },
    statusPostCompletionLabel: {
      backgroundColor: '#2A8559',
    },
    statusExecutionLabel: {
      backgroundColor: '#73C036',
    },
    statusCancelLabel: {
      backgroundColor: '#EF5353',
    },
    statusCompletedLabel: {
      backgroundColor: '#B7B7B7',
    },
    statusPreparationLabel: {
      backgroundColor: '#2A8559',
    },
    statusCompletionLabel: {
      backgroundColor: '#B7B7B7',
    },
    fixSelectUserZIndex: {
      '& .select__menu': {
        zIndex: 10,
      },
    },
    statusProjectLabel: {
      borderRadius: 5,
      color: '#FFFFFF',
      padding: 0,
      fontSize: 16,
      height: 40,
      whiteSpace: 'nowrap',
      '&:before': {
        display: 'none',
      },
      '& .MuiSelect-icon': {
        color: '#fff',
      },
      '&.Mui-focused::after': {
        border: 'none',
      },
      '& .Mui-disabled': {
        '-webkit-text-fill-color': '#FFFFFF',
      },
      '&:not(.empty-value) .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ffffff !important',
        borderWidth: '0px !important',
      },
      '&.empty-value .MuiSelect-icon': {
        color: '#343434',
      },
      '&.empty-value': {
        color: '#adadad',
      },
      '&:not(.is-mobile)': {
        fontFamily: 'NotoSansJpMedium',
      },
      '&.is-mobile': {
        width: '100%',
        fontSize: 13,
        lineHeight: '22px',
        maxWidth: 174,
        '@media (min-width: 375px)': {
          fontSize: 16,
        },
      },
    },
    multiSelectHiddenlearAll: {
      '& .select__clear-indicator': {
        display: 'none',
      },
    },
    singleSelectEmptyValue: {
      '& .MuiFormLabel-root': {
        display: 'none',
      },
    },
    paginationBorder: {
      '& fieldset': {
        border: 0,
      },
    },
  }),
);

export default useSelectStyles;
