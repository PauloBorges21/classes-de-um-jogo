     let btnHeroi = document.getElementById('btnHeroi');  
     btnHeroi.addEventListener('click', function(){
       
       let select = document.getElementById('mySelect');
       let valor = select.value;
       let msg =  document.getElementById('msg');
       let nome = document.getElementById('nome').value;
       let idade = document.getElementById('idade').value;
       let ataque = new Ataque(valor);
       let heroi = new Heroi(nome,idade,valor);
       let tipoAtaque = ataque.atacar();        
       let tipoHeroi = heroi.classeHeroi();
       
       msg.innerText = `O Herói ${nome} com a idade ${idade} o da classe ${tipoHeroi} atacou usando ${tipoAtaque}`;

 });

  