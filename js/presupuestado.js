const btnVolver = document.querySelector("button.button-volver")
const btnContratar = document.querySelector("button.button-contratar")

const spanVivienda = document.querySelector("span.label-vivienda")
const spanMetros = document.querySelector("span.label-metros")
const spanCostoMetros = document.querySelector("span.label-costo-metros")
const spanBocas = document.querySelector("span.label-bocas")
const spanCostoBocas = document.querySelector("span.label-costo-bocas")
const spanManoObra = document.querySelector("span.label-mano-obra")
const spanTotalPresupuesto = document.querySelector("span.label-total")

function recuperarLS() {
    const infoDelPresupuesto = JSON.parse(localStorage.getItem("infoDelPresupuesto"))

    spanVivienda.textContent = infoDelPresupuesto.vivienda
    spanMetros.textContent = infoDelPresupuesto.metros
    spanCostoMetros.textContent = infoDelPresupuesto.costoMetros
    spanBocas.textContent = infoDelPresupuesto.bocas
    spanCostoBocas.textContent = infoDelPresupuesto.costoBocas
    spanManoObra.textContent = infoDelPresupuesto.manoObra
    spanTotalPresupuesto.textContent = infoDelPresupuesto.costoMetros + infoDelPresupuesto.costoBocas + infoDelPresupuesto.manoObra
}

recuperarLS()

 
btnContratar.addEventListener("click", ()=> {
    Swal.fire({
       title: "Confirmado",
       text: "Nos comunicaremos contigo a la brevedad, Gracias!",
       icon: "success",
       iconColor: "red",
       confirmButtonColor: "#9B1313",
       confirmButtonText: "Continuar"
    })
})

btnVolver.addEventListener("click", ()=> {
    localStorage.clear()
    location.href = "../index.html"
})



