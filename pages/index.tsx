import {IProduct} from 'boundless-api-client';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import ProductsList from '../components/ProductsList';
import MainLayout from '../layouts/Main';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
// import VerticalMenu from '../components/VerticalMenu';
import {IMenuItem} from '../@types/components';
import SwiperSlider from '../components/SwiperSlider';
import mobileSlider1Img from '../assets/mobile-slider-1.png';
import mobileSlider2Img from '../assets/mobile-slider-2.png';
// import CoverTextInCenter from '../components/CoverTextInCenter';
// import bgImg from '../assets/cover-bg.jpeg';
// import bgPortraitImg from '../assets/cover-bg-portrait.jpg';
import ProductsSliderByQuery from '../components/ProductsSliderByQuery';
import TextWithIcons from '../components/TextWithIcons';
import {faBug} from '@fortawesome/free-solid-svg-icons/faBug';
import {faShieldAlt} from '@fortawesome/free-solid-svg-icons/faShieldAlt';
import {faSmile} from '@fortawesome/free-solid-svg-icons/faSmile';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Reviews from '../components/Reviews';

import reviewWoman1 from '../assets/review-woman-1.jpg';
import reviewMan1 from '../assets/review-man-1.jpg';
import reviewMan2 from '../assets/review-man-2.jpg';

export default function IndexPage({products, mainMenu, footerMenu}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className='container-xxl'>
				<MainPageSlider />
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'></h1>
				<ProductsList
					products={products}
					className={'page-block'}
					itemClassName={'products__item_4-in-row'}
				/>
			</div>
			<TextWithIcons
				columns={[
					{
						icon:  <FontAwesomeIcon icon={faBug} className={'text-with-icons__icon'} />,
						title: 'Confianza y fiabilidad',
						comment: ''
					},
					{
						icon:  <FontAwesomeIcon icon={faShieldAlt} className={'text-with-icons__icon'} />,
						title: 'Tu compra esta protegida',
						comment: ''
					},
					{
						icon:  <FontAwesomeIcon icon={faSmile} className={'text-with-icons__icon'} />,
						title: 'Se ve bien comprar en Miami Home',
						comment: ''
					},
				]}
				fullWidth={true}
				className={'page-block'}
			/>
			<div className='container-xxl'>
				<ProductsSliderByQuery
					query={{collection: ['main-page'], sort: 'in_collection'}}
					title={'Ofertas especiales:'}
					wrapperClassName='page-block'
				/>
				<div className={'page-block'}>
					<h2 className={'text-center mb-4'}>Nuestros clientes nos recomiendan</h2>
					<Reviews
						reviews={[
							{
								image: <img src={reviewWoman1.src} className={'reviews__img'} />,
								title: 'Amanda',
								jobTitle: 'CEO',
								comment: 'Me gusta trabajar con el equipo de mayoristas. Estamos agradecidos por su gran servicio!'
							},
							{
								image: <img src={reviewMan1.src} className={'reviews__img'} />,
								title: 'Jorge',
								jobTitle: 'Comprador frecuente',
								comment: 'Me gusta la calidad y el envío rápido.'
							},
							{
								image: <img src={reviewMan2.src} className={'reviews__img'} />,
								title: 'David',
								jobTitle: 'Fundador de una Startup',
								comment: 'Me gusta el trato y calidad que tienen con el cliente'
							},
						]}
					/>
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IIndexPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});
	const {products} = await apiClient.catalog.getProducts({collection: ['main-page'], sort: 'in_collection'});

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			products,
			...menus
		}
	};
};

interface IIndexPageProps {
	products: IProduct[];
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}

function 	MainPageSlider() {
	const slides = [
		{
			'img': mobileSlider1Img.src,
			'link': '',
			'caption': '',
			'captionPosition': 'bottom',
			'useFilling': true,
			'fillingColor': '',
			'fillingOpacity': 0.40
		},
		{
			'img': mobileSlider2Img.src,
			'link': '',
			'caption': '',
			'captionPosition': 'bottom',
			'useFilling': true,
			'fillingColor': '',
			'fillingOpacity': 0.4
		}
	];

	return (
		<SwiperSlider
			showPrevNext
			// pagination='progressbar'
			size={'large'}
			slides={slides}
			className={'mb-4'}
		/>
	);
}