$(document).ready(function(){
    $(".btns").on("click", function(){
        var inputs = $(".inputs").val();
        $.get("http://api.openweathermap.org/data/2.5/weather?q="+inputs+"&appid=8440d727609afc858d0c00abe53081da&units=metric", function(data, status){
      console.log(data)
      $(".cityName").html(data.name);
      $(".currentTemp").html(data.main.temp);
      $(".feels_like").html(data.main.feels_like);
      console.log(data.weather.main)
      $(".weatherMain").html(data.weather[0].main);
      $(".temp_min").html(data.main.temp_min);
      $(".temp_max").html(data.main.temp_max);
      $(".humidity").html(data.main.humidity);
      $(".windSpeed").html(data.wind.speed);

      console.log(data.main.temp)
      if(data.main.temp>=20){
        $(".home").css("backgroundColor", "yellow")
      }
      else if(data.main.temp<20){
        $(".home").css("backgroundColor", "blue")
        $(".home").css("color", "white")
      }
      var weatherIcon = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png';
      $(".iconDiv .weatherIcon").attr("src", weatherIcon);
    });
   })
   $("btns").click(function(){
    });
})