class Costos {
    constructor(metros, bocas) {
        this.metros = metros || 0
        this.bocas = bocas || 0
    }
    
    calcularCostoMetros() {
        let cMetros = this.metros * 5000
        return cMetros
    }

    calcularCostoBocas() {
        let cBocas = this.bocas * 1000
        return cBocas
    } 
}