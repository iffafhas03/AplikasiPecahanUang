function hitung(){
   var JmlUangid = document.getElementById("JmlUang").value;
   var JmlSeratusid = document.getElementById("JmlSeratus").value;
   var JmlLimaid = document.getElementById("JmlLima").value;
   var JmlDuaid = document.getElementById("JmlDua").value;

   var JmlUang = parseInt(JmlUangid);
   var JmlSeratus = parseInt(JmlSeratusid);
   var JmlLima = parseInt(JmlLimaid);
   var JmlDua = parseInt(JmlDuaid);

//hitung lembar 100rb
   var kurangA=0;
   var lblSeratus =0;
   if(JmlUang>=100000){
	var bagiSeratus = JmlUang%100000;
	lblSeratus = (JmlUang - bagiSeratus)/100000;

	if(lblSeratus>JmlSeratus){
		lblSeratus=JmlSeratus;
		kurangA=JmlUang-(100000*lblSeratus);
    JmlSeratus= JmlSeratus-lblSeratus;
	}else{
		lblSeratus = lblSeratus;
		kurangA=JmlUang-(100000*lblSeratus);
    JmlSeratus= JmlSeratus-lblSeratus;
	}

   }else{
	kurangA=JmlUang;
  JmlSeratus= JmlSeratus-lblSeratus;
   }


//hitung lembar 50 rb
   var kurangB=0;
   var lblLima =0;
   if(kurangA>=50000){
	var bagiLima = kurangA%50000;
	var lblLima = (kurangA - bagiLima)/50000;

	if(lblLima>=JmlLima){
		lblLima=JmlLima;
		kurangB=kurangA-(50000*lblLima);
    JmlLima= JmlLima-lblLima;
	}else{
		lblLima=lblLima;
		kurangB=kurangA-(50000*lblLima);
    JmlLima= JmlLima-lblLima;
	}

   }
   else{
		kurangB=kurangA;
    JmlLima= JmlLima-lblLima;
	}

//hitung lembar 20
   var kurangC=0;
   var lblDua =0;
   if(kurangB>=20000){
	var bagiDua = kurangB%20000;
	var lblDua= (kurangB - bagiDua)/20000;

	if(lblDua>=JmlDua){
		lblDua=JmlDua;
		kurangC= kurangB-(20000*lblDua);
    JmlDua= JmlDua-lblDua;
	}else{
		lblDua=lblDua;
		kurangC=kurangB-(20000*lblDua);
    JmlDua= JmlDua-lblDua;
		}

   }else{
		kurangC=kurangB;
    JmlDua= JmlDua-lblDua;
   }

   var a;
   if(lblSeratus!=0){
     a=lblSeratus.toString() +" Pecahan 100 rb, ";

   } else{
     a=" ";
   }

   var b;
   if(lblLima!=0){
     b=lblLima.toString() + " pecahan 50 rb, ";
   } else{
     b=" ";
   }

   var c;
   if(lblDua!=0){
     c=lblDua.toString() + " pecahan 20rb."
   }else{
     c=" ";
   }

   var sisa= JmlSeratus*100000 + JmlLima*50000 +JmlDua*20000;

   document.frm.hasil.value =  a + b + c ;
   document.frm.sisa.value = parseInt(sisa);





}
