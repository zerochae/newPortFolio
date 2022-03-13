import GlobalStyle from "Styles/GlobalStyle";
import * as S from "Pages/Main/style.Main";
import Contact from "Pages/Contact/index.Contact";

const Main = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <Contact />
      </S.Container>
    </>
  );
};

export default Main;
