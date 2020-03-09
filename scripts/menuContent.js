//global var so that there is somewhere to store the data for each menu
var currentMenu = "";
//global var as shorthand for selecting the menu container
var menuContainer = document.querySelector("div#menuContainer");

function appetizersMenu() {
    currentMenu = '<div id="appetizersMealsBox" class="menuContainer">';
    currentMenu += '<div id="menuTitleBox" class="centeredHorBox">';
    currentMenu += '<h2 id="menuTitle">Appetizers</h2>';
    currentMenu += '</div>';
    currentMenu += '<div id="appetizersMeals" class="subSectionBox">';
    currentMenu += '<div id="menuItems" class="leftHorBox">';
    currentMenu += '<dl id="menuItemList">';
    currentMenu += '<dt id="name" class="menuItem">Combination Plate</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Paper wrapped chicken (2), BBQ ribs (2), skewered beef (2), egg rolls (2), fried wonton (4), and fried shrimp (2)</dd>';

    currentMenu += '<dt id="name" class="menuItem">Egg Rolls (4)</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Crispy and filled with carrots and cabbage.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Tottie Rolls (4)</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Vietnamese style egg rolls. A real treat wrapped in cool lettuce.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Shanghai Egg Rolls (4)</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Filled with pork, shiitake mushrooms and napa cabbage.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Spring Rolls (4)</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Vietnamese Goi Cuon: Soft rice paper rolls with bean sprouts, herbs and rice vermicelli.  Served wiith peanut sauce.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Traditional (pork & shrimp)</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Salmon</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp Tempura</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Soft Shell Crab</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Vegetarian</dd>';

    currentMenu += '<dt id="name" class="menuItem">Sugarcane Chicken</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken meatballs skewered on sugarcane and served with cilantro, mint, cucumber, and rice vermicelli. Wrap it all in cool lettuce and dip in peanut sauce.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Beef on Skewers (4)</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Chicken Satay Sticks (2)</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Marinated chicken on a bamboo skewer, served with peanut sauce.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Soft Shell Crab with Ponzu Sauce</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Edamame</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Shrimp Puffs (6)</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">BBQ Pork Ribs (4)</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Fried Wonton (10)</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Fried Tofu (8)</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Fried tofu wedges served with peanut or cucumber sauce.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Potstickers (5)</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Spicy Cucumber</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">name</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';
    currentMenu += '</dl>';
    currentMenu += '</div>';
    currentMenu += '</div>';
    currentMenu += '</div>';

    menuContainer.innerHTML = currentMenu;
    return currentMenu;
}

function soupsMenu() {

}

function thaiMenu() {

}

function entreesMenu() {

}

function noodlesMenu() {

}

function veggiesMenu() {

}

function riceMenu() {

}

function dessertsMenu() {

}

function specialsMenu() {

}

function mouseSelectionEvent(){
    
}