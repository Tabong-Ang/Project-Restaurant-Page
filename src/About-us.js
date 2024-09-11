function aboutUs() {
    const divContent = document.querySelector("#content");

    const headline = document.createElement('h1');
    headline.textContent = "About Us";
    headline.style.cssText = "text-align: center; color: yellow; text-shadow: 2px 2px 5px black;"
    divContent.appendChild(headline);

    const paragraph = document.createElement('p');
    paragraph.innerHTML = `
        <span>Welcome to <strong>City Grill</strong>, your premier destination for a flavorful culinary experience in the heart of Kumba.</span>
        Since opening our doors in <strong>2018</strong>, we've been committed to delivering exceptional grilled delights and an unforgettable dining experience to our cherished customers. 
        Under the leadership of the founder, our passionate team of excellent professionals strives daily to ensure every meal we serve is prepared with the freshest ingredients and utmost care.
        At <strong>City Grill</strong>, we offer a wide range of dishes that cater to every taste. Our specialties include:
        <ul>
            <li><strong>Succulent grilled chicken</strong> with a side of crispy fried diced potatoes or plantain chips.</li>
            <li><strong>Hearty portions of fried rice</strong> with a variety of flavorful toppings.</li>
            <li><strong>Deliciously seasoned grilled fish</strong> and grilled pork cooked to perfection.</li>
            <li><strong>Classic hamburgers</strong> served with a modern twist.</li>
            <li>Authentic Nigerian <strong>isi ewu</strong>, a delicacy for adventurous food lovers.</li>
            <li>A variety of <strong>alcoholic and non-alcoholic beverages</strong> to complement your meal.</li>
        </ul>
        Whether you’re here for a quick bite, a family gathering, or a casual hangout, our friendly atmosphere and warm hospitality will make you feel right at home. 
        We pride ourselves on offering something for everyone, with a diverse menu that promises to leave you coming back for more.
        Join us today at <strong>City Grill</strong>—where great food meets great people.
        `;
    paragraph.style.cssText = "text-shadow: 2px 2px 5px black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); line-height: 1.6; max-width: 800px; margin: 20px auto; font-size: 1.2rem; color: #fff; background-color: rgb(0, 0, 0, 0.477);"
    content.appendChild(paragraph);
}

export { aboutUs };