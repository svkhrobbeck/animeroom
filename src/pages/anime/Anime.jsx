import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cx from "classnames";

import Request from "../../services/request";
import { Buttons } from "../../components";
import MainLayout from "../../layouts/main-layout/MainLayout";

const Anime = () => {
  const id = useParams().id || "";

  const [anime, setAnime] = useState({});
  const [videoUrl, setVideoUrl] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  const getAnime = async () => {
    const { data, seria } = await Request.get(`/season/v2/${id}`);
    setAnime({ ...data, seria });
    setEpisodes(seria);
  };

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <main>
      <section className="anime-page container">
        <h1 className="anime-page__title" />
        <iframe
          className="anime-page__iframe"
          allowFullScreen
          src={episodes[0]?.video || videoUrl}
        />

        <h2 className="anime-page__subtitle" />

        {/* temp */}
        <>
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
        </>

        {/* {<Buttons seria={episodes} videoUrl={videoUrl} setVideoUrl={setVideoUrl} />} */}

        <div className="anime-page__download">
          <h3 className="download-anime__heading">Animeni yuklab olish</h3>

          <div className="download-anime__inner">
            <select className="download-anime__select">
              <option className="download-anime__opt" value />
            </select>

            <a className="download-anime__btn button button--orange button--hidden" target="_blank">
              yuklab olish
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Anime;
