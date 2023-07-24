"use strict";
// import Link from 'next/link';
// import logoImg from '../../assets/logo.svg';
Object.defineProperty(exports, "__esModule", { value: true });
function FooterAbout({ companyTitle }) {
    const title = companyTitle || '© Delta Development Software and Miami Home';
    return (<>
			{/* <div className='page-footer__logo'>
            <Link href='/'>
                <a>
                    <img src={logoImg.src} width={logoImg.width} height={logoImg.height} alt={title} />
                </a>
            </Link>
        </div> */}
			<div className='page-footer__company-info'>
				<p className='title'>{title}</p>
			</div>
			<div className='page-footer__disclaimer'>
					Articulos exclusivos importados desde Miami, servicio de carga maritima y aerea. Envios a todo Ecuador
			</div>
		</>);
}
exports.default = FooterAbout;
//# sourceMappingURL=About.jsx.map