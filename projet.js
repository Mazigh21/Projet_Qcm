document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("quiz-form");
        const alertCn = document.getElementById("alert");
    
        // on utilise la méthode addEventListener  permet d'attacher un écouteur d'événement à élément du DOM form (le formulaire de qcm) pour que une fois on clique sur le bouton check on rajoute des classes css ou on les supprime selon les réponses sur les questions 


        form.addEventListener("submit" ,function(pr) {
           
             pr.preventDefault(); 
             
              // le tableau Selectedans va avoir les réponses séléctionnées 
              
             var Selectedansw = [] ;
    
             for (var i = 1; i <= 3; i++) {
                var inputName = "answer-" + i;
                var inputElement = document.querySelector(
                  'input[name= "' + inputName + '"]:checked'
                );
          
                if (inputElement) {
                    Selectedansw.push(inputElement.value);
                }
              }
    
          // on parcours le tableau Selectedansw avec foreach et pour chaque itération on initilaise la variable rightanswer avec la reponse correcte de chaque question qui a (value = true) et on verfie si la reponse séléctionné est correcte pour ajouter la class css "correct_answer" et enlevé la classe " wrong_answer " comme ca ca change de couleur en vert sinon on fait le contraire et ca devient rouge 

              Selectedansw.forEach(function ( ans, index)  {
                 var rightanswer = document.querySelector(
                        ".question-item:nth-child(" + (index + 1) + ') .answer[value="true"]'
                    );
                    var question = rightanswer.closest(".question-item") ; 
    
                    if( ans !== "true"){
                        question.classList.remove("correct_answer");
                        question.classList.add("wrong_answer");
                    }else {
                        question.classList.remove("wrong_answer");
                        question.classList.add("correct_answer");
                    }
                  }
              ); 
            
       //une fonction pour verifier que tout les reponses séléctionés sont corrects 
    
              function check_answers( Selectedansw ){
                let tst = true ;
                Selectedansw.forEach((el)=>{
                  if(el === 'false'){tst = false}
                })
                return tst
            }

            // si la fonction retourne true donc les out les reponses séléctionés sont corrects alors on ajoute la classe cacher alerte pour  montrer le message de congralatulations 
    
    
            if (Selectedansw.length === document.querySelectorAll(".question-item").length) {
                if(check_answers(Selectedansw)) {
                  alertCn.classList.remove("cacher_alerte");
                }else{
                  alertCn.classList.add("cacher_alerte");
          
                }
            }
    
        
        } )  
    
    })
    