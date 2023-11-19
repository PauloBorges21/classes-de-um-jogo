class Ataque 
{
   constructor(heroiTipo)
   { 
       this.heroiTipo = heroiTipo; 
   }

   atacar()
   {
       let tipoAtaque;
       switch (this.heroiTipo) {
           case '1':
               tipoAtaque = 'Magia';   
               break;
           case '2':
               tipoAtaque = 'Espada';   
               break;
           case '3':
               tipoAtaque = 'Artes Marciais';   
               break;
           case '4':
               tipoAtaque = 'Shuriken';  
               break;
           default:
               break;
       } 
       
       return tipoAtaque
   } 
}