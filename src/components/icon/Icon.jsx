import * as Icons from "./icons";

const iconMap = {
  inbox: Icons.InboxIcon,
  loading: Icons.LoadingIcon,
  moon: Icons.MoonIcon,
  plus: Icons.PlusIcon,
  sun: Icons.SunIcon,
  arrowTwo: Icons.ArrowTwoIcon,
  check: Icons.CheckIcon,
  chevronTop: Icons.ChevronTopIcon,
  edit: Icons.EditIcon,
  minus: Icons.MinusIcon,
  chevronBottom: Icons.ChevronBottomIcon,
  xmark: Icons.XMarkIcon,
  dateNewOld: Icons.DateNewOldIcon,
  dateOldNew: Icons.DateOldNewIcon,
  filter: Icons.FilterIcon,
  fromAtoZ: Icons.FromAtoZIcon,
  fromImportant: Icons.FromImportantIcon,
  fromZtoA: Icons.FromZtoAIcon,
  updateNewOld: Icons.UpdateNewOldIcon,
  ofImportant: Icons.OfImportantIcon,
  updateOldNew: Icons.UpdateOldNewIcon,
  trash: Icons.TrashIcon,
};

const Icon = ({ name, className, fill }) => {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} fill={fill} />;
};

export default Icon;
