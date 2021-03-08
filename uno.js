/*
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/
function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadUnidadesProducto;
	var tipoInflamable;
	var marcaProducto;

	//B
	var maximoUnidadesInflamable;
	var productoMaximoUnidadesInflamable;

	//C
	var contadorIAC=0;

	//D
	var maximoPresioProducto;
	var marcaMaximoPresioProducto;
	var producMaximoPresioProducto;

	for (var i=0;i<5;i++)
	{
		tipoProducto=prompt("Ingrese tipo de producto (alcohol, iac o quat)");
		while (isNaN(tipoProducto)==false||tipoProducto!="alcohol"&&tipoProducto!="iac"&&tipoProducto!="quat")
		{
			tipoProducto=prompt("Ingreso un producto no valido. Ingrese tipo de producto (alcohol, iac o quat)");
		}

		precioProducto=parseInt(prompt("Ingrese el precio del producto (entre 100 y 300)"));
		while (isNaN(precioProducto)==true||precioProducto<100||precioProducto>300)
		{
			precioProducto=parseInt(prompt("El precio que ingreso no es valido. Ingrese el precio del producto (entre 100 y 300)"));
		}

		cantidadUnidadesProducto=parseInt(prompt("Ingrese la cantidad de unidades del producto (no puede ser 0 o negativo y no debe superar las 1000 unidades)"));
		while (isNaN(cantidadUnidadesProducto)==true||cantidadUnidadesProducto<0||cantidadUnidadesProducto>1000)
		{
			cantidadUnidadesProducto=parseInt(prompt("La cantidad de unidades del producto no es valido. Ingrese la cantidad de unidades del producto (no puede ser 0 o negativo y no debe superar las 1000 unidades)"));
		}

		tipoInflamable=prompt("Ingrese el tipo inflamable (ignifugo, combustible, explosivo)");
		while (isNaN(tipoInflamable)==false||tipoInflamable!="ignifugo"&&tipoInflamable!="combustible"&&tipoInflamable!="explosivo")
		{
			tipoInflamable=prompt("El tipo inflamable no es valido. Ingrese el tipo inflamable (ignifugo, combustible, explosivo)");
		}

		marcaProducto=prompt("Ingrese la marca del producto");
		while (isNaN(marcaProducto)==false)
		{
			marcaProducto=prompt("Marca producto no valido. Ingrese la marca del producto");
		}
		//FIN PEDIR INFORMACION 

		//B
		if (i==0)
		{
			maximoUnidadesInflamable=cantidadUnidadesProducto;
			productoMaximoUnidadesInflamable=tipoProducto;
		}
		else if (maximoUnidadesInflamable<cantidadUnidadesProducto)
		{
			maximoUnidadesInflamable=cantidadUnidadesProducto;
			productoMaximoUnidadesInflamable=tipoProducto;
		}

		//C
		if (tipoProducto=="iac"&&precioProducto<=200)
		{
			contadorIAC++;
		}

		//D
		if (i==0)
		{
			maximoPresioProducto=precioProducto;
			marcaMaximoPresioProducto=marcaProducto;
			producMaximoPresioProducto=tipoProducto;
		}
		else if (maximoPresioProducto<precioProducto) 
		{
			maximoPresioProducto=precioProducto;
			marcaMaximoPresioProducto=marcaProducto;
			producMaximoPresioProducto=tipoProducto;
		}

		/*alert("Producto: "+tipoProducto);
		alert("Precio producto: "+precioProducto);
		alert("Cantidad unidades producto: "+cantidadUnidadesProducto);
		alert("Tipo inflamable : "+tipoInflamable);
		alert("Marca producto : "+marcaProducto);*/
	}
	//Respestas
	//A
	//B
	document.write("El tipo de inflamable con mas cantidad de unidades en la compra es: "+productoMaximoUnidadesInflamable);
	//C
	document.write("El total de compras de 'IAC' con precio menor a 200 es de : "+contadorIAC);
	//D
	document.write("El producto mas caro es "+ +" y la marca es "+);
}
	/*
	//alcohol-iac-quat
	var nombreProducto;
	//entre 100-300
	var precio;
	//mas0menos1000
	var cantidad;
	//ignifugo-combustible-explosivo
	var tipoInflamable;
	//Validar si es palabra
	var marca;
	//A
	//B
	var contadorIgnifugo=0;
	var contadorCombustible=0;
	var contadorExplosivo=0;
	var tipoFlamableMasComprado;
	//C
	var contadorIacPrecioMenor200=0;
	//D
	var flag=true;
	var precioMasCaro;
	var productoMasCaro;

	for(var i=0; i>5;i++)
	{
		nombreProducto=prompt("Ingrese el nombre de su producto: (alcohol-iac-quat)");
		while (nombreProducto!="alcohol"&&nombreProducto!="iac"&&nombreProducto!="quat")
		{
			nombreProducto=prompt("El producto que usted ingreso no es valido. Ingrese el nombre de su producto: (alcohol-iac-quat)");
		}

		precio=prompt("Ingrese el precio de su producto: (mayor de 100 y menor que 300)");
		precio=parseInt(precio);
		//while (precio>100&&precio<300)
		while (precio>100||precio<300)
		{
			precio=prompt("El precio que ingreso no es valido. Ingrese el precio de su producto: (mayor de 0 y menor que 1000)");
			precio=parseInt(precio);
		}

		cantidad=prompt("Ingrese la cantidad que quiera llevar.");
		cantidad=parseInt(cantidad);
		while (cantidad>0&&cantidad<1000)
		{
			cantidad=prompt("La cantidad de unidades que ingreso no es valida. Ingrese la cantidad que quiera llevar.");
			cantidad=parseInt(cantidad);
		}

		tipoInflamable=prompt("Ingrese que tipo de inflamable es: (ignifugo-combustible-explosivo)");
		while (tipoInflamable!="ignifugo"&&tipoInflamable!="combustible"&&tipoInflamable!="explosivo")
		{
			tipoInflamable=prompt("El tipo inflamable que eligo no es valido. Ingrese que tipo de inflamable es: (ignifugo-combustible-explosivo)");
		}

		marca=prompt("Ingrese la marca de su producto");
		while (marca!=" ")
		{
			marca=prompt("La marca del producto que usted ingreso no es valida. Ingrese la marca de su producto")
		}
		//A
	
		//B
		if (tipoInflamable=="ignifugo")
		{
			contadorIgnifugo++;
		}
		else if(tipoInflamable=="combustible")
		{
			contadorCombustible++;
		}
		else if(tipoInflamable=="explosivo")
		{
			contadorExplosivo++;
		}
	
		//C
		if (nombreProducto="iac"&&precio<=200)
		{
			contadorIacPrecioMenor200++;
		}

		//D
		if (flag==true)
		{
			precioMasCaro=precio;
			marcaMasCara=marca;
			productoMasCaro=nombreProducto;
			flag=false
		}
		else if (precioMasCaro<precio)
		{
			precioMasCaro=precio;
			marcaMasCara=marca;
			precioMasCaro=nombreProducto;
		}
		}
		//respuestas
		//B
		if (contadorIgnifugo>contadorCombustible)
		{
			if (contadorIgnifugo>contadorExplosivo)
			{
				tipoFlamableMasComprado=contadorIgnifugo;
			}	
			else
			{
				tipoFlamableMasComprado=contadorExplosivo;
			}
		}
		else if (contadorCombustible>contadorExplosivo)
		{
			tipoFlamableMasComprado=contadorCombustible;
		}
		else 
		{
			tipoFlamableMasComprado=contadorExplosivo;
	}
	document.write("El tipo inflamable con mas cantidad de compras en total es: "+tipoFlamableMasComprado);
	//C
	document.write("La cantidad de 'IAC' que fue comprada con un precio menor a 200 es de: "+contadorIacPrecioMenor200);
	//D
	document.write("La marca del producto mas caro es "+marcaMasCara+" y el producto mas caro es"+productoMasCaro);
*/