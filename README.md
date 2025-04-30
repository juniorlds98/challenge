# 🖥️ HermesFront

HermesFront é a interface web do sistema clínico Hermes, desenvolvida com Vite + Node.js, utilizando Bootstrap para componentes prontos e TailwindCSS para estilização utilitária. O front-end permite o controle visual do atendimento clínico, gerenciamento de pacientes, visualização de imagens médicas classificadas por IA e administração de recursos hospitalares.

# 🎯 Objetivo

Fornecer uma interface leve, responsiva e moderna que se comunique com a HermesAPI para facilitar o fluxo de trabalho médico e administrativo.

🧩 Tecnologias Utilizadas

⚡ Vite — Build tool moderna para front-end

🧵 TailwindCSS — Utilitários de estilização rápidos e reativos

🎨 Bootstrap — Componentes visuais pré-estilizados

🧠 React — Biblioteca para criação de interfaces

🌐 Axios — Requisições HTTP para a API

📁 React Router — Navegação entre páginas

📁 Estrutura de Diretórios

csharp/Copiar/Editar

```
├── public/                   # Assets públicos
├── src/
│   ├── assets/               # Imagens e ícones
│   ├── components/           # Componentes reutilizáveis (Header, Sidebar, etc.)
│   ├── pages/                # Páginas principais do sistema
│   ├── services/             # Funções para comunicação com a API
│   ├── styles/               # Arquivos CSS adicionais
│   ├── App.jsx               # Componente raiz
│   └── main.jsx              # Ponto de entrada Vite
├── index.html                # HTML principal
├── tailwind.config.js        # Configuração Tailwind
├── vite.config.js            # Configuração Vite
└── package.json              # Dependências e scripts
```

## 🧑‍⚕️ Funcionalidades do Front-end

📋 Listagem e gerenciamento de pacientes

🧠 Visualização de diagnósticos com IA

🩺 Acompanhamento em tempo real da fila de atendimento

🔐 Login médico com perfil e permissões

🔐 Login pais e responsáveis com perfil e permissões

## 🚀 Instalação e Execução
1. Clonar o projeto
bash
Copiar
Editar
git clone [git@github.com:juniorlds98/challenge.git](https://github.com/juniorlds98/challenge.git)
cd HermesFront
2. Instalar as dependências
bash
Copiar
Editar
npm install
3. Executar o projeto com Vite
bash
Copiar
Editar
npm run dev
Acesse o front-end em:
http://localhost:5173

## 📌 Observações
Certifique-se de que a HermesAPI esteja rodando na porta correta (http://localhost:8000)

O front utiliza variáveis de ambiente (.env) para definir a URL base da API

## 📸 Preview
(Adicione prints de tela ou GIFs aqui mostrando o sistema em uso)

## 🤝 Integração com ESP32
A interface se comunica com o módulo ESP32 Hermes para notificações e controle remoto do atendimento.

## 📡 API
[HermesAPI](https://github.com/CAIOMSa/ChallangeSabaraHermes/tree/main)
