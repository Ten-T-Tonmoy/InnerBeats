import { response } from "../utils/responseDb";

// export const getResult = ({ emotion, reasonIdx }) => {
//   return response[emotion]?.[reasonIdx];
// };

export const getResult = ({ emotion, reasonIdx }) => {
  const randomIdx = Math.floor(Math.random() * 5);
  console.log(response[emotion]?.[reasonIdx]?.[randomIdx]);
  return response[emotion]?.[reasonIdx]?.[randomIdx];
};
