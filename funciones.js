let totalCompra = 0
let productoSeleccionado = parseInt(prompt('Ingresa el numero del producto que quieres :1. Landing page - 2. Pagina web - 3. Pagina con carrito de compras 4. e-commerce'))
let seguirComprando = true
let decision


while (seguirComprando === true) {
    if (productoSeleccionado === 1) {
        totalCompra = totalCompra + 200
    } else if (productoSeleccionado === 2) {
        totalCompra = totalCompra + 300
    } else if (productoSeleccionado === 3) {
        totalCompra = totalCompra + 400
    } else if (productoSeleccionado === 4) {
        totalCompra = totalCompra + 500
    }

    decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
    if (decision === 1) {
       productoSeleccionado = parseInt(prompt('Ingresa el numero del producto que quieres comprar 1. Landing page - 2. Pagina web - 3. Pagina con carrito de compras 4. e-commerce'))
    } else if (decision === 2) {
        seguirComprando = false
   }

} 

alert('El valor total sin descuento ni impuestos es:'+totalCompra)