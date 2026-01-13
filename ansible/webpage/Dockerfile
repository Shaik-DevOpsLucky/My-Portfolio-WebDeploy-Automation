# -------- Stage 1: Build --------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy rest of the source code
COPY . .

# Build the Vite app
RUN npm run build


# -------- Stage 2: Serve --------
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
