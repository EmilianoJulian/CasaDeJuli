function mostrar()
{
	var nombre;
	var estadoCivil;
	var edad;
	var temperaturaCorporal;
	var sexo;
	var continuar;
	//A
	var contadorViudoMayor60=0;
	//B
	var flag=true;
	var 

	do
	{
		nombre=prompt("Ingrese nombre.");
		while(nombre==" ")
		{
			nombre=prompt("Nombre no valido. Ingrese nombre.");
		}

		estadoCivil=prompt("Ingrese su estado civil (soltero,casado,viudo)")
		while(estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo")
		{
			estadoCivil=prompt("Estado civil no valido. Ingrese su estado civil (soltero,casado,viudo)")
		}

		edad=prompt("Ingrese su edad.");
		edad=parseInt(edad);
		while(edad<17)
		{
			edad=prompt("Edad no valida. La edad ingresada no es valida. Ingrese su edad.");
			edad=parseInt(edad);
		}

		temperaturaCorporal=prompt("Ingrese temperatura corporal.");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(temperaturaCorporal>35&&temperaturaCorporal<36);
		{
			temperaturaCorporal=prompt("Temperatura no valida. Ingrese temperatura corporal.");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}

		sexo=prompt("Ingrese su sexo (masculino o femenino)");
		while (sexo!="masculino"&&sexo!="femenino")
		{
			sexo=prompt("Sexo no valido. Ingrese su sexo (masculino o femenino)");
		}
		//A
		if (estadoCivil=="viudo"&&edad>60)
		{
			contadorViudoMayor60++;
		}
		//B
		if (sexo=="femenino")
		{
			if (flag==true)
			{
				nombreFemeninoMasJoven=nombre;
				edadFemeninoMasJoven=edad;
				flag=false;
			}
			else if (edadFemeninoMasJoven>edad)
			{
				nombreFemeninoMasJoven=nombre;
				edadFemeninoMasJoven=edad;
			}
		}
		continuar=confirm("Desea continuar?");
	}while(continuar);	
	//A
	document.write("La cantidad de viudos mayores a 60 años es de: "+contadorViudoMayor60);
	//B
	document.write("La mujer mas joven es: "+nombreFemeninoMasJoven +" y tiene "+edadFemeninoMasJoven);
}
