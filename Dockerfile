
# Use Node.js as the base image
FROM node:22-alpine

# Create application directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy application code
COPY . .

# Application port
EXPOSE 3000

# Start application
CMD ["node", "server.js"]
