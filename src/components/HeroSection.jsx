import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
	return (
		<section className='flex flex-col items-center lg:mt-10' id='home'>
			<div className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
				<span>VirtualR build tools</span>
				<span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
					{' '}
					for developers
				</span>
			</div>
			<h1 className='mt-10 text-lg text-center text-neutral-400 max-w-4xl'>
				Empower your creativity and bring your VR app ideas to life with our
				intuitive development tools. Get started today and turn your imagination
				into immersive reality!
			</h1>
			<div className='flex justify-center my-10'>
				<a
					href='#'
					className='bg-gradient-to-r from-orange-500 to-red-800 py-4 px-4 mx-1 rounded-md'
				>
					Start for free
				</a>
				<a href='#' className='py-4 px-2 mx-3 rounded-md border'>
					Documentation
				</a>
			</div>
			<div className='flex mt-10 justify-center'>
				<video
					autoPlay
					loop
					muted
					className='w-1/2 rounded-lg border border-orange-700 shadow-orange-400 mx-2 my-4'
				>
					<source src={video1} type='video/mp4' />
					Your browser does not support the video tag.
				</video>
				<video
					autoPlay
					loop
					muted
					className='w-1/2 rounded-lg border border-orange-700 shadow-orange-400 mx-2 my-4'
				>
					<source src={video2} type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</div>
		</section>
	);
};

export default HeroSection;
