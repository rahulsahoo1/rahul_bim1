import { Link } from "react-router-dom";

const SectorCard = ({ title, img, desc }) => {
  return (
    <Link to={"/services"} id="card1" className="card">
      <img
        loading="lazy"
        width={300}
        height={300}
        src={img}
        alt={title}
        className="cursor-pointer hover:object-fill  hover:opacity-60 hover:brightness-75 hover:shadow-xl rounded-lg transition-all duration-300"
      />
      <div className="card__content">
        <p className="card__title">{title}</p>
        {/* <p className="card__description text-sm">{desc}</p> */}
      </div>
    </Link>
  );
};

export default SectorCard;
