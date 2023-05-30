import chef from './../../../../public/assets/home/chef-service.jpg';
const About = () => {
    return (
        <section className="pb-16 relative flex items-center justify-center">
            <img src={chef} alt=""/>
            <div className='absolute z-10 w-full sm:w-3/4 bg-white p-6 text-black'>
                <h3 className='text-2xl text-center mb-4'>Bistro Boss</h3>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </section>
    );
};

export default About;