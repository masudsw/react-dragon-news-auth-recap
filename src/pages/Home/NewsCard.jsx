import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {_id,title,thumbnail_url,details}=news;
    return (
        <div>
            <h1 className="my-6">{title}</h1>
            <img className="object-fill w-[90%] h-80" src={thumbnail_url} alt="" />
            {
                details.length>200?
                <>
                {details.slice(0,200)} <Link className="text-blue-800 font-bold" to={`/news/:${_id}`}>Read More</Link>
                </>:
                <>
                {details}
                </>
            }
        </div>
    );
};

export default NewsCard;