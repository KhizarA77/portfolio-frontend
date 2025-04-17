import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    
    try {
      // Get the backend API URL from environment variables
      const backendApiUrl = import.meta.env.VITE_BACKEND_API_URL;
      
      if (!backendApiUrl) {
        throw new Error('Backend API URL is not configured');
      }
      
      const response = await fetch(`${backendApiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.status === 201) {
        // Success
        setSubmitMessage('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Error
        setSubmitMessage('Something went wrong. Please try again later.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Failed to send message. Please try again later.');
      setIsError(true);
    } finally {
      setIsSubmitting(false);
      
      // Clear success/error message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
        if (isError) setIsError(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section bg-primary text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-8">
                I'm always open to discussing new projects, opportunities, or partnerships. 
                Feel free to reach out to me using the contact form or through my social profiles.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaEnvelope size={20} />
                  <a href="mailto:masood.khizarasad@gmail.com" className="hover:underline">
                    masood.khizarasad@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt size={20} />
                  <a href="tel:+923362403019" className="hover:underline">
                    +92 336 2403019
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaLinkedin size={20} />
                  <a href="https://www.linkedin.com/in/khizar-asad" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    linkedin.com/in/khizar-asad
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaGithub size={20} />
                  <a href="https://github.com/KhizarA77" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    github.com/KhizarA77
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg text-dark"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg text-dark"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded-lg text-dark"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn bg-white text-primary hover:bg-gray-100 flex items-center justify-center"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </button>
                
                {submitMessage && (
                  <p className={`text-center p-3 rounded-lg ${isError ? 'bg-red-800 bg-opacity-50' : 'bg-green-800 bg-opacity-50'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;