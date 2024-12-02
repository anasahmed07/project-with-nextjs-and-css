import "@/styles/services.css";

export default function ServicesPage() {
  return (
    <div className="sectionOne">
      <div className="sectionOne__content text-center flex">
        <div className="sectionOne__content--label label text-green">
          Services
        </div>
        <div className="sectionOne__content--title common-title">
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <div className="sectionOne__content--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          porro?
        </div>
      </div>
      <div className="sectionOne__cards container">
        <div className="sectionOne__cards--1 ">
          <div className="tag">Basic</div>
          <div className="price">
            <div className="amount">$100</div>
            <div className="time">/month</div>
          </div>
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            possimus asperiores eos distinctio.
          </div>
          <div className="features">
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
          </div>
          <button className="dark-btn">Learn More</button>
        </div>
        <div className="sectionOne__cards--2">
          <div className="tag">Plus</div>
          <div className="price">
            <div className="amount">$250</div>
            <div className="time">/month</div>
          </div>
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            possimus asperiores eos distinctio.
          </div>
          <div className="features">
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
          </div>
          <button className="dark-btn">Learn More</button>
        </div>
        <div className="sectionOne__cards--3">
          <div className="tag">Pro</div>
          <div className="price">
            <div className="amount">$400</div>
            <div className="time">/month</div>
          </div>
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            possimus asperiores eos distinctio.
          </div>
          <div className="features">
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Lorem ipsum dolor sit.</span>
            </div>
          </div>
          <button className="dark-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}
