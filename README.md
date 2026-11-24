# Lista de Tarefas (React)

Aplicação web de **lista de tarefas** desenvolvida em React, como projeto de estudo
(curso da Udemy). Permite adicionar, editar e remover tarefas, com os dados
persistidos no navegador via `localStorage` — ou seja, a lista continua lá mesmo
após recarregar ou fechar a página.

## Funcionalidades

- ➕ **Adicionar** tarefas pelo campo de texto.
- ✏️ **Editar** uma tarefa existente (reaproveita o mesmo campo de entrada).
- ❌ **Remover** tarefas da lista.
- 🚫 **Evita duplicadas** — não insere uma tarefa já existente.
- 💾 **Persistência local** — as tarefas são salvas no `localStorage` do navegador.

## Tecnologias

- [React 19](https://react.dev/)
- [Create React App](https://create-react-app.dev/) (`react-scripts`)
- [react-icons](https://react-icons.github.io/react-icons/) — ícones da interface
- [prop-types](https://www.npmjs.com/package/prop-types) — validação de props
- [ESLint](https://eslint.org/) (flat config, base Airbnb) + [Prettier](https://prettier.io/) — padronização de código

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm (já incluso no Node.js)

## Como executar

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm start
```

A aplicação abre em [http://localhost:3000](http://localhost:3000) e recarrega
automaticamente a cada alteração no código.

## Scripts disponíveis

| Script                 | Descrição                                               |
| ---------------------- | ------------------------------------------------------- |
| `npm start`            | Inicia o servidor de desenvolvimento.                   |
| `npm run build`        | Gera a build de produção otimizada na pasta `build/`.   |
| `npm test`             | Executa os testes em modo interativo (watch).           |
| `npm run lint`         | Analisa o código com o ESLint.                          |
| `npm run lint:fix`     | Analisa e corrige automaticamente o que for possível.   |
| `npm run format`       | Formata o código com o Prettier.                        |
| `npm run format:check` | Verifica a formatação sem alterar os arquivos.          |

> Existe também `npm run eject`, que expõe toda a configuração do Create React App.
> É uma operação **irreversível** — use apenas se souber exatamente o que precisa customizar.

## Estrutura do projeto

```
lista-tarefas-react-udemy/
├── public/                  # HTML base e assets estáticos
└── src/
    ├── index.js             # Ponto de entrada da aplicação React
    ├── App.js               # Componente raiz (renderiza <Main />)
    ├── App.css
    └── components/
        ├── Main.js          # Estado e lógica das tarefas + persistência
        ├── Main.css
        ├── Form/
        │   ├── index.js     # Campo de texto + botão de adicionar
        │   └── Form.css
        └── tarefas/
            ├── index.js     # Lista de tarefas (editar / excluir)
            └── Tarefas.css
```

## Como funciona

Todo o estado vive no componente de classe `Main` (`src/components/Main.js`):

- `tarefas` — array com as tarefas atuais.
- `novaTarefa` — texto do campo de entrada.
- `index` — índice da tarefa em edição (`-1` quando é uma nova tarefa).

O fluxo é simples:

1. O `Form` é um componente controlado: cada digitação dispara `handleChange`,
   que atualiza `novaTarefa`.
2. Ao enviar, `handleSubmit` adiciona uma nova tarefa **ou** sobrescreve a que
   está em edição (quando `index !== -1`).
3. `Tarefas` renderiza a lista; os ícones acionam `handleEdit` e `handleDelete`.
4. Persistência: `componentDidMount` carrega as tarefas do `localStorage` ao abrir,
   e `componentDidUpdate` grava sempre que a lista muda.
