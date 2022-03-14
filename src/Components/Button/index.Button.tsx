import * as S from "Components/Button/style.Button";
import * as T from "Types/index";
import * as C from "Constants/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  icon: T.IconType;
  page: string;
  handlePage: (diff: string) => void;
}

const Button = ({ icon, page, handlePage }: ButtonProps): JSX.Element => {
  return (
    <S.Li
      key={icon.id}
      iconBg={icon.background}
      onClick={() => handlePage(page)}
    >
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
