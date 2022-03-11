import * as S from "Components/ButtonContainer/style.ButtonContainer";
import * as T from "Types/index";

import Button from "Components/Button/index.Button";

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

const ButtonContainer = (): JSX.Element => {
  return (
    <S.Container>
      {icons.map((icon) => (
        <Button key={icon.id} iconProps={icon} />
      ))}
    </S.Container>
  );
};

export default ButtonContainer;
