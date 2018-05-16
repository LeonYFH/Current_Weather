$(document).ready(function(){
		var dateWithouthSecond = new Date();
		document.getElementById("demo").innerHTML = dateWithouthSecond.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit',hour12: false});
$('#submitWeather').click(function(){
//GET_current_weather
	if(city!=''){
		
		var city = $("#city").val();
		var forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=' +city +'&units=metric'+ 
			'&APPID=1ef909df6cf36845cf4a229ed9cfdfd0';
  
		$.getJSON(forecastAPI, function(data){
		for(var i = 0 ;i < data.list.length ; i++)
		{
			function show(data){
			return "<h3><strong>Weather Forecast</strong>: " + data.list[i].weather[0].description +"</h3>";
			}
		}
		});
		
		$.ajax({
		  url:'https://api.openweathermap.org/data/2.5/weather?q=' +city +'&units=metric'+ 
		  '&APPID=1ef909df6cf36845cf4a229ed9cfdfd0',
		  type:"GET",
		  dataType:"jsonp",
		  success:function(data){
//Formula						
				kTemp = data.main.temp;
				var cTemp;
				var kTemp;
				var tempToggle;
				fTemp = ((kTemp)*(9/5)-459.67).toFixed(1);
				cTemp = (kTemp-273).toFixed(1);
				
				var icon = data.weather[0].icon;
				var w_id = data.weather[0].id;
				var local = new Date(data.dt * 1000);
				var widget=show(data);
				var windSpeed = data.wind.speed; 
				windSpeed=(2.237*(windSpeed)).toFixed(1);
//ICON				
				$("#w_id").addClass("owf-5x owf owf-" +data.weather[0].id);
				var sunRise = new Date(data.sys.sunrise * 1000);
				var sunSet = new Date(data.sys.sunset * 1000);
				
				
				var dataString =  
				document.getElementById("city_n").innerHTML = data.name;
				document.getElementById("weather").innerHTML = data.weather[0].description;
				document.getElementById("fTemp").innerHTML = data.main.temp.toFixed(1)+'&#8451;';
				document.getElementById("humidity").innerHTML = "Humidity"+":"+data.main.humidity+"%";
				document.getElementById("windSpeed").innerHTML = "Wind Speed"+":"+data.wind.speed+"mph";
				document.getElementById("w_id").innerHTML = '';
				document.getElementById("sunRise").innerHTML = "Sunrise-set"+" : "+ new Date(data.sys.sunrise * 1000).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit',hour12: false})+ " - "+
				new Date(data.sys.sunset * 1000).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit',hour12: false});
				}
		});
	}else{
		  $("$error").html('Field cannot be empty');
		}   
});			

//RUN

function show(data){
	return 
		   
	}	   

//GET_current_DATA
	var long;
	var lat;
	
//Coords	
	if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){

	  long = position.coords.longitude;
	  lat = position.coords.latitude;
	  
	  $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
//API
	var api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=1ef909df6cf36845cf4a229ed9cfdfd0'
//print
	$.getJSON(api, function(data){
			
		var fTemp;
		var cTemp;
		var kTemp;
		var tempToggle;	
		var weather = data.weather[0].description;
		kTemp = data.main.temp;
		var windSpeed = data.wind.speed;
		var city = data.name;
		var humidity= data.main.humidity;
		var w_id = data.weather[0].id;
		var time = new Date();
		var sunRise = new Date(data.sys.sunrise * 1000);
		var sunSet = new Date(data.sys.sunset * 1000);
//Formula	
		fTemp = ((kTemp)*(9/5)-459.67).toFixed(1);
		cTemp = (kTemp-273).toFixed(1);
//print		
		console.log(city);
		$("#sunRise").html("Sunrise-set"+" : "+ sunRise.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit',hour12: false})+ " - "+
		sunSet.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit',hour12: false}));
		//$("#sunSet").html("SunSet"+" : "+ sunSet.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit',hour12: false}));
		$('#city_n').html(city); 
		$('#weather').html(weather);
		//ICON    
		$("#w_id").addClass("owf-5x owf owf-"+data.weather[0].id);
		$('#fTemp').html(fTemp+' &#8457;');
		$("#humidity").html('Humidity :'+ humidity+ '%');
		windSpeed=(2.237*(windSpeed)).toFixed(1);
		$("#windSpeed").html("Wind Speed"+": "+ windSpeed +" mph");
//toggle F
		
		$('#fTemp').click(function(){
			
			if(tempToggle===false){
				$('#fTemp').html(fTemp+' &#8457;');
				tempToggle=true;
			}
			else{
				$('#fTemp').html(cTemp+' &#8451;');
				tempToggle=false;
			}
		});
		
		
		
		
		
		
});

});	
	
	
}

});
	
