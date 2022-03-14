export const SETSTEP = "main/SETSTEP" as const;

export const setStep = (diff: string) => ({
  type: SETSTEP,
  payload: diff,
});
