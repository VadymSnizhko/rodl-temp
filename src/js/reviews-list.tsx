import React from 'react';
import { Review } from '/src/types/reviews.ts';
import css from './ReviewsList.module.css';

interface Props {
  reviews: Review[];
}

const ReviewsList: React.FC<Props> = ({ reviews }) => {
  return (
    <ul className={css.list}>
      {reviews.map(({ id, imageUrl, name, rating, text }) => (
        <li key={id} className={css.item}>
          <img src={imageUrl} alt={name} className={css.avatar} />
          <div className={css.content}>
            <h3 className={css.name}>{name}</h3>
            <p className={css.stars}>
              {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
            </p>
            <p className={css.text}>{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;