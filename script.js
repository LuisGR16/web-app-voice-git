document.getElementById('start-btn').addEventListener('click', function() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        // Establecemos el idioma de reconocimiento de voz
        recognition.lang = 'es-ES';
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById('order-result').innerHTML = `<p>Orden detectada: ${transcript}</p>`;
        }

        recognition.onerror = function(event) {
            console.error('Error en el reconocimiento de voz:', event.error);
        }

        recognition.start();
    } else {
        document.getElementById('order-result').innerHTML = "<p>Lo siento, tu navegador no es compatible con la API de reconocimiento de voz.</p>";
    }
});
