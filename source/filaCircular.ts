class FilaCircular {
    private itens: (number | null)[]      // onde guardamos os elementos
    private capacidade: number            // tamanho máximo da fila
    private inicio: number                // posição do primeiro elemento
    private fim: number                   // posição onde o próximo entra
    private quantidade: number            // quantidade de elementos na fila

    constructor(capacidade: number){
    this.capacidade = capacidade
    this.itens = new Array(capacidade).fill(null) // inicializa com null
    this.inicio = 0
    this.fim = 0
    this.quantidade = 0
}

    // Adicionar elemento no final
    enfileirar(valor: number){
        if (this.estaCheia()) {
            console.log("A fila está cheia!")
            return
        }

        this.itens[this.fim] = valor
        this.fim = (this.fim + 1) % this.capacidade
        this.quantidade++

        console.log("Inserido:", valor)
        this.exibir()
    }

    // Remover o primeiro elemento
    desenfileirar(){
        if (this.estaVazia()) {
            console.log("A fila está vazia!")
            return
        }

        let removido = this.itens[this.inicio]
        this.itens[this.inicio] = null
        this.inicio = (this.inicio + 1) % this.capacidade
        this.quantidade--

        console.log("Removido:", removido)
        this.exibir()
    }

    // Ver quem está no início
    primeiro(){
        if (this.estaVazia()) {
            console.log("A fila está vazia!")
            return null
        }
        return this.itens[this.inicio]
    }

    // Ver se está vazia
    estaVazia(){
        return this.quantidade == 0
    }

    // Ver se está cheia
    estaCheia(){
        return this.quantidade == this.capacidade
    }

    // Quantos elementos tem
    tamanho(){
        return this.quantidade
    }

    // Retorna a capacidade total
    capacidadeMaxima(){
        return this.capacidade
    }

    // Quantos ainda cabem
    espacoDisponivel(){
        return this.capacidade - this.quantidade
    }

    // Mostrar a fila
    exibir(){
        console.log("Fila:", this.itens)
    }
}


// ===========================
// Testes simples
// ===========================

let fila = new FilaCircular(3)

fila.enfileirar(10)
fila.enfileirar(20)
fila.enfileirar(30)
fila.enfileirar(40) // não entra

fila.desenfileirar()
fila.desenfileirar()

console.log("Primeiro:", fila.primeiro())
console.log("Tamanho:", fila.tamanho())
console.log("Capacidade máxima:", fila.capacidadeMaxima())
console.log("Espaço disponível:", fila.espacoDisponivel())
