"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const react_transition_group_1 = require("react-transition-group");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const faCaretDown_1 = require("@fortawesome/free-solid-svg-icons/faCaretDown");
class HorizontalMenu extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.hideTimeout = null;
        this.state = {
            visiblePopup: null,
        };
    }
    handleShow(index) {
        if (this.hideTimeout)
            clearTimeout(this.hideTimeout);
        this.setState({
            visiblePopup: index,
        });
    }
    handleHide(index) {
        if (this.hideTimeout)
            clearTimeout(this.hideTimeout);
        this.hideTimeout = window.setTimeout(() => {
            if (index === this.state.visiblePopup) {
                this.setState({
                    visiblePopup: null
                });
            }
        }, 300);
    }
    componentWillUnmount() {
        if (this.hideTimeout)
            clearTimeout(this.hideTimeout);
    }
    render() {
        const { menuList } = this.props;
        const { visiblePopup } = this.state;
        return (<nav className='horizontal-menu'>
        <div className='container-xxl'>
          <ul className='horizontal-menu__list list-unstyled' itemScope itemType='//schema.org/ItemList'>
            {menuList.map((item, i) => {
                const hasChildren = item.children && item.children.length > 0;
                const childrenAreVisible = (hasChildren && visiblePopup === i) ? true : false;
                return (<li className={(0, clsx_1.default)('horizontal-menu__root-element', {
                        active: item.isActive,
                        'has-children': hasChildren,
                        'open': hasChildren && item.isActive,
                        'children-visible': childrenAreVisible
                    })} key={item.title + i} onMouseOver={() => this.handleShow(i)} onMouseOut={() => this.handleHide(i)}>
                  <div itemProp='itemListElement' itemScope itemType='//schema.org/ListItem'>
                    <ListElement item={item} position={i} hasChildren={hasChildren} className={(0, clsx_1.default)({ 'children-visible': childrenAreVisible })}/>
                  </div>
                  {item.children && item.children.length > 0 &&
                        <react_transition_group_1.CSSTransition in={visiblePopup === i} timeout={600} unmountOnExit classNames={{
                                enterActive: 'animate__animated animate__fadeInUp',
                                exitActive: 'animate__animated animate__fadeOut',
                            }}>
                      <ul className={(0, clsx_1.default)('horizontal-menu__child-list list-unstyled')}>
                        {item.children.map((childItem, j) => <li key={childItem.title + j} className={(0, clsx_1.default)('horizontal-menu__child-element', { active: childItem.isActive })}>
                            <ListElement item={childItem}/>
                          </li>)}
                      </ul>
                    </react_transition_group_1.CSSTransition>}
                </li>);
            })}
          </ul>
        </div>
      </nav>);
    }
}
exports.default = HorizontalMenu;
function ListElement({ item, position, hasChildren, className }) {
    const image = item.img || null;
    const isRootElem = position !== undefined;
    const imageElem = image
        ? <img src={image.src} className='me-2' alt={item.title} width={image.width} height={image.height}/>
        : null;
    const titleWithIcon = hasChildren
        ? <>
			{item.title}
			{hasChildren && <react_fontawesome_1.FontAwesomeIcon className='ms-2' icon={faCaretDown_1.faCaretDown}/>}
		</>
        : item.title;
    if (item.url && (!item.isActive || isRootElem))
        return (<>
			<link_1.default href={item.url}>
				<a className={(0, clsx_1.default)('horizontal-menu__element is-link', isRootElem ? 'is-root' : 'is-child', { active: item.isActive }, className)}>
					{image && <span className='img-link'>{imageElem}</span>}
					<span className='title' {...(isRootElem ? { itemProp: 'name' } : {})}>
						{isRootElem ? titleWithIcon : item.title}
					</span>
				</a>
			</link_1.default>
			{isRootElem && <meta itemProp='position' content={String(position + 1)}/>}
		</>);
    return (<div className={(0, clsx_1.default)('horizontal-menu__element', isRootElem ? 'is-root' : 'is-child', { active: item.isActive }, className)}>
			{image && imageElem}
			<span className='horizontal-menu__text-title'>
				{titleWithIcon}
			</span>
		</div>);
}
//# sourceMappingURL=HorizontalMenu.jsx.map