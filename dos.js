/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, 
los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
*/
 function mostrar()
{
//////Subir////////////Subir////////////Subir////////////Subir////////////Subir//////
		var nombre;
		var tipoCursada;
		var cantidadMaterias;
		var sexo;
		var nota;
		var edad;
		var continuar;
		//A
		var flagMejorPromedioNoMasculino=true;
		var mejorPromedioNoMasculino;
		var nombreMejorPromedioNoMAsculino;
		//B 
		var flagAlumnoMasJovenLibre=true;
		var edadAlumnoMasJovenLibre;
		var nombreAlumnoMasJovenLibre;
		//D
		var contadorFemenino=0;
		var contadorMasculino=0;
		var contadorNoBinario=0;
		var acumuladorFemenino=0;
		var acumuladorMasculino=0;
		var acumuladorNoBinario=0;
		var notaPromedioFemenino;
		var notaPromedioMasculino;
		var notaPromedioNoBinario;
		//F
		var flagMasMateriasFormaNoRemota=true;
		var masMateriasFormaNoremota;
		var edadMasMateriasFormaNoRemota;
		var nombreMasMateriasFormaNoRemota;
		//////Subir////////////Subir////////////Subir////////////Subir////////////Subir//////
	do
	{
		nombre=prompt("Ingrese nombre. ");
		while (isNaN(nombre)==false)
		{
			nombre=prompt("EROR!!!. Ingrese nombre. ");
		}
		console.log(nombre);

		tipoCursada=prompt("Ingrese tipo cursada(libre;presencial;remota)");
		while (tipoCursada!="libre"&&tipoCursada!="presencial"&&tipoCursada!="remota")
		{
			tipoCursada=prompt("ERROR!!!. Ingrese tipo cursada(libre;presencial;remota)");
		}
		console.log(tipoCursada);

		cantidadMaterias=parseInt(prompt("Ingrese cantidad de materias (mas de cero y menos de 8)"));
		while (isNaN(cantidadMaterias)||cantidadMaterias<0||cantidadMaterias>8)
		{
			cantidadMaterias=parseInt(prompt("ERROR!!!. Ingrese cantidad de materias (mas de cero y menos de 8)"));
		}
		console.log(cantidadMaterias);

		sexo=prompt("Ingrese el sexo (femenino , masculino , no binario)");
		while (sexo!="femenino"&&sexo!="masculino"&&sexo!="no binario")
		{
			sexo=prompt("ERROR!!!. Ingrese el sexo (femenino , masculino , no binario)");
		}
		console.log(sexo);

		nota=parseInt(prompt("Ingrese la nota promedio. (entre 0 y 10)"));
		while (isNaN(nota)==true||nota<0||nota>10)
		{
			nota=parseInt(prompt("ERROR!!!. Ingrese la nota promedio. (entre 0 y 10)"));
		}
		console.log(nota);

		edad=parseInt(prompt("Ingrese la edad"));
		while (isNaN(edad)==true||edad<18||edad>100)
		{
			edad=parseInt(prompt("ERROR!!!. Ingrese la edad"));
		}
		console.log(edad);
		//Fin pedir datos;
		//A;El nombre del mejor promedio que no sea masculino
		if (sexo!="masculino")
		{
			if (flagMejorPromedioNoMasculino==true)
			{
				mejorPromedioNoMasculino=nota;
				nombreMejorPromedioNoMAsculino=nombre;
				flagMejorPromedioNoMasculino=false
			}
			else if (mejorPromedioNoMasculino<nota)
			{
				mejorPromedioNoMasculino=nota;
				nombreMejorPromedioNoMAsculino=nombre;
			}
		}


		//B;El nombre del mas joven de los alumnos entre los que la dan libre
		if (tipoCursada=="libre")
		{
			if (flagAlumnoMasJovenLibre==true)
			{
				edadAlumnoMasJovenLibre=edad;
				nombreAlumnoMasJovenLibre=nombre;
				flagAlumnoMasJovenLibre=false;
			}
			else if(edadAlumnoMasJovenLibre>edad)
			{
				edadAlumnoMasJovenLibre=edad;
				nombreAlumnoMasJovenLibre=nombre;
			}
		}

		//D;El promedio de nota por sexo
		switch (sexo)
		{
			case "femenino":
				contadorFemenino++;
				acumuladorFemenino=acumuladorFemenino+nota;
				break;
			case "masculino":
				contadorMasculino++;
				acumuladorMasculino=acumuladorMasculino+nota;
				break;
			case"no binario":
				contadorNoBinario++;
				acumuladorNoBinario=acumuladorNoBinario+nota;
				break;
		}
		
		//F;La edad y nombre del que cursa mas materias que no sean en forma remota;
		if (tipoCursada!="remota")
		{
			if (flagMasMateriasFormaNoRemota==true)
			{
				masMateriasFormaNoremota=cantidadMaterias;
				edadMasMateriasFormaNoRemota=edad;
				nombreMasMateriasFormaNoRemota=nombre;
			}
			else if (masMateriasFormaNoremota<cantidadMaterias)
			{
				masMateriasFormaNoremota=cantidadMaterias;
				edadMasMateriasFormaNoRemota=edad;
				nombreMasMateriasFormaNoRemota=nombre;
			}
		}
		continuar=confirm("Desea ingresar nuevamente datos?")
	}while (continuar==true)
	//A;El nombre del mejor promedio que no sea masculino
	if (flagMejorPromedioNoMasculino==false)
	{
		document.write("El nombre del mejor promedio que no es masculino es: "+nombreMejorPromedioNoMAsculino);
	}
	else
	{
		document.write("<br>No se ingresaron notas de los sexos distintos a masculinos");
	}
	//B;El nombre del mas joven de los alumnos entre los que la dan libre
	if (flagAlumnoMasJovenLibre==false)
	{
		document.write("<br>El nombre del alumno mas joven que cursa de manera libre es: "+nombreAlumnoMasJovenLibre);		
	}
	else
	{
		document.write("<br>No se ingresaron alumnos alumnos que cursen en formato libre");
	}

	//D;El promedio de nota por sexo
	notaPromedioFemenino=acumuladorFemenino/contadorFemenino;
	notaPromedioMasculino=acumuladorMasculino/contadorMasculino;
	notaPromedioNoBinario=acumuladorNoBinario/contadorNoBinario;
	if (contadorFemenino!=0)
	{
		document.write("<br>El promedio de nota por sexo es: <br>Para femenino "+notaPromedioFemenino);
	}
	else 
	{
		document.write("<br>No se ingresaron notas en sexo femenino");
	}

	if (contadorMasculino!=0)
	{
		document.write("<br>Para masculino "+notaPromedioMasculino);	}
	else 
	{
		document.write("<br>No se ingresaron notas en sexo masculino");
	}

	if (contadorNoBinario!=0)
	{
		document.write("<br>Para no binario "+notaPromedioNoBinario);
	}
	else 
	{
		document.write("<br>No se ingresaron notas en sexo no binario");
	}

	//F;La edad y nombre del que cursa mas materias que no sean en forma remota
	if (flagMasMateriasFormaNoRemota==false)
	{
		document.write("<br>La edad del que cursa mas materias de forma no remota es "+edadMasMateriasFormaNoRemota+" y el nombre es"+nombreMasMateriasFormaNoRemota);
	}

	

}

