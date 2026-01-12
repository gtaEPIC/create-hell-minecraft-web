# Base image for Node.js
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Set production environment variables for Vite build
ARG VITE_SERVER_URL=play.createhell.com
ARG VITE_DYNMAP_URL=https://map.createhell.com
ARG VITE_TRACKMAP_URL=https://trackmap.createhell.com
ARG VITE_FORMSPREE_ID=your_formspree_id_here

ENV VITE_SERVER_URL=${VITE_SERVER_URL}
ENV VITE_DYNMAP_URL=${VITE_DYNMAP_URL}
ENV VITE_TRACKMAP_URL=${VITE_TRACKMAP_URL}
ENV VITE_FORMSPREE_ID=${VITE_FORMSPREE_ID}

# Build the application
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
