import React from "react";

const ProfessionalExperience = ({ data }) => {
	const { title, experiences } = data;
	return (
		<section>
			<h2 className='mb-6 text-2xl font-bold'> {title}</h2>
			<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
			<div className='flex flex-col gap-6'>
				{experiences.map(({ role, description, current }) => (
					<div key={role} className='flex flex-col rounded-lg'>
						<span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
						<div className='bg-grey-light p-6 drop-shadow-md'>
							<h3 className="text-1xl font-bold">{role}</h3>
							<p className='mt-2'>{description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProfessionalExperience;