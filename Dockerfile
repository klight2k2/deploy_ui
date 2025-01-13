# Use the official Nginx image
FROM nginx:latest

# Copy the build files into the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80