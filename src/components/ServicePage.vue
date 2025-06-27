<template>
  <div class="services-container">
    <!-- Bootstrap Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container-fluid px-lg-4 px-3">
        <router-link class="navbar-brand" to="/">
          <span class="logo-text">AUTOSPA</span>
          <span class="logo-dot"></span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <span class="nav-number">01</span>
                <span class="nav-text">HOME</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link active">
                <span class="nav-number">02</span>
                <span class="nav-text">SERVICES</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/packages" class="nav-link">
                <span class="nav-number">03</span>
                <span class="nav-text">PACKAGES</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/gallery" class="nav-link">
                <span class="nav-number">04</span>
                <span class="nav-text">GALLERY</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">
                <span class="nav-number">05</span>
                <span class="nav-text">Contact</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">
                <span class="nav-number">06</span>
                <span class="nav-text">LOG IN</span>
              </router-link>
            </li>
          </ul>
          <div class="d-flex ms-lg-4">
            <button class="nav-cta btn">
              <span>BOOK NOW</span>
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6H17M17 6L12 1M17 6L12 11"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div ref="particleContainer" class="particle-canvas"></div>

    <section class="hero d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8 text-center">
            <h1 class="hero-title mb-3">Premium Detailing Services</h1>
            <p class="hero-subtitle">
              Restore and protect your vehicle with our professional treatments
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="services-section py-5">
      <div class="container">
        <div class="row g-4">
          <!-- Service Card 1 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-card h-100">
              <div class="service-image">
                <img
                  src="data:image/jpeg;base64,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"
                />
              </div>
              <div class="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M12 2L3 7l9 5 9-5-9-5zM3 7l9 5 9-5M3 7v10l9 5 9-5V7M12 22l9-5v-10"
                  />
                </svg>
              </div>
              <h3 class="service-title">Ceramic Coating</h3>
              <p class="service-description">
                Advanced nanotechnology forms a permanent bond with your paint,
                creating an ultra-hard layer of protection.
              </p>
              <div class="service-features">
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>5+ Years Protection</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>UV & Chemical Resistance</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Hydrophobic Surface</span>
                </div>
              </div>
              <button class="service-cta w-100">From ₹499</button>
            </div>
          </div>

          <!-- Service Card 2 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-card h-100">
              <div class="service-image">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Teflon Coating"
                  class="img-fluid"
                />
              </div>
              <div class="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M12 2L3 7l9 5 9-5-9-5zM3 7l9 5 9-5M3 7v10l9 5 9-5V7M12 22l9-5v-10"
                  />
                </svg>
              </div>
              <h3 class="service-title">Teflon Coating</h3>
              <p class="service-description">
                Premium polymer coating that provides superior protection
                against environmental contaminants.
              </p>
              <div class="service-features">
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>1 Year Protection</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Enhanced Gloss Finish</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Easy Maintenance</span>
                </div>
              </div>
              <button class="service-cta w-100">From ₹299</button>
            </div>
          </div>

          <!-- Service Card 3 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-card h-100">
              <div class="service-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8n38uPyWWA4NGjleHORhXhUSVR3sST4ocng&s"
                  alt="Paint Protection"
                  class="img-fluid"
                />
              </div>
              <div class="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M12 2L3 7l9 5 9-5-9-5zM3 7l9 5 9-5M3 7v10l9 5 9-5V7M12 22l9-5v-10"
                  />
                </svg>
              </div>
              <h3 class="service-title">Paint Protection</h3>
              <p class="service-description">
                Specialized film that shields your paint from chips, scratches,
                and environmental damage.
              </p>
              <div class="service-features">
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Self-healing Technology</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Virtually Invisible</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>5-7 Years Protection</span>
                </div>
              </div>
              <button class="service-cta w-100">From ₹699</button>
            </div>
          </div>

          <!-- Service Card 4 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-card h-100">
              <div class="service-image">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Interior Deep Cleaning"
                  class="img-fluid"
                />
              </div>
              <div class="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 class="service-title">Interior Deep Cleaning</h3>
              <p class="service-description">
                Complete interior restoration including shampooing, leather
                treatment, and odor elimination.
              </p>
              <div class="service-features">
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Steam Cleaning</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Leather Conditioning</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Odor Neutralization</span>
                </div>
              </div>
              <button class="service-cta w-100">From ₹199</button>
            </div>
          </div>

          <!-- Service Card 5 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-card h-100">
              <div class="service-image">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="General Wash"
                  class="img-fluid"
                />
              </div>
              <div class="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                  />
                  <path d="M12 8a4 4 0 0 1 0 8" />
                </svg>
              </div>
              <h3 class="service-title">General Wash</h3>
              <p class="service-description">
                Complete exterior wash including wheels, tires, and windows with
                premium cleaning products.
              </p>
              <div class="service-features">
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Hand Wash</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Wheel Cleaning</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Quick Interior Vacuum</span>
                </div>
              </div>
              <button class="service-cta w-100">From ₹49</button>
            </div>
          </div>

          <!-- Service Card 6 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-card h-100">
              <div class="service-image">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Deep Wash"
                  class="img-fluid"
                />
              </div>
              <div class="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  <path d="M12 16l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <h3 class="service-title">Deep Wash</h3>
              <p class="service-description">
                Intensive cleaning process that removes deep-seated dirt, grime,
                and contaminants.
              </p>
              <div class="service-features">
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Clay Bar Treatment</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Paint Decontamination</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Hand Wax Application</span>
                </div>
              </div>
              <button class="service-cta w-100">From ₹149</button>
            </div>
          </div>

          <!-- Service Card 7 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-card h-100">
              <div class="service-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjweYWi_OaN8E0-NVqOTJJUipD_saztc9-CQ&s"
                  alt="Headlight Restoration"
                  class="img-fluid"
                />
              </div>
              <div class="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <h3 class="service-title">Headlight Restoration</h3>
              <p class="service-description">
                Remove oxidation and yellowing to restore clarity and brightness
                to your headlights.
              </p>
              <div class="service-features">
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>UV Protection Coating</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Improved Night Visibility</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>1 Year Warranty</span>
                </div>
              </div>
              <button class="service-cta w-100">From ₹249</button>
            </div>
          </div>

          <!-- Service Card 8 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-card h-100">
              <div class="service-image">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Engine Bay Cleaning"
                  class="img-fluid"
                />
              </div>
              <div class="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M19 14l1-6h1V6h-4v2h1l-1 6M4 14l1-6h1V6H2v2h1l-1 6M9 20v-4h6v4m-6 0H9m6 0h3"
                  />
                </svg>
              </div>
              <h3 class="service-title">Engine Bay Cleaning</h3>
              <p class="service-description">
                Safe and thorough cleaning of your engine compartment to prevent
                corrosion and improve aesthetics.
              </p>
              <div class="service-features">
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Safe for Electricals</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Degreasing Treatment</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Plastic & Rubber Dressing</span>
                </div>
              </div>
              <button class="service-cta w-100">From ₹179</button>
            </div>
          </div>

          <!-- Premium Service Card -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-card premium h-100">
              <div class="premium-badge">PREMIUM</div>
              <div class="service-image">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Complete Protection"
                  class="img-fluid"
                />
              </div>
              <div class="service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M12 2L3 7l9 5 9-5-9-5zM3 7l9 5 9-5M3 7v10l9 5 9-5V7M12 22l9-5v-10"
                  />
                  <path d="M12 22V12" />
                </svg>
              </div>
              <h3 class="service-title">Complete Protection</h3>
              <p class="service-description">
                Our most comprehensive package combining ceramic coating with
                full interior restoration.
              </p>
              <div class="service-features">
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>5-Year Ceramic Coating</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Full Interior Detailing</span>
                </div>
                <div class="feature">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Paint Correction</span>
                </div>
              </div>
              <button class="service-cta premium-cta w-100">From ₹899</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as THREE from "three";
