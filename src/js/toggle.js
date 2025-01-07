function toggleVisibility() {
    const hiddenContent = document.querySelectorAll('.button__hiden');
    const buttonText = document.getElementById('toggleButton').innerText.trim();
    
    if (buttonText === 'Показать все') {
        hiddenContent.forEach(button => button.classList.remove('laptop__hiden', 'tablet__hiden'));
        document.getElementById('toggleButton').innerText = 'Скрыть';
    } else {
        hiddenContent.forEach(button => button.classList.add('laptop__hiden', 'tablet__hiden'));
        document.getElementById('toggleButton').innerText = 'Показать все';
    }
}
