import * as S from "Pages/Contact/style.Contact";
import * as C from "Constants/index";

import ButtonContainer from "Components/ButtonContainer/index.ButtonContainer";
import { useSelector } from "react-redux";
import { RootState } from "Modules/index";

interface ContactProps {}

const Contact = ({}: ContactProps): JSX.Element => {
  const page: string = useSelector((state: RootState) => state.main.page);

  return (
    <>
      <S.Container page={page}>
        <ButtonContainer icons={C.ICONS.CONTACT.data} page={C.PAGES.CONTACT} />
      </S.Container>
    </>
  );
};

export default Contact;
