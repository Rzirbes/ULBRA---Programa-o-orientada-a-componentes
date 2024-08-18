
export function loadTemplate(file, element) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(element).innerHTML = data;
        })
        .catch(error => console.error('Error loading the template:', error));
}