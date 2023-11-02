document.getElementById("scrollto1").addEventListener("click",function() {
    document.getElementById("section1").scrollIntoView({behavior: "smooth"});
});
document.getElementById("scrollto2").addEventListener("click",function() {
    document.getElementById("section2").scrollIntoView({behavior: "smooth"});
});
document.getElementById("scrollto3").addEventListener("click",function() {
    document.getElementById("section3").scrollIntoView({behavior: "smooth"});
});

document.getElementById("showSocials").addEventListener("click", function() {
    var socials = document.getElementById("DisplayedSocials");
    if (socials.style.display === "none" || socials.style.display === "") {
        socials.style.display = "block"; // Show the dropdown
    } else {
        socials.style.display = "none"; // Hide the dropdown
    }
});