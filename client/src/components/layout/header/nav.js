import { isEmpty } from 'lodash';
import Link from 'next/link';
import {useState} from 'react';
import PropTypes from 'prop-types';


const Nav = ( {headerMenus} ) => {

	if ( isEmpty( headerMenus ) ) {
		return null;
	}

	const [ isMenuVisible, setMenuVisibility ] = useState( false );

	return (
		
			<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
				{ headerMenus?.length ? (
					<div className="text-sm lg:flex-grow">
						{ headerMenus?.map( menu => {
							
								return  (
									<Link key={menu?.node?.id} href={menu?.node?.path} legacyBehavior>
										<a className="mr-5 font-bold text-sm text-center uppercase cursor-pointer hover:text-red-600">
											{menu?.node?.label}
										</a>
									</Link>
								);
							
						} ) }
						
					</div>
				) : null }
				
			</nav>
				
			
	);
};




export default Nav;