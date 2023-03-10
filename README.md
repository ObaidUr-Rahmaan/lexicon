# Lexicon
Welcome to Lexicon, a multiplayer online word game built to help consolidate my knowledge on system design and large-scale systems development for production.

It is also used as a playground for me to help my mentees contribute to open source projects, while also learning the ropes of system design and development.

## Technologies Used

### Frontend
- VueJS
- Vite build tool
- ChakraUI

### Backend
- NodeJS
- ExpressJS
- SocketIO
- HowlerJS
- Docker
- Kubernetes
- AWS EKS

## Features
- Real-time multiplayer gameplay
- In-game chat
- In-game audio effects
- Responsive design for various devices

## Running the game locally (will update this later to use Kubernetes)
1. Clone the repository: `git clone https://github.com:ObaidUr-Rahmaan/lexicon.git`
2. Build the Docker image: `docker build -t lexicon .`
3. Run the Docker container for the backend: `docker run -p 3000:3000 lexicon`
4. Run the Docker container for the frontend: `docker run -p 5173:5173 lexicon`
5. Open the client in your browser: `http://127.0.0.1:5173`

## Deployment
The game is deployed using Docker and Kubernetes on AWS, with automated deployments using Github Actions.

## Contributing
We welcome contributions to Lexicon. If you have an idea for a new feature or have found a bug, please open an issue on the repository.

## License
Lexico is licensed under the [MIT License](LICENSE).
