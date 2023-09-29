const user01 = new Object()
user01.id = 1
user01.nome = "João"
user01.idade = 25

const user02 = new Object()
user02.id = 2
user02.nome = "Pedro"
user02.idade = 30

const user03 = new Object()
user03.id = 3
user03.nome = "Marcela"
user03.idade = 28

const car01 = new Object()
car01["marca"] = "fiat"

const car02 = new Object()
car02.marca = "ford"

// console.log(Object.keys(user01))
// console.log(Object.values(user01))
// console.log(Object.entries(user01))

Object.defineProperty(user01, 'cpf',{
    enumerable:true,
    writable:false,
    value: '000.000.000-00'
})

user01.idade = user01.idade + 1
user01.cpf = '111.111.111-11'
// console.log(Object.entries(user01))
console.log(user01)

const empresa = "EBAC"

user01.empresa = empresa;

console.log(user01)

user01.filhos = {
    filhos01:"Matheus",
    filhos02:"Carol"
}

console.log(user01)