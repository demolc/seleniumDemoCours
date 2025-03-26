window.addEventListener('load',function(){
  	var xhttppost = new XMLHttpRequest();
	xhttppost.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
	xhttppost.setRequestHeader('Access-Control-Allow-Origin', '*');
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState == 4 && xhttp.status == 200) { 
				var response = xhttp.responseText;
				var posts = JSON.parse(response);
				for(var post of posts){
					var div = document.createElement('div');
					div.id='post-'+post.id
					document.body.appendChild(div);
					var h2 = document.createElement('h2');
					h2.innerHTML = post.id + ' ' + post.title;
					var p1 = document.createElement('p');
					p1.innerHTML = 'Auteur : ' + post.userId;
					var p2 = document.createElement('p');
					p2.innerHTML = post.body;
					var btn = document.createElement('button');
					// efface la courante et affiche le post en ajax et un bouton "tous les posts"
					btn.id = post.id;
					btn.innerHTML = "Afficher uniquement ce post";
					div.appendChild(h2);				
					div.appendChild(p1);				
					div.appendChild(p2);				
					div.appendChild(btn);			
				}
				for(var post of posts){
					document.getElementById(post.id).addEventListener('click', function(){
						console.log(' on click '+ this.id)
						var xhttpPost = new XMLHttpRequest();
						xhttpPost.onreadystatechange = function () {
							if (xhttpPost.readyState == 4 && xhttp.status == 200) {
								// vider/effacer la page HTML
								document.body.innerHTML = "";
								var actualPost = JSON.parse(xhttpPost.responseText)
								var titre = document.createElement('h1');
								titre.innerHTML = "Chapitre 9 - Application OnePage"
								var h1 = document.createElement('h2');
								h1.innerHTML = actualPost.title + '- '+ actualPost.id;
								var h2 = document.createElement('h3');
								h2.innerHTML = 'Auteur : ' + actualPost.userId;
								var p = document.createElement('p');
								p.innerHTML = actualPost.body;
								var btnBack = document.createElement('button');
								btnBack.innerHTML = "Afficher tous les posts";
								btnBack.addEventListener('click', function(){
									location.reload();
								});
								document.body.appendChild(titre);
								document.body.appendChild(h1);
								document.body.appendChild(h2);
								document.body.appendChild(p);
								document.body.appendChild(btnBack);
							}
						};
						xhttpPost.open('GET', 'https://jsonplaceholder.typicode.com/posts/'+this.id, true);
						xhttpPost.setRequestHeader('Access-Control-Allow-Origin', '*');
						xhttpPost.send();
					});
				}
			} 
		};
		xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
		xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
		xhttp.send();
});