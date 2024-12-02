import Image from "next/image";

export default function Footer() {
    return (
        <div className="footerWrapper">
            <div className="footerLinks container">
                <div className="footerLinks__socials">
                    <Image height={20} width={30} src="/images/socials/facebook.svg" alt="" className="footerLinks__socials--1"/>
                    <Image height={20} width={30} src="/images/socials/instagram.svg" alt="" className="footerLinks__socials--2"/>
                    <Image height={20} width={30} src="/images/socials/twitter.svg" alt="" className="footerLinks__socials--3"/>
                    <Image height={20} width={30} src="/images/socials/pinterest.svg" alt="" className="footerLinks__socials--4"/>
                    <Image height={20} width={30} src="/images/socials/tiktok.svg" alt="" className="footerLinks__socials--5"/>
                    <Image height={20} width={30} src="/images/socials/whatsapp.svg" alt="" className="footerLinks__socials--6"/>
                    <Image height={20} width={30} src="/images/socials/youtube.svg" alt="" className="footerLinks__socials--7"/>
                </div>
                <div className="footerLinks__copyright text-white text-center">
                    © Start, 2022. All rights reserved.
                </div>
            </div>
        </div>
    );
}
