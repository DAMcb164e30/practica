// JavaScript Document
$(document).ready(function(e) {
// document.addEventListener("deviceready",function(){
	$("#btn_sonido").on("click",function(){
	 if( $("#btn_sonido").hasClass('ui-icon-audio'))
	  { 
	   // sonido= 0;
	   $("#btn_sonido").removeClass('ui-icon-audio');	
	   $("#btn_sonido").addClass('ui-icon-delete');
	   alert('el sonido se apagó');
	  }
	 else
	  {
	   // sonido= 1;
	   $("#btn_sonido").removeClass('ui-icon-delete');
	   $("#btn_sonido").addClass('ui-icon-audio');
	   alert ('el sonido se prendió ');
	   navigator.notification.beep(1);
	  } 
	  
	  
	  $("#btn_vibrar").on("click",function(){  
	  if( $("#btn_vibrar").hasClass('ui-icon-power'))
	  { 
	   // vibrar= 0;
	   $("#btn_vibrar").removeClass('ui-icon-power');	
	   $("#btn_vibrar").addClass('ui-icon-delete');
	   alert('vibrador apagado');
	  }
	 else
	  {
	   // vibrar= 1;
	   $("#btn_vibrar").removeClass('ui-icon-delete');
	   $("#btn_vibrar").addClass('ui-icon-power');
	   alert ('el vibrador se prendió ');
	   navigator.notification.beep(1);
	  }   
	  
	  }); //clic en boton vibrar
	}); //click a boton sonido
// }); //deviceready
});   //ready

