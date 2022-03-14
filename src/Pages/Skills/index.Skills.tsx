import * as S from "Pages/Skills/style.Skills";
import * as C from "Constants/index";

import ButtonContainer from "Components/ButtonContainer/index.ButtonContainer";
import { useSelector } from "react-redux";
import { RootState } from "Modules/index";

interface SkillProps {}

const Skills = ({}: SkillProps): JSX.Element => {
  const page: string = useSelector((state: RootState) => state.main.page);

  return (
    <>
      <S.Container page={page}>
        <ButtonContainer icons={C.ICONS.SKILLS.data} page={C.PAGES.SKILLS} />
      </S.Container>
    </>
  );
};

export default Skills;
