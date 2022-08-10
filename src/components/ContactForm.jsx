import React from 'react'

const ContactForm = () => {
  const [success, setSuccess] = React.useState(false)

  const onSubmit = () => {
    console.log("submitted")
    setSuccess(true)
  }

  return (
    <div className='flex flex-col w-[80%] md:w-[80%] rounded-lg border-2 border-slate-500 mt-6 border-dashed'>
      <form onSubmit={onSubmit} action="https://formsubmit.co/matias.nahuel.pizzi@hotmail.com" method="POST">
        <div className="flex flex-col items-center justify-center w-full bg-neutral-900 md:py-10 py-4 md:px-16 px-6 text-white">
          <div className='w-full flex flex-col justify-center items-center'>
            <p className='p-[15px] text-white'>If you have any questions, please fill out the form below and I will get back to you as soon as possible.</p>
            <div className='w-[90%] lg:max-w-[70%] flex flex-col gap-4 min-p-10'>
                <input name="name" type="text" required className="md:max-w-[300px] max-w-[500px] pl-3 min-h-[30px] rounded bg-slate-700" placeholder="Name" />
                <input name="email" type="email" required className="md:max-w-[300px] max-w-[500px] pl-3 min-h-[30px] rounded bg-slate-700" placeholder="Email" />
                <textarea name="message" required className="max-w-[700px] pl-3 pt-3 md:h-52 h-32 rounded bg-slate-700" placeholder="Message" />
            </div>
            <div className='flex flex-col w-full md:flex-row gap-4 items-center'>
              <div className="w-full flex flex-col items-center justify-center">
                <button className={success ? "contactButtonSucces":"contactButton"} type="submit">
                  <span>Submit</span> 
                  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path fill="white" d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"/></svg>
                </button>
              </div>
            </div>
            {success && <div className='flex flex-col w-full md:flex-row gap-4 items-center'>
              <div className="w-full min-h-[100px] flex flex-col items-center justify-center">
                <p className='text-lg text-slate-400'>Your message has been sent!</p>
              </div>
            </div>}
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm