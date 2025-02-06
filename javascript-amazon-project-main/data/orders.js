export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  order.unshift(order);  //unshift for adding the most recent input to the front of others.
  saveToStorage();
}


function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}