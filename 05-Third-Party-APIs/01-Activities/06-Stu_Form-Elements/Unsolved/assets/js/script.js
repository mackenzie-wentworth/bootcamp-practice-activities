var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event){
    event.preventDefault();

    var newItem = $("#shopping-input").val();
    shoppingListEl.append("<li>"+newItem+"/li>");
}


// $.each(shoppingListEl, function () {
//     shoppingListEl.push($(input).val());
// })
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit",handleFormSubmit);
