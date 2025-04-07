const joueurs = [];

function ajouterJoueur(data){
	const name = data.get('name');
	const age = data.get('age');
	const avatar = data.get('avatar');
	joueurs.push({name, age, avatar});
}

function createTab(div){
	let html = "<table style='width:100%'> \
				<tr> \
					<td >name</td> \
					<td>age</td> \
					<td>avatar</td> \
				</tr>";
	for (let joueur of joueurs){
		html += `<tr> \
							<td>${joueur.name}</td> \
							<td>${joueur.age}</td> \
							<td><img src='${joueur.avatar}' width="50" /></td> \
						</tr>`;
	} 
	html += "</table>";
	div.innerHTML = html;
}
function onClick(e){
	e.preventDefault();
	const formData = new FormData(e.target);
	ajouterJoueur(formData);
	// const name = formData.get('name');
	// const age = formData.get('age');
	// const avatar = formData.get('avatar');
	
	// joueurs.push({name, age, avatar});
//	alert(`nom : ${joueurs[0].name}`);
//	console.log(joueurs);
	let div = document.getElementById('joueurs');
//	document.getElementById('joueurs').innerHTML = "<b>New Text</b>";
	createTab(div);
}
document.getElementById('form').addEventListener('submit', onClick);