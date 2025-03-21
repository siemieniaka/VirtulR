import { testimonials } from '../constants';

const Testimonials = () => {
	return (
		<section className='mt-10 tracking-wide py-20' id='testimonials'>
			<h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 tracking-wider'>
				What People are saying
			</h2>
			<div className='flex flex-wrap jusify-center'>
				{testimonials.map((testimonial, index) => (
					<div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
						<div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>
							<p className=''>{testimonial.text}</p>
							<div className='flex mt-8 items-center'>
								<img
									className='h-12 w-12 mr-6 rounded-full border border-neutral-300'
									src={testimonial.image}
									alt={testimonial.user}
								/>
								<div>
									<h6>{testimonial.user}</h6>
									<span className='text-sm font-normal itelic text-neutral-600'>
										{testimonial.company}
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
