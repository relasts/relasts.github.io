/*jslint browser: true */
window.onload = function () {
    function price() {
        let tovar = document.getElementById("tovar");
        let count = document.getElementById("count").value;
        let dataPriceEl = tovar.options[tovar.selectedIndex];
        let dataPrice = dataPriceEl.getAttribute("data-price");
        let error = "";
        let price_el = document.getElementById("price");

        if (/^\d+$/.test(count)) {
            count = Number(count);
        } else {
            error = "Неверно введено количество товаров";
        }
        if (/^\d+$/.test(dataPrice)) {
            dataPrice = Number(dataPrice);
        } else {
            error = "Неверно указана стоимость товара";
        }

        if (error === "") {
            document.getElementById("error").innerHTML = "";
            price_el.innerHTML = dataPrice * count + "₽";
        } else {
            document.getElementById("error").innerHTML = error;
            price_el.innerHTML = "";
        }
    }
    let price_but = document.getElementById("price_but");

    price_but.addEventListener("click", function (e) {
        e.preventDefault();
        price();
    });

    document.addEventListener("keyup", function (event) {
        if (event.code === "Enter") {
            price();
        }
    });
};