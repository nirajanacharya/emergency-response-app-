// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Function to switch languages
    function setLanguage(language) {
        const textContent = {
            ne: {
                title: "शिवराज नगरपालिका आपतकालीन सेवा",
                ambulance: "🚑 एम्बुलेन्स",
                fire: "🚒 दमकल",
                police: "👮 पुलिस"
            },
            en: {
                title: "Shivaraj Municipality Emergency Services",
                ambulance: "🚑 Ambulance",
                fire: "🚒 Fire Service",
                police: "👮 Police"
            }
        };

        // Set text content based on selected language
        document.getElementById('main-title').textContent = textContent[language].title;
        document.getElementById('ambulance-title').textContent = textContent[language].ambulance;
        document.getElementById('fire-title').textContent = textContent[language].fire;
        document.getElementById('police-title').textContent = textContent[language].police;
    }

    // Add click event to each phone link
    const phones = document.querySelectorAll('.phone');
    phones.forEach(function(phone) {
        phone.addEventListener('click', function() {
            alert('आपको आपतकालीन सेवामा फोन गरिँदैछ।');
        });
    });

    // Expose setLanguage to global scope so it can be called from HTML
    window.setLanguage = setLanguage;
});
