console.log("functions")

//function expressions
var a = function(){
    console.log("a: ", 3);
}

//function declarations
function b(){
    console.log("b: ", 2)
}
var num = 3; 

//monkeyButt is a temporary variable name; only exists inside function
function numPrinter(monkeyButt){
    console.log("my number: ", monkeyButt);
}

numPrinter(num);
numPrinter(6);
numPrinter("turtle");

function cat(){
    return "love them";
}

var message = cat();
console.log("message: ", message);

var instructorPets = [      
    {instructorName: "Zoe",
    petName: "Biff",
    animalType:"evil cat",
    isFavorite: false
    },
    {instructorName: "Zoe",
    petName: "Whiskey",
    animalType:"cat",
    isFavorite: true
    },
    {instructorName: "Lauren",
    petName: "Frankie",
    animalType:"sweet dog",
    isFavorite: true
    },
    {instructorName: "Callan",
    petName: "Seymour",
    animalType:"one eyed dog",
    isFavorite: true
    },
    {instructorName: "Callan",
    petName: "Wiley",
    animalType:"destructive dog",
    isFavorite: false
    }
];


/*<div class="pet notFavorite">
        <h1>Biff</h1>
        <h2>Owner: Zoe</h2>
        <h2>Type: Evil-Cat</h2>
*/

function domStringMaker(animalArray){
    for(i=0; i < animalArray.length; i++){
       var string = "";
       if(animalArray[i].isFavorite){
       string += "<div class='pet isFavorite'>"; 
       }else{
        string += "<div class='pet notFavorite'>";
       }
       string += "<h1>" + animalArray[i].petName + "</h1>";
       string += "<h2>Owner: " + animalArray[i].instructorName +"</h2>";
       string += "<h2>Type: " + animalArray[i].animalType + "</h2>";
       string += "</div>"
       printToDom(string, "pet-names");
    }
}

function printToDom(stringToPrint, divId){
   document.getElementById(divId).innerHTML += stringToPrint; 
 }



domStringMaker(instructorPets);
