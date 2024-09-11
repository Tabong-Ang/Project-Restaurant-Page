function displayMenu() {

    const divContent = document.querySelector("#content");

    const menuDiv = document.createElement('div');
    menuDiv.setAttribute("id", "menu")
    menuDiv.style.cssText = "width: 80%; display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; padding: 20px 0; margin: 12px auto;";
    divContent.appendChild(menuDiv);

    const menuItems = [
        {
            name: "Grilled Chicken",
            price: "2,500 XAF",
            image: "https://images.pexels.com/photos/27643001/pexels-photo-27643001/free-photo-of-a-person-in-black-gloves-is-cutting-up-a-chicken.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Delicious grilled chicken served hot with diced potatoe chips."
        },
        {
            name: "Hamburger",
            price: "2,500 XAF",
            image: "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Juicy beef patty with cheese, lettuce, and tomato and fried diced potatoes."
        },
        {
            name: "Grilled Pork",
            price: "3,000 XAF",
            image: "https://playswellwithbutter.com/wp-content/uploads/2021/08/Lemon-Garlic-Grilled-Pork-Tenderloin-NPB-9-960x1440.jpg",
            description: "You can't go wrong with this flavorful pork tenderloin!"
        },
        {
            name: "Crispy chicken with Fried Rice",
            price: "2,500 XAF",
            image: "https://lincolnian.net/wp-content/uploads/2023/05/April-Submissions-Apr-14-2023-at-12_48-AM.png",
            description: "Crispiest, spiciest,fried chicken served hot with fried rice."
        },
        {
            name: "Isi Ewu",
            price: "3,000 XAF",
            image: "https://stellaonithewriter.com/wp-content/uploads/2022/12/Isi-ewu.jpg",
            description: "The spicy, edgy goat head dish for adventurous foodies!."
        },
        {
            name: "Grilled Fish",
            price: "3,000 XAF",
            image: "https://i.ytimg.com/vi/HoboGqFx5OU/maxresdefault.jpg",
            description: "Loaded with fresh veggies, pepper and plantain chips"
        },
        {
            name: "Grilled Lobster",
            price: "5,000 XAF",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2ThXmGKN8S93rVBpP1Axpu1nxzNq_xLdcVfLa7wNVgtmBttC_KmmTNVWu0hWKrGd5cA&usqp=CAU",
            description: "Loaded with fresh veggies, pepper and plantain chips"
        },
        {
            name: "Brevages",
            price: "1, 000 XAF",
            image: "https://medafricatimes.com/wp-content/uploads/2015/02/index.jpg",
            description: "Quality Alcholic and Non-Alcholic Brevages for desert"
        }
    ];

    // Loop through the array of menu items
    menuItems.forEach(item => {
        // Create a div for each menu item
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        menuItemDiv.style.cssText = "background-color: rgb(0, 0, 0, 0.477); padding: 15px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); width: 250px; text-align: center;";

        // Add image
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.style.cssText = "width: 100%; height: 150px; object-fit: cover; border-radius: 8px;";

        // Add name
        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        itemName.style.cssText = "margin: 10px 0; color: #fff;";

        // Add description
        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        itemDescription.style.cssText = "font-size: 14px; color: #fff;";

        // Add price
        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;
        itemPrice.style.cssText = "display: block; margin-top: 10px; font-size: 18px; font-weight: bold; color: yellow; text-shadow: 2px 2px 5px black;";

        // Append all elements to the menu item div
        menuItemDiv.appendChild(img);
        menuItemDiv.appendChild(itemName);
        menuItemDiv.appendChild(itemDescription);
        menuItemDiv.appendChild(itemPrice);

        // Append the menu item div to the menu container
        menuDiv.appendChild(menuItemDiv);


    });
}
// Call the displayMenu function to display the menu on the page
export {displayMenu};