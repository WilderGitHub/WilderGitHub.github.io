function llenaremos(){
    for (i=0;i<secciones.length;i++)
    {
        
        
        /* crea el DIV con clase miSección*/
        var miDiv= document.createElement("div");
        miDiv.className= "miSeccion"
        /*Si nuez "" le asigna id*/
        if (secciones[i][0]!==""){
            miDiv.id="seccion" + i; /* mejor un id cortito si se puede*/
            }
        /* aqui llenamos el menu*/
        if (secciones[i][0]!==""){
        var miA= document.createElement("a");
                /* miA.className="miDescarga"; */
        miA.id="a"+ i;
        miContenido=secciones[i][0];   /* Ver que solo agarre id no vacios */
        
        document.getElementById("contenidoMenu").appendChild(miA);
        document.getElementById("a"+i).setAttribute("href","#seccion"+i);
        document.getElementById("a"+i).appendChild(document.createTextNode(miContenido));
        }
        /*añade el div al DOM*/
        document.body.appendChild (miDiv);
        /* Esta función crea el elemento en el campo y lo llena*/ 
        function crearElemento(numCampo,tipoElemento){
            if (secciones[i][numCampo]!==""){
            var miX= document.createElement(tipoElemento);
            miDiv.appendChild(miX);
            var contenido= secciones[i][numCampo];
            miX.appendChild(document.createTextNode(contenido));
            }
        };  
        
        
        crearElemento(0,"h1"); /* ------  0.    crea el H1 = Titulo de la sección */
        crearElemento(1,"h1");/* ------  1.   crea el h2 = Subtitulo que pueden haber muchos oe*/    
        crearElemento(2,"p");/* ------- 2. crea el Parrafo*/
        /*  ahora viene el gráfico oe*/
        if (secciones[i][3]!==""){
            /* creamos un envoltorio para alinear las fuentes oe     */
            var miDiv= document.createElement("div");
            miDiv.id= "id"+secciones[i][7];  //ver si puedes quitar esto oe
            miDiv.className="miGraficoWrap";                  
            document.body.appendChild (miDiv);
            crearElemento(3,"h2");/*------- 3. h2 numero del gráfico*/
            crearElemento(4,"h1");/* ------- 4 h1 = titulo del grafico*/
            crearElemento(5,"h2");/* ------- 5 h2 = subtitulo del grafico*/
            crearElemento(6,"h2");/* -------- 6  h3 = unidades de grafico*/
            
                var otroDiv=document.createElement("div");
                otroDiv.className="miGraficoWrap1"; 
                miDiv.appendChild(otroDiv);
                var otroDiv2=document.createElement("div");
                otroDiv2.className="miGraficoWrap2";
                otroDiv.appendChild(otroDiv2);
                    /* ------- 7.  crea la imagen del grafico*/
                    var miImg= document.createElement("img");
                    miImg.className="miImagen";
                    miImg.id=secciones[i][7];
                    miRuta="imagenes/"+secciones[i][7];
                    otroDiv2.appendChild(miImg);
                    document.getElementById(miImg.id).setAttribute("src",miRuta);
                    /* ------8.  crea la fuente             */
                    var miP= document.createElement("p");
                    otroDiv2.appendChild(miP);
                    var contenido= secciones[i][8];
                    miP.appendChild(document.createTextNode(contenido));
                    /* -------- 9. crea las notas */
                    if (secciones[i][9]!==""){

                        var miP= document.createElement("p");
                        otroDiv2.appendChild(miP);
                        var contenido= secciones[i][9];
                        miP.appendChild(document.createTextNode(contenido));
                    }    
                    /* ------- 10. crea la ruta para la descargar*/
                    var miA= document.createElement("a");
                    miA.className="miDescarga";
                    miA.id=secciones[i][10];
                    miDescarga="files/"+secciones[i][10];
                    otroDiv2.appendChild(miA);
                    document.getElementById(miA.id).setAttribute("href",miDescarga);
                    document.getElementById(miA.id).appendChild(document.createTextNode("Descargar"));
                    /* document.getElementById(miA.id).appendChild(document.createElement("p")); */
        }    
        /* -------11. para crear el pie de pagina */
        if (secciones[i][11]!==""){
            var miP= document.createElement("p");
            document.body.appendChild (miP);
            miP.className="piePagina";
            var contenido= secciones[i][11];
            miP.appendChild(document.createTextNode(contenido));
        }    
    }
};