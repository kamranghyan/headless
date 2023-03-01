import { isEmpty } from 'lodash';
import Link from 'next/link';
import PropTypes from 'prop-types';


const  SmallBlock = ( posts ) => {
    
    var {posts} = posts || {};
    var {nodes} = posts || {};
    let title = '';
    

	if ( isEmpty( nodes ) ) {
		return null;
	} else {
         title = nodes[0]?.categories?.nodes[0]?.name;
    }
    
	return (
		
        
        <>
        
				{ nodes?.length ? (
					<div className="w-1/4 px-4 py-4 	">
                        <h2 className="header uppercase" >{title}</h2>
                        <div className="feed-top-items">
                        
                            <div className="feed-item-primary">
                                { nodes?.map( (post, index) => {
                                        return  (
                                            <div className="feed-element-wrapper">
                                                <div className="flex flex-wrap">
                                                    {/* <img alt="ecommerce" className="w-1/6   lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" /> */}
                                                    <div className="mt-6 lg:mt-0">
                                                        <h1 className="text-gray-900 text-xm title-font font-medium mb-1">{post?.title}</h1>
                                                    </div>
                                                                            
                                                </div>
                                            </div>
                                        );
                                } ) }                            
                            </div>
                        </div>
                    </div>
				) : null }
				
                </>
				
			
	);
};




export default SmallBlock;
