const importIcons = (fileName) => {
  return require(`../assets/icons/${fileName}`);
};

const importImages = (fileName) => {
  return require(`../assets/images/${fileName}`);
};

export const icons = {
  navClose: importIcons("navClose.svg"),
  icon: importIcons("icon.svg"),
  searchIcon: importIcons("search-normal.svg"),
  messageQuestion: importIcons("message-question.svg"),
  notification: importIcons("notification.svg"),
  calendar: importIcons("calendar.svg"),
  profileArrow: importIcons("profileArrow.svg"),
  home: importIcons("home.svg"),
  message: importIcons("message.svg"),
  tasks: importIcons("tasks.svg"),
  members: importIcons("members.svg"),
  settings: importIcons("settings.svg"),
  addProject: importIcons("add-project.svg"),
  green: importIcons("green.svg"),
  violet: importIcons("violet.svg"),
  blue: importIcons("blue.svg"),
  orange: importIcons("orange.svg"),
  purple: importIcons("purple.svg"),
  editName: importIcons("edit-name.svg"),
  chain: importIcons("chain.svg"),
  addPpt: importIcons("add-ppt.svg"),
  filter: importIcons("filter.svg"),
  calendarToday: importIcons("calendar-today.svg"),
  share: importIcons("share.svg"),
  menu: importIcons("menu.svg"),
  shareOther: importIcons("share-other.svg"),
  files: importIcons("files.svg"),
  bulb: importIcons("bulb.svg"),
};

export const images = {
  porfilePic: importImages("profilePic.svg"),
  ppt1: importImages("ppt1.svg"),
  ppt2: importImages("ppt2.svg"),
  ppt3: importImages("ppt3.svg"),
  ppt4: importImages("ppt4.svg"),
};
