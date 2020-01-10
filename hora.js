function actualizarHora(){
    var fecha=new Date();
    var hora=fecha.getHours();
    var minutos=fecha.getMinutes();
    var diaSemana=fecha.getDay();
    var dia=fecha.getDate();
    var mes=fecha.getMonth();
    var anio=fecha.getFullYear();
    if(minutos<10){
        minutos="0"+minutos;
    }
    if(hora<10){
        hora="0"+hora;
    }
    document.getElementById('horas').innerHTML=hora+":"+minutos;
    var semana=['dom','lun','mar','mie','jue','vie','sab'];
    var meses=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    document.getElementById('fecha').innerHTML=semana[diaSemana]+" "+dia+" "+meses[mes]+" "+anio;
    }
    actualizarHora();
    var intervalo=setInterval(actualizarHora,1000);