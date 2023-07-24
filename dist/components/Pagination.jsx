"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("boundless-api-client/utils");
const clsx_1 = __importDefault(require("clsx"));
const router_1 = require("next/router");
const react_1 = __importDefault(require("react"));
function Pagination({ pagination, params, onChange }) {
    const router = (0, router_1.useRouter)();
    const { currentPage, pageCount } = pagination;
    const baseUrl = router.asPath.split('?')[0];
    const getFullNavUrl = (page) => {
        return `${baseUrl}?${(0, utils_1.createGetStr)(Object.assign(Object.assign({}, params), { page }))}`;
    };
    const prevPageNum = currentPage - 1 < 1 ? 1 : currentPage - 1;
    const nextPageNum = currentPage + 1 > pageCount ? pageCount : currentPage + 1;
    //@ts-ignore
    const onClick = (page, e) => {
        e.preventDefault();
        onChange(Object.assign(Object.assign({}, params), { page }));
    };
    return (<nav className={(0, clsx_1.default)('d-flex justify-content-center', pageCount < 2 && 'd-none')}>
			<ul className='pagination'>
				<li className={(0, clsx_1.default)('page-item', currentPage <= 1 && 'disabled')}>
					<a className='page-link' aria-label='Previous' onClick={onClick.bind(null, prevPageNum)} href={getFullNavUrl(prevPageNum)}>
						<span aria-hidden='true'>&laquo;</span>
					</a>
				</li>
				{[...Array(pageCount)].map((_, index) => (<li className={(0, clsx_1.default)('page-item', index + 1 === currentPage && 'active')} key={index}>
						<a className='page-link' onClick={onClick.bind(null, index + 1)} href={getFullNavUrl(index + 1)}>{index + 1}</a>
					</li>))}
				<li className={(0, clsx_1.default)('page-item', currentPage >= pageCount && 'disabled')}>
					<a className='page-link' aria-label='Previous' onClick={onClick.bind(null, nextPageNum)} href={getFullNavUrl(nextPageNum)}>
						<span aria-hidden='true'>&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>);
}
exports.default = Pagination;
//# sourceMappingURL=Pagination.jsx.map