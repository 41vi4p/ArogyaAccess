// google-translate.js

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', // Set the default page language (e.g., English)
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE // Choose the layout style
    }, 'google_translate_element'); // Specify the ID of the HTML element where the translation widget will be placed
}
