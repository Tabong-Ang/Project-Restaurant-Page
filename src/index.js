import './styles.css';
import { homePage } from './content';
import { displayMenu } from './Menu';
import { aboutUs } from './About-us';
import { contactUs } from './Contact-us';


function initializeWebsite() {

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");


home.addEventListener("click", () => {switchTab(homePage)});
menu.addEventListener("click", () => {switchTab(displayMenu)});
about.addEventListener("click", () => {switchTab(aboutUs)});
contact.addEventListener("click", () => {switchTab(contactUs)});
switchTab(homePage);
}


function switchTab(loadPageFunction) {
    // Clear the current contents of the #content div
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';

    // Call the corresponding page load function to populate new content
    loadPageFunction();
}

// Initialize the website when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeWebsite);
