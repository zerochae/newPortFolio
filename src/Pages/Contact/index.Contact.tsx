import * as S from "Pages/Contact/style.Contact";
import * as C from "Constants/index";

import ButtonContainer from "Components/ButtonContainer/index.ButtonContainer";

interface ContactProps {}

const Contact = ({}: ContactProps): JSX.Element => {
  return (
    <>
      <S.Container>
        <ButtonContainer icons={C.ICONS.CONTACT.data} />
      </S.Container>
    </>
  );
};

export default Contact;
