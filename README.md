# Sistema de Autenticação Next.js Aprimorado

Este projeto é uma atividade de aprimoramento de um sistema de autenticação desenvolvido com Next.js, TypeScript e Tailwind CSS. Ele inclui funcionalidades como gerenciamento de estado com Context API, persistência de login, sistema de temas (claro/escuro) e uma estrutura de componentes reutilizáveis.

## Funcionalidades Implementadas
- [x] Validação de credenciais com mensagens de erro
- [x] Componente Header reutilizável com navegação
- [x] Componente Footer e Loading para melhor UX
- [x] Sistema de temas claro/escuro com `next-themes`
- [x] Persistência de login com Cookies
- [x] Página principal com conteúdo adicional e componentes parametrizados
- [x] Gerenciamento de estado global para autenticação com Context API
- [x] Hook personalizado (`useAuth`) para consumir o contexto
- [x] Proteção de rotas para acesso exclusivo de usuários logados

## Como Executar
1. **Clone o repositório:**
   ```bash
   git clone [sistema-de-autenticacao](https://github.com/n33miaz/sistema-de-autenticacao)
   ```
2. **Navegue até a pasta do projeto:**
   ```bash
   cd sistema-autenticacao
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Execute o projeto:**
   ```bash
   npm run dev
   ```
5. **Acesse:** [http://localhost:3000](http://localhost:3000)

## Credenciais de Teste
- **Usuário:** `admin`
- **Senha:** `123`

## Decisões Técnicas
- **Next.js (App Router):** Utilizado para aproveitar as funcionalidades mais recentes do framework, como Server Components e uma estrutura de rotas baseada em pastas.
- **Context API:** Escolhida para o gerenciamento de estado (tema e autenticação) por ser uma solução nativa do React, ideal para o escopo deste projeto sem a necessidade de bibliotecas externas mais complexas como Redux.
- **Tailwind CSS:** Adotado para uma estilização rápida, consistente e responsiva, facilitando a implementação do sistema de temas.
- **TypeScript:** Utilizado para garantir um código mais seguro, legível e de fácil manutenção.
- **js-cookie:** Implementado para gerenciar a persistência do token de autenticação no lado do cliente de forma simples e eficaz.
