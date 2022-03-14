import GlobalStyle from "Styles/GlobalStyle";

import * as S from "Pages/Main/style.Main";
import * as C from "Constants/index";

import Contact from "Pages/Contact/index.Contact";
import Skills from "Pages/Skills/index.Skills";
import About from "Pages/About/index.About";

import ButtonContainer from "Components/ButtonContainer/index.ButtonContainer";

const Main = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <ButtonContainer icons={C.ICONS.MAIN} />
        <About />
        <Skills />
        <Contact />
      </S.Container>
    </>
  );
};

export default Main;
