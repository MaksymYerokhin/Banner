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

    // Set multiple cookies
    setCookie("bm_mi", "F6F7DCE18A5F6C69F1248F7C5891234567A", 1);
    setCookie("burst_uid", "98F9A2F3A9C0D7B8A2D567EFA4567C89", 1);
})();
