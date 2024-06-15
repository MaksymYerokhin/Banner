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
    setCookie("testCookie1", "testValue1", 1);
    setCookie("testCookie2", "testValue2", 1);
    setCookie("testCookie3", "testValue3", 1);
    
    document.cookie = "testCookie=testValue; path=/; max-age=36400";
})();
