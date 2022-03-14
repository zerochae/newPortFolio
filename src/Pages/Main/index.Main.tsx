import GlobalStyle from "Styles/GlobalStyle";

import * as S from "Pages/Main/style.Main";
import * as C from "Constants/index";

import Contact from "Pages/Contact/index.Contact";
import Skills from "Pages/Skills/index.Skills";
import About from "Pages/About/index.About";

import { RootState } from "Modules/index";

import { useDispatch, useSelector } from "react-redux";

import ButtonContainer from "Components/ButtonContainer/index.ButtonContainer";
import { setStep } from "Actions/Main";

const Main = (): JSX.Element => {
  const step: string = useSelector((state: RootState) => state.main.step);

  const dispatch = useDispatch();

  const handleStep = (diff: string) => {
    dispatch(setStep(diff));
  };

  return (
    <>
      <GlobalStyle />
      <S.Container>
        {step}
        <ButtonContainer icons={C.ICONS.MAIN.data} />
        <About />
        <Skills />
        <Contact />
      </S.Container>
    </>
  );
};

export default Main;
