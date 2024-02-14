
export function calcularEdad(fecha) {
	let hoy = new Date()
	let fechaNacimiento = new Date(fecha)
	let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
	let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
	if (
		diferenciaMeses < 0 ||
		(diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
	) {
		edad--
	}
	return edad
}

export function getPorcentaje(porcentaje, value) {
	var res = value * (porcentaje / 100)
	return res
}

export function formatDate(fecha) {
	return `${fecha.split("-")[1]}-${fecha.split("-")[0]}-${fecha.split("-")[2]}`
}