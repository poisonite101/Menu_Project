//global var so that there is somewhere to store the data for each menu
var currentMenu;
//Global var to store the menu name used in title
var menuName;

//Adds a welcome message which will disappear after a menu is selected
welcomeDisplay();

function welcomeDisplay() {
    //Declares the var that the welcome message and image will be sent into
    var welcomeBlurb;
    var welcomeName = "Menu";

    welcomeBlurb = '<div id="welcomeMessage">';
    welcomeBlurb += '<h2>Welcome to Tottie&apos;s</h2>';
    welcomeBlurb += '<h3>Please select a menu above to get started!</h3>';
    welcomeBlurb += '<img src="" alt="Tottie&apos;s" />';
    welcomeBlurb += '</div>';

    // Outputs the welcome message, this message goes away after a user selects a menu as this content is wiped
    return HTMLInjection(welcomeBlurb, welcomeName);
}

function appetizersMenu() {
    menuName = "Appetizers";
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

    return HTMLInjection(currentMenu, menuName);
}

function soupsMenu() {
    menuName = "Soups";
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

    return HTMLInjection(currentMenu, menuName);
}

function thaiMenu() {
    menuName = "Thai";
    currentMenu = '<div id="thaiMealsBox" class="menuContainer">';
    currentMenu += '<div id="menuTitleBox" class="centeredHorBox">';
    currentMenu += '<h2 id="menuTitle">Thai and Vietnamese Entrees</h2>';
    currentMenu += '</div>';
    currentMenu += '<div id="thaiMeals" class="subSectionBox">';
    currentMenu += '<div id="menuItems" class="leftHorBox">';
    currentMenu += '<dl id="menuItemList">';
    currentMenu += '<dt id="name" class="menuItem">Larb &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Spicy minced meat salad with fresh mint and Thai herbs.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Tofu</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken (Gai) or Beef (Nua)</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp or Mussels</dd>';

    currentMenu += '<dt id="name" class="menuItem">Cucumber Chicken Salad</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken and cool cucumber seasoned with mint, ginger and lemon. Topped with crispy rice noodles.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Bun Tom</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Charbroiled pork, shrimp and Tottie rolls with fresh lettuce, fresh mint, peanuts and rice vermicelli.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Papaya Salad Platter &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Green papaya salad with Thai grilled chicken and sticky rice.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Pad Thai &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Traditional Thai stir fried rice noodles.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Beef</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';

    currentMenu += '<dt id="name" class="menuItem">Panang &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Spicy Thai curry with your choice of the following:</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Beef</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Fish</dd>';

    currentMenu += '<dt id="name" class="menuItem">Kang Keo Wan&#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Spicy Thai green curry with your choice of the following:</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Beef</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Fish</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Mussels</dd>';

    currentMenu += '<dt id="name" class="menuItem">Pad Kra Pao &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Stir fried w/Thai basil in chili sauce, onions, red bell peppers & bamboo shoots.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Beef</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Fish</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Mussels</dd>';

    currentMenu += '<dt id="name" class="menuItem">Pad Khing &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Fresh ginger, mushrooms and onion stir fried with your choice of:</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Beef</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Pork</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';

    currentMenu += '<dt id="name" class="menuItem">Lemon Grass Stir-Fry &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Stir fried with lemon grass, pea pods, red bell peppers, onions and mushrooms.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Beef</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';

    currentMenu += '<dt id="name" class="menuItem">Thai Stir-Fry &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">With mixed vegetables and Thai basil sauce.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Beef</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';

    currentMenu += '<dt id="name" class="menuItem">Crispy Chicken with Thai Basil</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Crispy Beef with Thai Basil</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Dragonfly Noodles</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Beef</dd>';

    currentMenu += '<dt id="name" class="menuItem">Shoji Noodles</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Stir-fried rice noodles with broccoli, bean sprouts, onions and Thai basil.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Beef</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';

    currentMenu += '<dt id="name" class="menuItem">Chiang Mai Noodles &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Thai curry chicken, Thai basil and bamboo shoots with rice noodles.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Pad Se Ew &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Spicy chow fun noodles with broccoli and bok choy.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Beef</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';

    currentMenu += '<dt id="name" class="menuItem">Pad Kee Mao &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Sautéed vegetables with chow fun noodles, basil, Thai spices.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Beef</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';

    currentMenu += '<dt id="name" class="menuItem">Pad Lard Na</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chow fun noodles topped with onion, broccoli, bok choy, pea pods, stir-fried with brown sauce.</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Chicken</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Beef</dd>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Shrimp</dd>';

    currentMenu += '<dt id="name" class="menuItem">Salmon with Basil-Ginger Sauce</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Grilled salmon with a Thai basil and ginger sauce. Served with steamed mixed vegetables.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Red Curry Salmon &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Grilled salmon with Thai red curry sauce. Served with steamed mixed vegetables.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Thai Curry Salmon w/ Rice Noodles &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">description</dd>';

    currentMenu += '<dt id="name" class="menuItem">Spicy Thai Seafood  &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">White fish, shrimp and mussels stir-fried with mushrooms, bamboo shoots, red bell peppers, onions and Thai basil.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Thai Fish Filet &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Braised white fish with Thai basil, mushrooms, onions, red bell peppers and bamboo shoots.</dd>';

    currentMenu += '<dt id="name" class="menuItem">Soft Shell Crab with Curry &#128293;</dt>';
    currentMenu += '<dd id="desc" class="menuItemDesc">Soft shell crab, Thai basil, bamboo shoots, mushrooms, onions and red bell peppers stir-fried with yellow curry.</dd>';
    currentMenu += '</dl>';
    currentMenu += '</div>';
    currentMenu += '</div>';
    currentMenu += '</div>';

    return HTMLInjection(currentMenu, menuName);
}

