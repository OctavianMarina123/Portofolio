import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const handleChange = ({target: {name,value}}) =>{
        setForm({...form,[name]:value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        setLoading(true)

        try {
            await emailjs.send("service_6cegakb", "template_1xjlrsc", {
                from_name: form.name,
                to_name: 'Octavian',
                from_email: form.email,
                to_email: 'octamarina@gmail.com',
                message: form.message
            },
                'P8iA8E5QTdCrLN1um'
                )
            alert("Your message has been sent!")

        }catch (error){
            console.log(error)
            alert('Something went wrong')
        }

        setLoading(false)
    }
    //service_6cegakb
    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex -col">
                {/*<img src="/assets/terminal.png" alt="terminal background"*/}
                {/*     className="absolute inset-0 min-h-screen"/>*/}
                <div className="contact-container flex flex-col">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600">Whether you’re looking to build a professional website,
                        mobile app, or create an innovative AI solution, I’m here to help. Let’s work together to turn
                        your
                        vision into reality with cutting-edge technology and custom solutions. Get in touch today to
                        start
                        your project!
                    </p>
                    <div className="mockup-phone mt-20">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1 bg-black-200">
                                <form ref={formRef} onSubmit={handleSubmit} className="my-10 flex flex-col space-y-7 contact-container">
                                    <label className="space-y-3">
                            <span className="field-label">
                                Full Name
                            </span>
                                        <input type="text" name="name" value={form.name} onChange={handleChange}
                                               required
                                               className="field-input" placeholder="Your Name"></input>
                                    </label>
                                    <label className="space-y-3">
                            <span className="field-label">
                                Email
                            </span>
                                        <input type="email" name="email" value={form.email} onChange={handleChange}
                                               required
                                               className="field-input" placeholder="youremail@gmail.com"></input>
                                    </label>
                                    <label className="space-y-3">
                            <span className="field-label">
                                Your Message
                            </span>
                                        <textarea name="message" value={form.message} onChange={handleChange} required
                                                  rows={5}
                                                  className="field-input"
                                                  placeholder="Hi, I'm intersted in..."></textarea>
                                    </label>
                                    <button className="field-btn" type="submit" disabled={loading}>
                                        {loading? 'Sending... ':'SendMessage'}
                                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
