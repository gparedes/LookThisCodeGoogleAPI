function GenerarGrafica() 
{
//Generamos la instancia del grafico que obtendrá los datos desde el spreadsheet
        var grafico = new google.visualization.ChartWrapper({
          //Colocamos el elemento importante, que es nuestra spreadsheet de Google Doc
          //Luego tenemos las opciones del tipo de grafico y finalmente el contenedor donde graficaremos.
          dataSourceUrl: 'https://docs.google.com/spreadsheet/ccc?key=0AjAvb4VffxhvdFVrN1NUeWRyRjJ6bVhVa2hUNEs3UlE&hl=en_US',
          chartType: 'PieChart',
          containerId: 'visualization'
        });
//Finalmente ejecutamos el método de dibujo
        grafico.draw();
}
//Muy Simple!
//Nicolás Bortolotti