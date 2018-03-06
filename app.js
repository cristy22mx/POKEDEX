fetch('https://api.pokemontcg.io/v1/cards')
   .then(function (response) {
       return response.json();
   })
   .then(function (data) {
       //console.log('Request successful', data);
       const results = data.cards;
  
       
       let output = ``;

       results.forEach((element, index)=>{

       let name = element.name;
       let images = element.imageUrlHiRes;
       

        output +=    
        `<div class="card" style="width: 30rem;">
        <div class="card-block">
        <img class="card-img-top" src="${imageUrlHiRes}">
        <h4 class="card-title">Personaje: ${name}</h4>
        </div>
        </div>`

        $("#sectionStarship").html(output);


       })

     })



   .catch(function (error) {
       console.log('Request failed', error)
   });




