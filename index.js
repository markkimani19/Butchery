document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = "#f0f4f8";

    const header = document.querySelector(".head");
    header.style.backgroundColor = "#4a90e2";
    header.style.color = "#ffffff";

    const welcomeText = document.querySelector(".Welcome h1");
    welcomeText.style.color = "#50e3c2";

    const reachSection = document.querySelector(".reach");
    reachSection.style.backgroundColor = "#d9e4f5";
    reachSection.style.padding = "20px";
    reachSection.style.borderRadius = "10px";

    const reachText = document.querySelectorAll(".reach p, .reach h4");
    reachText.forEach(text => {
        text.style.color = "#34495e";
    });

    const navLinks = document.querySelectorAll(".atag ul li a");
    navLinks.forEach(link => {
        link.style.backgroundColor = "#7ed321";
        link.style.color = "#ffffff";
        link.style.borderRadius = "5px";
    });

    const marqueeContainer = document.querySelector(".marquee-container");
    marqueeContainer.style.backgroundColor = "#d9e4f5";
    marqueeContainer.style.borderRadius = "10px";

    const marqueeContent = document.querySelector(".marquee-content h2");
    marqueeContent.style.color = "#34495e";

    const imgSection = document.querySelector("#img");
    imgSection.style.backgroundColor = "#eaf2f8";
    imgSection.style.padding = "20px";
    imgSection.style.borderRadius = "10px";

    const combSection = document.querySelector("#comb");
    combSection.style.backgroundColor = "#d9e4f5";
    combSection.style.padding = "20px";
    combSection.style.borderRadius = "10px";

    const combImages = document.querySelectorAll(".comb img");
    combImages.forEach(img => {
        img.style.border = "5px solid #4a90e2";
        img.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.2)";
            img.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "none";
        });
    });

    const footer = document.querySelector("footer");
    footer.style.backgroundColor = "#4a90e2";
    footer.style.color = "#ffffff";
    footer.style.padding = "20px";

    const socialMediaIcons = document.querySelectorAll(".socialmedia a img");
    socialMediaIcons.forEach(icon => {
        icon.style.border = "2px solid #50e3c2";
        icon.style.borderRadius = "50%";
        icon.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";
        icon.addEventListener("mouseover", () => {
            icon.style.transform = "scale(1.3)";
            icon.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
        });
        icon.addEventListener("mouseout", () => {
            icon.style.transform = "scale(1)";
            icon.style.boxShadow = "none";
        });
    });
});