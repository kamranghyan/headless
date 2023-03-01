import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import Seo from '../seo';
import {isEmpty} from 'lodash';
import {sanitize} from '../../utils/miscellaneous';
import PropTypes from 'prop-types';
import Livescore from '../livescore';
import Webstories from '../webstories';
import Block from '../home/sections/block';
import SmallBlock from '../home/sections/small-block';
import Trending from '../home/sections/trending'
import Video from '../home/sections/video'


const Layout = ( {data, isPost, children} ) => {
	const {page, post, posts, header, footer, headerMenus, footerMenus, stories, soccer_posts, health_posts, business_posts, prediction_posts, wwe_posts, bb_posts, anime_posts, gaming_posts, pick_posts, trendings, web_stories} = data || {};
	// If it does not have either post or page.
	if ( isEmpty( page ) && isEmpty( post ) && isEmpty( posts ) && isEmpty( stories ) && isEmpty( soccer_posts ) && isEmpty( trendings )) {
		return null;
	}

	const seo = isPost ? ( post?.seo ?? {} ) : ( page?.seo ?? {} );
	const uri = isPost ? ( post?.uri ?? {} ) : ( page?.uri ?? {} );

	
	
	return (
		<div>
			<Seo seo={seo} uri={uri}/>
			<Head>
				<link rel="shortcut icon" href={header?.favicon}/>
				{seo?.schemaDetails ? (
					<script
						type='application/ld+json'
						className='yoast-schema-graph'
						key='yoastSchema'
						dangerouslySetInnerHTML={{__html: sanitize( seo.schemaDetails )}}
					/>
				) : null}
			</Head>
			<Header header={header} headerMenus={headerMenus?.edges} />
			<Livescore></Livescore>
			<Webstories web_stories={web_stories}></Webstories>
			<Block posts={posts} ></Block>
			<Trending trendings={trendings}></Trending>
			<Video></Video>
			<Block posts={soccer_posts} ></Block>
			<section className="container mx-auto body-font flex">
				<SmallBlock posts={wwe_posts} ></SmallBlock>
				<SmallBlock posts={bb_posts} ></SmallBlock>
				<SmallBlock posts={anime_posts} ></SmallBlock>
				<SmallBlock posts={gaming_posts} ></SmallBlock>
				
			</section>
			<section className="container mx-auto body-font flex">
				<SmallBlock posts={health_posts} ></SmallBlock>
				<SmallBlock posts={business_posts} ></SmallBlock>
				<SmallBlock posts={pick_posts} ></SmallBlock>
				<SmallBlock posts={prediction_posts} ></SmallBlock>
				
			</section>
			
			
			{/* <Block></Block>
			<Block></Block>
			<Block></Block>
			<Block></Block> */}
			
			<div className="container px-5 py-24 mx-auto min-h-almost-screen">
				{children}
			</div>
			<Footer footer={footer} footerMenus={footerMenus?.edges} header={data?.header}/>
		</div>
	);
};


export default Layout;
