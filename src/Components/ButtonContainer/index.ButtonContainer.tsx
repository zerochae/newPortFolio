import * as S from "Components/ButtonContainer/style.ButtonContainer";
import * as T from "Types/index";

import Button from "Components/Button/index.Button";

interface ButtonContainerType {
  icons: T.IconType[];
}

const ButtonContainer = ({ icons }: ButtonContainerType): JSX.Element => {
  return (
    <S.Container>
      {icons.map((icon) => (
        <Button key={icon.id} iconProps={icon} />
      ))}
    </S.Container>
  );
};

export default ButtonContainer;
