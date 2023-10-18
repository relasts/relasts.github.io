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

    function price(el, sub) {
        if(sub === 0){
            let el_price = parseInt(el.getAttribute("data-price"));
            document.getElementById("price").innerHTML = el_price * parseInt(count_inp.value) + "₽";
        }
        if(sub == 1){
            let dataPriceEl = el.options[el.selectedIndex];
            let dataPrice = dataPriceEl.getAttribute("data-price");
            document.getElementById("price").innerHTML = dataPrice * parseInt(count_inp.value) + "₽";
        }
        if(sub == 2){
            let sum = parseInt(tovar3.getAttribute("data-price")) * parseInt(count_inp.value);

            if(garantia.checked){
                sum += parseInt(garantia.getAttribute("data-price")) * parseInt(count_inp.value);
            }
            if(e_sim.checked){
                sum += parseInt(e_sim.getAttribute("data-price")) * parseInt(count_inp.value);
            }

            document.getElementById("price").innerHTML = sum + "₽";
        }
    }

    tovar1.addEventListener("click", function (e) {
        document.getElementById("types_tovar").classList.add("hide");
        document.getElementById("selects_dop").classList.add("hide");
        price(this, 0);
        select_el = 0;
    });
    tovar2.addEventListener("click", function (e) {
        document.getElementById("types_tovar").classList.remove("hide");
        document.getElementById("selects_dop").classList.add("hide");
        price(type_tovar, 1);
        select_el = 1;
    });
    tovar3.addEventListener("click", function (e) {
        document.getElementById("types_tovar").classList.add("hide");
        document.getElementById("selects_dop").classList.remove("hide");
        price(this, 0);
        price(garantia, 2);
        select_el = 2;
    });

    type_tovar.addEventListener("change", function (e) {
        price(type_tovar, 1);
    });

    count_inp.addEventListener("input", function (e) {
        if(select_el == 0){
            price(document.querySelector("input[name=\"service\"]:checked"), 0);
        }
        else if(select_el == 1){
            price(type_tovar, 1);
        }
        else if(select_el == 2){
            price(this, 2);
        }
    });

    garantia.addEventListener("click", function (e) {
        price(this, 2);
    });
    e_sim.addEventListener("click", function (e) {
        price(this, 2);
    });

    form.addEventListener("submit", function(e){
        e.preventDefault();
    });
};