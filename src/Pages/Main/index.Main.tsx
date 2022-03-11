import GlobalStyle from "Styles/GlobalStyle";
import * as S from "Pages/Main/style.Main";
import ButtonContainer from "Components/ButtonContainer/index.ButtonContainer";

const Main = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <ButtonContainer />
      </S.Container>
    </>
  );
};

export default Main;
