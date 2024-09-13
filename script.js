// toggle icon navbar

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section


let section = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {

    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;

        // let offset = sec.offsetTop - 100;, you're creating a new container called "offset," and you're putting inside it the distance from the top of the page to the top of the element referred to by sec, minus 100 pixels.

        let height = sec.offsetHeight;
        // let height = sec.offsetHeight; means "I'm creating a new container called 'height,' and I'm going to put how tall the section 'sec' is inside that container."

        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            // active navbarlinks
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });


            // active section for animation on scroll
            sec.classList.add('show-animate');

        }
        // if  want to use aimation that repeats on scrool use this
        else {
            sec.classList.remove('show-animate');
        }

    });


    // sticky Headers
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // when we scrool the window object then the color of header are changed here sticky are the class name 


    // remove toggle icon and navbar when click navbar links(Scrolls)

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// for mail

const form = document.querySelector('form');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');

    function sendEmail() {
        const bodyMessage = `Full Name:${fullname.value}<br> Email:${email.value}
        <br> Phone Number:${phone.value}<br> Message:${mess.value}`;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "kabariyasaurabh@gmail.com",
            Password: "132043C662D65F8DF7B8597FA1096D88DDA1",
            To: 'kabariyasaurabh@gmail.com',
            From: "kabariyasaurabh@gmail.com",
            Subject: subject.value,
            Body: bodyMessage
        }).then(
            message => alert(message)
        );
    }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();

});