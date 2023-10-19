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
    let errorh = document.getElementById("error").innerHTML;
    let select_el = -1;
    let error = "";

    function isInts(x, type = 0){
        if (error === "") {
            if (/^\d+$/.test(x)) {
                error = "";
                return parseInt(x);
            }

            if (!type) {
                error = "Неверно указана стоимость товара";
            } else {
                error = "Неверно указано количество товара";
            }
        }
        return 0;
    }

    function price(type) {
        let sum = 0;
        let csum = isInts(count_inp.value, 1);

        if (type === 0) {
            sum = isInts(tovar1.getAttribute("data-price")) * csum;
        }
        if (type === 1) {
            let dataPriceEl = type_tovar.options[type_tovar.selectedIndex];
            sum = isInts(dataPriceEl.getAttribute("data-price")) * csum;
        }
        if (type === 2) {
            if (garantia.checked) {
                sum = isInts(garantia.getAttribute("data-price")) * csum;
            }
            if (e_sim.checked) {
                sum = isInts(e_sim.getAttribute("data-price")) * csum;
            }
            sum += isInts(tovar3.getAttribute("data-price")) * csum;
        }
        document.getElementById("price").innerHTML = sum + "₽";
        document.getElementById("error").innerHTML = error;
        error = "";
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
        if (select_el !== -1) {
            price(select_el);
        }
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