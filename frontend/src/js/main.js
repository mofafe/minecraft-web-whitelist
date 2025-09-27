document.addEventListener('DOMContentLoaded', function() {
    let element = document.getElementById('name');
    let button = document.getElementById('send-btn');

    button.addEventListener('click', handleClick);

    function handleClick() {
        fetch("http://localhost:8000/", {
            method: "POST",
            body: element.value,
        });
    }
});
