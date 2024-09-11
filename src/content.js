function homePage() {

const divContent = document.querySelector("#content");

const h1 = document.createElement("h1");
h1.textContent = `Welcome to City Grill Restaurant`;
h1.style.cssText = "text-align: center; color: yellow; text-shadow: 2px 2px 5px black; font-size: 32px; margin-top: 20px; margin-bottom: 0px;";
divContent.appendChild(h1);
const headline = document.createElement("p");
headline.innerHTML = `
  <p>
    At <strong>City Grill</strong>, we believe that every meal should be an experience worth savoring. Nestled at <strong>Buea Road, beside Fomenky Street</strong>, we’ve been serving up mouth-watering, flame-grilled delicacies and a range of classic dishes since <strong>2018</strong>.
    Whether you’re in the mood for a quick bite or a leisurely meal with friends and family, we’ve got something special for everyone.
  </p>
  
  <p>
    Our cozy, welcoming atmosphere paired with friendly service ensures that every visit feels like a homecoming. Led by our visionary CEO, <strong>Ashu Tabi Elvis</strong>, our team of 10 passionate staff members is dedicated to making sure that every plate we serve is filled with the finest ingredients and the flavors you love.
  </p>
  
  <h3>What We Offer:</h3>
  <ul>
    <li><strong>Juicy, tender grilled chicken</strong> served with golden fried diced potatoes or plantain chips</li>
    <li><strong>Savory fried rice</strong>, cooked to perfection and bursting with flavor</li>
    <li><strong>Succulent grilled fish</strong> and grilled pork for the lovers of expertly seasoned meats</li>
    <li><strong>Hearty hamburgers</strong>, perfect for a satisfying meal on the go</li>
    <li>Traditional Nigerian <strong>isi ewu</strong> for those craving a taste of something unique</li>
    <li>A variety of refreshing <strong>alcoholic and non-alcoholic beverages</strong> to complement your meal</li>
  </ul>

  <p>
    Whether you’re here for our signature grilled chicken, looking to try our local favorite <strong>isi ewu</strong>, or just stopping by for a refreshing drink, we promise to make your dining experience unforgettable.
  </p>
  
  <p>
    Our doors are open every day from <strong>10 AM to 10 PM</strong>, so feel free to drop by any time and treat yourself to the best food in town. At <strong>City Grill</strong>, we’re not just about serving food—we’re about creating memories.
  </p>

  <p><strong>Join us today!</strong> We can’t wait to serve you.</p>
`;
headline.style.cssText = "text-shadow: 2px 2px 5px black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); line-height: 1.6; max-width: 800px; margin: 20px auto; font-size: 1.2rem; color: #fff; background-color: rgb(0, 0, 0, 0.477);"
divContent.appendChild(headline);

}
export {homePage};