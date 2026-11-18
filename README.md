# Express Application with Kubernetes (Minikube)Kubernetes Deployment configuration.

- Runs with 3 replicas.
- Kubernetes Service for accessing the application.
- Demonstrates Kubernetes self-healing.

## Prerequisites

Make sure the following tools are installed:

- Node.js and npm
- Docker Desktop
- Minikube
- kubectl
- Visual Studio Code (optional)

## Project Overview

This project demonstrates how to create a simple web application using Node.js and Express and deploy it on Kubernetes using Minikube.

The application is containerized using Docker and deployed with **3 replicas** using a Kubernetes Deployment.

A Kubernetes Service is used to expose the application and distribute incoming requests across the available Pods.

## Technologies Used

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web application framework
- **Docker** – Containerization
- **Kubernetes** – Container orchestration
- **Minikube** – Local Kubernetes cluster
- **kubectl** – Kubernetes command-line tool

## Project Structure

```text
express-kubernetes-demo/
│
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
├── deployment.yaml
├── service.yaml
└── README.md
```

## Application Features

- Simple Express web application.
- Docker image creation.
-

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/express-kubernetes-demo.git
```

Navigate into the project directory:

```bash
cd express-kubernetes-demo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application Locally

```bash
node server.js
```

Open your browser:

[http://localhost:3000](http://localhost:3000)

### 4. Start Minikube

Make sure Docker Desktop is running.

```bash
minikube start --driver=docker
```

Check the cluster status:

```bash
minikube status
```

### 5. Build the Docker Image

Build the image inside Minikube:

```bash
minikube image build -t express-k8s-demo:v1 .
```

### 6. Deploy the Application

Create the Kubernetes Deployment:

```bash
kubectl apply -f deployment.yaml
```

Create the Kubernetes Service:

```bash
kubectl apply -f service.yaml
```

### 7. Verify the Deployment

Check the running Pods:

```bash
kubectl get pods
```

Check the Deployment:

```bash
kubectl get deployments
```

The Deployment should show 3 ready replicas.

### 8. Access the Application

Run:

```bash
minikube service express-service
```

Alternatively, use port forwarding:

```bash
kubectl port-forward service/express-service 3000:3000
```

Open:

[http://localhost:3000](http://localhost:3000)

## Kubernetes Configuration

### Deployment

The `deployment.yaml` file defines the application Deployment.

- Manages the application Pods.
- Maintains 3 replicas.
- Uses the Docker image `express-k8s-demo:v1`.

### Service

The `service.yaml` file defines a NodePort Service.

- Exposes the application.
- Selects Pods using labels.
- Distributes requests across available Pods.

## Testing Kubernetes Self-Healing

Delete one of the running Pods:

```bash
kubectl delete pod <pod-name>
```

Check the Pods again:

```bash
kubectl get pods
```

Kubernetes automatically creates a replacement Pod to maintain the desired replica count.

## Useful Kubernetes Commands

| Command                   | Description           |
| ------------------------- | --------------------- |
| `kubectl get pods`        | View running Pods     |
| `kubectl get deployments` | View Deployments      |
| `kubectl get services`    | View Services         |
| `kubectl get nodes`       | View Kubernetes nodes |
| `kubectl get all`         | View common resources |
| `kubectl logs <pod-name>` | View application logs |

## Cleanup

Delete the Kubernetes Service:

```bash
kubectl delete -f service.yaml
```

Delete the Deployment:

```bash
kubectl delete -f deployment.yaml
```

Stop Minikube:

```bash
minikube stop
```

## Learning Outcome

Through this project, I learned the basics of:

- Building a web application using Express.
- Creating Docker images.
- Deploying applications using Kubernetes.
- Configuring Kubernetes Deployments and Services.
- Running multiple application replicas.
- Understanding Kubernetes self-healing.

## Author

**Aparna V A**
