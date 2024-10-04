document.addEventListener('DOMContentLoaded', function() {
    // Function to switch languages
    function setLanguage(language) {
        const textContent = {
            ne: {
                title: "शिवराज नगरपालिका आपतकालीन सेवा",
                ambulance: "🚑 एम्बुलेन्स",
                fire: "🚒 दमकल",
                police: "👮 पुलिस",
                oncall : "📞 अन-कल ",
                snakebite: "🐍 सर्पदंश उपचार",
                doctorTitle: "🩺 डाक्टरको उपस्थिती",
                doctorDescription: "आधारभूत अस्पतालमा कुन दिन कुन डाक्टर आउनुहुन्छ सम्पूर्ण जानकारीका लागि तल रहेको बटनमा थिच्नुहोस्",
                doctorButton: "डाक्टरको तालिका",
                minidetails1:" गोरुसिङ्गे सर्पदंश उपचार केन्द्रसम्म निशुल्क एम्बुलेन्स सहित उपचार खर्च निशुल्क",
                minidetails2:"पशुपंक्षीका लागि निशुल्क प्राविधिक सेवा"

            },
            en: {
                title: "Shivaraj Municipality Emergency Services",
                ambulance: "🚑 Ambulance",
                fire: "🚒 Fire Service",
                police: "👮 Police",
                snakebite: "🐍 Snakebite Treatment",
                oncall: "📞 On-Call",
                doctorTitle: "🩺 Doctor's Availability",
                doctorDescription: "For complete information on which doctor will be available on which day at the Aadharbhut Hospital, please click the button below",
                doctorButton: "Doctor's List",
                minidetails1:"Free treatment including ambulance to Gorusinge snakebite treatment center",
                minidetails2:"Free technical service for livestock"
            }
        };
        // Set text content based on selected language
        document.getElementById('main-title').textContent = textContent[language].title;
        document.getElementById('ambulance-title').textContent = textContent[language].ambulance;
        document.getElementById('fire-title').textContent = textContent[language].fire;
        document.getElementById('police-title').textContent = textContent[language].police;
        document.getElementById('snakebite-title').textContent = textContent[language].snakebite;
        document.getElementById('oncall-title').textContent = textContent[language].oncall;
        document.getElementById('doctor-title').textContent = textContent[language].doctorTitle;
        document.getElementById('doctor-description').textContent = textContent[language].doctorDescription;
        document.getElementsByClassName('btn-doctor').textContent = textContent[language].doctorButton;
        document.getElementsByClassName('mini-details1').textContent = textContent[language].minidetails1;
        document.getElementsByClassName('mini-details2').textContent = textContent[language].minidetails2;


    }
    window.setLanguage = setLanguage;
});