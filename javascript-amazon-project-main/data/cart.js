export const cart = [];

document.querySelector('.js-products-grid').innerHTML = productsHTML;

//putting the forEach loop that works as a matching and checking mechanism into it's own function to organize code.
export function addToCart(productId) {
  let matchingItem;

      cart.forEach((cartItem) => {
        if(productId === cartItem.productId)
        {
          matchingItem = cartItem;
        }});

        if(matchingItem) {
          matchingItem.quantity += 1;
        }else {
          cart.push({
            productId: productId,
            quantity: 1
          });
        }
}