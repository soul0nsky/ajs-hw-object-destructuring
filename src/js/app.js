export default function specialFind({ special }) {
  return special.map((item) => {
    if (item.description === undefined) {
      item.description = 'Описание недоступно';
    }
    return item;
  });
}
