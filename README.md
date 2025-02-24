## Programação Para Dispositivos Móveis: Avaliação 02

Esse projeto tem como objetivo o desevolvimento de testes automatizados e a entrega da atividade avaliativa 02 da matéria PDM.

## Testes implementados:

### Testes unitários

Os testes unitários são responsáveis por testar a menor parte da aplicação, ou seja, blocos curtos de código como por exemplo funções, fórmulas aritiméticas e condicionais.


### Testes E2E(EndToEnd)

Os testes E2E são responsáveis por testar fluxos inteiros, navegando entre telas e simulando a interação de um usuário real na aplicação, por exemplo, verificando envio de formulários, navegação entre telas e repostas de requisição.

### 1. **Clonar o Repositório**
Primeiro, clone o repositório para o seu ambiente local:

```
git clone git@github.com:Rian1432/PDM-AVA02.git
cd PDM-AVA02
```

### 2. **Instalar as Dependências**

```
npm install
```

### 3. **Instalar o Maestro**

```
curl -fsSL "https://get.maestro.mobile.dev" | bash
```

## **Executar os Testes**

### **Testes Unitários**
Execute todos os testes unitários com:

```
npm test
```

### **Testes E2E**
Os testes E2E com o Maestro devem ser executados em um emulador android.
Com o emulador previamente instalado e configurado, execute a aplicação com:

```
npm expo start --android
```

Agora execute os testes com:
```
maestro test ./maestro/about-test.yaml
```
```
maestro test ./maestro/home-test.yaml
```
```
maestro test ./maestro/logout-test.yaml
```
