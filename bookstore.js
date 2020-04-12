
let science_fiction = {
  name:"science fiction ",
  book:{
    "best Seller":{
      1:{
        name:"Fahrenheit",
        author:"Ray Bradbury",
        price:2.11,
      },
      2:{
        name:"Dune Messiah",
        author:"Frank Herbert",
        price:4.22,
      }
    },
    "new":{
      3:{
        name:"Dune Messiah",
        author:"Frank Herbert",
        price:4.22,
      }
    },
    "Top-reviewed":{
      4:{
        name:"Carmilla",
        author:"Sheridan Le Fanu",
        price:2.3,
      }
    }
  }
};

let philosophy ={
  name:"Philosophy",
  book:{
    3:{
      name:"Darwin's Dangerous Idea",
      author:"Daniel Dennett",
      price:3.33,
    },
    4:{
      name:"Carmilla",
      author:"Sheridan Le Fanu",
      price:2.3,
    }
  }
};

let children = {
  name:"Children's literature",
  book:{
    5:{
      name:"",
      author:"",
      price:00,
    }
  }

};
let novel = {
  name:"Novel",
  book:{
    6:{
      name:"The Hunger Games",
      author:"Suzanne Collins",
      price:50,
    }
  }
};

let store = [science_fiction,philosophy,children,novel];

var list_menuitems = document.getElementById("list_menuitems");
var dropdown_store = document.getElementById("dropdown_store");
var list_author = document.getElementById("list_author");
var list_categories = document.getElementById("list_categories");
var list_orderitems = document.getElementById("list_orderitems");
var value_subtotal = document.getElementById("value_subtotal");

var value_tax = document.getElementById("value_tax");
var value_total = document.getElementById("value_total");

var current_store = null;
var current_orderitems = [];
var prev_store_idx = 0;

function load_dropdown_store() {
    for (var i=0;i<store.length;i++) {
        var option = document.createElement("option");
        option.text = store[i].name;
        if(i===0){
            option.selected = true;
            current_store = store[i];
        }
        dropdown_store.appendChild(option);
    }
}
load_dropdown_store();

function new_orderitem(menuitem, count) {
    return{
        menuitem: menuitem,
        count: count
    };
}

function categories() {
    list_categories.innerHTML = '';
    for (var category_name in current_store.book) {
        var div = document.createElement("div");
        var a = document.createElement("a");
        div.className = "categoryitem";
        a.text = category_name;//render each name of category
        a.href = "#"+category_name;//use <a>herf attribbute to allow the user to skip directly to that category
        div.appendChild(a);
        list_categories.appendChild(div);
    }
}
categories();

//this function is to render the names and prices of menuitems to the HTML for user to add item when click the button.
function menuitems() {
    list_menuitems.innerHTML = '';
    for (var category_name in current_store.book) {
        var div = document.createElement("div");
        var a = document.createElement("a");//pumps up when click
        div.className = "categoryitem";
        a.text = category_name;
        a.name = category_name;
        div.appendChild(a);
        list_menuitems.appendChild(div);

        for (var key in current_store.book[category_name]) { // use for loop to locate the key item
            var menuitem = current_store.book[category_name][key];
            var div_menuitem = document.createElement("div");
            var span_menuitem = document.createElement("span");
            var img_menuitem = document.createElement("img");
            var span_author = document.createElement("div");
            (function (menuitem) {
                img_menuitem.addEventListener("click", function () {//add the add img for user to click
                    add_menuitem_click(menuitem);
                });
            })(menuitem);
            div_menuitem.className = "menuitem";//render the name of item
            span_menuitem.textContent = "$"+ menuitem.price.toFixed(2) +" "+ menuitem.name;//render the prices of the items
            span_author.textContent = menuitem.author;
            img_menuitem.src = "add.jpg";//add the add image
            div_menuitem.appendChild(span_menuitem);
            div_menuitem.appendChild(img_menuitem);
            span_menuitem.appendChild(span_author);
            list_menuitems.appendChild(div_menuitem);
            span_author.style.color = 'Chocolate';

        }
    }

}
menuitems();

