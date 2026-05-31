// Theme Toggle Logic for Malak's Website
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const textSpan = document.getElementById('theme-text');
    
    // Set theme and update localStorage and button text
    const setTheme = (isLight) => {
        if (isLight) {
            document.body.classList.add('light-mode');
            document.documentElement.classList.add('light-mode');
            if (textSpan) {
                textSpan.textContent = 'go dark!';
            }
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            document.documentElement.classList.remove('light-mode');
            if (textSpan) {
                textSpan.textContent = 'prefer light?';
            }
            localStorage.setItem('theme', 'dark');
        }
    };

    // Initialize based on saved preference (Dark Mode is default)
    const savedTheme = localStorage.getItem('theme');
    const isLightMode = savedTheme === 'light';
    setTheme(isLightMode);

    // Event listener for the theme toggle button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentIsLight = document.body.classList.contains('light-mode');
            setTheme(!currentIsLight);
        });
    }
});
