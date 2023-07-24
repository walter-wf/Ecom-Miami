"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
function Reviews({ reviews, className }) {
    return (<div className={(0, clsx_1.default)('reviews', className)}>
			<ReviewsList reviews={reviews}/>
		</div>);
}
exports.default = Reviews;
const ReviewsList = ({ reviews }) => {
    return (<>
			{reviews.map((review, i) => <div className={'reviews__item'} key={i}>
					<div className={'reviews__img-wrap'}>
						{review.image}
					</div>
					<p className={'reviews__title'}>{review.title}</p>
					{review.jobTitle &&
                <p className={'reviews__job-title'}>{review.jobTitle}</p>}
					{review.comment &&
                <div className={'reviews__comment'} dangerouslySetInnerHTML={{ __html: review.comment }}/>}
				</div>)}
		</>);
};
//# sourceMappingURL=Reviews.jsx.map