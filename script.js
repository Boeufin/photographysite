window.addEventListener("load", loaded());

function loaded(){
	//generateIndividual("IMG_0010.HEIC", "ICY", "next");
}

function generateIndividual(imgSRC, imgName, divID){
	//container with unique ID
	const container = document.createElement("div");
	container.setAttribute("id", divID);
	document.getElementById("individual").appendChild(container);

	//title
	const title = document.createElement("h1");
	title.innerText = imgName;

	//image
	const picture = document.createElement("img");
	picture.setAttribute("src", imgSRC);


	document.getElementById(divID).appendChild(title);
	document.getElementById(divID).appendChild(picture);
}