// Minimal script to set a cookie
(function() {
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    
    setCookie("bm_mi", "F6F7DCE18A5F6C69F1248F7C5891234567A", 1);
})();
