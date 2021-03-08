
 function mostrar()
{
	var continuar
	var nombre
	var tipoCursada;
	var cantidadMaterias;
	var sexo;
	var notaPromedio;
	var edad;
	//A
	var 
	;
	var flag=true;
	//B
	var flagAlumnoMasJovenLibre=true;
	var alumnoMasJovenLibre;
	var edadAlumnoMasJovenLibre;
	//D
	var contadorNotaMasculino=0;
	var contadorNotafemenino=0;
	var contadorNotaNoVinario=0;
	var acumuladorNotaMasculino=0;
	var acumuladorNotaFemenino=0;
	var acumuladorNotaNoVinario=0;
	var promedioNotaMasculino;
	var promedioNotaFemenino;
	var promedioNotaNovinario;
	//F
	var flagAlumnoQueCursaMasMaterias=true;
	var mayorMateriasDeFormaRemota;
	var edadAlumnoMayorMateriasDeFormaRemota;
	var nombreAlumnoMayorMateriasDeFormaRemota;

	do
	{
		nombre=prompt("ingrese el nombre");
		while (nombre!=" ")
		{
			nombre=prompt("Nombre ingresado no valido. Ingrese el nombre");
		}

		tipoCursada=prompt("Cursa: (libre-presencial-remota)");
		while (tipoCursada!="libre"&&tipoCursada!="presencial"&&tipoCursada!="remota")
		{
			tipoCursada=prompt("El tipo de cursada que ingreso no es valida. Cursa: (libre-presencial-remota)");
		}

		cantidadMaterias=prompt("Cuantas materias cursa? (entre 0 y 8)");
		cantidadMaterias=parseInt(cantidadMaterias);
		while (cantidad)
		{
			cantidadMaterias=prompt("La cantidad de materias que puso no es valida. Cuantas materias cursa? (entre 0 y 8)");
			cantidadMaterias=parseInt(cantidadMaterias);
		}

		sexo=prompt("Ingrese el sexo: (femenino,masculino,no vinario");
		while (sexo!="femenino"&&sexo!="masculino"&&sexo!="no vinario")
		{
			sexo=prompt("El sexo ingresado no es valido. Ingrese el sexo: (femenino,masculino,no vinario");
		}

		notaPromedio=prompt("ingrese la nota promedio (entre 0 y 10)");
		notaPromedio=parseInt(notaPromedio);
		while (notaPromedio<0||notaPromedio>10)
		{
			notaPromedio=prompt("La nota promedio ingresada no es valida. Ingrese la nota promedio (entre 0 y 10)");
			notaPromedio=parseInt(notaPromedio);
		}

		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);
		while (inNaN(edad));
		{
			edad=prompt("La edad que ingreso no es valida. Ingrese la edad");
			edad=parseInt(edad);
		}
		//A
		if (sexo!="masculino")
		{
			if (flag==true)
			{
				mejorNota=notaPromedio;
				flag=false;
			}
			else if (mejorNota<notaPromedio)
			{
				mejorNota=notaPromedio;
			}
		}
		//B
		if (tipoCursada=="libre")
		{
			if (flagAlumnoMasJovenLibre==true)
			{
				edadAlumnoMasJovenLibre=edad;
				alumnoMasJovenLibre=nombre;
				flagAlumnoMasJovenLibre=false;
			}
			else if (edadAlumnoMasJovenLibre>edad)
			{
				edadAlumnoMasJovenLibre=edad;
				alumnoMasJovenLibre=nombre;
			}
		}
		//D
		if (sexo=="masculino")
		{
			contadorNotaMasculino++;
			acumuladorNotaMasculino=acumuladorNotaMasculino+nota;
		}
		else if(sexo=="femenino")
		{
			contadorNotaFemenino++;
			acumuladorNotaFemenino=acumuladorNotaFemenino+nota;
		}
		else if(sexo=="no vinario")
		{
			contadorNotaNoVinario++;
			acumuladorNotaNoVinario=acumuladorNotaNoVinario+nota;
		}
		//F
		if (tipoCursada!="remota")
		{
			if (flagAlumnoQueCursaMasMaterias==true)
			{
				mayorMateriasDeFormaRemota=cantidadMaterias;
				edadAlumnoMayorMateriasDeFormaRemota=edad;
				nombreAlumnoMayorMateriasDeFormaRemota=nombre;
				flagAlumnoQueCursaMasMaterias=false
			}
			else if (mayorMateriasDeFormaRemota<cantidadMaterias)
			{
				mayorMateriasDeFormaRemota=cantidadMaterias;
				edadAlumnoMayorMateriasDeFormaRemota=edad;
				nombreAlumnoMayorMateriasDeFormaRemota=nombre;
			}
		}
		continuar=confirm("Desea continuar?")
	}while(continuar)
	//A 
	document.write("El mejor promedio no masculino es: "+ mejorNota);
	//B
	document.write("El nombre del alumno mas joven que da libre es: "+ alumnoMasJovenLibre);
	//D
	promedioNotaMasculino=contadorNotaMasculino/acumuladorNotaFemenino;
	promedioNotaFemenino=contadorNotafemenino/acumuladorNotaFemenino;
	promedioNotaNovinario=contadorNotaNoVinario/acumuladorNotaNoVinario;
	document.write("El promedio de nota masculino es: "+promedioNotaMasculino+" El promedio nota femenino es: "+promedioNotaFemenino+" El promedio nota de sexo no vinario es: "+promedioNotaNovinario);
	//F
	document.write("El alumno que cursa mas materias de forma no remota tiende de nombre: "+nombreAlumnoMayorMateriasDeFormaRemota+" y tiene "+edadAlumnoMayorMateriasDeFormaRemota+" años de edad");
}
