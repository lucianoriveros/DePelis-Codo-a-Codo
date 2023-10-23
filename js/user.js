var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(response => response.json())
.then(users => {


    cad=`
        
            <h4><img class="izquierdapop" src="./img/usupremium.png" alt="usup"> ${users[0].name}  </h4>
            <h4>${users[1].name}  </h4>
            <h4> ${users[2].name}  </h4>
           
             
        `
        document.getElementById("userpremium").innerHTML=cad
    

});

