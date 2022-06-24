const marvel ={
  render:()=> {
    
   const urlAPI ='https://gateway.marvel.com:443/v1/public/characters?ts=1000&apikey=5365f61eb34bee3aba647988c40bb139&hash=cfac8cbc3c747ebf764281b741b4ded6';
   const container = document.querySelector('#marvel-row');
  let contentHTML='';

    fetch(urlAPI)
    .then (res => res.json())
    .then ((json) => {
      for(const hero of json.data.results){
        let urlHero = hero.urls[0].url;
        contentHTML+=`
         <div class="col-md-4">
                      <a href="${urlHero}" target="_blank">
                      <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                     </a>
                     <h3 class="tittle">${hero.name}</h3>
          </div>`;
      }
      container.innerHTML=contentHTML;
      //console.log(json, 'RES.JSON')
    })

  }

};

marvel.render();