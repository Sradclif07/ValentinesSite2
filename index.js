$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
    
    function open() {
    envelope.addClass("open")
        .removeClass("close");

    const letter = document.querySelector(".letter-content");

    // force scroll reset trick
    letter.style.overflow = "hidden";
    letter.scrollTop = 0;

    setTimeout(() => {
        letter.style.overflowY = "auto";
    }, 50);
}


    
    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

});
