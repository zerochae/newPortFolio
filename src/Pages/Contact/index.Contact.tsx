import * as S from "Pages/Contact/style.Contact";
import * as T from "Types/index";
import ButtonContainer from "Components/ButtonContainer/index.ButtonContainer";

import {
  faInstagram,
  faGithub,
  faBlogger,
} from "@fortawesome/free-brands-svg-icons";

const icons: T.iconType[] = [
  {
    id: 1,
    icon: faInstagram,
  },
  {
    id: 2,
    icon: faGithub,
  },
  {
    id: 3,
    icon: faBlogger,
  },
];

const Contact = () => {
  return (
    <S.Container>
      <ButtonContainer icons={icons} />
    </S.Container>
  );
};

export default Contact;
