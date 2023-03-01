import { useState, useEffect } from 'react'
import {matches} from '../../../pages/api/data'

const Livescore = () => {

  console.log(matches)

	return ( 
			<section id="scoreboard" className="container overflow-x-auto p-4 mx-auto text-gray-600 body-font">


			{ matches?.map( (post, index) => {
				console.log(post)
				})
			}											
						<div className="border-2 flex border-zinc-100 rounded-lg ">
							<div className="border-2 m-2 p-2 border-zinc-100  rounded-lg md:w-1/5">
								<div id="match-score-card">
									<div id="match-info" className="text-xs before:content-['↗'] font-semibold	 text-green-700">1st Test</div>
									<div id="match-group">
										<div id="match-team-1" className="my-2 flex"> 
											<span><img className="h-4" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/au.svg" /></span>
											<span className="pl-2 font-semibold text-black	 text-xs md:w-1/3">AUS</span>
											<span className="text-xs font-semibold text-black md:w-3/5 text-right	">177/10 (63.5 ov)</span>
								
					
										</div>
										<div id="match-team-2" className="my-2 flex"> 
											<span><img className="h-4" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/in.svg" /></span>
											<span className="pl-2 font-semibold text-black	 text-xs md:w-1/3">IND</span>
											<span className="text-xs font-semibold text-black md:w-3/5 text-right	">177/10 (63.5 ov)</span>
										</div>
										<div className="bg-slate-100 border-t-zinc-200 -m-2 mt-2 p-4 h-4 font-semibold  text-xs text-right align-middle block">
											<a  className=" align-middle inline-block -mt-6 after:content-['>']" href="#" > Schedule </a>
										</div>
									</div>
									<div>
										<div id="match-live-info"></div>
										<span id="match-result"></span>
									</div>
								</div>
							</div>
							<div className="border-2 m-2 p-2 border-zinc-100  rounded-lg md:w-1/5 ">
							<div id="match-score-card">
									<div id="match-info" className="text-xs before:content-['↗'] font-semibold	 text-green-700">1st Test</div>
									<div id="match-group">
										<div id="match-team-1" className="my-2 flex"> 
											<span><img className="h-4" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/au.svg" /></span>
											<span className="pl-2 font-semibold text-black	 text-xs md:w-1/3">AUS</span>
											<span className="text-xs font-semibold text-black md:w-3/5 text-right	">177/10 (63.5 ov)</span>
								
					
										</div>
										<div id="match-team-2" className="my-2 flex"> 
											<span><img className="h-4" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/in.svg" /></span>
											<span className="pl-2 font-semibold text-black	 text-xs md:w-1/3">IND</span>
											<span className="text-xs font-semibold text-black md:w-3/5 text-right	">177/10 (63.5 ov)</span>
										</div>
										<div className="bg-slate-100 border-t-gray-200 -m-2 mt-2 p-4 h-4 font-semibold  text-xs text-right align-middle block">
											<a  className=" align-middle inline-block -mt-6 after:content-['>']" href="#" > Schedule </a>
										</div>
									</div>
									<div>
										<div id="match-live-info"></div>
										<span id="match-result"></span>
									</div>
								</div>
							</div>
							<div className="border-2 m-2 p-2 border-zinc-100  rounded-lg md:w-1/5">
							<div id="match-score-card">
									<div id="match-info" className="text-xs before:content-['↗'] font-semibold	 text-green-700">1st Test</div>
									<div id="match-group">
										<div id="match-team-1" className="my-2 flex"> 
											<span><img className="h-4" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/au.svg" /></span>
											<span className="pl-2 font-semibold text-black	 text-xs md:w-1/3">AUS</span>
											<span className="text-xs font-semibold text-black md:w-3/5 text-right	">177/10 (63.5 ov)</span>
								
					
										</div>
										<div id="match-team-2" className="my-2 flex"> 
											<span><img className="h-4" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/in.svg" /></span>
											<span className="pl-2 font-semibold text-black	 text-xs md:w-1/3">IND</span>
											<span className="text-xs font-semibold text-black md:w-3/5 text-right	">177/10 (63.5 ov)</span>
										</div>
										<div className="bg-slate-100 border-t-gray-200 -m-2 mt-2 p-4 h-4 font-semibold  text-xs text-right align-middle block">
											<a  className=" align-middle inline-block -mt-6 after:content-['>']" href="#" > Schedule </a>
										</div>
									</div>
									<div>
										<div id="match-live-info"></div>
										<span id="match-result"></span>
									</div>
								</div>
							</div>
							<div className="border-2 m-2 p-2 border-zinc-100  rounded-lg md:w-1/5">
							<div id="match-score-card">
									<div id="match-info" className="text-xs before:content-['↗'] font-semibold	 text-green-700">1st Test</div>
									<div id="match-group">
										<div id="match-team-1" className="my-2 flex"> 
											<span><img className="h-4" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/au.svg" /></span>
											<span className="pl-2 font-semibold text-black	 text-xs md:w-1/3">AUS</span>
											<span className="text-xs font-semibold text-black md:w-3/5 text-right	">177/10 (63.5 ov)</span>
								
					
										</div>
										<div id="match-team-2" className="my-2 flex"> 
											<span><img className="h-4" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/in.svg" /></span>
											<span className="pl-2 font-semibold text-black	 text-xs md:w-1/3">IND</span>
											<span className="text-xs font-semibold text-black md:w-3/5 text-right	">177/10 (63.5 ov)</span>
										</div>
										<div className="bg-slate-100 border-t-gray-200 -m-2 mt-2 p-4 h-4 font-semibold  text-xs text-right align-middle block">
											<a  className=" align-middle inline-block -mt-6 after:content-['>']" href="#" > Schedule </a>
										</div>
									</div>
									<div>
										<div id="match-live-info"></div>
										<span id="match-result"></span>
									</div>
								</div>
							</div>
							<div className="border-2 m-2 p-2 border-zinc-100  rounded-lg md:w-1/5">
							<div id="match-score-card">
									<div id="match-info" className="text-xs before:content-['↗'] font-semibold	 text-green-700">1st Test</div>
									<div id="match-group">
										<div id="match-team-1" className="my-2 flex"> 
											<span><img className="h-4" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/au.svg" /></span>
											<span className="pl-2 font-semibold text-black	 text-xs md:w-1/3">AUS</span>
											<span className="text-xs font-semibold text-black md:w-3/5 text-right	">177/10 (63.5 ov)</span>
								
					
										</div>
										<div id="match-team-2" className="my-2 flex"> 
											<span><img className="h-4" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/in.svg" /></span>
											<span className="pl-2 font-semibold text-black	 text-xs md:w-1/3">IND</span>
											<span className="text-xs font-semibold text-black md:w-3/5 text-right	">177/10 (63.5 ov)</span>
										</div>
										<div className="bg-slate-100 -m-2 mt-2 p-4 h-4 font-semibold  text-xs text-right align-middle block">
											<a  className=" align-middle inline-block -mt-6 after:content-['>']" href="#" > Schedule </a>
										</div>
									</div>
									<div>
										<div id="match-live-info"></div>
										<span id="match-result"></span>
									</div>
								</div>
							</div>
						</div>

			</section>
		);
};
export default Livescore;



export const getStaticProps = async () => {
	return {
	  props: { matchesData: matches },
	};
  };