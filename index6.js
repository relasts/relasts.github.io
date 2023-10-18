/*jslint browser: true */
window.onload = function () {
    let form = document.getElementById("main");
    let count_inp = document.getElementById("count");
    let tovar1 = document.getElementById("save");
    let tovar2 = document.getElementById("strap");
    let tovar3 = document.getElementById("watch");
    let type_tovar = document.getElementById("type_tovar");
    let garantia = document.getElementById("garantia");
    let e_sim = document.getElementById("e-sim");
    let select_el = 0;

    function price(sub) {
        let sum = 0;
        let csum = parseInt(count_inp.value);

        // if (/^\d+$/.test(dataPrice)) {
        //     dataPrice = Number(dataPrice);
        // } else {
        //     error = "Неверно указана стоимость товара";
        // }

        if (sub === 0) {
            let el_price = parseInt(tovar1.getAttribute("data-price"));
            sum = el_price * csum;
        }
        if (sub === 1) {
            let dataPriceEl = type_tovar.options[type_tovar.selectedIndex];
            let dataPrice = dataPriceEl.getAttribute("data-price");
            sum = parseInt(dataPrice) * csum;
        }
        if (sub === 2) {
            sum = parseInt(tovar3.getAttribute("data-price")) * csum;

            if (garantia.checked) {
                sum += parseInt(garantia.getAttribute("data-price")) * csum;
            }
            if (e_sim.checked) {
                sum += parseInt(e_sim.getAttribute("data-price")) * csum;
            }
        }
        document.getElementById("price").innerHTML = sum + "₽";
    }

    tovar1.addEventListener("click", function () {
        document.getElementById("types_tovar").classList.add("hide");
        document.getElementById("selects_dop").classList.add("hide");
        select_el = 0;
        price(select_el);
    });
    tovar2.addEventListener("click", function () {
        document.getElementById("types_tovar").classList.remove("hide");
        document.getElementById("selects_dop").classList.add("hide");
        select_el = 1;
        price(select_el);
    });
    tovar3.addEventListener("click", function () {
        document.getElementById("types_tovar").classList.add("hide");
        document.getElementById("selects_dop").classList.remove("hide");
        select_el = 2;
        price(select_el);
    });

    type_tovar.addEventListener("change", function () {
        price(1);
    });

    count_inp.addEventListener("input", function () {
        price(select_el);
    });

    garantia.addEventListener("click", function () {
        price(2);
    });
    e_sim.addEventListener("click", function () {
        price(2);
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
};