function entreesMenu() {
    menuName = "Chinese Entrees";
    currentMenu = '<div id="chineseMealsBox" class="menuContainer">';
    currentMenu += '<div id="menuTitleBox" class="centeredHorBox">';
    currentMenu += '<h2 id="menuTitle">Chinese Entrees</h2>';
    currentMenu += '</div>';
    currentMenu += '<div id="chineseMeals" class="subSectionBox">';
    currentMenu += '<div id="menuItems" class="leftHorBox">';
    currentMenu += '<dl id="menuItemList">';
    currentMenu += '<dt id="name" class="menuItem">Chicken with Vegetables</dt>';

    currentMenu += '<dt id="name" class="menuItem">Chicken Chop Suey</dt>';

    currentMenu += '<dt id="name" class="menuItem">Chicken with Broccoli</dt>';

    currentMenu += '<dt id="name" class="menuItem">Chicken with Pea Pods</dt>';

    currentMenu += '<dt id="name" class="menuItem">Curry Chicken &#128293;</dt>';

    currentMenu += '<dt id="name" class="menuItem">Chicken with Cashew Nuts</dt>';

    currentMenu += '<dt id="name" class="menuItem">Kung Pao Chicken &#128293;</dt>';

    currentMenu += '<dt id="name" class="menuItem">Chicken with Garlic Sauce &#128293;</dt>';

    currentMenu += '<dt id="name" class="menuItem">Chicken with Black Bean Sauce</dt>';

    currentMenu += '<dt id="name" class="menuItem">Sesame Chicken</dt>';

    currentMenu += '<dt id="name" class="menuItem">Tangerine Chicken</dt>';

    currentMenu += '<dt id="name" class="menuItem">Lemon Chicken</dt>';

    currentMenu += '<dt id="name" class="menuItem">General Tao’s Chicken &#128293;</dt>';

    currentMenu += '<dt id="name" class="menuItem">Moo Shu Chicken</dt>';

    currentMenu += '<dt id="name" class="menuItem">Sweet and Sour Chicken</dt>';

    currentMenu += '<dt id="name" class="menuItem">Chicken Egg Fu Yong</dt>';

    currentMenu += '<dt id="name" class="menuItem">Tangerine Beef</dt>';

    currentMenu += '<dt id="name" class="menuItem">Kung Pao Beef &#128293;</dt>';

    currentMenu += '<dt id="name" class="menuItem">Beef with Broccoli</dt>';

    currentMenu += '<dt id="name" class="menuItem">Mongolian Beef</dt>';

    currentMenu += '<dt id="name" class="menuItem">Beef or Pork with Vegetables</dt>';

    currentMenu += '<dt id="name" class="menuItem">Beef with Green Peppers</dt>';

    currentMenu += '<dt id="name" class="menuItem">Beef with Oyster Sauce</dt>';

    currentMenu += '<dt id="name" class="menuItem">Beef or Pork Chop Suey</dt>';

    currentMenu += '<dt id="name" class="menuItem">Shredded Pork Szechwan Style &#128293;</dt>';

    currentMenu += '<dt id="name" class="menuItem">Sweet and Sour Pork</dt>';

    currentMenu += '<dt id="name" class="menuItem">Pork Egg Fu Yong</dt>';

    currentMenu += '<dt id="name" class="menuItem">Kung Pao Shrimp &#128293;</dt>';

    currentMenu += '<dt id="name" class="menuItem">Shrimp with Pea Pods</dt>';

    currentMenu += '<dt id="name" class="menuItem">Shrimp Chop Suey</dt>';

    currentMenu += '<dt id="name" class="menuItem">Shrimp with Garlic Sauce &#128293;</dt>';

    currentMenu += '<dt id="name" class="menuItem">Hot Braised Shrimp &#128293;</dt>';

    currentMenu += '<dt id="name" class="menuItem">Tangerine Shrimp</dt>';

    currentMenu += '<dt id="name" class="menuItem">Shrimp with Lobster Sauce</dt>';

    currentMenu += '<dt id="name" class="menuItem">Moo Shu Shrimp</dt>';

    currentMenu += '<dt id="name" class="menuItem">Shrimp with Black Bean Sauce</dt>';

    currentMenu += '<dt id="name" class="menuItem">Scallops with Black Bean Sauce</dt>';

    currentMenu += '<dt id="name" class="menuItem">Mussels with Black Bean Sauce</dt>';

    currentMenu += '<dt id="name" class="menuItem">Sweet and Sour Shrimp</dt>';

    currentMenu += '<dt id="name" class="menuItem">Shrimp Egg Fu Yong</dt>';

    currentMenu += '<dt id="name" class="menuItem">Ginger Fish</dt>';
    currentMenu += '</dl>';
    currentMenu += '</div>';
    currentMenu += '</div>';
    currentMenu += '</div>';

    return HTMLInjection(currentMenu, menuName);
}

function noodlesMenu() {
    menuName = "Chinese Noodles";


    return HTMLInjection(currentMenu, menuName);
}

function veggiesMenu() {
    menuName = "Chinese Veggies";


    return HTMLInjection(currentMenu, menuName);
}

function riceMenu() {
    menuName = "Rice";


    return HTMLInjection(currentMenu, menuName);
}

function dessertsMenu() {
    menuName = "Desserts";


    return HTMLInjection(currentMenu, menuName);
}

function specialsMenu() {
    menuName = "Lunch Specials";


    return HTMLInjection(currentMenu, menuName);
}

function HTMLInjection(content, title) {
    //global var as shorthand for selecting the menu container
    var menuContainer = document.querySelector("div#menuContainer");
    //global var as shorthand for selecting the tab bar title element
    var titleElm = document.querySelector("title");

    // Outputs the input given by calling function to the HTML
    menuContainer.innerHTML = content;

    titleElm.innerHTML = "Tottie&apos;s &mdash; " + title;
}