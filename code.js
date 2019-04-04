//Ejercicio Swipe 
$(document).on("mobileinit", function(){


		$(function(){


	        $("body").bind("swipeleft", function(e) {
            $.mobile.changePage( '#dialog', { transition: "slide" });
			});

			$("body").bind("swiperight", function(e) {
            $.mobile.changePage( '#info', { transition: "slide" });
			});

		});

});


/*
$(document).on("mobileinit",function(){
	$(function(){

		//Cargar el cont. de info.html con clic. 
		$("carga").on('tap', function(event) {

			$.ajax('info.html')
				.done(function(response){
					$("#infocont").html(response);
				});
		});

		//Escribir el modo en que está el dispositivo (ESCUCHADOR DE EVENTOS, DETECTA LA ORIENTACION DEL MOVIL)
		$(window).on("orientationchange", function(event){
			$("#orient").text("Este dispositivo está en modo" + event.orientation);
		});

		// Forzamos la ejecución al cargar
		$(window).orientationchange();

		//pagecontainer 

		$("body").pagecontainer({
		beforechange: function(event, ui){
			alert("cargando...");
		},

		change: function(event,ui){
			alert("cambio");
		}

		});

		//Swipe (escuchador de eventos) Al hacer swipe con el dedo, reacciona. Si además, concreto con swiperight y swipeleft, puede reaccionar de manera distinta en funcion de la dirección.
		$("#elem").on("swipeleft", function(){
			$(this).css("background-color", "red");
		});

		$("#elem").on("swiperight", function(){
			$(this).css("background-color", "green");
		});


		//tap- Tocar la pantalla con el dedo y taphold- Tocar la pantalla con el dedo y mantener. 
		$("#elem2").on("tap", function(){
			$(this).css("font-size", "+=1");
		});
		$("#elem2").on("taphold", function(){
			$(this).css("font-size", "+=2");
		});
	});

});
*/