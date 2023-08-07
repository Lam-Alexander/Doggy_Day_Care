// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let submit_btn = document.getElementById('submit-button');

function on_click(){
    document.getElementById('contact-page').innerHTML = "<p>Thank you for your message!</p>";
    document.getElementById('contact-page').style.fontSize = "24px";
}
submit_btn.addEventListener('click',on_click);

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.