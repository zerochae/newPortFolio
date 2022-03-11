import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "Components/Button/style.Button";
import * as T from "Types/index";

interface ButtonPropsType {
  iconProps: T.iconType;
}

const spans = new Array(4).fill(null);

const Button = ({ iconProps }: ButtonPropsType): JSX.Element => {
  return (
    <S.Li key={iconProps.id}>
      {spans.map((_, index) => (
        <S.Layer key={index} />
      ))}
      <S.Layer>
        <FontAwesomeIcon icon={iconProps.icon} />
      </S.Layer>
    </S.Li>
  );
};

export default Button;
