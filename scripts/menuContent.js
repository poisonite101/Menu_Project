//global var so that there is somewhere to store the data for each menu
var currentMenu = "";
//global var as shorthand for selecting the menu container
var menuContainer = document.querySelector("div#menuContainer");

welcomeDisplay();

function welcomeDisplay() {
    //Declares the var that the welcome message and image will be sent into
    var welcomeBlurb;

    welcomeBlurb = '<div id="welcomeMessage">';
    welcomeBlurb += '<h2>Welcome to Tottie&apos;s</h2>';
    welcomeBlurb += '<h3>Please select a menu above to get started!</h3>';
    welcomeBlurb += '<img src="" alt="Tottie&apos;s" />';
    welcomeBlurb += '</div>';

    // Outputs the welcome message, this message goes away after a user selects a menu as this content is wiped
    menuContainer.innerHTML = welcomeBlurb;
}

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

    currentMenu += '</dl>';
    currentMenu += '</div>';
    currentMenu += '</div>';
    currentMenu += '</div>';

    menuContainer.innerHTML = currentMenu;
    return currentMenu;
}

function soupsMenu() {
    currentMenu = '<div id="soupsMealsBox" class="menuContainer">';
    currentMenu += '<div id="menuTitleBox" class="centeredHorBox">';
    currentMenu += '<h2 id="menuTitle">Soups</h2>';
    currentMenu += '</div>';
    currentMenu += '<div id="soupsMeals" class="subSectionBox">';
    currentMenu += '<div id="menuItems" class="leftHorBox">';
    currentMenu += '<dl id="menuItemList">';
    currentMenu += '<dt id="name" class="menuItem">Sizzling Rice Soup</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Wonton Soup</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Egg Drop Soup</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Hot & Sour Soup &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Chicken Corn Soup</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Spicy Seafood Noodle Soup &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Mussels, fish, shrimp, scallops and vegetables with rice noodles.';
    currentMenu += '</dd>';

    currentMenu += '<dt id="name" class="menuItem">Tom Yum &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Classic Thai soup made with lemon grass and Thai herbs.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Seafood (scallops, white fish, mussels & shrimp)</dd>';

    currentMenu += '<dt id="name" class="menuItem">Tom Kha Gai &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Thai herbs in coconut milk broth.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Classic Thai soup made with lemon grass and Thai herbs.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Seafood (scallops, white fish, mussels & shrimp)</dd>';

    currentMenu += '<dt id="name" class="menuItem">Pho</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Vietnamese rice noodle soup.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Tai (beef)</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Ga (chicken)</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Tai Bo Vien (beef with meatballs)</dd>';
    currentMenu += '</dl>';
    currentMenu += '</div>';
    currentMenu += '</div>';
    currentMenu += '</div>';

    menuContainer.innerHTML = currentMenu;
    return currentMenu;
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