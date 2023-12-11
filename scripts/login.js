document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
});

function login() {
    const input = document.querySelectorAll('input');
    let flag = true;
    input.forEach(function(element) {
        if (element.value == null || element.value == '')
            flag = false;
    });
    if (flag == true)
        window.location.href = 'index.html';
}