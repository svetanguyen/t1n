import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import LinksList from '../components/LinksList'
import {DRIBBLE, LINKEDIN, BEHANCE, FACEBOOK} from '../constants/links'

const Contact = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    const links = [
        {name: 'Dribble', link: DRIBBLE},
        {name: 'Behance', link: BEHANCE}
    ]

    const links_2 = [
        {name: 'Linkedin', link: LINKEDIN},
        {name: 'Facebook', link: FACEBOOK}
    ]

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_ID, e.currentTarget, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setName('')
          setMail('')
          setMessage('')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="min-h-screen px-4 lg:px-11 bg-gradient-top-50-gray pt-[116px] lg:py-[180px] lg:flex items-center">
        <form className="bg-gray-100 shadow-1 mb-16 lg:mb-0 p-4 justify-between flex flex-wrap lg:p-12 shadow-[0px_20px_40px_rgba(0, 0, 0, 0.1)]" onSubmit={sendEmail}>
            <input onChange={(e) => setName(e.currentTarget.value)} value={name} placeholder="name" className="font-lightexp focus-visible:outline-0 focus:border-b placeholder:lg:text-4xl placeholder:font-lightexp placeholder:text-dark-200 placeholder:opacity-40 text-sm pb-2 lg:pb-0 lg:text-4xl lg:h-14 border-b w-full lg:w-[49%] block border-black-opacity bg-transparent" type="text" name="user_name" />
            <input onChange={(e) => setMail(e.currentTarget.value)} value={mail} placeholder="e-mail" className="font-lightexp focus-visible:outline-0 focus:border-b placeholder:lg:text-4xl placeholder:font-lightexp placeholder:text-dark-200 placeholder:opacity-40 text-sm pb-2 lg:pb-0 lg:text-4xl lg:h-14 border-b w-full lg:w-[49%] mt-4 lg:mt-0 block border-black-opacity bg-transparent" type="email" name="user_email" />
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message} placeholder="message" className="font-lightexp focus-visible:outline-0 lg:p-4 placeholder:lg:text-4xl lg:text-4xl placeholder:font-lightexp placeholder:text-dark-200 placeholder:opacity-40 pb-2 lg:pb-0 text-sm w-full p-1 mb-10 lg:mb-14 mt-5 lg:mt-8 h-96 bg-transparent border border-black-opacity" name="message" />
            <button className="bg-black-100 font-main-bold lg:text-3xl mx-auto text-base uppercase min-w-[167px] lg:min-w-[445px] py-1 lg:py-4 text-yellow" type="submit">Send</button>
        </form>
        <div className="uppercase mb-14 lg:mb-0 lg:pl-[136px] lg:pt-8">
            <LinksList customClass="hidden lg:block" links={links} color="gray-100" customWidthDesk="lg:w-full" />
            <LinksList customClass="lg:hidden" links={links} customWidthDesk="lg:w-full" />
            <LinksList links={links_2}  customWidthDesk="lg:w-full"/>
        </div>
    </div>
  );
};

export default Contact