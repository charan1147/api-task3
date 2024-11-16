const Randomapi="https://foodish-api.com/api";


function displayRandomFood(data){
    const FoodCOntent=document.getElementById("RandomFood")
    FoodCOntent.innerHTML=""
    const img=document.createElement("img")
    img.src=data.image
    img.alt="A Random Food Dish Image"
    FoodCOntent.appendChild(img)
}

function fetchRandomFood(){
    fetch(Randomapi).then((response)=>{
        return response.json()
    }).then((data)=>{
        displayRandomFood(data)
    }).catch((error)=>{
        console.log("Error Feching image failed",error);
        FoodCOntent.innerHTML="<p class=text-danger>Error loading image</p>"
        
    })
}