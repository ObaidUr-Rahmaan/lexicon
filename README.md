# WordGame
Welcome to WordGame, a multiplayer online word game built to help consolidate knowledge on system design and large-scale systems development for production.

## Technologies Used
- VueJS
- Vite build tool
- ChakraUI
- NodeJS
- ExpressJS
- SocketIO library
- HowlerJS for in-game audio
- Docker
- Kubernetes
- AWS

## Features
- Real-time multiplayer gameplay
- In-game audio effects
- Responsive design for various devices

## Running the game locally
1. Clone the repository: `git clone https://github.com/[USERNAME]/WordGame.git`
2. Install dependencies: `pnpm install`
3. Start the server: `pnpm start`
4. Open the client in your browser: `http://127.0.0.1:5173`

## Deployment
The game is deployed using Docker and Kubernetes on AWS, with automated deployments using Github Actions. To deploy the game to production, follow these steps:
1. Build the Docker image: `docker build -t wordgame .`
2. Push the image to a container registry: `docker push wordgame`
3. Update the deployment on Kubernetes: `kubectl apply -f deployment.yaml`

## Contributing
We welcome contributions to WordGame. If you have an idea for a new feature or have found a bug, please open an issue on the repository.

## License
WordGame is licensed under the [MIT License](LICENSE).
