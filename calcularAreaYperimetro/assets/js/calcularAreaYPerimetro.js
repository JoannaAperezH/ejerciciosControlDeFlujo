opcion = prompt("Ingrese una opcion del 1 al 3 (Con numero)  1.- Calcular Area o perimetro del triangulo 2.- Calcular Area o perimetro del rectangulo 3.-Calcular Area del circulo  ");
switch (opcion) {
    case "1":
        console.log("Seleccionaste calcular area o perimetro del triangulo");
        menu1 = prompt("¿Que quieres calcular 1.-Area 2.-Perimetro");
        switch (menu1) {
            case "1":
                console.log("Seleccionaste calcular el area del triangulo");

                base = prompt("Ingresa la medida de la base:");
                altura = prompt("Ingrasa la altura de tu triangulo");
                area = ((base * altura) / 2);
                console.log("Esta es su area:", area, "metros cuadrados")

                break;
            case "2":
                

                lado =parseInt(prompt("Ingrese la medida de un lado"));
                lado2 =parseInt(prompt("Ingrese la medida de otro lado"));
                lado3 = parseInt(prompt("Ingrese la medida del ultimo lado"));
                perimetro=(lado)+(lado2)+(lado3);

                console.log("Este es el perimetro:",perimetro, "mtrs");
                break;
        }

        break;
    case "2":
        console.log("Seleccionaste calcular area o perimetro del rectangulo");
        menu2 = prompt("¿Que quieres calcular 1.-Area 2.-Perimetro");

        switch(menu2){
            case "1":
                console.log("Seleccionaste calcular el area del Rectangulo");

                base = prompt("Ingresa la medida de la base de tu Rectangulo:");
                altura = prompt("Ingrasa la altura de tu Rectangulo");
                area = (base * altura);
                console.log("Esta es su area:", area, "metros cuadrados")

                break;  

                
                case "2":
                    
    
                    lado =parseInt(prompt("Ingrese la medida del lado mas pequeño"));
                    lado2 =parseInt(prompt("Ingrese la medida del lado mas grande"));
                    
                    perimetro=(lado * 2)+(lado2 * 2);
    
                    console.log("Este es el perimetro:",perimetro, "mtrs");
                    break;
        }

        break;


    case "3":
        console.log("Seleccionaste calcular area o circunferencia del circulo");
        menu3 = prompt("¿Que quieres calcular 1.-Area 2.-circunferencia");
        switch(menu3){
            case "1":
                    console.log("Seleccionaste calcular el area del Circulo");

                    radio=parseInt(prompt("Ingresa la mededa del radio de tu circulo"))
                    area= (Math.PI * (radio*radio));
                    console.log("Este es el area de tu circulo :",area, "mtrs cuadrados");
                    break;

        


        case "2":
            console.log("Seleccionaste calcular la circunferencia del Circulo");

            radio=parseInt(prompt("Ingresa la mededa del radio de tu circulo"))
            perimetro= (Math.PI * (radio+radio));
            console.log("Este es el area de tu circulo :",perimetro, "mtrs");
            break;

        }
       break;

}