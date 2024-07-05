document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('receiptForm');
    const commoditiesDiv = document.getElementById('commodities');
    const receiptDiv = document.getElementById('receipt');
    const receiptDetailsDiv = document.getElementById('receiptDetails');
    const totalAmountDiv = document.getElementById('totalAmount');

    // List of commodities
    const commodities = [
        "Wrist watch", "BT Speaker", "Shoes", "ball pen", "slides",
        "bubble gum", "Perfume", "Phone Case", "Headphones", "Wallet"
    ];

    // Create input fields for each commodity
    commodities.forEach(item => {
        const label = document.createElement('label');
        label.textContent = `${item}: $`;
        const input = document.createElement('input');
        input.type = 'number';
        input.step = '0.01';
        input.name = item;
        input.required = true;
        const br = document.createElement('br');
        commoditiesDiv.appendChild(label);
        commoditiesDiv.appendChild(input);
        commoditiesDiv.appendChild(br);
    });

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let prices = {};
        let totalAmount = 0;

        // Retrieve prices from form inputs
        commodities.forEach(item => {
            const price = parseFloat(form.elements[item].value);
            prices[item] = price;
            totalAmount += price;
        });

        // Generate receipt HTML
        let receiptHTML = '';
        receiptHTML += '<div>';
        receiptHTML += '<h3>Receipt Details</h3>';
        for (const [item, price] of Object.entries(prices)) {
            receiptHTML += `<p>${item}: $${price.toFixed(2)}</p>`;
        }
        receiptHTML += '</div>';

        receiptDetailsDiv.innerHTML = receiptHTML;
        totalAmountDiv.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;

        // Show receipt
        receiptDiv.classList.remove('hidden');
    });
});
