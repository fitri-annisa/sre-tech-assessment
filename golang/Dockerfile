# Use the official golang image as the base image
FROM golang:1.22 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the Go modules and source code
COPY go.mod ./
COPY . .

# Build the Go application
RUN go build -o main .

# Expose the port the app runs on
EXPOSE 8080

# Set the entry point for the container
CMD ["./main"]