// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);
// 1. The h1 element
const h1 = document.querySelector("h1");
console.log("h1:", h1);

// 2. All elements with class "content"
const allContent = document.querySelectorAll(".content");
console.log("All content:", allContent);

// 3. The form with id "contact-form"
const form = document.getElementById("contact-form");
console.log("Form:", form);

// 4. The email input
const emailInput = document.querySelector("#email");
console.log("Email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav li");
console.log("Nav items:", navItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("First nav link:", firstNavLink);

// 7. The last paragraph
const lastParagraph = document.querySelector("p:last-of-type");
console.log("Last paragraph:", lastParagraph);
// Select nav
const nav = document.querySelector("nav");

// Parent
console.log("Nav parent:", nav.parentElement);

// Children
console.log("Nav children:", nav.children);
console.log("First child:", nav.firstElementChild);
console.log("Last child:", nav.lastElementChild);

// Siblings
const article = document.querySelector("article");
console.log("Next sibling (section):", article.nextElementSibling);
console.log("Previous sibling:", article.previousElementSibling);

// Descendants
const navLinksInside = nav.querySelectorAll("a");
console.log("Nav links (descendants):", navLinksInside);
// 1. Select the header, then navigate to the nav inside it
const headerEl = document.querySelector("header");
const navFromHeader = headerEl.querySelector("nav");
console.log("Nav from header:", navFromHeader);

// 2. Select the first nav-link, then get its parent li
const firstNav = document.querySelector(".nav-link");
const parentLi = firstNav.parentElement;
console.log("Parent li:", parentLi);

// 3. Select the article, then get its next sibling (section)
const articleEl = document.querySelector("article");
console.log("Article next sibling:", articleEl.nextElementSibling);

// 4. Select the ul, then get all its child li elements
const ul = document.querySelector("ul");
console.log("UL children (li):", ul.children);

// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
console.log("Footer parent:", footer.parentElement); // body
// TEXT CONTENT
const mainHeading = document.querySelector("h1");

// Reading text
console.log("textContent:", mainHeading.textContent);
console.log("innerText:", mainHeading.innerText);

// Modifying text
mainHeading.textContent = "New Title";
// HTML CONTENT
const articleSection = document.querySelector("article");

// Reading HTML
console.log("Article HTML:", articleSection.innerHTML);

// Modifying HTML
articleSection.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;
// ATTRIBUTES
const navLink = document.querySelector(".nav-link");

// Get attribute
console.log("Href (getAttribute):", navLink.getAttribute("href"));
console.log("Href (property):", navLink.href);

// Set attribute
navLink.setAttribute("href", "https://example.com");

// Check attribute
console.log("Has target:", navLink.hasAttribute("target"));

// Remove attribute
navLink.removeAttribute("target");
// STYLES
const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});
// CREATING ELEMENTS

// Create new paragraph
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Select article
const articleEl2 = document.querySelector("article");

// Add to the end
articleEl2.appendChild(newParagraph);