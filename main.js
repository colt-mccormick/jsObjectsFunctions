
var favAnimal = {
    name: "zoe",
    animal: "cat"
};

console.log("favAnimal: ", favAnimal.animal);//prints cat, this is industry standard
console.log("favAnimal: ",favAnimal['animal']);//prints cat

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
]

console.log("instructorPets: ", instructorPets);

//loop through instructorPets and print petName as h1 tage to that divd
var petNameHtml = document.getElementById("pet-names");
for(i=0; i < instructorPets.length; i++){
    petNameHtml.innerHTML += '<h1>' + instructorPets[i].petName + '</h1>'; 
}