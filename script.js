fetch("instrumentsMusiques.json")
.then(rep=>{
    return rep.json()
})
.then(data=>{
    console.log(data.entreprise.produits)
    afficheLesInstruments(data.entreprise.produits)
    afficheLesServices(data.entreprise.services)
    afficheLesTemoignages(data.entreprise.temoignages)
    afficheleslignes(data)
})

 
  

function afficheLesInstruments(instruments){
    //instruments : le tableau des produits
    //pour chacun des instruments du tableau :
    instruments.forEach(instru =>{
        console.log(instru)
    // construire une petite carte 
    // l'ajouter dans la div qui a l'id instruments
    document.querySelector("#instruments").innerHTML +=`            
    <div class='instr'>
    <img src="${instru.image}" alt="">
    <h3>${instru.nom}</h3>
    <p>${instru.description}</p>
    <a href="">${instru.ach}</a>
    </div>
`
    })

}

function afficheleslignes(obj){
    document.querySelector(".accueil").innerHTML +=`
    <h1>${obj.entreprise.nomCommercial}</h1>
<p>${obj.entreprise.phraseAccroche}</p>
<a href="">${obj.entreprise.texteAppelAction}</a>`
}

function afficheLesServices(Services){
    Services.forEach(s =>{
        console.log(s)
        document.querySelector("#services").innerHTML+=`
        <div class='serv'>
        <img src="${s.image}" alt="">
        <h3>${s.nom}</h3>
        <p>${s.description}</p>
       </div>
        `
    })
}

function afficheLesTemoignages(Temoignages){
    Temoignages.forEach(t =>{
        console.log(t)
        document.querySelector("#temoignages").innerHTML+=`
        <div class='av'>
        <h3>${t.prenom}</h3>
        <h4>${t.typeExperience}</h4>
        <p>${t.commentaire}</p>
        <p>${t.note}</p>
        </div>
        `
    })
}