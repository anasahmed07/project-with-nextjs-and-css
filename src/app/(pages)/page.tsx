import "@/styles/homepage.css";
import Image from "next/image";
import "@/styles/designSystem.css"

export default function HomePage() {
    return (
        <>
            <div className="hero">
                <div className="sectionOne container grid">
                    <div className="sectionOne__left flex">
                        <div className="sectionOne__left--label label text-white">
                            welcome
                        </div>
                        <div className="sectionOne__left--title common-title text-white">
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                        <div className="sectionOne__left--text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                            laboriosam aliquam est exercitationem quo reiciendis asperiores
                            veritatis placeat porro earum? Libero tempora impedit rerum quae
                            aspernatur nostrum quod fuga quasi.
                        </div>
                        <button className="sectionOne__left--btn white-btn">Explore</button>
                    </div>
                    <Image
                        className="sectionOne__right responsive-image"
                        src="/images/Home/image-1.svg"
                        alt=""
                        height={1000} width={1000}
                    />
                </div>
            </div>

            <div className="sectionTwo container">
                <div className="sectionTwo__content text-center flex">
                    <div className="sectionTwo__content--label label text-green">
                        partners
                    </div>
                    <div className="sectionTwo__content--title common-title">
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <div className="sectionTwo__content--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
                        porro?
                    </div>
                </div>
                <div className="sectionTwo__logo">
                    <Image
                        src="/images/Companies/Google.svg"
                        alt=""
                        height={50} width={100}
                        className="sectionTwo__logo--1 responsive-image-2"
                    />
                    <Image
                        src="/images/Companies/Microsoft.svg"
                        alt=""
                        height={46} width={100}
                        className="sectionTwo__logo--2 responsive-image-2"
                    />
                    <Image
                        src="/images/Companies/Airbnb.svg"
                        alt=""
                        height={50} width={100}
                        className="sectionTwo__logo--3 responsive-image-2"
                    />
                    <Image
                        src="/images/Companies/Facebook.svg"
                        alt=""
                        height={38} width={100}
                        className="sectionTwo__logo--4 responsive-image-2"
                    />
                    <Image
                        src="/images/Companies/Spotify.svg"
                        alt=""
                        height={50} width={100}
                        className="sectionTwo__logo--5 responsive-image-2"
                    />
                </div>
                <button className="sectionTwo__btn dark-btn">Learn More</button>
            </div>

            <div className="sectionThree container grid">
                <Image
                    className="sectionThree__left responsive-image"
                    src="/images/Home/image-2.svg"
                    alt=""
                    height={100} width={1000}
                />
                <div className="sectionThree__right flex">
                    <div className="sectionThree__right--title common-title">
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <div className="sectionThree__right--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                        laboriosam aliquam est exercitationem quo reiciendis asperiores
                        veritatis placeat porro earum? Libero tempora impedit rerum quae
                        aspernatur nostrum quod fuga quasi.
                    </div>
                    <button className="sectionThree__right--btn dark-btn">Explore</button>
                </div>
            </div>
            <div className="sectionFour container grid">
                <div className="sectionFour__left flex">
                    <div className="sectionFour__left--title common-title">
                        Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <div className="sectionFour__left--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                        laboriosam aliquam est exercitationem quo reiciendis asperiores
                        veritatis placeat porro earum? Libero tempora impedit rerum quae
                        aspernatur nostrum quod fuga quasi.
                    </div>
                    <button className="sectionFour__left--btn dark-btn">Explore</button>
                </div>
                <Image
                    src="/images/Home/image-3.svg"
                    alt=""
                    height={100} width={1000}
                    className="sectionFour__right responsive-image"
                />
            </div>

            <div className="sectionFive container">
                <div className="sectionFive__content text-center">
                    <div className="sectionFive__content--label label text-green">
                        Teams
                    </div>
                    <div className="sectionFive__content--title common-title">
                        Our teams
                    </div>
                    <div className="sectionFive__content--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
                        porro?
                    </div>
                </div>
                <div className="sectionFive__cards">
                    <div className="sectionFive__cards--1">
                        <Image
                            className="responsive-image"
                            src="/images/team/Peg_Legge.svg"
                            alt=""
                            height={100} width={1000}
                        />
                        <div className="name">Peg Legge</div>
                        <div className="position">CEO</div>
                    </div>
                    <div className="sectionFive__cards--2">
                        <Image
                            className="responsive-image"
                            src="/images/team/Richard.svg"
                            alt=""
                            height={100} width={1000}
                        />
                        <div className="name">Richard Guerra</div>
                        <div className="position">CTO</div>
                    </div>
                    <div className="sectionFive__cards--3">
                        <Image
                            className="responsive-image"
                            src="/images/team/Alexandra.svg"
                            alt=""
                            height={100} width={1000}
                        />
                        <div className="name">Alexandra Stolz</div>
                        <div className="position">Designer</div>
                    </div>
                    <div className="sectionFive__cards--4">
                        <Image
                            className="responsive-image"
                            src="/images/team/Janet.svg"
                            alt=""
                            height={100} width={1000}
                        />
                        <div className="name">Janet Bray</div>
                        <div className="position">developer</div>
                    </div>
                </div>
                <button className="sectionFive__btn dark-btn">View Team</button>
            </div>
        </>
    );
}
