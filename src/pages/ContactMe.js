import React, { useState, useEffect } from 'react'
import AnimatedPage from '../components/AnimatedPage'

const ContactMe = () => {
  const [copyMsg, setCopyMsg] = useState('')
  const [email, setEmail] = useState('magnus.kodehode@gmail.com')
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => { //resets copy message and email after the timeout, and clears the timer
    const timer = setTimeout(() => {
      setCopyMsg('')
      setEmail('magnus.kodehode@gmail.com')
      setIsFlipped(false)
    }, 3000)
    return () => {
        clearTimeout(timer)
    }
}, [copyMsg])

  const copyToClip = () => { //copies the email to clipboard, and removes email so only the message is shown
    setEmail('')
    navigator.clipboard.writeText(email)
    setIsFlipped(true)
    setCopyMsg(`Adresse kopiert til utklippstavle`)
  }


  return (
    <AnimatedPage>
      <div className='save-the-children'>
            <h1>Kontakt meg</h1>
                <div 
                className={`email ${isFlipped ? 'flipped' : ''}`}
                onClick={copyToClip}
                >
                <div><p className='front'>{email}</p><p className='back'>{copyMsg}</p></div>
                </div>
      </div>
    </AnimatedPage>
  )
}

export default ContactMe
