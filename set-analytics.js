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
  
    setCookie("burst_uid", "98F9A2F3A9C0D7B8A2D567EFA4567C89", 1);
})();
