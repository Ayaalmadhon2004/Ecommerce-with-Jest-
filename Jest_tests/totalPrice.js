export function calculateTotal(items) {
  return items.reduce((acc, curr) => acc + Number(curr.price), 0);
}
