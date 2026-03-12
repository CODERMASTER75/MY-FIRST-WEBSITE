window.onload = function() {
    const myBox = document.getElementById('change');

    if (myBox) {
        myBox.onclick = function() {
            // 1. Flip the switch on the background
            document.body.classList.toggle('dark-mode');
            
            // 2. Check if the switch is now "on" or "off"
            if (document.body.classList.contains('dark-mode')) {
                // The background is now BLACK, so tell the user
                myBox.innerHTML = "<p>Light Mode</p>";
                myBox.style.color = "white"; // Make button text visible
                myBox.style.borderColor = "white";
            } else {
                // The background is now LIGHT, so tell the user
                myBox.innerHTML = "<p>Dark Mode</p>";
                myBox.style.color = "#444546"; // Reset button text color
                myBox.style.borderColor = "#444546";
            }
        };
    }
};
