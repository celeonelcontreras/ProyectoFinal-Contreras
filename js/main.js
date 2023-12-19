const arrayViviendas = []

//{id: 1, descripcion: 'Residencial Nueva', manoObra: 1000},
//{id: 2, descripcion: 'Residencial Existente', manoObra: 400},
//{id: 3, descripcion: 'Negocio Nuevo', manoObra: 1200},
//{id: 4, descripcion: 'Negocio Existente', manoObra: 600}

const inputMetros = document.querySelector("input#metrosCuadrados")
const inputBocas = document.querySelector("input#cantidadBocas")
const selectVivienda = document.querySelector("select")
const btnCalcular = document.querySelector("button.button-calcular")
const URL = 'js/viviendas.json'

function cargarViviendas() {
    if (arrayViviendas.length > 0) {
        arrayViviendas.forEach((vivienda)=> {
            selectVivienda.innerHTML += `<option>${vivienda.descripcion}</option>`
        })
    }
}

function obtenerViviendas() {
    fetch(URL)
    .then((response)=> response.json())
    .then((data)=> arrayViviendas.push(...data))
    .then(()=> cargarViviendas(arrayViviendas))
}

function retornarManoObra(descripcion) {
    let vivienda = arrayViviendas.find((vivienda)=> vivienda.descripcion === descripcion)
    return vivienda.manoObra
}

function guardarEnLS(vivienda, metros, bocas, manoObra, costoMetros, costoBocas) {
    let infoPrestamo = {
        vivienda: vivienda,
        metros: metros,
        bocas: bocas,
        manoObra: manoObra,
        costoMetros: costoMetros,
        costoBocas: costoBocas
    }

    localStorage.setItem("infoDelPresupuesto", JSON.stringify(infoPrestamo))
}

function calcularPresupuesto() {
    let metrosIngresados = parseInt(inputMetros.value)
    let bocasIngresadas = parseInt(inputBocas.value)
    let costoManoDeObra = retornarManoObra(selectVivienda.value) * inputMetros.value

    const costo = new Costos(metrosIngresados, bocasIngresadas)
    let costoMetros = costo.calcularCostoMetros()
    let costoBocas = costo.calcularCostoBocas()

    guardarEnLS(selectVivienda.value, metrosIngresados, bocasIngresadas, costoManoDeObra, costoMetros, costoBocas)

    location.href = "pages/presupuestado.html"
}

btnCalcular.addEventListener("click", ()=> calcularPresupuesto())

obtenerViviendas()