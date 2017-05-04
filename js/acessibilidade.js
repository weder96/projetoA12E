//add grupo A
var tam = 15;
var tam2=20;
var testeContraste=0;
function mudaFonte(tipo,elemento){
	
	
	if (tipo=="mais") {
		if(tam<21) 
			tam+=1;
		createCookie("fonte",tam,365);
		document.getElementById("txt_home").style.fontSize = tam+"px";
	} else
	if (tipo=="menos") {
		if(tam>12) tam-=1;
		createCookie("fonte",tam,365);		
		document.getElementById("txt_home").style.fontSize = tam+"px";
	}
	else {
		tam=15;
		createCookie("fonte",tam,365);
		document.getElementById("txt_home").style.fontSize = tam+"px";
	}	
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	} else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(";");
	for(var i=0;i < ca.length;i++)
	{
		var c = ca[i];
		while (c.charAt(0)==" "){ 
			c = c.substring(1,c.length);
			if(c.indexOf("contraste")>-1){
				testeContraste=1;					
			}		
		}
		
		if(testeContraste==1){
			console.log(testeContraste);
			$('body').addClass('contraste');
			createCookie("contraste","contraste",365);
			e.preventDefault();
		}
		
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		
	}
	return null;
}



function eraseCookie(name)
{
createCookie(name,'',-1); 
console.log(name);
} 




// Atalhos
function gotoConteudo(){
    $("#conteudo_ref").focus();
    return false;
}

function gotoMenu(){
    $("#menu_ref").focus();     
    return false;
} 

function gotoAcessibilidade(){
    window.location.assign("acessibilidade.html")   
    return false;
} 

function gotoMapaDoSite(){
    window.location.assign("mapa-do-site.html")
    return false;
} 

// Contraste
function configContrastePadrao(){
    if($.cookie("contraste") && $.cookie("contraste") != ""){
        $("body").addClass($.cookie("contraste"));
    }
}

function selecionaContraste(){   
    var  contraste = $.cookie("contraste") || "";
    
    if (contraste == "") {  
        $("body").addClass("contraste");
        $.cookie("contraste", "contraste");
    }else{
        $('body').removeClass("contraste")
        $.cookie("contraste", "");
    }
}

$(document).ready(function() {
    configContrastePadrao();
    
    /* atalhos */
    $(document).bind("keydown", "Alt+Shift+1", gotoConteudo);
    $(document).bind("keydown", "Alt+1", gotoConteudo);   
        
    $(document).bind("keydown", "Alt+Shift+2", gotoMenu);
    $(document).bind("keydown", "Alt+2", gotoMenu);
    
    $(document).bind("keydown", "Alt+Shift+4", gotoAcessibilidade);
    $(document).bind("keydown", "Alt+4", gotoAcessibilidade); 

    $(document).bind("keydown", "Alt+Shift+5", selecionaContraste);
    $(document).bind("keydown", "Alt+5", selecionaContraste); 

    $(document).bind("keydown", "Alt+Shift+6", gotoMapaDoSite);
    $(document).bind("keydown", "Alt+6", gotoMapaDoSite);     
    
    /* contraste */
    $("#contraste").click(function(){
        selecionaContraste(); 
        return false;
    });
    
    /* impressao */
    $("#imprimir").click(function(){ 
        window.print();
        return false;
    });
    
    /* voltar */
    $("#voltar").click(function(){ 
        history.go(-1);
        return false;
    });

});