"use strict";

// Adds item to cart by appending table data to selector cart-items (children of cart-items)
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

//Resets inner html (inside an element) of cart-total to 0, and empty all children of the element.
const resetCart = () => {
  $('#cart-total').html('0.00');// Assigns this as a value????
  $('#cart-items').empty();
};
// Adds up price total in cart
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html()); //turns cartTotal into integer
  total += price; // adds price to total

  cartTotal.html(total.toFixed(2)); // Sets cart total to be a two decimal number $0.00
};

// counts coffees sold
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html()); //coffeeSole == Integer of selector amt
  coffeeSold += amountSold; //counter

  $('#coffee-sold-counter').html(coffeeSold); // Updates number of coffees sold at selector #CSC
};

// Shows the users the progress of their order
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);  //changes progress value
  $('#order-status-message').html(statusMsg); //changes order status message on page
};


// <button class="add-to-order">Add to cart</button> 
// 
// Why no evt/evt.target for the button?
// Is it the tag.class the same as CSS?
//jQuery ID selector uses #id to find the element,
//while jQuery class selector uses .class for selecting elements.
// Why empty () ????
// evt.target targets the button - access and change the button
// () declares an anonymous fcn, no parameters 
$('.add-to-order').on('click', () => {
    // const button = $(evt.target)
    addItemToCart('coffee');
    incrementCartTotal(1.50);
})

// updates the total amount of cups sold and resets the cart when a user clicks on the Place Order button.
//$('#cart-items').children().length  tbody id = cart-items
// What if we hypotetically sold more one thing?
$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length);
  resetCart();
})

