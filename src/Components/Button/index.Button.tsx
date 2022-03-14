import * as S from "Components/Button/style.Button";
import * as T from "Types/index";
import * as C from "Constants/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonPropsType {
  iconProps: T.IconType;
}

const Button = ({ iconProps }: ButtonPropsType): JSX.Element => {
  return (
    <S.Li key={iconProps.id} iconBg={iconProps.background}>
      {new Array(C.LAYERS).fill(null).map((_, index) => (
        <S.Layer key={index} />
      ))}
      <S.Layer>
        {typeof iconProps.icon === "function" ? (
          <iconProps.icon />
        ) : (
          <FontAwesomeIcon icon={iconProps.icon} />
        )}
      </S.Layer>
    </S.Li>
  );
};

export default Button;
