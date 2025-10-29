const buttons = document.querySelectorAll('.order-btn');
const quantities = { 'bryuki': 0, 'shorty': 0, 'tufli': 0 };

buttons.forEach(button => {
    button.addEventListener('click', function(){
        const product = button.dataset.product;
        quantities[product]++;
        document.querySelector(`#${product}-quantity`).innerText = quantities[product];
    });
});
