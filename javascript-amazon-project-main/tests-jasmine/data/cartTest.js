import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

//to test an if statement test all the existing conditions
describe('test suite: addToCart', () => {
  it('adds an existing product to the cart', () => {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: '5968897c-4d27-4872-89f6-5bcb052746d7',
        quantity: 1,
        deliveryOptionId: '1'
      }]); //sets the cart for testing
    });
    loadFromStorage();

    addToCart('5968897c-4d27-4872-89f6-5bcb052746d7');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('5968897c-4d27-4872-89f6-5bcb052746d7');
    expect(cart[0].quantity).toEqual(2);
  });


  //creating a mock version of getItem to test flaky test.
  it('adds a new product to the cart', () =>{
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]); //makes getItem return an empty array.
    });
    loadFromStorage();

    addToCart('5968897c-4d27-4872-89f6-5bcb052746d7');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('5968897c-4d27-4872-89f6-5bcb052746d7');
    expect(cart[0].quantity).toEqual(1);
  });
});