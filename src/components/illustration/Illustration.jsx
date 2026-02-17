import EmptyTasklmg from "./illustrations/EmptyTaskImg";
import LogoImg from "./illustrations/LogoImg";
import Notebooklmg from "./illustrations/NotebookImg";

const IllustrationMap = {
  emptyTask: EmptyTasklmg,
  notebook: Notebooklmg,
  logo: LogoImg,
};

const Illustration = ({ name }) => {
  const IllustrationComponent = IllustrationMap[name];
  return <IllustrationComponent />;
};

export default Illustration;
