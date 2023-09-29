class Movimentacao {
    constructor(banco = 'padrao', nome = '', saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

const m01 = new Movimentacao('00000', 'salario', 20000)
const m02 = new Movimentacao('Bank Z', 'comissao', 2000)
const m03 = new Movimentacao('Bank X', 'imposto', -5000)
const m04 = new Movimentacao('Bank Y', 'contas', -1000)
const m05 = new Movimentacao('Bank X', 'imposto', -1000)

const movimentacoesGerais = [m01, m02, m03, m04, m05]

movimentacoesGerais.map( elemento => console.log(elemento.banco.length))