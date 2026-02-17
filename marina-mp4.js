const sources = [
  "video/marina1.mp4",
  "video/marina2.mp4"
];
let current = 0;

video.src = sources[current];
video.play();

video.addEventListener("ended", () => {
  current = (current + 1) % sources.length;
  video.src = sources[current];
  video.play();
});

window.addEventListener("load", async () => {
  down();
});

function television() {
	senza.lifecycle.switchTenant("f6pnxqvt");
}
