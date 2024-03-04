import { Card } from "../";

const Animations = ({ animations = [] }) => {
  return (
    <div className="anime-wrapper">
      {animations.map(animation => (
        <Card key={animation._id} anime={animation} />
      ))}
    </div>
  );
};

export default Animations;
