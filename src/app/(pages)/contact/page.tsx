import "@/styles/contact.css";
import Image from "next/image";

export default function HomePage() {
    return (
        <>
            <div className="sectionOne container text-center">
                <div className="common-title">Get in Touch</div>
                <div className="text">Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</div>
            </div>
            <div className="sectionTwo container grid">
                <div className="sectionTwo__left">
                    <form action="" className="form">
                        <label htmlFor="name">Name</label>
                        <input placeholder="your name here" type="text" id="name" />

                        <label htmlFor="email">Email</label>
                        <input placeholder="your email here" type="text" id="email" />

                        <label htmlFor="message">Message</label>
                        <textarea placeholder="your message here" name="" id="message" cols={30} rows={6}></textarea>
                        <button type="submit" className="submit-btn dark-btn">Submit</button>
                    </form>
                </div>
                <Image src="/images/Contact/map.svg" alt="" className="sectionTwo__right responsive-image" height={400} width={500}/>
            </div>
        </>
    );
}