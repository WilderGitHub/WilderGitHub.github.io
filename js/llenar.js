function llenaremos(){
    /* alert(secciones[0].parrafo.length); */
    var i,j,k;
    for (i=0;i<secciones.length;i++)
    {
        /* crea el DIV */
        var miDiv= document.createElement("div");
        miDiv.className= "miSeccion"
        if (secciones[i].titulo[0]!==null){
            miDiv.id=secciones[i].titulo[0]; /* mejor un id cortito */
            }
        document.body.appendChild (miDiv);
            /* crea el H1 = Titulo de la sección */
        if (secciones[i].titulo[0]!==null){
            var miH1= document.createElement("h1");
            miDiv.appendChild(miH1);
            var contenido= secciones[i].titulo[0];
            miH1.appendChild(document.createTextNode(contenido));
        };
        if (secciones[i].subtitulo[0]!==null){
            /* crea el h2 = Subtitulo que pueden haber muchos oe*/
            var miH2= document.createElement("h2");
            miDiv.appendChild(miH2);
            var contenido= secciones[i].subtitulo[0];
            miH2.appendChild(document.createTextNode(contenido));
        };   

        /* crea el P */
        for (j=0;j<secciones [i].parrafo.length;j++){  
            if (secciones[i].parrafo[j]!==null){

                var miP= document.createElement("p");
                miDiv.appendChild(miP);
                var contenido= secciones[i].parrafo[j];
                miP.appendChild(document.createTextNode(contenido));
            }    
        }
        
             
        for (j=0;j<secciones[i].grafico.length;j++){  
            
            if (secciones[i].grafico[j]!==null){
                /* creamos un envoltorio para alinear las fuentes oe     */

                var miDiv= document.createElement("div");
                miDiv.id= secciones[i].grafico[j].numero[0]+"x";  
                miDiv.className="miGraficoWrap";                  
                document.body.appendChild (miDiv); 

                /* crea el h2 = numero de grafico*/
                var miH2= document.createElement("h2");
                miDiv.appendChild(miH2);
                var contenido= secciones[i].grafico[j].numero[0];
                miH2.appendChild(document.createTextNode(contenido));
                
                /* crea el h1 = numero de grafico*/
                var miH1= document.createElement("h1");
                miDiv.appendChild(miH1);
                var contenido= secciones[i].grafico[j].titulo[0];
                miH1.appendChild(document.createTextNode(contenido));
                /* crea el h3 = numero de grafico*/
                var miH3= document.createElement("h3");
                miDiv.appendChild(miH3);
                var contenido= secciones[i].grafico[j].unidad[0];
                miH3.appendChild(document.createTextNode(contenido));

                  
                    var otroDiv=document.createElement("div");
                    otroDiv.className="miGraficoWrap1"; 
                    miDiv.appendChild(otroDiv);
                    
                    var otroDiv2=document.createElement("div");
                    otroDiv2.className="miGraficoWrap2";
                    otroDiv.appendChild(otroDiv2);
                    
                                /* crea el img*/
                        var miImg= document.createElement("img");
                        miImg.className="miImagen";
                        miImg.id=secciones[i].grafico[j].numero[0];
                        miRuta=secciones[i].grafico[j].ruta[0];
                        otroDiv2.appendChild(miImg);
                        document.getElementById(miImg.id).setAttribute("src",miRuta);
                        /* crea la fuente             */
                        var miP= document.createElement("p");
                        otroDiv2.appendChild(miP);
                        var contenido= secciones[i].grafico[j].fuente[0];
                        miP.appendChild(document.createTextNode(contenido));
                        /* crea las notas */
                        for (k=0;k<secciones [i].grafico[j].nota.length;k++){  
                            if (secciones[i].grafico[j].nota[k]!==null){

                                var miP= document.createElement("p");
                                otroDiv2.appendChild(miP);
                                var contenido= secciones[i].grafico[j].nota[k];
                                miP.appendChild(document.createTextNode(contenido));
                            }    
                        }

                          /* crea el a para la descargar*/
                        var miA= document.createElement("a");
                        miA.className="miDescarga";
                        miA.id=secciones[i].grafico[j].descarga[0];
                        miDescarga=secciones[i].grafico[j].descarga[0];
                        otroDiv2.appendChild(miA);
                        document.getElementById(miA.id).setAttribute("href",miDescarga);
                        document.getElementById(miA.id).appendChild(document.createTextNode("Descargar"));
                        /* document.getElementById(miA.id).appendChild(document.createElement("p")); */

            }    
       
        }        

         /* para crear el pie de pagina */
        /* crea el P */
        for (j=0;j<secciones [i].pie.length;j++){  
            if (secciones[i].pie[j]!==null){

                var miP= document.createElement("p");
                document.body.appendChild (miP);
                /* miDiv.appendChild(miP); */
                miP.className="piePagina";
                var contenido= secciones[i].pie[j];
                miP.appendChild(document.createTextNode(contenido));
            }    
        }
         /**/
    }
};