let clicksCounter = 0;
function increaseCounter() {
    clicksCounter++;
    document.getElementById("clicks-number").value = clicksCounter;
}
function sendClicks() {
    // AQUÍ IRÁ LA LLAMADA A ANALYTICS
    // gtag('event', 'clicks_sent', {
    //     'clicks_number': document.getElementById("clicks-number").value
    // });
}

function sendForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    // AQUÍ IRÁ LA LLAMADA A ANALYTICS
    // gtag('event', 'form_sent', {'form_name': `${fname} ${lname}`});
}

document.querySelectorAll("a").forEach(link => {
    link.addEventListener('click', () => {
        dataLayer.push({ 'link_visited': link.innerText });
    });
});