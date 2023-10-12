fetch("https://api.pexels.com/v1/search?query=page",{
    headers:{
        Authorization: "VNk8XJi4sxoPgApnPBSd7Mbbl0FqytlRgA69QHnC7fovcc7nJ6bDT8Lx"
    }
})

.then((api)=>{
  if (api.ok) {
    console.log("api success",api)
    return api.json()
  }else{
    console.log("errore")
  }
})

.then((value)=>{
  const valore=document.getElementById("button")
  valore.value=value.photos[0]
  
  
})


.catch((errore)=>{
  console.log("errore erroroso",errore)
})



const deleteCard = document.querySelectorAll('.card-body');

deleteCard.forEach(button => {
  button.addEventListener('click', () => {
      
      const card = button.parentElement;
      card.remove();
  });
});

const array=document.getElementById("contenitore-immagini")
images.photos.forEach=((load)=>{
const di=document.createElement("div")
di.innerHTML=`  <div class="col>
                   <div class="card">
                       <img src=${load.src.small}" class="card-img-top" alt="${load.alt}">
                        <div class="card-body">
                         <h5 class="card-title">${load.alt}</h5>
                          <small>${load.id}</small>
                           <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`;
         
  array.appendChild("di")

})





