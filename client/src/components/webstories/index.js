import {isEmpty} from 'lodash';
import Link from 'next/link';

const Webstories = ( {web_stories} ) => {
	
	var {nodes} = web_stories || {};

	if ( isEmpty( nodes ) ) {
		return null;
	}

	return (
		<section id="stories" className="container p-4 mx-auto text-gray-600 body-font">
            <div className="stories-widget">
                
				{ nodes?.length ? (
					<ul className="flex space-x-4">
						{ nodes?.map( story => {
							
								return  (
									<li className="flex flex-col items-center space-y-1">
                                        <div className="relative bg-gradient-to-tr from-red-100 to-red-600 p-1 rounded-full">
                                        <Link key={story?.id} href={story?.link} legacyBehavior>
                                            <a className="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                                                <img className="h-16 w-16 rounded-full" src={story?.featuredImage?.node?.mediaItemUrl} alt={story?.featuredImage?.node?.altText} />
                                            </a>
                                        </Link>
                                        </div>
                                        <a className='text-xs' href="#">{story?.title}</a>
                                    </li>
								);
							
						} ) }
						
					</ul>
				) : null }
				
			</div>
        </section>
			
		
	);
};


export default Webstories;