import { ref, onMounted } from "vue";

export default {
  name: "ServicesPage",
  setup() {
    const particleContainer = ref(null);
    const isMounted = ref(false);

    const initParticles = () => {
      if (!particleContainer.value) return;

      // Create a canvas element if it doesn't exist
      let canvas = particleContainer.value.querySelector("canvas");
      if (!canvas) {
        canvas = document.createElement("canvas");
        particleContainer.value.appendChild(canvas);
      }

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 60;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: canvas,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Create particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particleCount = 500;

      const posArray = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 200;
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.5,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      const particlesMesh = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      );
      scene.add(particlesMesh);

      function animate() {
        requestAnimationFrame(animate);

        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0005;

        renderer.render(scene, camera);
      }

      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        scene.remove(particlesMesh);
      };
    };

    onMounted(() => {
      initParticles();
      setTimeout(() => {
        isMounted.value = true;
      }, 50);
    });

    return {
      particleContainer,
      isMounted,
    };
  },
};
</script>

<style scoped>
/* Base Styles */
.services-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: white;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  overflow-x: hidden;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.services-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

/* Navbar Styles */
.navbar {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%) !important;
  padding: 0.75rem 0;
  z-index: 1000;
}

.container-fluid {
  max-width: 1400px;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-text {
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 2px;
}

.logo-dot {
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.nav-link {
  color: rgba(255, 255, 255, 0.7) !important;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  padding: 6px 12px !important;
}

.nav-link.active,
.nav-link:hover {
  color: #ffffff !important;
}

.nav-number {
  font-size: 0.6rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 2px;
  font-family: "Playfair Display", serif;
}

.nav-link.active .nav-number,
.nav-link:hover .nav-number {
  color: #ffffff !important;
}

.nav-text {
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(212, 57, 57, 0) 0%,
    #ffffff 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transition: width 0.3s ease;
}

.nav-link.active::after,
.nav-link:hover::after {
  width: calc(100% - 24px); /* Account for padding */
}
.navbar-collapse {
  flex-grow: 0 !important; /* Prevent the nav from growing */
}
.nav-cta {
  background: transparent !important;
  color: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  padding: 8px 20px !important;
  font-weight: 600 !important;
  font-size: 0.8rem !important;
  border-radius: 30px !important;
  transition: all 0.4s ease !important;
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  white-space: nowrap;
}

.nav-cta:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  border-color: rgba(255, 255, 255, 0.6) !important;
  transform: translateY(-2px) !important;
}

.nav-cta svg {
  transition: transform 0.3s ease;
}

.nav-cta:hover svg {
  transform: translateX(3px);
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .navbar-nav {
    gap: 0.5rem;
  }

  .nav-link {
    padding: 6px 8px !important;
  }

  .nav-cta {
    padding: 8px 16px !important;
  }
}

@media (max-width: 768px) {
  .navbar-collapse {
    padding: 1rem 0;
  }

  .navbar-nav {
    width: 100%;
    margin-bottom: 1rem;
  }

  .nav-item {
    width: 100%;
    text-align: center;
  }

  .nav-link {
    padding: 0.75rem !important;
    justify-content: center;
  }

  .nav-cta {
    margin: 0 auto;
    width: fit-content;
  }
}

@media (max-width: 576px) {
  .nav-number {
    display: none;
  }

  .nav-text {
    font-size: 0.9rem;
  }

  .container-fluid {
    padding: 0 1rem !important;
  }
}
/* Hero Section */
.hero {
  position: relative;
  height: 60vh;
  padding-top: 70px;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ff5f6d, #ffc371);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease-out 0.2s both;
}

/* Services Grid */
.services-section {
  position: relative;
  z-index: 2;
}

.service-card {
  background: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 95, 109, 0.3);
}

