"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
function BreadCrumbs({ items }) {
    const isEmpty = items.length === 0;
    const richItemAttrs = {
        itemProp: 'itemListElement',
        itemScope: true,
        itemType: '//schema.org/ListItem'
    };
    return (<nav className={(0, clsx_1.default)('breadcrumb-wrapper', isEmpty && 'd-none')}>
			{!isEmpty && <ol className='breadcrumb' itemProp='breadcrumb' itemScope itemType='//schema.org/BreadcrumbList'>
				<li className='breadcrumb-item' {...richItemAttrs}>
					<link_1.default href='/'>
						<a itemProp='item'><span itemProp='name'>Inicio</span></a>
					</link_1.default>
					<meta itemProp='position' content='1'/>
				</li>
				{items.map((item, i) => (<li className={(0, clsx_1.default)('breadcrumb-item', item.isActive && 'active')} key={i} {...(item.url ? richItemAttrs : {})}>
						{item.url && !item.isActive
                    ? <>
								<link_1.default href={item.url}>
									<a itemProp='item'>
										<span itemProp='name'>{item.title}</span>
									</a>
								</link_1.default>
								<meta itemProp='position' content={String(i + 2)}/>
							</>
                    :
                        <>
								<span itemProp='item'>
									<span itemProp='name'>{item.title}</span>
								</span>
								<meta itemProp='position' content={String(i + 2)}/>
							</>}
					</li>))}
			</ol>}
		</nav>);
}
exports.default = BreadCrumbs;
//# sourceMappingURL=BreadCrumbs.jsx.map