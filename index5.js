window.onload = function() {
    function price(){
        let tovar = document.getElementById("tovar"),
            count = document.getElementById("count").value,
            dataPrice = tovar.options[tovar.selectedIndex].getAttribute("data-price"),
            error = "";
        
        if(/^\d+$/.test(count)){
            count = Number(count);
        }
        else{
            error = "Неверно введено количество товаров";
        }
        if(/^\d+$/.test(dataPrice)){
            dataPrice = Number(dataPrice);
        }
        else{
            error = "Неверно указана стоимость товара";
        }

        if(error == ""){
            document.getElementById("error").innerHTML = "";
            document.getElementById("price").innerHTML = dataPrice * count + "₽";
        }
        else{
            document.getElementById("error").innerHTML = error;
            document.getElementById("price").innerHTML = "";
        }
    }

    document.getElementById("price_but").addEventListener("click", function(){
        price();
    });

    document.addEventListener("keyup", function(event){
        if(event.code === "Enter"){
            price();
        }
    });
};