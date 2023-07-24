import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AlertWidget from '../components/Alert';
import { useAppSelector } from '../hooks/redux';
import { RootState } from '../redux/store';
import clsx from 'clsx';
import { IMenuItem } from '../@types/components';

import AsideMenu from '../components/AsideMenu'; // Importamos directamente el componente

const AsideBackdrop = dynamic(() => import('../components/asideMenu/Backdrop'), { ssr: false });
import HorizontalMenu from '../components/HorizontalMenu';
import CallToOrder from '../components/header/CallToOrder';

const shopBaseUrl = process.env.BOUNDLESS_BASE_URL || '';

interface IMainLayoutProps {
  children: ReactNode | ReactNode[];
  title?: string;
  metaData?: IMetaData;
  mainMenu: IMenuItem[];
  footerMenu: IMenuItem[];
  noIndex?: boolean;
}

interface IMetaData {
  canonicalUrl?: string;
  imgUrl?: string | null;
  description?: string | null;
}

export default function MainLayout({ children, title, metaData, mainMenu, footerMenu, noIndex }: IMainLayoutProps) {
  const { canonicalUrl, imgUrl, description } = metaData || {};
  const asideIsOpened = useAppSelector((state: RootState) => state.asideMenu.isOpened);

  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        {/* ... Resto del contenido de <Head> ... */}
      </Head>
      <AlertWidget />
      <div className={clsx('page-layout page-layout_main mars-full-theme', { 'page-layout_aside-opened': asideIsOpened })}>
        <CallToOrder />
        <Header />
        {mainMenu && <HorizontalMenu menuList={mainMenu} />}
        <main className='page-layout__main'>
          {children}
        </main>
        <Footer menuList={footerMenu} />
      </div>
      {mainMenu && <AsideMenu menuList={mainMenu} />}
    </>
  );
}
