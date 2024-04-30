fetch("instrumentsMusiques.json")
.then(rep=>{
    return rep.json()
})
.then(data=>{
    console.log(data.entreprise.produits)
    afficheLesInstruments(data.entreprise.produits)
    afficheLesServices(data.entreprise.services)
    afficheLesTemoignages(data.entreprise.temoignages)
})

function afficheLesInstruments(instruments){
    //instruments : le tableau des produits
    //pour chacun des instruments du tableau :
    instruments.forEach(instru =>{
        console.log(instru)
    // construire une petite carte 
    // l'ajouter dans la div qui a l'id instruments
    document.querySelector("#instruments").innerHTML +=`            
    <div>
    <img src="${instru.image}" alt="">
    <h3>${instru.nom}</h3>
    <p>${instru.description}</p>
    </div>
`
    })
}

function afficheLesServices(Services){
    Services.forEach(s =>{
        console.log(s)
        document.querySelector("#services").innerHTML+=`
        <div>
        <img src="" alt="">
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
        <div>
        <h3>${t.prenom}</h3>
        <h4>${t.typeExperience}</h4>
        <p>${t.commentaire}</p>
        <p>${t.note}</p>
        </div>
        `
    })
}