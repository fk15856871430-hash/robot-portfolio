const videos = document.querySelectorAll('video');
videos.forEach((video) => {
  const message = video.parentElement.querySelector('.video-error');
  const showError = () => { message.hidden = false; };
  video.addEventListener('error', showError);
  video.querySelector('source').addEventListener('error', showError);
  video.addEventListener('loadedmetadata', () => { message.hidden = true; });
  video.addEventListener('play', () => {
    videos.forEach((other) => { if (other !== video) other.pause(); });
  });
});
