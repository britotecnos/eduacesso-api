# EDUACESSO API

API base pronta para deploy na Hostinger.

## Módulos incluídos
- Health Check
- Alunos
- Cursos
- Bolsas
- Candidaturas
- Crédito estudantil
- Estágios
- Comunicados
- Contratos

## 1) Instalação
```bash
npm install
```

## 2) Ambiente
Copie `.env.example` para `.env` e preencha os dados do PocketBase.

## 3) Execução
```bash
npm start
```

## 4) Rotas principais
- `GET /`
- `GET /health`
- `GET /api/alunos`
- `GET /api/cursos`
- `GET /api/bolsas`
- `GET /api/candidaturas`
- `GET /api/credito-estudantil`
- `GET /api/estagios`
- `GET /api/comunicados`
- `GET /api/contratos`

## 5) Deploy na Hostinger
- Faça upload deste pacote
- Build command: `npm install`
- Start command: `npm start`
- Ajuste o arquivo `.env`

## 6) Observação
Esta versão já está preparada para consumir as coleções do PocketBase.
Se alguma coleção tiver nome diferente no seu banco, basta ajustar o nome no respectivo arquivo de serviço em `src/services`.
