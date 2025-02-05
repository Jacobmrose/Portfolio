import { clientReviews } from '../constants'
import Image from 'next/image'

const Clients = () => {
  return (
    <section className='c-space my-20 pb-16'>
      <h3 className='head-text text-center text-gray-300'>
        Hear from My Clients
      </h3>
      <div className='client-container'>
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div key={id} className='client-review'>
            <div>
              <p className='text-white font-light'>{review}</p>
            </div>
            <div className='client-content'>
              <div className='flex gap-3'>
                <Image
                  src={img}
                  alt={name}
                  width={48}
                  height={48}
                  className='w-12 h-12 rounded-full'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold text-gray-300'>{name}</p>
                  <p className='text-gray-500'>{position}</p>
                </div>
              </div>
              <div className='flex self-end items-center gap-2'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src='/assets/star.png'
                    alt='stars'
                    width={20}
                    height={20}
                    className='w-5 h-5'
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id='contact'></div>
    </section>
  )
}
export default Clients
