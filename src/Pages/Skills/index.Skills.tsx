import * as S from "Pages/Skills/style.Skills";
import * as C from "Constants/index";

import ButtonContainer from "Components/ButtonContainer/index.ButtonContainer";

const Skills = () => {
  return (
    <S.Container>
      <ButtonContainer icons={C.ICONS.SKILLS} />
    </S.Container>
  );
};

export default Skills;
