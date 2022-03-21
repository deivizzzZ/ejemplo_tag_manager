let clicksCounter = 0;
function increaseCounter() {
    clicksCounter++;
    document.getElementById("clicks-number").value = clicksCounter;
}
function sendClicks() {
    dataLayer.push({
        // Estos datos se envían mediante un activador de clic en GTM
        'clicks_number': document.getElementById("clicks-number").value
    });
}

function sendForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    dataLayer.push({
        // Estos datos se envían mediante el activador 'envío de formulario' en GTM
        'form_name': `${fname} ${lname}`
    });
}

// Los datos de links se envían a través de variables predefinidas de GTM
