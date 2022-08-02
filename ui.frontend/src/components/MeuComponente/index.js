import { SubTab } from "./index.styled";
import { TabTitle } from "./index.styled";
const MeuComponente = ({ text }) => {
  return (
  <div>
  <SubTab>Forms</SubTab>
  <TabTitle>{text}</TabTitle>
  </div>
)};

export default MeuComponente;
