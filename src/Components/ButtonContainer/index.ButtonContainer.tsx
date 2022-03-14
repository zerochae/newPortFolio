import * as S from "Components/ButtonContainer/style.ButtonContainer";
import * as T from "Types/index";
import * as C from "Constants/index";

import Button from "Components/Button/index.Button";
import { useDispatch } from "react-redux";
import { setPage } from "Actions/Main";

interface ButtonContainerType {
  icons: T.IconType[];
  page: string;
}

const ButtonContainer = ({ icons, page }: ButtonContainerType): JSX.Element => {
  const dispatch = useDispatch();

  const handlePage = (diff: string) => {
    dispatch(setPage(diff));
  };

  return (
    <S.Container>
      {icons.map((icon, index) =>
        page === C.PAGES.MAIN ? (
          <Button
            key={icon.id}
            icon={icon}
            page={C.MAINMENU[index]}
            handlePage={handlePage}
          />
        ) : (
          <Button key={icon.id} icon={icon} page={null} handlePage={null} />
        )
      )}
    </S.Container>
  );
};

export default ButtonContainer;
