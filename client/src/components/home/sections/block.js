import { isEmpty } from 'lodash';
import Link from 'next/link';
import PropTypes from 'prop-types';


const  Block = ( posts ) => {
    
    var {posts} = posts || {};
    var {nodes} = posts || {};
    let title = '';
    
	if ( isEmpty( nodes ) ) {
		return null;
	} else {
         title = nodes[0]?.categories?.nodes[0]?.name;
    }
    
	return (
		
        <section className="container p-4 mx-auto body-font">
        <h2 className="header uppercase" > {title} </h2>
        <div className="latest-news-feed">
				{ nodes?.length ? (
					<div className="feed-item w-4/6 px-4 py-4 border-2 border-zinc-100	">
                        <div className="feed-top-items">
                        <div className="feed-item-primary">
                            { nodes?.map( (post, index) => {
                                    return  (
                                                                                   
                                                index <= 2 ? (
                                                    
                                                        index == 0 ? (
                                                       
                                                        <Link key={post?.id} href={post?.link} legacyBehavior>
                                                            <a className="feed-item-primary-element mb-4" >
                                                                <img className="w-full h-64 object-cover object-center rounded" src={post?.featuredImage?.node?.mediaItemUrl} />
                                                                <div class="feed-item-element-meta">
                                                                <h2>{post?.title} </h2>
                                                                    <div class="feed-item-info">
                                                                        <div>
                                                                            <span>36 min</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>

                                                        </Link> 
                                                       
                                                        ) : (
                                                            <div className="feed-element-wrapper">
                                                                <div className="mx-auto flex flex-wrap">
                                                                    <img alt="ecommerce" className="w-1/6   lg:h-auto h-64 object-cover object-center rounded" src={post?.featuredImage?.node?.mediaItemUrl} />
                                                                    <div className="w-5/6   lg:pl-4 mt-6 lg:mt-0">
                                                                        <h1 className="text-gray-900 text-xm title-font font-medium mb-1">{post?.title}</h1>
                                                                    </div>
                                                                                            
                                                                </div>
                                                            </div>
                                                        )
                                                        

                                                ) : (null)                                               
                                      
                                    );
                            } ) }                            
                        </div>
                            <div className="feed-item-secondary">
                                { nodes?.map( (post, index) => {
                                        return  (
                                                                                    
                                            index > 2 ? (
                                                
                                                <div className="feed-element-wrapper">
                                                    <div className="mx-auto flex flex-wrap">
                                                        <img alt="ecommerce" className="w-1/6   lg:h-auto h-64 object-cover object-center rounded" src={post?.featuredImage?.node?.mediaItemUrl} />
                                                        <div className="w-5/6   lg:pl-4 mt-6 lg:mt-0">
                                                            <h1 className="text-gray-900 text-xm title-font font-medium mb-1">{post?.title}</h1>
                                                        </div>
                                                                                
                                                    </div>
                                                </div>

                                            ) : (null)                                               
                                        
                                        );
                                } ) }                            
                            </div>
                        </div>
                    </div>
				) : null }
				
                </div>
</section>
				
			
	);
};




export default Block;
