# 📋 Gerenciador de Tarefas

Aplicação de gerenciamento de tarefas desenvolvida com **TypeScript**, **HTML5**, **CSS3** e **Bootstrap 5**, seguindo uma arquitetura **MVC (Model-View-Controller)** com camada de **Service** para integração com APIs REST.

## 🚀 Funcionalidades

- ✅ Carregamento inicial de tarefas via API
- ✅ Cadastro de novas tarefas
- ✅ Alteração do status das tarefas
- ✅ Organização por categorias
- ✅ Atualização dinâmica da interface
- ✅ Interface responsiva
- ✅ Consumo de API REST

---

## 🏗️ Arquitetura

```text
src/
├── controller/
│   └── TaskController.ts
│
├── model/
│   └── TaskModel.ts
│
├── service/
│   └── TaskService.ts
│
├── view/
│   └── TaskView.ts
│
├── types/
│   └── Task.ts
│
└── main.ts
```

---

## 🔄 Fluxo da Aplicação

```text
Usuário
   ↓
TaskView
   ↓
TaskController
   ↓
TaskModel
   ↓
TaskService
   ↓
REST API
```

---

## 🌐 Integração com API

A aplicação utiliza a API pública JSONPlaceholder para simulação de operações com tarefas:

```text
https://jsonplaceholder.typicode.com/todos
```

### Operações Implementadas

- GET para carregar tarefas
- POST para criar tarefas
- Desserialização de respostas JSON
- Tratamento de erros HTTP
- Mapeamento dos dados para o modelo da aplicação

---

## 💻 Tecnologias Utilizadas

- HTML5
- CSS3
- TypeScript
- Bootstrap 5
- Vite
- Fetch API

---

## 📚 Conceitos Aplicados

### TypeScript

- Interfaces
- Type Aliases
- Classes
- Módulos ES
- Encapsulamento
- Strict Mode

### Programação Orientada a Objetos

- Abstração
- Encapsulamento
- Responsabilidade Única (SRP)
- Separação de Responsabilidades

### Desenvolvimento Front-End

- DOM API
- Event Listeners
- Manipulação dinâmica de elementos
- CSS Grid
- Flexbox
- Responsividade

### Integração com APIs

- REST API
- Fetch API
- Requisições GET
- Requisições POST
- JSON
- Async/Await
- Tratamento de erros

---

## ⚙️ Configuração TypeScript

O projeto utiliza uma configuração rigorosa para garantir maior segurança e qualidade durante o desenvolvimento.

### Recursos Habilitados

- ES2022
- Strict Mode
- Source Maps
- Bundler Resolution
- Decorators
- ES Modules
- Verificação de código não utilizado
- Validação de retornos obrigatórios
- Consistência de nomenclatura de arquivos

---

## 📦 Build da Aplicação

A aplicação utiliza o **Vite** como ferramenta de desenvolvimento e empacotamento.

### Configurações

| Configuração | Descrição |
|-------------|------------|
| `outDir` | Define a pasta de saída do build |
| `sourcemap` | Gera arquivos de mapeamento para depuração |

---

## 🚀 Executando o Projeto

### Clonar o repositório

```bash
git clone https://github.com/jorgebytecraft/GerenciadorTarefa.git
```

### Acessar a pasta

```bash
cd GerenciadorTarefa
```

### Instalar as dependências

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Gerar build de produção

```bash
npm run build
```

### Visualizar o build

```bash
npm run preview
```

---

## 🎯 Objetivo do Projeto

Demonstrar a aplicação de conceitos modernos de desenvolvimento Front-End utilizando TypeScript, arquitetura MVC, integração com APIs REST, Programação Orientada a Objetos e boas práticas de organização de código.

---

## 👨‍💻 Autor

**Jorge Borges Rego**

GitHub: https://github.com/jorgebytecraft

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e aprimoramento das habilidades em desenvolvimento Front-End.
