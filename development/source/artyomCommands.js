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
            indexes: ['Olá'],
            action : function(i){
                artyom.say("Ola, Meu nome e Artyon.",{
                    onStart: function(){
                        console.log("Speaking presentation");
                    },
                    onEnd: function(){
                        console.log("All that i've to say has been said.");
                    }
                });
            }
        },
        //Smart Command Example
        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        },
        //Continue adding your own commands here
        {
          indexes: ['apagar'],
            action : function(i){
                artyom.say("apagar",{
                    onStart: function(){
                        alert('apager');
                        console.log("apagar");
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
                        alert('acender');
                        console.log("acender");
                    },
                    onEnd: function(){
                        console.log("All that i've to say has been said.");
                    }
                });
            }
        }
        ,
         //Continue adding your own commands here
        {
          indexes: ['topo'],
            action : function(i){
                artyom.say("topo",{
                    onStart: function(){
                        alert('topo');
                        console.log("topo");
                    },
                    onEnd: function(){
                        console.log("All that i've to say has been said.");
                    }
                });
            }
        }
        ,
         //Continue adding your own commands here
        {
          indexes: ['menu'],
            action : function(i){
                artyom.say("menu",{
                    onStart: function(){
                        alert('menu');
                        console.log("menu");
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

    artyom.on(['rodapé']).then(function(i){
        artyom.say("rodapé");
         alert('rodapé');
    });

    artyom.on(['conteúdo']).then(function(i){
        artyom.say("conteúdo");
         alert('conteúdo');
    });

      artyom.on(['acessibilidade']).then(function(i){
        artyom.say("acessibilidade");
           window.location.assign("acessibilidade.html")   
             return false;
    });


    artyom.on(['Clean the panel']).then(() => {
        $("#log-panel").empty();
    });

    artyom.on(['Repeat after me *'] , true).then(function(i, wildcard){
        artyom.say(wildcard);
    });

    // Matches "regular expressions" case insensitive
    artyom.on([/regular expressions/i], true).then(function(){
        artyom.say("The usage of regular expressions is allowed in the smart commands");
    });

    console.log(artyom.getAvailableCommands());
})(window);
