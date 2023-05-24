# Specify the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose a port (if applicable)
EXPOSE 3500

# Define the command to run the application
CMD [ "npm", "app.js" ]