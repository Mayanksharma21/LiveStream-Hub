const userVideo = document.getElementById("user-video");
const startButton = document.getElementById("start-btn");

// Store media state globally to convert it into Binary and send over TCP to node server
const mediaState = {
  media: null,
};

const socket = io();

startButton.addEventListener("click", () => {
  const mediaRecorder = new MediaRecorder(mediaState.media, {
    audioBitsPerSecond: 128000,
    videoBitsPerSecond: 2500000,
    framerate: 25,
  });

  mediaRecorder.ondataavailable = (event) => {
    socket.emit("binaryStream", event.data);
  };

  mediaRecorder.start(25);
});

window.addEventListener("load", async () => {
  const media = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });

  mediaState.media = media;

  userVideo.srcObject = media;
});
