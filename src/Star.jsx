export default function Star({rating, handleRatingClick, handleKeyPress, activeStarRating, singleActiveStarRating, setHoverRating}) {
   return (
      <span aria-label={`select to rate item ${rating.value} star`} tabIndex={0} role="radio" className={activeStarRating ? 'rating active' : 'rating'} aria-checked={singleActiveStarRating ? true : false} onClick={() => handleRatingClick(rating.value)} onKeyDown={(e) => handleKeyPress(e, rating.value)} onMouseEnter={() => setHoverRating(rating.value)} onMouseLeave={() => setHoverRating(null)}>
         {rating.value}
      </span>
   );
}