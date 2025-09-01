import { response } from "../utils/responseDb";

export const getResult = ({ emotion, reasonIdx }) => {
  return response[emotion]?.[reasonIdx];
};
