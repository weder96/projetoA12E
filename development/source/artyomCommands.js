 /**
  * Artyom commands examples. Just add this file after artyom is loaded in your document.
  * You can save all your commands in this file or simply follow the workflow :
  *
  * @copyLeft Weder Mariano de Sousa 2017
  * @author Carlos Delgado - www.ourcodeworld.com
  * @author pt-BR :Weder Mariano de Sousa 
  * @param {type} window
  * @see https://sdkcarlos.github.io/sites/artyom.html
  * @returns Artyom
  */
(function(window){
    'use strict';

    /**
     * Example Artyom Commands
     * @type Array
     */

    var artyomCommands = [
        //Simple Command Example
        {
            indexes: ['olá'],
            action : function(i){
                artyom.say("Ola, Meu nome e Midiativo.",{
                    onStart: function(){
                        console.log("Speaking presentation");
                    },
                    onEnd: function(){
                        console.log("All that i've to say has been said.");
                    }
                });
            }
        }, {
            indexes: ['significado'],
            action : function(i){
               artyom.say("De acordo com o W3C World Wide Web Consortium, Acessibilidade na Web significa garantir que todas as pessoas, incluindo pessoas com deficiência, possam utilizar a Web. Mais especificamente, significa permitir que pessoas com deficiência consigam perceber, compreender, navegar, interagir e contribuir com a Web. Uma Web acessível beneficia a todos, incluindo pessoas idosas, pessoas com pouca habilidade em utilizar a Web, aqueles com uma conexão mais lenta, entre outros.",{
                    onStart: function(){
                        console.log("Speaking presentation");
                    },
                    onEnd: function(){
                        console.log("All that i've to say has been said.");
                    }
                });
            }
        },
        //Continue adding your own commands here
        {
          indexes: ['apagar'],
            action : function(i){
                artyom.say("apagar",{
                    onStart: function(){
                         selecionaContraste(); 
                         return false;
                    },
                    onEnd: function(){
                        console.log("All that i've to say has been said.");
                    }
                });
            }
        },
         //Continue adding your own commands here
        {
          indexes: ['acender'],
            action : function(i){
                artyom.say("acender",{
                    onStart: function(){
                        selecionaContraste(); 
                          console.log("acender");
                         return false;
                    },
                    onEnd: function(){
                        console.log("All that i've to say has been said.");
                    }
                });
            }
        }
    ];

    artyom.addCommands(artyomCommands);

    /**
     * Or use the shorter and cleaner method :
     */
     artyom.on(['obrigado']).then(function(i){
         alert("teste");
        artyom.say("Por nada estou aqui para te auxiliar");
    });

   artyom.on(['início']).then(function(i){
        artyom.say("inicio");
           window.location.assign("index.html")   
             return false;
    });

      artyom.on(['aumentar']).then(function(i){
        artyom.say("aumentar");
        mudaFonte('mais'); return false;
    });

       artyom.on(['normal']).then(function(i){
        artyom.say("normal");
        mudaFonte('normal'); return false;
    });


       artyom.on(['diminuir']).then(function(i){
        artyom.say("diminuir");
        mudaFonte('menos'); return false;
    });

    artyom.on(['rodapé']).then(function(i){
        artyom.say("rodapé");
         //alert('rodapé');
          window.location.assign("#rodape_ref");
        return false;
    });


   artyom.on(['topo']).then(function(i){
        artyom.say("topo");
        // alert('topo');
        window.location.assign("#menu_ref");
        return false;
    });

    artyom.on(['conteúdo']).then(function(i){
        artyom.say("conteúdo");
         //alert('conteúdo');
        window.location.assign("#conteudo_ref");
        return false;
    });

      artyom.on(['acessibilidade']).then(function(i){
        artyom.say("acessibilidade");
           window.location.assign("acessibilidade.html")   
             return false;
    });

    artyom.on(['quem somos']).then(function(i){
        artyom.say("quemsomos");
           window.location.assign("quem-somos.html")   
             return false;
    });


    artyom.on(['notícias']).then(function(i){
        artyom.say("noticias");
           window.location.assign("noticias.html")   
             return false;
    });

    artyom.on(['manuais']).then(function(i){
        artyom.say("manuais");
           window.location.assign("manuais.html")   
             return false;
    });

   artyom.on(['cursos']).then(function(i){
        artyom.say("cursos");
           window.location.assign("cursos.html")   
             return false;
    });


artyom.on(['projetos']).then(function(i){
        artyom.say("projetos");
           window.location.assign("projetos.html")   
             return false;
    });


    artyom.on(['publicações']).then(function(i){
        artyom.say("publicacoes");
           window.location.assign("publicacoes.html")   
             return false;
    });

    artyom.on(['contato']).then(function(i){
        artyom.say("contato");
           window.location.assign("contato.html")   
             return false;
    });
    console.log(artyom.getAvailableCommands());
})(window);
