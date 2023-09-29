class Movimentacao{
    constructor(banco = 'padrao',nome = '',saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

class Registro {
    constructor(dia,mes,ano){
        this.dia = dia,
        this.mes = mes,
        this.ano =ano,
        this.movimentacoes = []
    }

    novaMovimentacao(...movimentacoes){ //posso passar mais de um parâmetro quando é utilizado "..."
        movimentacoes.forEach( lancamento => this.movimentacoes.push(lancamento))
    }

    resumo(){
        let valorAtualizado = 0
        let tipo = ''
        const regex = new RegExp('x','gi')
        this.movimentacoes.forEach(lancamento =>{
           lancamento.banco = lancamento.banco.replace(regex, 'Y') // $ para pegar no final
            if(!lancamento.banco.match(regex)){// Regex
                valorAtualizado += lancamento.saldo
                tipo += lancamento.nome + ' |'                
            }

        })
        return tipo + valorAtualizado
    }
}

const m01 = new Movimentacao('Bank X', 'salario', 20000)
const m02 = new Movimentacao('Bank Z', 'comissao', 2000)
const m03 = new Movimentacao('Bank X', 'imposto', -5000)
const m04 = new Movimentacao('Bank Y', 'contas', -1000)
const m05 = new Movimentacao('Bank X', 'imposto', -1000)

const registro01 = new Registro(28,9,2023)
registro01.novaMovimentacao(m01,m02,m03,m04,m05)
console.log("O saldo dos registros: " + registro01.resumo())

const movimentacoesGerais = [m01,m02,m03,m04,m05]

movimentacoesGerais.map(elemento =>
    console.log(elemento.banco.length)    
)