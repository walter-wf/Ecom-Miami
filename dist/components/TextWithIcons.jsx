"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
function TextWithIcons({ columns, fullWidth = false, className }) {
    return (<div className={(0, clsx_1.default)('text-with-icons', { 'text-with-icons_bg': fullWidth }, className)}>
			{fullWidth
            ? <div className={'container-xxl'}>
					<Columns columns={columns}/>
				</div>
            : <Columns columns={columns}/>}
		</div>);
}
exports.default = TextWithIcons;
const Columns = ({ columns }) => {
    return (<div className={'text-with-icons__columns'}>
			{columns.map((column, i) => <div className={'text-with-icons__column'} key={i}>
					<div className={'text-with-icons__head-wrap'}>
						<div className={'text-with-icons__icon-wrap'}>
							{column.icon}
						</div>
						<h4 className={'text-with-icons__col-title'}>{column.title}</h4>
					</div>
					{column.comment &&
                <div className={'text-with-icons__col-body'} dangerouslySetInnerHTML={{ __html: column.comment }}/>}
				</div>)}
		</div>);
};
//# sourceMappingURL=TextWithIcons.jsx.map