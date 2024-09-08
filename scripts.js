document.addEventListener('DOMContentLoaded', function() {
    const phones = document.querySelectorAll('.phone');
    phones.forEach(function(phone) {
        phone.addEventListener('click', function() {
            alert('आपको आपातकालीन सेवामा फोन गरिँदैछ।');
        });
    });
});
