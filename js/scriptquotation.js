function calculateTotal() {
    let grandTotal = 0;
    
    const rows = document.querySelectorAll('#quotationTable tbody tr');
    rows.forEach(row => {
        const price = parseFloat(row.querySelector('.price').value) || 0;
        const quantity = parseFloat(row.querySelector('.quantity').value) || 0;
        const total = price * quantity;
        row.querySelector('.total').textContent = total.toFixed(2);
        
        grandTotal += total;
    });

    document.getElementById('grandTotal').textContent = grandTotal.toFixed(2);
}

function addRow() {
    const tableBody = document.querySelector('#quotationTable tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>
            <select class="material">
                <option value="Marble">Marble</option>
                <option value="Granite">Granite</option>
                <option value="Travertine">Travertine</option>
                <option value="Slate">Slate</option>
                <option value="Onyx">Onyx</option>
                <option value="Black Marble">Black Marble</option>
                <option value="Quarts">Quarts</option>
            </select>
        </td>
        <td><input type="number" class="price" oninput="calculateTotal()" /></td>
        <td><input type="number" class="quantity" oninput="calculateTotal()" /></td>
        <td class="total">0</td>
    `;

    tableBody.appendChild(newRow);
}