import { PropertyReview } from '../../types/property-review';

export type PropertyReviewProps = {
  review: PropertyReview;

};

export function PropertyCardReview (props:PropertyReviewProps): JSX.Element {
  return (
    <ul className="reviews__list">
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={props.review.avatarUrl} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {props.review.userName}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {props.review.textReview}
          </p>
          <time className="reviews__time" dateTime={props.review.dateTime}>April 2019</time>
        </div>
      </li>
    </ul>
  );
}