function orderitems() {
    list_orderitems.innerHTML = '';

    for (var i=0;i< current_orderitems.length;i++) {
        var orderitem = current_orderitems[i];//get each order item from the array
        var menuitem = orderitem.menuitem;
        var count = orderitem.count;
        var div_orderitem = document.createElement("div");//create the element node
        div_orderitem.className = "orderitem";
        var span_orderitem = document.createElement("span");
        span_orderitem.className = "name";
        span_orderitem.textContent = menuitem.name;
        var orderitem_count = document.createElement("span");
        orderitem_count.className = "count";//get the quality
        orderitem_count.textContent = count;
        var orderitem_totalprice = document.createElement("span");
        orderitem_totalprice.className = "price";//get the prices
        orderitem_totalprice.textContent = "$"+menuitem.price*count;
        var img_orderitem = document.createElement("img");
        img_orderitem.src = "remove.jpg";//add the remove image.
        (function (orderitem) {
            img_orderitem.addEventListener("click", function () {
                remove_orderitem_click(orderitem);
            });
        })(orderitem);
        div_orderitem.appendChild(span_orderitem);
        div_orderitem.appendChild(orderitem_count);
        div_orderitem.appendChild(orderitem_totalprice);
        div_orderitem.appendChild(img_orderitem);
        list_orderitems.appendChild(div_orderitem);
    }
    order_total();
}
orderitems();

function order_total() {
    var subtotal = 0;
    var tax = 0;
    var total = 0;
    for(var i=0;i<current_orderitems.length;i++) {
        subtotal += current_orderitems[i].menuitem.price* current_orderitems[i].count;
    }
    tax = subtotal*0.1;
    total = subtotal+tax+current_store.delivery_charge;

    value_subtotal.textContent = subtotal.toFixed(2);
    //value_delivery_fee.textContent = current_store.delivery_charge.toFixed(2);
    value_tax.textContent = tax.toFixed(2);
    value_total.textContent = total.toFixed(2);


}
//this function is to operate the add button, when the button is clicked, the orderitems shoud be added,the quallity will increase as the the amount of item increase
function add_menuitem_click(menuitem) {
    console.log(menuitem);
    for (var i=0;i<current_orderitems.length;i++) {
        if(current_orderitems[i].menuitem===menuitem) {
            current_orderitems[i].count++;
            orderitems();
            return;
        }
    }
    current_orderitems.push(new_orderitem(menuitem, 1));
    orderitems();
}
//this fucntion is to operate the remove button, when the button is clicked, the orderitem is removed
function remove_orderitem_click(orderitem) {
    console.log(orderitem);
    for (var i=0;i<current_orderitems.length;i++) {
        if(current_orderitems[i]===orderitem) {
            current_orderitems[i].count--;
            if(current_orderitems[i].count<=0) {//If the quality is 0, the item will not show up
                current_orderitems.splice(i, 1);//remove this item
            }
            break;
        }
    }
    orderitems();
}
// //use addEventListener method to attach the change handler
dropdown_store.addEventListener("change", function (event) {
    if(prev_store_idx===dropdown_store.selectedIndex){
      return;
    }
    //identify is there is a current order
    if(current_orderitems.length===0) {
        current_store = stores[dropdown_store.selectedIndex];
        //current_store_info();
        categories();
        menuitems();
        orderitems();
    }else{//If there is a current order, display a message.
        var r = confirm('want to clear the order?');
        if(r) {
            current_orderitems = [];
            current_store = stores[dropdown_store.selectedIndex];

            categories();
            menuitems();
            orderitems();
        }else{
            dropdown_store.selectedIndex = prev_store_idx;
        }
    }
    prev_store_idx = dropdown_store.selectedIndex;

});
