import React from "react";
import styles from "./style";

import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components/index";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* //_________________________________________________________________________________________________ */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>
      {/* //_________________________________________________________________________________________________ */}

      <div className={`bg-primary  ${styles.flexStart} `}>
        <div className={`${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>
      {/* //_________________________________________________________________________________________________ */}

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth} `}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

      {/* //_________________________________________________________________________________________________ */}
    </div>
  );
};

export default App;
