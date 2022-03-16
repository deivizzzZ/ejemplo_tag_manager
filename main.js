let clicksCounter = 0;
function increaseCounter() {
    clicksCounter++;
    document.getElementById("clicks-number").value = clicksCounter;
}
function sendClicks() {
    dataLayer.push({ 'clicks_number': document.getElementById("clicks-number").value });
}

function sendForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    dataLayer.push({ 'form_name': `${fname} ${lname}` });
}

// GTM incorpora un evento de tipo 'linkClick' que efectúa la misma labor
document.querySelectorAll("a").forEach(link => {
    link.addEventListener('click', () => {
        dataLayer.push({ 'link_visited': link.innerText });
    });
});