# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Production stage
FROM node:18-slim
WORKDIR /app

# Optional: install debug tools (OK for dev VPS)
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    netcat-openbsd \
    iputils-ping \
    && rm -rf /var/lib/apt/lists/*

# Copy built artifacts and runtime files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/server.js ./
COPY ./src/app/api/contact /app/src/app/api/contact
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3001
CMD ["node", "server.js"]
