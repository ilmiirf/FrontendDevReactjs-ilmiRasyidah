import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRestaurantDetail } from "../utils/api";
import { MdArrowBack } from "react-icons/md";
import Review from "../components/review";
import RatingStar from "../components/ratingStar";

const DetailPage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    getRestaurantDetail(id).then((result) => {
      setDetail(result);
    });
  }, [id]);

  console.log(detail);
  return (
    <div className="detail-section">
      <div className="back-to-home">
        <Link to="/">
          <div className="btn__back-wrapper">
            <MdArrowBack />
            {" Back"}
          </div>
        </Link>
      </div>
      <div className="detail-info">
        <div className="detail-poster">
          <img
            className="poster-big"
            src={
              detail.photo &&
              detail.photo.images &&
              detail.photo.images.large.url
            }
            alt=""
          />
        </div>
        <div className="detail-description">
          <div className="detail__name">{detail.name}</div>
          <RatingStar rating={detail.rating} />
          <div className="detail__address">{detail.address}</div>
        </div>
      </div>
      <div className="detail-review">
        <Review reviews={detail.reviews} />
      </div>
    </div>
  );
};

export default DetailPage;
