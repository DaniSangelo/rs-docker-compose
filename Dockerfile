# Etapa de construção (builder)
FROM node:20-alpine as builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração e dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código fonte da aplicação
COPY . .

# Executa o build da aplicação
RUN npm run build

# Etapa de produção
FROM node:20-alpine

# Define o diretório de trabalho para a aplicação em produção
WORKDIR /app

# Copia os arquivos da etapa de build (aplicação pronta)
COPY --from=builder /app .

# Instala as dependências de produção
RUN npm install --only=production

# Expõe a porta que o NestJS vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["sh", "-c", "npx prisma migrate deploy && node --inspect=0.0.0.0:9229 dist/main.js"]

