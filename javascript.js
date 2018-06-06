< script >
    function myFunction() {
        var x = $("topNav");
        if (x.className === "topNav") {
            x.className += " responsive";
        } else {
            x.className = "topNav";
        }
    } <
