FROM --platform=linux/amd64 node:18-alpine
ENV NODE_ENV prod
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm install -g serve

RUN npm run build
# Copy app files
# Expose port
EXPOSE 3001
# Start the app

CMD [ "serve", "-s", "build", "-l", "3001" ]