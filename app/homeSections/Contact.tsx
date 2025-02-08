"use client";
import { sendEmail } from "@/actions/sendEmail";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, phone, email, message, subject } = formData;

    const emailContent = `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `;

    try {
      await sendEmail(emailContent, subject);
      alert("Your message has been sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        subject: "",
      });
    } catch (error) {
      console.error("Error sending email", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <section className="flex justify-center w-full py-10 lg:py-20">
      <div className="w-[1300px] max-w-full flex flex-col-reverse lg:flex-row items-center lg:items-start">

        {/** Form */}
        <form onSubmit={handleSend} className="flex flex-col w-[600px] max-w-full lg:w-[50%] text-[12px] pt-5 lg:pt-10 px-5 relative">
          <label htmlFor="name" className="text-[18px] md:text-[24px]">name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Type here..."
            className="border border-[#252626] bg-transparent placeholder:text-[12px] pl-2 py-1 placeholder:text-[#8d8d8d] mb-2 lg:mb-8"
            required
            autoComplete="ture"
          />

          <label htmlFor="email" className="text-[18px] md:text-[24px]">e-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Type here..."
            className="border border-[#252626] bg-transparent placeholder:text-[12px] pl-2 py-1 placeholder:text-[#8d8d8d] mb-2 lg:mb-8"
            required
            autoComplete="ture"
          />

          <label htmlFor="phone" className="text-[18px] md:text-[24px]">phone number</label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Type here..."
            className="border border-[#252626] bg-transparent placeholder:text-[12px] pl-2 py-1 placeholder:text-[#8d8d8d] mb-2 lg:mb-8"
            autoComplete="ture"
          />

          <label htmlFor="subject" className="text-[18px] md:text-[24px]">subject</label>
          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Type here..."
            className="border border-[#252626] bg-transparent placeholder:text-[12px] pl-2 py-1 placeholder:text-[#8d8d8d] mb-2 lg:mb-8"
            required
          />

          <label htmlFor="message" className="text-[18px] md:text-[24px]">message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type here..."
            className="border border-[#252626] bg-transparent placeholder:text-[12px] pl-2 py-2 placeholder:text-[#8d8d8d] mb-2 lg:mb-8 h-[120px]"
            required
          />

          <button type="submit" className="md:mt-5 text-[40px] lg:text-[5vw] 2xl:text-[80px] self-end lg:absolute bottom-5 right-0 lg:right-[-90%] text-[#636D46]">
            submit
          </button>
        </form>

        {/** Title */}
        <div className="text-[#636D46] flex flex-col items-center lg:w-[50%] px-10">
          <p className="self-start mb-5">GET IN TOUCH</p>
          <h2 className="lg:text-[5vw] text-[40px] 2xl:text-[80px] self-start leading-[50px] lg:leading-[6vw] 2xl:leading-[90px] md:mt-5 lg:mt-10">
            We are happy to <br /> hear from You.
          </h2>
        </div>
        
      </div>
    </section>
  );
}