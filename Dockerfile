# Base image for Node.js
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code and build it
COPY . .
RUN npm run build

# Use a minimal server to host the built files
FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port
EXPOSE 80

# Start the server
CMD ["nginx", "-g", "daemon off;"]
