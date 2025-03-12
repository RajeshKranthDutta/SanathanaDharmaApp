# Use the official Nginx image as a base image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the HTML, CSS, and JavaScript files into the container's web server directory
COPY index.html .
COPY style.css .
COPY app.js .

# Expose port 80 for the web server
EXPOSE 80

# Nginx will automatically start and serve the content in the directory
CMD ["nginx", "-g", "daemon off;"]