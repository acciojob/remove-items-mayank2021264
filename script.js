//your JS code here. If required.
let button = document.getElementById('btn');

function removeColor(event){
	let select = document.getElementById('colorSelect');
	let color = select.value;
	console.log(color);
	select.remove(select.selectedIndex);
	console.log("removed",color);
}

button.addEventListener('click', removeColor);