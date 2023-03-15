function calculatePrice() {
    let price = Number(document.getElementById("price").value);
    let percent = Number(document.getElementById("percent").value);
    let discount = price - (price / 100) * percent;

    document.getElementById("newprice").innerHTML = discount;
}