const btn = document.getElementById("btnTicket");
const age = document.getElementById("age");
const km = document.getElementById("km");

btn.addEventListener("click", function() {
    if (km.value > 500 || km.value < 1) {
        alert("inserire dati validi");
    } 
    
    else {
            if (age.value === "over18") {
                const price = km.value * 0.21;
                console.log("cliente over18");
                console.log(`Il prezzo è ${price.toFixed(2)}€`);
            }

            else if (age.value === "under18") {
                const price = km.value * 0.21;
                const discount = (price * 20) / 100;
                const newPrice = price - discount;
                console.log("cliente minorenne");
                console.log(`Il prezzo è ${price.toFixed(2)}€`);
                console.log(`Il prezzo col 20% di sconto è ${newPrice.toFixed(2)}€`);
            }

            else if (age.value === "over65") {
                const price = km.value * 0.21;
                const discount = (price * 40) / 100;
                const newPrice = price - discount;
                console.log("cliente over65");
                console.log(`Il prezzo è ${price.toFixed(2)}€`);
                console.log(`Il prezzo col 40% di sconto è ${newPrice.toFixed(2)}€`);
            };
        }
});