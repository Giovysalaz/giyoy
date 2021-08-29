Proceso Adivina_numero
	Definir intentos,num_secreto,num_ingresado Como Entero
	intentos <- 10
	num_secreto <- Aleatorio(1,100)
	Escribir 'Adivine el numero(de 1 a 100):'
	Leer num_ingresado
	Mientras num_secreto<>num_ingresado Y intentos>1 Hacer
		Si num_secreto>num_ingresado Entonces
			Escribir 'Muy bajo'
		SiNo
			Escribir 'Muy alto'
		FinSi
		intentos <- intentos-1
		Escribir 'Le quedan',intentos,'intentos:'
		Leer num_ingresado
	FinMientras
	Si num_secreto=num_ingresado Entonces
		Escribir 'Exacto! Usted adivinó en',11-intentos,'intentos.'
	SiNo
		Escribir 'El numeroera:',num_secreto
	FinSi
FinProceso
