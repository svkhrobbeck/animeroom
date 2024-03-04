const Buttons = (episodes = [], videoUrl, setVideoUrl) => {
  console.log(episodes);

  return (
    <div className="anime-page__buttons">
      {episodes?.map(episode => (
        <button
          className={cx(
            videoUrl === episode.video ? "button--outline-orange" : "",
            "button--orange"
          )}
          onClick={() => setVideoUrl(episode.video)}
        >
          {episode.name.uz}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
