import * as S from "Pages/Skills/style.Skills";
import * as C from "Constants/index";

import ButtonContainer from "Components/ButtonContainer/index.ButtonContainer";

interface SkillProps {}

const Skills = ({}: SkillProps): JSX.Element => {
  return (
    <S.Container>
      <ButtonContainer icons={C.ICONS.SKILLS.data} />
    </S.Container>
  );
};

export default Skills;
