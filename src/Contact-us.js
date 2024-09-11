function contactUs() {
    const divContent = document.querySelector("#content");

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";
    headline.style.cssText = "text-align: center; color: yellow; text-shadow: 2px 2px 5px black;"
    divContent.appendChild(headline);

    const paragraph = document.createElement('p');
    paragraph.innerHTML = `
        <h2>Contact Us</h2>
        <p>
            We’re always happy to hear from you! Whether you have inquiries, want to make a reservation, or need assistance with an order, feel free to get in touch with us.
        </p>

        <h2>Location:</h2>
        <p>
            <strong>City Grill</strong><br>
            Buea Road, Beside Fomenky Street
        </p>

        <h2>Phone:</h2>
        <p>
            <strong>+(237) 651 26 73 51</strong>
        </p>

        <h2>Email:</h2>
        <p>
            <a href="mailto:contact@citygrill.com">contact@citygrill.com</a>
        </p>

        <h2>Operating Hours:</h2>
        <p>
            Every day: 10 AM – 10 PM
        </p>

        <h2>Reservations & Events:</h2>
        <p>
            Planning a special event or a group gathering? We offer reservations for small parties and special occasions. Call or email us to secure your spot.
        </p>

        <h2>Follow Us:</h2>
        <p>
            Stay connected and follow us on social media to keep up with our latest promotions and new menu items:<br>
            <a href="https://facebook.com" target="_blank">Facebook</a> |
            <a href="https://instagram.com" target="_blank">Instagram</a> |
            <a href="https://twitter.com" target="_blank">Twitter</a>
        </p>
        `;
    paragraph.style.cssText = "text-shadow: 2px 2px 5px black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); line-height: 1.6; max-width: 800px; margin: 20px auto; font-size: 1.2rem; color: #fff; background-color: rgb(0, 0, 0, 0.477);"
    divContent.appendChild(paragraph);
}

export {contactUs};