window.onload = function() {
    const myBox = document.getElementById('change');
    const modeText = document.getElementById('mode-text');

    // Function to keep the button text/border in sync with the mode
    function updateButtonUI(isDark) {
        if (modeText) modeText.innerText = isDark ? "Light Mode" : "Dark Mode";
        if (myBox) {
            myBox.style.color = isDark ? "white" : "#444546";
            myBox.style.borderColor = isDark ? "white" : "#444546";
        }
    }

    // On page load, check if the <html> already has the class from the head script
    const isCurrentlyDark = document.documentElement.classList.contains('dark-mode');
    updateButtonUI(isCurrentlyDark);

    if (myBox) {
        myBox.onclick = function() {
            // 1. Toggle the class on the ROOT (html tag)
            const isDark = document.documentElement.classList.toggle('dark-mode');
            
            // 2. Save the choice to the notebook
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // 3. Update the button visuals
            updateButtonUI(isDark);
        };
    }
    const darkButton = document.getElementById('change');

    darkButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    });
};
