class  Heroi  
{
    constructor(nome, idade , tipo) {      
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;        
    }

    classeHeroi()
    {
        let tipoHeroi;
        switch (this.tipo) {
            case '1':
                tipoHeroi = 'Mago';   
                break;
            case '2':
                tipoHeroi = 'Guerreiro';   
                break;
            case '3':
                tipoHeroi = 'Monge';   
                break;
            case '4':
                tipoHeroi = 'Ninja';  
                break;
            default:
                break;
        } 
        
        return tipoHeroi
    }

  }