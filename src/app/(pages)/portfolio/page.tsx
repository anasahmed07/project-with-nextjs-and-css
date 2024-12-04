import "@/styles/portfolio.css"
import "@/styles/designSystem.css"
import Image from "next/image";

export default function Portfolio(){
    return(  
    <div className="sectionOne container">
        <div className="sectionOne__content text-center flex">
          <div className="sectionOne__content--label label text-green">portfolio</div>
            <div className="sectionOne__content--title common-title">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="sectionOne__content--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, porro?
          </div>
        </div>
        <div className="sectionOne__images">
          <Image className="responsive-image" width={300} height={200} src="/images/Portfolio/sample-8.png" alt=""/>
          <Image className="responsive-image" width={300} height={200} src="/images/Portfolio/sample-1.svg" alt=""/>
          <Image className="responsive-image" width={300} height={200} src="/images/Portfolio/sample-2.svg" alt=""/>
          <Image className="responsive-image" width={300} height={200} src="/images/Portfolio/sample-3.svg" alt=""/>
          <Image className="responsive-image" width={300} height={200} src="/images/Portfolio/sample-4.svg" alt=""/>
          <Image className="responsive-image" width={300} height={200} src="/images/Portfolio/sample-5.svg" alt=""/>
          <Image className="responsive-image" width={300} height={200} src="/images/Portfolio/sample-6.svg" alt=""/>
          <Image className="responsive-image" width={300} height={200} src="/images/Portfolio/sample-7.svg" alt=""/>
        </div>
        <button className="sectionOne__btn dark-btn">Learn More</button>
      </div>
      )
}