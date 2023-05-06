import React from 'react'
import './intro.css';

const Intro = () => {
    return (

        <section className=''>

            <div>
                <h1 className='text-center py-5'>Introduction</h1>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img src="https://wallpapercave.com/wp/wp4624445.jpg" className=' aboutimg' alt="" />
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h2 className='py-2 text-center'>Who we are</h2>
                        <p>We are a recognized startup that specializes in the recycling of electronic waste and lithium-ion batteries. Our team comprises of experts in the field of e-waste management who are dedicated to providing eco-friendly and efficient solutions for businesses and individuals.

                            <h2 className='py-2 text-center'>What we do</h2>
                            <p>At Remine India, we provide end-to-end e-waste management solutions that include collection, transportation, processing, and disposal of e-waste and lithium-ion batteries. We use advanced recycling techniques that ensure that e-waste is disposed of in an environmentally friendly and safe way.</p>

                            <a href="" className='btn btn-success'>visit for more</a>
                        </p>
                    </div>



                </div>
            </div>


            
        </section>
    )
}

export default Intro