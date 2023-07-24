import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { IMenuItem } from '../@types/components';

interface HorizontalMenuProps {
  menuList: IMenuItem[];
}

interface HorizontalMenuState {
  visiblePopup: number | null;
}

export default class HorizontalMenu extends React.Component<HorizontalMenuProps, HorizontalMenuState> {
  protected hideTimeout: number | null = null;

  constructor(props: HorizontalMenuProps) {
    super(props);

    this.state = {
      visiblePopup: null,
    };
  }

  handleShow(index: number) {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    this.setState({
      visiblePopup: index,
    });
  }

  handleHide(index: number) {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    this.hideTimeout = window.setTimeout(() => {
      if (index === this.state.visiblePopup) {
        this.setState({
          visiblePopup: null
        });
      }
    }, 300);
  }

  componentWillUnmount() {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
  }

  render(): JSX.Element {
    const { menuList } = this.props;
    const { visiblePopup } = this.state;

    return (
      <nav className='horizontal-menu'>
        <div className='container-xxl'>
          <ul className='horizontal-menu__list list-unstyled' itemScope itemType='//schema.org/ItemList'>
            {menuList.map((item, i) => {
              const hasChildren = item.children && item.children.length > 0;
              const childrenAreVisible = (hasChildren && visiblePopup === i) ? true : false;

              return (
                <li
                  className={clsx('horizontal-menu__root-element', {
                    active: item.isActive,
                    'has-children': hasChildren,
                    'open': hasChildren && item.isActive,
                    'children-visible': childrenAreVisible
                  })}
                  key={item.title + i}
                  onMouseOver={() => this.handleShow(i)}
                  onMouseOut={() => this.handleHide(i)}
                >
                  <div itemProp='itemListElement' itemScope itemType='//schema.org/ListItem'>
                    <ListElement
                      item={item}
                      position={i}
                      hasChildren={hasChildren}
                      className={clsx({'children-visible': childrenAreVisible})}
                    />
                  </div>
                  {item.children && item.children.length > 0 &&
                    <CSSTransition
                      in={visiblePopup === i}
                      timeout={600}
                      unmountOnExit
                      classNames={{
                        enterActive: 'animate__animated animate__fadeInUp',
                        exitActive: 'animate__animated animate__fadeOut',
                      }}
                    >
                      <ul
                        className={clsx('horizontal-menu__child-list list-unstyled')}
                      >
                        {item.children.map((childItem, j) =>
                          <li key={childItem.title + j} className={clsx('horizontal-menu__child-element', {active: childItem.isActive})}>
                            <ListElement item={childItem} />
                          </li>)}
                      </ul>
                    </CSSTransition>}
                </li>
              );
            })}
          </ul>
        </div>
      </nav >
    );
  }
}

function ListElement({item, position, hasChildren, className}: {item: IMenuItem, position?: number, hasChildren?: boolean, className?: string}) {
	const image = item.img || null;
	const isRootElem = position !== undefined;

	const imageElem = image
		? <img src={image.src}
			className='me-2'
			alt={item.title}
			width={image.width}
			height={image.height}
		/>
		: null;

	const titleWithIcon = hasChildren
		? <>
			{item.title}
			{hasChildren && <FontAwesomeIcon className='ms-2' icon={faCaretDown} />}
		</>
		: item.title;

	if (item.url && (!item.isActive || isRootElem)) return (
		<>
			<Link href={item.url}>
				<a className={clsx(
					'horizontal-menu__element is-link',
					isRootElem ? 'is-root' : 'is-child',
					{active: item.isActive},
					className
				)}>
					{image && <span className='img-link'>{imageElem}</span>}
					<span className='title' {...(isRootElem ? {itemProp: 'name'} : {})}>
						{isRootElem ? titleWithIcon : item.title}
					</span>
				</a>
			</Link>
			{isRootElem && <meta itemProp='position' content={String(position + 1)} />}
		</>
	);

	return (
		<div className={clsx(
			'horizontal-menu__element',
			isRootElem ? 'is-root' : 'is-child',
			{active: item.isActive},
			className
		)}>
			{image && imageElem}
			<span className='horizontal-menu__text-title'>
				{titleWithIcon}
			</span>
		</div>
	);
}