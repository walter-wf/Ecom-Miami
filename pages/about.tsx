import {GetServerSideProps} from 'next';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
import {IMenuItem} from '../@types/components';
import MainLayout from '../layouts/Main';

export default function ShippingPage({mainMenu, footerMenu}: IPageProps) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu}>
			<div className={'container-xxl'}>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Sobre nosotros Miami Home</h1>
				<div className='text-container'>
					<p>
					Nuestra historia comienza con nuestras propias necesidades. Cuando llegamos a Miami, nos dimos cuenta de que teníamos muy pocas opciones de calidad y productos prácticos. ¿La solución? Traer todo lo que queríamos. Poco a poco, comenzamos a notar que esta carencia era una oportunidad.

          Comenzamos trayendo solo unos pocos artículos, pero a medida que crecíamos, lo mismo hacía nuestra empresa. Hoy en día, Miami Home es el resultado de esta aventura. Estamos agradecidos por el apoyo y la confianza de nuestros clientes, ya que sin ellos, no seríamos la gran empresa que somos hoy.
					</p>
				</div>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
	const categoryTree = await apiClient.catalog.getCategoryTree({menu: 'category'});

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			...menus
		}
	};
};

interface IPageProps {
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}