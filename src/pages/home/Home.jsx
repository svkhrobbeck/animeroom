import { useEffect, useState } from "react";

import Request from "../../services/request";
import { DEF_CATEGORY } from "../../helpers/constants";

import { Animations } from "../../components";

const Home = () => {
  const [animations, setAnimations] = useState([]);

  const getAnimations = async () => {
    const { data } = await Request.post("/season/home", { category: DEF_CATEGORY });
    setAnimations(data);
  };

  useEffect(() => {
    getAnimations();
  }, []);

  return (
    <main>
      <Animations animations={animations} />
    </main>
  );
};

export default Home;
