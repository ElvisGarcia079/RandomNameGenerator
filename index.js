let listOfApprentices = [
    "Christopher",
    "Igmer",
    "Kris",
    "Edgard",
    "Marcus",
    "William",
    "Shay",
    "Patrick",
    "Hannah",
    "Bryan",
    "Kadie",
    "Danielle",
    "Sharee",
    "Zuri",
    "Ahn",
    "Azeb",
    "Farhan",
    "Giovanni",
    "Lavor",
    "Rita",
    "Sheree",
    "Tahar",
    "Yohonna",
    "Adrian",
    "Stingilicious"
  ]
  
  
  
  function getRandomInt(limit) {
    return Math.floor(Math.random() * limit);
  }
  
  function presenter() {
    let randNum = getRandomInt(listOfApprentices.length);
    let presenter = listOfApprentices[randNum];
    console.log("The next presenter: ", presenter);

    
    if(listOfApprentices.length > 1){
        document.querySelector("#presenter").innerHTML = "The Chosen Presenter: " + presenter + "!";
        document.querySelector("#leftToPresent").innerText = "There are " + (listOfApprentices.length - 1) + " apprentices left to present";

    }else if(listOfApprentices.length == 1){
        document.querySelector("#presenter").innerText = "The Final Presenter: " + presenter;
        document.querySelector("#leftToPresent").innerText = "There are no more apprentices left to present";
        document.querySelector("#nameBtn").value = "Wrap Up!"
        
    }else{
        document.querySelector("#presenter").innerText = "Congrats on all your excellent presentations!";
        let leftToPresent = document.querySelector("#leftToPresent");
        let nameBtn = document.querySelector("#nameBtn");
        document.querySelector("#happyCharmander").src = "partyChar.jpeg";
        document.querySelector("#happySquirtle").src = "partySquirtle.jpeg";
        document.querySelector("#happyBulbasaur").src = "partyBulb.jpeg";
        leftToPresent.remove();
        nameBtn.remove();
        document.querySelector("body").style = "background-image: url('CodingBackground.jpeg');"
    }
    
    
    listOfApprentices.splice(randNum, 1);
    
    
  
    return listOfApprentices;
  }