document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let itemName = document.getElementById("itemName").value;
    let itemQuantity = document.getElementById("itemQuantity").value;
    let itemPrice = document.getElementById("itemPrice").value;

    // Tambahkan item ke tabel
    addItemToTable(itemName, itemQuantity, itemPrice);

    // Reset form setelah menambah barang
    document.getElementById("addItemForm").reset();
});

function addItemToTable(name, quantity, price) {
    const tableBody = document.getElementById("inventoryTable").getElementsByTagName('tbody')[0];

    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = name;
    cell2.textContent = quantity;
    cell3.textContent = `Rp ${parseInt(price).toLocaleString()}`;
    cell4.innerHTML = `<button onclick="deleteItem(this)">Hapus</button>`;
}

function deleteItem(button) {
    // Hapus baris item dari tabel
    const row = button.parentElement.parentElement;
    row.remove();
}
