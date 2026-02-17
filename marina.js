const sources = [
  "https://senza-developer.s3.amazonaws.com/streams/marina1/marina1.mpd",
  "https://senza-developer.s3.amazonaws.com/streams/marina2/marina2.mpd"
];
let current = 0;

window.addEventListener("load", async () => {
	down();
	
  try {
    await senza.init();
    player = new senza.ShakaPlayer();
    player.attach(video);
    await player.load(sources[current]);
    await video.play();

		video.addEventListener("ended", async () => {
		  // current = (current + 1) % sources.length;
		  // await player.load(sources[current]);
			video.currentTime = 0;
			await video.play();
		});

    senza.uiReady();
  } catch (error) {
    console.error(error);
  }
});


function television() {
	senza.lifecycle.switchTenant("f6pnxqvt");
}
