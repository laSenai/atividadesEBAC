class CalcularNotas {

    constructor (...notas){
        this.notas = notas
    }
    
    
    calcularMedia(){

        let media = 0;
        let soma = 0;
        for(let c = 0; c < this.notas.length; c++) {
            soma += this.notas[c];
        }
    
        media = soma / this.notas.length;
        
        console.log('Media: ' + media);

        return media;
    
    }
    
    aprovacao() {
    
        let media = this.calcularMedia() // escopo da função
    
        let condicao = media >= 8 ? "aprovado" : "reprovado";
    
        console.log('Média: ' + media + ' - Resultado: ' + condicao);
    
    }
    
}

const notas01 = new CalcularNotas(8,5,10,5)
notas01.calcularMedia()
notas01.aprovacao()