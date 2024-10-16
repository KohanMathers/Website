document.addEventListener('DOMContentLoaded', function() {
    const folders = document.querySelectorAll('.folder');
    const hoverText = document.getElementById('hover-text');

    folders.forEach(folder => {
        folder.addEventListener('mouseover', () => {
            const text = folder.getAttribute('data-text');
            hoverText.textContent = text;
        });

        folder.addEventListener('mouseout', () => {
            hoverText.textContent = 'Hover over a folder to learn more about it.';
        });

        folder.addEventListener('click', function() {
            var href = this.getAttribute('data-href');
            if (href) {
                 window.location.href = href;
             }
            });
        });
    });