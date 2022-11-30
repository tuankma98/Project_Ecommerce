export const LOGO_IMAGE_WIDTH = 38;
export const LOGO_IMAGE_HEIGHT = 38;

export const BUTTON_TYPE = {
  big: 1,
  create: 2,
  edit: 3,
  delete: 4,
  search: 5,
  small: 6,
  text: 7,
  clientRecord: 8,
  cancel: 9,
  roundEdit: 10,
  roundCreate: 11,
  roundPin: 12,
  roundUnpin: 13,
  cancelDelete: 14,
  large: 15,
  bigDelete: 16,
  roundSmallEdit: 17,
  roundSmallDelete: 18,
  whiteBackgroundBlueBorder: 19,
  roundRightArrow: 20,
  changeTemplate: 21,
  roundCreateWhite: 22,
  roundTinyEdit: 23,
  roundTinyDelete: 24,
  roundLock: 25,
  roundUnlock: 26,
  bulk_delete: 27,
  roundCreateGreen: 28,
  toCustomerChart: 29,
  outlinedEditButton: 30,
  buttonBulkDelete: 40,
  xs: 41,
  cancelOrDelete: 50,
  largeDeleteBold: 51,
  reformProjectFileButton: 52,
};

export const SELECT_BOX_CONFIGURATION = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  getcontentanchorel: null,
};

export const UI_WIDTHS = {
  addClientButton: 180,
  addDiscussionBoardButton: 186,
  addFileButton: 214,
  addPhaseButton: 200,
  addRequestButton: 186,
  addTimelineButton: 300,
  addUserButton: 310,
  addProjectButton: 180,
  arrowIcon: 10,
  assignUserNameInModal: 200,
  bigButton: 260,
  buttonIcon: 12,
  createButton: 200,
  commenterNameMaxLength: 300,
  columnOfTable: 200,
  contentColumnOfTable: 300,
  datePickerInModal: 200,
  deleteConstructorMemberName: 136,
  deleteConstructorMemberMail: 250,
  discussionBoardContentTextarea: 450,
  editIcon: 20,
  fileCreateButton: 162,
  linkButton: 209,
  largeButton: 380,
  multiselectChips: 130,
  multiselectConstructorMemberModal: 460,
  progressBar: 140,
  progressStep: 24,
  pulldownIcon: 12,
  numberForm: 180,
  ratioForm: 100,
  smallerColumnOfTable: 165,
  selectInModal: 250,
  scrollSliderButton: 36,
  taskEditPageContainer: 650,
  templatePhaseTask: 420,
  workDaysInput: 120,
  workDaysInputContainer: 180,
  workflowTemplateNameInput: 560,
  addTemplateToWorkflowButton: 170,
  maintenanceTextArea: 600,
  dateMinWidth: 80,
  sidebarWidth: 240,
  closedSidebarWidth: 72,
  projectDetailsSidebarWidth: 400,
  normalButton: 167,
  modalButton: 267,
  datepickerLarge: 300,
  selectLarge: 300,
  chooseProjectInfoButton: 180,
  member: 180,
  addWorkflowTemplate: 250,
  addTodo: 190,
  addOccupation: 144,
  workFlowCustom: {
    taskNameMaxWidth: 450,
    phaseNameMaxWidth: 450,
  },
  smallButton: 50,
  reform: {
    addRenovationProjectButton: 230,
    familyName: 120,
  },
};

export const UI_HEIGHTS = {
  assignedTasksSection: 410,
  assigedTaskTodos: 110,
  SalesProgressTableBody: 210,
  memberList: 50,
  multiSelect: 41,
  profileImageBig: 96,
  profileImageSmall: 52,
  progressBar: 12,
  select: 43,
  footer: 50,
  filePageTableColumn: 42,
  taskItem: 58,
  addFileButton: 40,
};

export const PHASE_LIST_SEPARATION = 30;
export const PHASE_COMPONENT_RIGHT_SIDE_POSITION_PERCENTAGE = 4;

export const WORKFLOW_LIST_SEPARATION = 5;

export const DRAG_AND_DROP_ICON_DIMENSIONS = {
  width: 20,
  height: 15,
};

export const TASK_DETAILS_SIDEBAR_SHIFT_WIDTH =
  UI_WIDTHS.projectDetailsSidebarWidth + 16;

export const PADDING = {
  input: 10,
};

export const ICON_FONT_SIZE = {
  tinyIcon: 12,
  smallIcon: 14,
  normalIcon: 16,
  mediumIcon: 20,
  largeIcon: 24,
  xlargeIcon: 28,
  hugeIcon: 32,
  filter: 20,
  superHugeIcon: 80,
  xxlargeIcon: 38,
};

export const ICON_POSITION = {
  right: 'right',
  left: 'left',
};

export const ASSIGNED_TASKS_SLIDER_SETTINGS = {
  arrows: false,
  centerMode: false,
  dots: false,
  initialSlide: 0,
  slidesToShow: 3.5,
  slidesToScroll: 1.5,
  infinite: false,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1.5,
      },
    },
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1.5,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
  ],
};
export const SLIDER_SETTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4.5,
  slidesToScroll: 3.5,
  responsive: [
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1.5,
      },
    },
  ],
};

export const SMARTPHONE_SLIDER_SETTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
  initialSlide: 0,
  slidesToShow: 3.5,
  slidesToScroll: 2.5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const REFORM_CLIENT_SLIDER_SETTINGS = {
  dots: true,
  infinite: false,
  speed: 500,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const CONSTRUCTOR_ICON_DIMENSIONS = {
  width: 54,
  height: 54,
};

export const PROPERTY_DETAIL_ICON_DIMENSIONS = {
  width: 54,
  height: 54,
};

export const RENOVATION_PROJECT_DETAIL_ICON_DIMENSIONS = {
  width: 54,
  height: 54,
};

export const MOBILE_SLIDER_DEFAULT_ITEM_COUNT = 5;

export const MOBILE_ADD_BUTTON_POSITION_TO_SLIDER = {
  top: -65,
  right: 20,
};

export const DATE_PICKER_MAX_WIDTH = 250;
