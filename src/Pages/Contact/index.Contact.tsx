import * as S from "Pages/Contact/style.Contact";
import * as C from "Constants/index";

import ButtonContainer from "Components/ButtonContainer/index.ButtonContainer";

const Contact = (): JSX.Element => {
  return (
    <S.Container>
      <ButtonContainer icons={C.ICONS.CONTACT} />
    </S.Container>
  );
};

export default Contact;
