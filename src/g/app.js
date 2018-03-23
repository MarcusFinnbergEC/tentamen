// JavaScript för att implementera kraven A-E.
//Global variables
let productDiv = $("#productList");
let shoppingCartDiv = $("#shoppingCart");

function startScript(){
//Get products from API and display them on the website/application.
$.get( "http://demo.edument.se/api/products", function (data, status) {
    let productsCollected = JSON.stringify(data);
    let products = JSON.parse(productsCollected);

    $.each(products, function(index, product) {
        let productBox = $("<div></div>");
        productBox.attr("class", "productBox");
        let addToCart = $("<button></button>").text("Add To Cart");
        addToCart.attr({"id": product.Id, "class":"buyProduct"});
        let productName = $("<h3></h3>");
        productName.text(product.Name);
        let valueInStock =  Math.floor((Math.random() * 10) + 1);
        let amountInStock = $("<p></p>").text(valueInStock);
        amountInStock.attr("class", "stock");
        let img = $("<img>").attr("src", product.Image);
        productBox.append(productName, img, amountInStock, addToCart);
        productDiv.append(productBox);
    });

    //Adding items to cart
    $(".buyProduct").click(function() {
        console.log(products);
        let buttonId = $(this).attr("id");
        let stock = $(this).closest().find(".stock");
        console.log(buttonId);
        $.each(products, function(index, product) {
            if (buttonId === product.Id){ //not working if I do it the other way around (buttonId !== product.Id), but it doesn't work at all either way...
                $.post("http://localhost:3000/orders", {Name: product.Name, Price: product.Price});
                alert(product.Id);
            }
            else{
                /*let stockValue = stock.val();
                stockValue--;
                stock.text(stockValue);*/
                alert(product.Id);

            }
    });

        });

    });




//          A lot of trial-code....


/*let addToCart = $("<a></a>").html("Add To Cart");
let productName = $("<h3></h3>").text(product.name);
let amountInStock = $("<p></p>").text(randomizerInStock);
let img = $("<img>").attr("src", product.image);
listItem.append(productName, img, amountInStock, addToCart);
productDiv.append(listItem);
*/

//Function for displaying products
/*for (let product in products){
 let listItem = $("<div></div>");
        let addToCart = $("<a></a>").text("Add To Cart");
        let productName = $("<h3></h3>").text(product.name);
        let amountInStock = $("<p></p>").text(randomizerInStock);
        let img = $("<img>").attr("src", product.image);
        listItem.append(productName, img, amountInStock, addToCart);
        productDiv.append(listItem);
/*
$.each(data, function(data){
        let productsList = JSON.stringify(data);
        console.log($(this));
        productDiv.append(productsList);
*/
/*
for (let product in products){
for (i = 0; i < products.length; i++) {
        let addToCart = $("<a></a>").html("Add To Cart");
        let productName = $("<h3></h3>");
        productName.text($(this).Name);
        let amountInStock = $("<p></p>").text(randomizerInStock);
        let img = $("<img>").attr("src", $(this).Image);
        productBox.append(productName, img, amountInStock, addToCart);
        productDiv.append(productBox);
    }
}
*/
}
$(document).ready(startScript);