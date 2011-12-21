 function CargarMapa() {
     //Determinamos donde vamos a insertar el mapa 
        var mapa = document.getElementById('mapaVisual');
        //Utilizamos como parametro el elemento donde vamos a insertar el mapa y luego generamos la instancia del objeto.
        //Podremos colocar coordenadas, un escenario de zoom y el tipo.
        var map = new google.maps.Map(mapa, {
          center: new google.maps.LatLng(-34.608333, -58.371944),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        
      }
      
      //Cargamos la función del mapa
      google.maps.event.addDomListener(window, 'load', CargarMapa);
      
      //Simple y Flexible
      //Nicolás Bortolotti