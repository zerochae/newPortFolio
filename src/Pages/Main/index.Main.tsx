import GlobalStyle from "Styles/GlobalStyle";
import * as S from "Pages/Main/style.Main";
import Contact from "Pages/Contact/index.Contact";
import Skills from "Pages/Skills/index.Skills";

const Main = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <Skills/>
        <Contact />
      </S.Container>
    </>
  );
};

export default Main;
