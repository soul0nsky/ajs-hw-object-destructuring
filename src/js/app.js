// export default function specialFind({ special }) {
//   return special.map((item) => {
//     if (item.description === undefined) {
//       item.description = 'Описание недоступно';
//     }
//     return item;
//   });
// }

const specialFind = ({ special }) => special.map((item) => {
  const { description = 'Описание недоступно', ...data } = item;
  return ({ ...data, description });
});

export default specialFind;
