import * as A from "Actions/Main";

type MainState = {
  page: string;
};

type MainAction = ReturnType<typeof A.setPage>;

const initialState: MainState = {
  page: "MAIN",
};

const main = (state: MainState = initialState, action: MainAction) => {
  switch (action.type) {
    case A.SETPAGE:
      return { page: action.payload };
    default:
      return state;
  }
};

export default main;
