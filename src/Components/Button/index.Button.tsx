import * as S from "Components/Button/style.Button";
import * as T from "Types/index";
import * as C from "Constants/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  icon: T.IconType;
}

const Button = ({ icon }: ButtonProps): JSX.Element => {
  return (
    <S.Li key={icon.id} iconBg={icon.background}>
      {new Array(C.LAYERS).fill(null).map((_, index) => (
        <S.Layer key={index} />
      ))}
      <S.Layer>
        {typeof icon.content === "function" ? (
          <icon.content />
        ) : (
          <FontAwesomeIcon icon={icon.content} />
        )}
      </S.Layer>
    </S.Li>
  );
};

export default Button;