.service-card.premium {
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.service-card.premium:hover {
  border-color: rgba(255, 215, 0, 0.6);
}

.premium-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, #ffd700, #ffa500);
  color: #000;
  padding: 5px 15px;
  font-weight: 700;
  font-size: 0.8rem;
  border-bottom-left-radius: 16px;
}

.service-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.service-icon svg {
  width: 30px;
  height: 30px;
  stroke: #ff5f6d;
}

.service-card.premium .service-icon svg {
  stroke: #ffd700;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: white;
}

.service-description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-features {
  margin-bottom: 25px;
}

.feature {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.feature svg {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  stroke: #ff5f6d;
}

.feature span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.service-cta {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #ff5f6d, #ffc371);
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 95, 109, 0.4);
}

.premium-cta {
  background: linear-gradient(135deg, #ffd700, #ffa500);
  color: #000;
}

.premium-cta:hover {
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
}

/* Testimonials */
.testimonials {
  position: relative;
  z-index: 2;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
  color: white;
}

.testimonial-card {
  background: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
}

.rating {
  color: #ffd700;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.testimonial-text {
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
  margin-bottom: 20px;
  line-height: 1.6;
}

.client-info {
  display: flex;
  align-items: center;
}

.client-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  margin-right: 15px;
}

.client-details h4 {
  margin: 0;
  font-size: 1rem;
  color: white;
}

.client-details p {
  margin: 5px 0 0;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

.service-image {
  height: 200px;
  overflow: hidden;
  border-radius: 0.5rem;
}

.service-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.8rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .service-card {
    padding: 20px;
  }

  .service-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .hero {
    height: 50vh;
  }

  .nav-number {
    display: none;
  }

  .nav-text {
    font-size: 0.7rem;
  }

  .service-icon {
    width: 50px;
    height: 50px;
  }

  .service-icon svg {
    width: 25px;
    height: 25px;
  }
}
</style>
