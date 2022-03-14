export const SETPAGE = "main/SETPAGE" as const;

export const setPage = (diff: string) => ({
  type: SETPAGE,
  payload: diff,
});
