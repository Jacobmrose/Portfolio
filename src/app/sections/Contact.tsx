'use client'
import { useRef, useState } from 'react'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const [loading, setLoading] = useState(false)

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

    // Simulate form submission (replace this with your actual backend logic)
    setTimeout(() => {
      alert('Form submitted successfully!')
      setLoading(false)
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, 2000)
  }

  return (
    <section className='c-space my-20 pb-16'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img
          src='/assets/terminal.png'
          alt='terminal background'
          className='absolute inset-0 min-h-screen'
        />
        <div className='contact-container'>
          <h3 className='text-center head-text text-white mt-10'>Let's Talk</h3>
          <p className='text-lg text-gray-300 mt-3'>
            Whether it's creating something new, refining your current platform,
            or tackling a unique challenge, I'm here to bring your vision to
            life.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col space-y-6'
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
              <img
                src='/assets/arrow-up.png'
                alt='arrow-up'
                className='field-btn_arrow'
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
