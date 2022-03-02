interface StarRatingType {
  ratingValue: number;
  id: string | number;
}

const StarRating = ({ ratingValue, id }: StarRatingType) => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: "3px" }}
    >
      <defs>
        <linearGradient id={`half_grad${id}`}>
          <stop offset={`${ratingValue}%`} stopColor="#F2994A" />
          <stop
            offset={`${ratingValue}%`}
            stopColor="#E5E5E5"
            stopOpacity="1"
          />
        </linearGradient>
      </defs>
      <path
        d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
        fill={`url(#half_grad${id})`}
      />
    </svg>
  );
};

export default StarRating;
