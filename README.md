# LiveStream Hub

**LiveStream Hub** is a browser-based live video streaming application that allows users to stream video and audio directly to YouTube RTMPS. This project leverages Node.js, ffmpeg, and RTMP to facilitate real-time media streaming with low latency and high efficiency.

## Features

- **Real-Time Streaming**: Captures video and audio from the user's device and streams it to YouTube RTMPS using WebSockets for real-time data transfer.
- **Media Processing**: Utilizes FFmpeg for encoding and processing video and audio streams to ensure optimal quality and performance.
- **Dockerized Environment**: Deploys the Node.js server and FFmpeg in a Docker container for consistent and scalable performance across different systems.
- **User-Friendly Interface**: Simple and intuitive UI for users to start their live stream with ease.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js, Socket.IO
- **Media Processing**: FFmpeg
- **Containerization**: Docker

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/livestream-hub.git
   cd livestream-hub
2. **Build and run the Docker container**:
    ```bash
    docker-compose up --build
3. **Access the application**:
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
