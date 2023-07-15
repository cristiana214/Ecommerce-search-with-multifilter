import { axios } from "./axios";

export const defaultQueryFn = async ({
  queryKey,
}: {
  queryKey: Array<unknown>;
}) => {
  const [_key, params] = queryKey;

  const res = await axios.get(_key as string, { params });
  return res.data;
};
