import * as A from "Actions/Main";

type MainState = {
  step: string;
};

type MainAction = ReturnType<typeof A.setStep>;

const initialState: MainState = {
  step: "MAIN",
};

const main = (state: MainState = initialState, action: MainAction) => {
  switch (action.type) {
    case A.SETSTEP:
      return { step: action.payload };
    default:
      return state;
  }
};

export default main;
