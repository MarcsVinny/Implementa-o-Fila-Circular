# Implementação da Fila Circular

## Autores da Implementação
- **Marcos Vinícius de Oliveira Teixeira**
- **Josiane Amorim Mendes**


## FilaCircular

A classe **FilaCircular** implementa uma estrutura de dados do tipo fila utilizando o conceito de circularidade.  
Isso significa que, quando o `final` chega ao fim do array interno, ele volta ao início, aproveitando melhor o espaço e evitando deslocamento de elementos.

Essa implementação suporta operações essenciais para manipulação de filas, como inserir, remover, consultar elementos e verificar condições de capacidade.

### Funcionalidades Implementadas
- **Adicionar um elemento ao final da fila**
- **Remover e retornar o primeiro elemento da fila**
- **Consultar o elemento do início sem removê-lo**
- **Verificar se a fila está vazia**
- **Verificar se a fila está cheia**
- **Exibir a quantidade de elementos**
- **Exibir todos os elementos da fila**
- **Retornar a capacidade máxima da fila**
- **Exibir quantos elementos ainda podem ser inseridos**

---

## Exemplos de Testes

```ts
import { FilaCircular } from "./FilaCircular";

// Cria uma fila com capacidade 5
const fila = new FilaCircular(5);

console.log(fila.estaVazia());          // true
console.log(fila.inserir(10));          // true
console.log(fila.inserir(20));          // true
console.log(fila.inserir(30));          // true

console.log(fila.exibirInicio());       // 10
console.log(fila.exibirQuantidade());   // 3

console.log(fila.remover());            // 10
console.log(fila.exibirInicio());       // 20

console.log(fila.exibirElementos());    // [20, 30]

fila.inserir(40);
fila.inserir(50);
fila.inserir(60);                        // retorna false → fila cheia

console.log(fila.estaCheia());          // true
console.log(fila.exibirEspacoRestante());// 0
```

---

