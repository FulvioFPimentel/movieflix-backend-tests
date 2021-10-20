import { ReactComponent as IconDetails } from 'core/assets/images/details.svg'
import { Review } from 'core/types/Movie'
import './styles.scss'

type reviewsResponse = {
    reviews?: Review;
}

const MovieReviews = ({ reviews }:reviewsResponse) => {
    reviews?.reverse();

    return (
        <>
            <div className="card-base card-container-reviews">
                {reviews?.map(reviews => ( 
                
                    <div>
                        <div className="user-description">
                            <IconDetails />
                        <h6 className="user-description-name">{reviews.user.name}</h6>
                    </div>
                        <div className="user-description-reviews">
                            <h6 className="description-reviews">
                                {reviews.text}
                            </h6>
                        </div>
                    </div>
                
                ))}
            </div>
        </>
    )
}

export default MovieReviews;