'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [modalType, setModalType] = useState<'success' | 'error'>('success')

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        'service_4hopmui',
        'template_q895y54',
        {
          from_name: form.name,
          to_name: 'Jacob',
          from_email: form.email,
          to_email: 'jacobmrosedev@gmail.com',
          message: form.message,
        },
        'qq9auw0L8FoqgvMY_'
      )
      setLoading(false)

      setModalMessage('Your message has been successfully sent!')
      setModalType('success')
      setShowModal(true)

      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setLoading(false)
      console.log(error)

      setModalMessage('Something went wrong!')
      setModalType('error')
      setShowModal(true)
    }
  }

  return (
    <section className='c-space my-20' id='contact'>
      <div className='relative flex flex-col min-h-screen items-center justify-center'>
        <Image
          src='/assets/terminal.png'
          alt='terminal background'
          fill
          style={{ objectFit: 'cover', maxWidth: '1950px', margin: '0 auto' }}
        />

        <div className='relative z-10 contact-container'>
          <h3 className='text-center head-text text-white mt-10'>
            Let&apos;s Talk
          </h3>
          <p className='text-lg text-gray-300 mt-3'>
            Whether it&apos;s creating something new, refining your current
            platform, or tackling a unique challenge, I&apos;m here to bring
            your vision to life.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col space-y-6 pb-6'
          >
            <label className='flex flex-col space-y-2'>
              <span className='field-label text-gray-300'>Full Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='John Doe'
                required
                className='field-input'
              />
            </label>
            <label className='flex flex-col space-y-2'>
              <span className='field-label text-gray-300'>Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='JohnDoe@Gmail.com'
                required
                className='field-input'
              />
            </label>
            <label className='flex flex-col space-y-2'>
              <span className='field-label text-gray-300'>Message</span>
              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Write your message here...'
                required
                rows={5}
                className='field-input'
              ></textarea>
            </label>
            <button
              type='submit'
              className='btn-primary mt-4 p-3 rounded-md bg-gray-700 text-white hover:bg-gray-800 flex items-center justify-center space-x-2'
              disabled={loading}
            >
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
              <Image
                src='/assets/arrow-up.png'
                alt='arrow-up'
                width={20}
                height={20}
                className='field-btn_arrow'
              />
            </button>
          </form>
        </div>
      </div>

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-96 text-center'>
            <h2 className='text-xl font-bold text-gray-800'>
              {modalType === 'success' ? 'Message Sent!' : 'Error!'}
            </h2>
            <p
              className={`mt-2 ${
                modalType === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {modalMessage}
            </p>
            <button
              className='mt-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800'
              onClick={() => setShowModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact
