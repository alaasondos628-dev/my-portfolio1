const buttons = document.querySelectorAll(".nav-btn");
const quickLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");


/* ============================= */
/* PAGE NAVIGATION */
/* ============================= */

function showPage(pageId) {

    const targetPage =
        document.getElementById(pageId);


    if (!targetPage) return;


    pages.forEach(function (page) {

        page.classList.remove("active");

    });


    buttons.forEach(function (button) {

        button.classList.remove("active");

    });


    targetPage.classList.add("active");


    const activeButton =
        document.querySelector(
            '.nav-btn[data-page="' + pageId + '"]'
        );


    if (activeButton) {

        activeButton.classList.add("active");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* Navbar Buttons */

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        showPage(button.dataset.page);

    });

});


/* Hero Buttons */

quickLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        showPage(link.dataset.page);

    });

});



/* ============================= */
/* PROJECT DETAILS */
/* ============================= */

const projectData = {


    furniture: {

        title: "Furniture E-Commerce Website",

        type: "E-Commerce",

        video: "fernature.mp4",

        description:
            "A modern furniture website featuring stylish collections, interactive product cards, category navigation, search, and a user-friendly shopping experience.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ]

    },


    menu: {

        title: "Cafe Menu",

        type: "Web Design",

        video: "menu.mp4",

        description:
            "A simple and responsive coffee shop menu website with a clean layout for showcasing coffee, milkshakes, desserts, and tea.",

        tags: [
            "HTML",
            "CSS"
        ]

    },


    grades: {

        title: "Student Grades",

        type: "Web App",

        video: "student grade.mp4",

          link: "https://studentresults.runasp.net/",

        description:
            "A student grades management website that allows users to search for students by ID and view their grades, with individual report downloads.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "Backend"
        ]

    }

};



const projectButtons =
    document.querySelectorAll(".project-btn");


const projectModal =
    document.getElementById("projectModal");


const modalClose =
    document.getElementById("modalClose");


const modalVideo =
    document.getElementById("modalVideo");


const modalTitle =
    document.getElementById("modalTitle");


const modalType =
    document.getElementById("modalType");


const modalDescription =
    document.getElementById("modalDescription");


const modalTags =
    document.getElementById("modalTags");



projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        const project =
            projectData[
                button.dataset.project
            ];


        if (!project) return;


        modalTitle.textContent =
            project.title;


        modalType.textContent =
            project.type;


        modalDescription.textContent =
            project.description;


        modalVideo.src =
            project.video;


        modalTags.innerHTML = "";


        project.tags.forEach(function (tag) {


            const span =
                document.createElement("span");


            span.textContent =
                tag;


            modalTags.appendChild(span);

        });


        projectModal.classList.add("show");


        projectModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";


        modalVideo.play().catch(
            function () {}
        );

    });

});



/* CLOSE MODAL */

function closeProjectModal() {

    projectModal.classList.remove("show");


    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );


    modalVideo.pause();


    modalVideo.removeAttribute("src");


    modalVideo.load();


    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeProjectModal
);



/* Close when clicking outside */

projectModal.addEventListener(
    "click",
    function (event) {


        if (
            event.target === projectModal
        ) {

            closeProjectModal();

        }

    }
);



/* Close with ESC */

document.addEventListener(
    "keydown",
    function (event) {


        if (
            event.key === "Escape" &&
            projectModal.classList.contains("show")
        ) {

            closeProjectModal();

        }

    }
);



/* ============================= */
/* GMAIL CONTACT FORM */
/* ============================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function (event) {


        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const subject =
            document
                .getElementById("subject")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();



        const body =
            "Name: " +
            name +
            "\nEmail: " +
            email +
            "\n\nMessage:\n" +
            message;



        const gmailURL =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=alaasondos628@gmail.com" +
            "&su=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body);



        window.open(
            gmailURL,
            "_blank",
            "noopener,noreferrer"
        );

    }
);