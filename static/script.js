var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["productName"] = document.getElementById("productName").value;
    formData["productCode"] = document.getElementById("productCode").value;
    formData["price"] = document.getElementById("price").value;
    formData["description"] = document.getElementById("desctiption").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.description;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("productName").value = "";
    document.getElementById("productCode").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("description").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productName;
    selectedRow.cells[1].innerHTML = formData.productCode;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.description;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("productName").value == "") {
        isValid = false;
        document.getElementById("productNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("productNameValidationError").classList.contains("hide"))
            document.getElementById("productNameValidationError").classList.add("hide");
    }
    return isValid;
}