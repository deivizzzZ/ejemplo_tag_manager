/*
Hay que investigar qué parámetros podemos sacar
con las variables predefinidas de GTM
para tocar código lo menos posible
*/

let clicksCounter = 0;
function increaseCounter() {
    clicksCounter++;
    document.getElementById("clicks-number").value = clicksCounter;
}
function sendClicks() {
    dataLayer.push({
        'event': 'clicks_sent',
        'clicks_number': document.getElementById("clicks-number").value
    });
}

function sendForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    dataLayer.push({
        // 'event': 'form_sent',
        'form_name': `${fname} ${lname}`
    });
}

// Los datos de links se envían a través de variables predefinidas de GTM

// document.querySelectorAll("a").forEach(link => {
//     link.addEventListener('click', () => {
//         dataLayer.push({
//             'event': 'link_clicked',
//             'link_visited': link.innerText
//         });
//     });
// });