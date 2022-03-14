import * as S from "Pages/Skills/style.Skills";
import * as T from "Types/index";

import ButtonContainer from "Components/ButtonContainer/index.ButtonContainer";
import TsIcon from "Assets/TsIcon";
import { faReact, faVuejs, faJs } from "@fortawesome/free-brands-svg-icons";

const icons: T.iconType[] = [
  {
    id: 1,
    icon: faReact,
    background: "#61DAFB",
  },
  {
    id: 2,
    icon: faVuejs,
    background: "#4FC08D",
  },
  {
    id: 3,
    icon: faJs,
    background: "#F7DF1E",
  },
  {
    id: 4,
    icon: TsIcon,
    background: "#3178c6",
  },
];

const Skills = () => {
  return (
    <S.Container>
      <ButtonContainer icons={icons} />
    </S.Container>
  );
};

export default Skills;
