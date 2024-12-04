import "@/styles/services.css";


export default function ServicesPage() {
  return (
    <>
    <div className="sectionOne">
      <div className="sectionOne__content text-center flex">
        <div className="sectionOne__content--label label text-green">
          Services
        </div>
        <div className="sectionOne__content--title common-title">
          Choose the Perfect Plan for Your Business
        </div>
        <div className="sectionOne__content--text">
          Flexible service packages designed to meet your business needs and scale with your growth
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
            Perfect for small businesses and startups looking to establish their digital presence with essential features and support.
          </div>
          <div className="features">
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Website Development & Hosting</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Basic SEO Optimization</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Email Support</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Monthly Performance Reports</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Security Monitoring</span>
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
            Ideal for growing businesses requiring advanced features and dedicated support for their digital operations.
          </div>
          <div className="features">
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>All Basic Features Included</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Advanced Analytics Integration</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Priority Support</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Custom Feature Development</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Weekly Strategy Calls</span>
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
            Complete enterprise solution with premium features, dedicated support, and customized development services.
          </div>
          <div className="features">
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>All Plus Features Included</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>24/7 Premium Support</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Custom API Integration</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Dedicated Project Manager</span>
            </div>
            <div className="list">
              <i className="bi bi-check-lg"></i>
              <span>Advanced Security Features</span>
            </div>
          </div>
          <button className="dark-btn">Learn More</button>
        </div>
      </div>
    </div>
    </>
  );
}
