export const DEFAULT_SIDEBAR_ITEMS = [
  {
    key: '/',
    name: 'Home',
    icon: 'fa-solid fa-house',
  },
  {
    key: '/road',
    name: 'Lộ trình',
    icon: 'fa-solid fa-road',
  },
  {
    key: '/learn',
    name: 'Học',
    icon: 'fa-solid fa-lightbulb',
  },
  {
    key: '/blog',
    name: 'Blog',
    icon: 'fa-solid fa-newspaper',
  },
];

// MEMO:  Items visible in the sidebar from construction admin.
export const SIDEBAR_ITEMS_FOR_ADMIN = [
  {
    key: 'ADMIN_ORGANIZATIONS',
    name: '工務店アカウント',
    icon: 'icon-ap_office_line',
  },
  {
    key: 'ADMIN_USERS',
    name: 'サービス管理者',
    icon: 'icon-ap_systemicon_line',
  },
  {
    key: 'ADMIN_SERVICE_SETTING',
    name: 'サービス設定',
    icon: 'icon-ap_setting_line',
  },
];

export const USER_SIDEBAR_ITEMS = (currentOrganizationRole: string) => {
  switch (currentOrganizationRole) {
    case 'admin':
      return SIDEBAR_ITEMS_FOR_ADMIN;
    default:
      return DEFAULT_SIDEBAR_ITEMS;
  }
};

export const SIDEBAR_ITEM_KEYS = {
  DASHBOARD: 'DASHBOARD',
  PROJECTS: 'PROJECTS',
  TASKS: 'TASKS',
  CONSTRUCTOR_MEMBERS_LIST: 'CONSTRUCTOR_MEMBERS_LIST',
  CLIENTS_LIST: 'CLIENTS_LIST',
  ADMIN_USERS: 'ADMIN_USERS',
  ADMIN_ORGANIZATIONS: 'ADMIN_ORGANIZATIONS',
  CONFIGURATION: 'CONFIGURATION',
  WORKFLOW_CUSTOM: 'WORKFLOW_CUSTOM',
  NEW_CONSTRUCTION: 'NEW_CONSTRUCTION',
  REFORM: 'REFORM',
  NEW_CONSTRUCTION_DASHBOARD: 'NEW_CONSTRUCTION_DASHBOARD',
  REFORM_CONSTRUCTOR_DASHBOARD: 'REFORM_CONSTRUCTOR_DASHBOARD',
  CUSTOM_CHOICE_SETTING: 'CUSTOM_CHOICE_SETTING',
  REFORM_CLIENT_PROFILES: 'REFORM_CLIENT_PROFILES',
  REFORM_PROPERTIES: 'REFORM_PROPERTIES',
  REFORM_PROJECTS: 'REFORM_PROJECTS',
  CONFIGURATION_NEW_CONSTRUCTION: 'CONFIGURATION_NEW_CONSTRUCTION',
  MANAGEMENT_LIST: 'MANAGEMENT_LIST',
  CONFIGURATION_STORAGE_UTILIZATION: 'CONFIGURATION_STORAGE_UTILIZATION',
  EDIT_COMPANY_OWNED_TEMPLATE: 'EDIT_COMPANY_OWNED_TEMPLATE',
  CONSTRUCTION_TEMPLATE: 'CONSTRUCTION_TEMPLATE',
  USING_TASK_TEMPLATE: 'USING_TASK_TEMPLATE',
  CONSTRUCTOR_DASHBOARD: 'CONSTRUCTOR_DASHBOARD',
  MANAGEMENT_DASHBOARD: 'MANAGEMENT_DASHBOARD',
};

// MEMO: For auto open collapse.
export const CONSTRUCTOR_DASHBOARD_SUB_ITEMS = [
  SIDEBAR_ITEM_KEYS.MANAGEMENT_DASHBOARD,
  SIDEBAR_ITEM_KEYS.REFORM_CONSTRUCTOR_DASHBOARD,
];
// MEMO: For auto open collapse.
export const REFORM_SUB_ITEMS = [];

// MEMO: For auto open collapse.
export const CONFIGURATION_SUB_ITEMS = [
  SIDEBAR_ITEM_KEYS.CONFIGURATION_STORAGE_UTILIZATION,
  SIDEBAR_ITEM_KEYS.CUSTOM_CHOICE_SETTING,
  SIDEBAR_ITEM_KEYS.CONSTRUCTION_TEMPLATE,
  SIDEBAR_ITEM_KEYS.USING_TASK_TEMPLATE,
  SIDEBAR_ITEM_KEYS.TASKS,
];

// MEMO: For auto open collapse.
export const NEW_CONSTRUCTION_SUB_ITEMS = [
  SIDEBAR_ITEM_KEYS.NEW_CONSTRUCTION_DASHBOARD,
  SIDEBAR_ITEM_KEYS.TASKS,
  SIDEBAR_ITEM_KEYS.PROJECTS,
];
