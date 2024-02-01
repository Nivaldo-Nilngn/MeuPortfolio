document.getElementById('currentYear').innerText = new Date().getFullYear();

// Toggle sidebar
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    sidebar.classList.toggle('active');
    content.classList.toggle('active');
});
