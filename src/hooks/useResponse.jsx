import { response } from "../utils/dummyDB";

export const getResult = ({ emotion, reasonIdx }) => {
  return response[emotion]?.[reasonIdx];
};
