import {isEmpty} from 'lodash';
import PropTypes from 'prop-types';
import Link from 'next/link';


import { isCustomPageUri } from '../../../utils/slug';
import NavSearch from '../../search/nav-search';

import Nav from './nav';
const Header = ( {header, headerMenus} ) => {
	console.log(header)
	if ( isEmpty( header ) ) {
		return null;
	}

	return (
		<header className="text-gray-600 body-font shadow-md	">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link key={header?.siteTitle} href='/' legacyBehavior>
					<a className="flex title-font font-medium items-center  text-gray-900 mb-4 md:mb-0">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"  strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-600 rounded-full" viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
						<div className='flex flex-col item-center'>
							<span className="ml-3 text-xl">{header?.siteTitle}</span>	
						</div>
					</a>
				</Link>
				<Nav headerMenus={headerMenus} />
				<NavSearch> </NavSearch>
			</div>
			</header>

			
		
	);
};


export default Header;