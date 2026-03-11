import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
<Title text1={'About'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <p> Eligendi consequatur dicta, autem nemo dolor commodi, pariatur cupiditate unde delectus minus nesciunt laborum blanditiis veritatis! Non, ut dolores.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis commodi quidem quas mollitia perspiciatis iste? Veritatis explicabo exercitationem eos atque culpa praesentium tempora nesciunt, corrupti ullam nobis eum impedit odit!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur, corrupti debitis libero et culpa alias dignissimos sit voluptate molestiae iste vel incidunt natus quos perferendis, modi ducimus? Inventore.</p>
         </div>
      </div>
      
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p> adipisicing elit. Quia temporibus nobis quam, unde aspernatur odit veniam laudantium labore nihil rerum? Nam veritatis officia debitis, nisi praesentium fuga eum at dolorum.</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p> adipisicing elit. Quia temporibus nobis quam, unde aspernatur odit veniam laudantium labore nihil rerum? Nam veritatis officia debitis, nisi praesentium fuga eum at dolorum.</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional customer service:</b>
            <p className='text-gray-600'> adipisicing elit. Quia temporibus nobis quam, unde aspernatur odit veniam laudantium labore nihil rerum? Nam veritatis officia debitis, nisi praesentium fuga eum at dolorum.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
