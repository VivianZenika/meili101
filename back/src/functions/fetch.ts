import axios from "axios";
export const fetch = async (url: string) => {
  try {
    const res = await axios.get(url);
    const { data } = res;
    return data;
  } catch (error: unknown) {
    return error;
  }
};
