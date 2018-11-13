var aniID;
var which;
var useID = ["index.html", "contact.html", "portfolio.html"]


function primeFade(){
    var itemID = event.srcElement.id;
    console.log(itemID);

    if (itemID == "index") {
        which = 0;
        console.log(which);
        aniID = document.getElementById("index");
        fade();
    } else if (itemID == "contact") {
        which = 1;
        console.log(which);
        aniID = document.getElementById("contact");
        fade();
    } else if (itemID == "portfolio") {
        which = 2;
        console.log(which);
        aniID = document.getElementById("portfolio");
        fade();
    }
}

function fade() {
    var pos = 1;
    var id  = setInterval(frame, 16);

    function frame() {
        if (pos <= 0) {
            clearInterval(id);
            window.location.href = useID[which];
        } else {
            pos = pos - .03;
            aniID.style.opacity = pos;
        }
    }
}