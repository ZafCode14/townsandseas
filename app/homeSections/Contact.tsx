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
    <section className="flex justify-center w-full py-5 md:py-10">
      <div className="w-[1300px] max-w-full flex flex-col items-center">
      <p className={`mb-5 absolute self-start text-[#636D46] text-[14px] md:text-[18px] lg:text-[20px] px-5`}>GET IN TOUCH</p>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start w-full mt-5">

        {/** Form */}
        <form onSubmit={handleSend} className="flex flex-col w-[600px] max-w-full lg:w-[50%] text-[12px] pt-5 lg:pt-10 px-5 relative">
          <label htmlFor="name" className="text-[18px] md:text-[24px]">name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Type here..."
            className="border border-[#252626] bg-transparent placeholder:text-[12px] pl-2 py-1 placeholder:text-[#8d8d8d] mb-2 lg:mb-8 rounded-none"
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
            className="border border-[#252626] bg-transparent placeholder:text-[12px] pl-2 py-1 placeholder:text-[#8d8d8d] mb-2 lg:mb-8 rounded-none"
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
            className="border border-[#252626] bg-transparent placeholder:text-[12px] pl-2 py-1 placeholder:text-[#8d8d8d] mb-2 lg:mb-8 rounded-none"
            autoComplete="ture"
          />

          <label htmlFor="subject" className="text-[18px] md:text-[24px]">subject</label>
          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Type here..."
            className="border border-[#252626] bg-transparent placeholder:text-[12px] pl-2 py-1 placeholder:text-[#8d8d8d] mb-2 lg:mb-8 rounded-none"
            required
          />

          <label htmlFor="message" className="text-[18px] md:text-[24px]">message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type here..."
            className="border border-[#252626] bg-transparent placeholder:text-[12px] pl-2 py-2 placeholder:text-[#8d8d8d] mb-2 lg:mb-8 h-[120px] rounded-none"
            required
          />

          <button type="submit" className="md:mt-5 text-[40px] lg:text-[5vw] 2xl:text-[80px] self-end lg:absolute bottom-5 right-0 lg:right-[-90%] text-[#636D46]">
            submit
          </button>
        </form>

        {/** Title */}
        <div className="text-[#636D46] flex flex-col items-center lg:w-[50%] px-10">
          <h2 className="lg:text-[5vw] text-[40px] 2xl:text-[80px] self-start leading-[50px] lg:leading-[6vw] 2xl:leading-[90px] mt-10">
            Live the story
          </h2>
          <p className={`hidden md:block text-[14px] md:text-[18px] lg:text-[22px] uppercase mt-5 md:mt-10 text-justify`}>Towns & Seas is a collaboration, a craft, a vision. Whether you’re a partner, an architect, or someone looking for a space that feels right, let’s create something that lasts together.</p>
          <p className={`text-[16px] md:text-[24px] lg:text-[32px] md:self-start md:mt-10`}>BUILT TO BELONG.</p>
        </div>
        
      </div>
      </div>
    </section>
  );
}