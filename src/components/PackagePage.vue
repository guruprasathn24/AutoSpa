<template>
  <div class="packages-container">
    <!-- Premium Black Navbar -->
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
              <router-link to="/services" class="nav-link">
                <span class="nav-number">02</span>
                <span class="nav-text">SERVICES</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/packages" class="nav-link active">
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

    <!-- Hero Section -->
    <section class="hero d-flex align-items-center">
      <div class="container text-center">
        <h1 class="hero-title mb-3">Premium Care Packages</h1>
        <p class="hero-subtitle">
          Bundle our best services for maximum protection and savings
        </p>
      </div>
    </section>

    <!-- Packages Grid -->
    <section class="packages-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-title">Choose Your Perfect Package</h2>
          <p class="section-subtitle">
            Select the level of care that matches your vehicle's needs
          </p>
        </div>

        <div class="row g-4">
          <!-- Basic Wash Package -->
          <div class="col-md-6 col-lg-3">
            <div class="package-card h-100 d-flex flex-column">
              <div class="package-content flex-grow-1">
                <div class="package-header pb-3 mb-3 border-bottom">
                  <h3 class="package-title mb-2">Basic Wash</h3>
                  <div class="package-price d-flex align-items-end">
                    <span class="price">₹799</span>
                    <span class="duration ms-2">/month</span>
                  </div>
                </div>
                <div class="package-features mb-4">
                  <div class="feature d-flex mb-3">
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
                    <span>4 Standard Washes</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Tire Dressing</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Window Cleaning</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Vacuum Interior</span>
                  </div>
                </div>
                <div class="package-savings text-center py-2 mb-3">
                  <span>Save 15%</span> vs individual services
                </div>
              </div>
              <button class="package-cta w-100 mt-auto">SELECT PACKAGE</button>
            </div>
          </div>

          <!-- Essential Care -->
          <div class="col-md-6 col-lg-3">
            <div class="package-card h-100 d-flex flex-column">
              <div class="package-content flex-grow-1">
                <div class="package-header pb-3 mb-3 border-bottom">
                  <h3 class="package-title mb-2">Essential Care</h3>
                  <div class="package-price d-flex align-items-end">
                    <span class="price">₹1,499</span>
                    <span class="duration ms-2">/month</span>
                  </div>
                </div>
                <div class="package-features mb-4">
                  <div class="feature d-flex mb-3">
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
                    <span>4 Premium Washes</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>1 Interior Detailing</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Teflon Coating</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Wheel & Tire Care</span>
                  </div>
                </div>
                <div class="package-savings text-center py-2 mb-3">
                  <span>Save 25%</span> vs individual services
                </div>
              </div>
              <button class="package-cta w-100 mt-auto">SELECT PACKAGE</button>
            </div>
          </div>

          <!-- Complete Shine -->
          <div class="col-md-6 col-lg-3">
            <div class="package-card popular h-100 d-flex flex-column">
              <div class="popular-badge">MOST POPULAR</div>
              <div class="package-content flex-grow-1">
                <div class="package-header pb-3 mb-3 border-bottom">
                  <h3 class="package-title mb-2">Complete Shine</h3>
                  <div class="package-price d-flex align-items-end">
                    <span class="price">₹3,999</span>
                    <span class="duration ms-2">/month</span>
                  </div>
                </div>
                <div class="package-features mb-4">
                  <div class="feature d-flex mb-3">
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
                    <span>Ceramic Coating</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>4 Maintenance Washes</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>2 Full Interior Details</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Engine Bay Cleaning</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Headlight Restoration</span>
                  </div>
                </div>
                <div class="package-savings text-center py-2 mb-3">
                  <span>Save 35%</span> vs individual services
                </div>
              </div>
              <button class="package-cta popular-cta w-100 mt-auto">
                SELECT PACKAGE
              </button>
            </div>
          </div>

          <!-- Ultimate Protection -->
          <div class="col-md-6 col-lg-3">
            <div class="package-card premium h-100 d-flex flex-column">
              <div class="premium-badge">ELITE</div>
              <div class="package-content flex-grow-1">
                <div class="package-header pb-3 mb-3 border-bottom">
                  <h3 class="package-title mb-2">Ultimate Protection</h3>
                  <div class="package-price d-flex align-items-end">
                    <span class="price">₹6,999</span>
                    <span class="duration ms-2">/month</span>
                  </div>
                </div>
                <div class="package-features mb-4">
                  <div class="feature d-flex mb-3">
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
                    <span>Premium Ceramic Coating</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                  <div class="feature d-flex mb-3">
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
                    <span>Weekly Maintenance Washes</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Monthly Interior Detailing</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                  <div class="feature d-flex mb-3">
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
                    <span>Annual Coating Refresh</span>
                  </div>
                </div>
                <div class="package-savings text-center py-2 mb-3">
                  <span>Save 45%</span> vs individual services
                </div>
              </div>
              <button class="package-cta premium-cta w-100 mt-auto">
                SELECT PACKAGE
              </button>
            </div>
          </div>

          <!-- Family Package -->
          <div class="col-md-6 col-lg-4">
            <div class="package-card family h-100 d-flex flex-column">
              <div class="family-badge">FAMILY</div>
              <div class="package-content flex-grow-1">
                <div class="package-header pb-3 mb-3 border-bottom">
                  <h3 class="package-title mb-2">Family Package</h3>
                  <div class="package-price d-flex align-items-end">
                    <span class="price">₹4,499</span>
                    <span class="duration ms-2">/month</span>
                  </div>
                </div>
                <div class="package-features mb-4">
                  <div class="feature d-flex mb-3">
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
                    <span>2 Vehicles Covered</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>8 Premium Washes Total</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>2 Interior Details</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Basic Teflon Coating</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Wheel & Tire Care</span>
                  </div>
                </div>
                <div class="package-savings text-center py-2 mb-3">
                  <span>Save 30%</span> vs individual services
                </div>
              </div>
              <button class="package-cta family-cta w-100 mt-auto">
                SELECT PACKAGE
              </button>
            </div>
          </div>

          <!-- Luxury Vehicle Package -->
          <div class="col-md-6 col-lg-4">
            <div class="package-card luxury h-100 d-flex flex-column">
              <div class="luxury-badge">LUXURY</div>
              <div class="package-content flex-grow-1">
                <div class="package-header pb-3 mb-3 border-bottom">
                  <h3 class="package-title mb-2">Luxury Care</h3>
                  <div class="package-price d-flex align-items-end">
                    <span class="price">₹8,999</span>
                    <span class="duration ms-2">/month</span>
                  </div>
                </div>
                <div class="package-features mb-4">
                  <div class="feature d-flex mb-3">
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
                    <span>Premium Ceramic Pro Coating</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Multi-stage Paint Correction</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Bi-weekly Maintenance Washes</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Monthly Full Interior Detail</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Leather & Wood Treatment</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>24/7 Emergency Cleaning</span>
                  </div>
                </div>
                <div class="package-savings text-center py-2 mb-3">
                  <span>Save 40%</span> vs individual services
                </div>
              </div>
              <button class="package-cta luxury-cta w-100 mt-auto">
                SELECT PACKAGE
              </button>
            </div>
          </div>

          <!-- Commercial Fleet Package -->
          <div class="col-md-6 col-lg-4">
            <div class="package-card commercial h-100 d-flex flex-column">
              <div class="commercial-badge">FLEET</div>
              <div class="package-content flex-grow-1">
                <div class="package-header pb-3 mb-3 border-bottom">
                  <h3 class="package-title mb-2">Fleet Package</h3>
                  <div class="package-price d-flex align-items-end">
                    <span class="price">₹12,999</span>
                    <span class="duration ms-2">/month</span>
                  </div>
                </div>
                <div class="package-features mb-4">
                  <div class="feature d-flex mb-3">
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
                    <span>Up to 5 Vehicles</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>20 Standard Washes</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>5 Interior Vacuum Cleanings</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Basic Exterior Protection</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Priority Scheduling</span>
                  </div>
                  <div class="feature d-flex mb-3">
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
                    <span>Monthly Fleet Reports</span>
                  </div>
                </div>
                <div class="package-savings text-center py-2 mb-3">
                  <span>Save 50%</span> vs individual services
                </div>
              </div>
              <button class="package-cta commercial-cta w-100 mt-auto">
                SELECT PACKAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Package Comparison Table -->
    <section class="comparison-section py-5 bg-dark">
      <div class="container">
        <h2 class="section-title text-center mb-5">Package Comparison</h2>
        <div class="table-responsive">
          <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Basic Wash</th>
                <th scope="col">Essential Care</th>
                <th scope="col">Complete Shine</th>
                <th scope="col">Ultimate Protection</th>
                <th scope="col">Family</th>
                <th scope="col">Luxury</th>
                <th scope="col">Fleet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Standard Washes</th>
                <td>4</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>20</td>
              </tr>
              <tr>
                <th scope="row">Premium Washes</th>
                <td>-</td>
                <td>4</td>
                <td>4</td>
                <td>Weekly</td>
                <td>8</td>
                <td>Bi-weekly</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">Interior Detailing</th>
                <td>-</td>
                <td>1</td>
                <td>2</td>
                <td>Monthly</td>
                <td>2</td>
                <td>Monthly</td>
                <td>5</td>
              </tr>
              <tr>
                <th scope="row">Exterior Protection</th>
                <td>-</td>
                <td>Teflon</td>
                <td>Ceramic</td>
                <td>Premium Ceramic</td>
                <td>Teflon</td>
                <td>Ceramic Pro</td>
                <td>Basic</td>
              </tr>
              <tr>
                <th scope="row">Paint Correction</th>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>Yes</td>
                <td>-</td>
                <td>Multi-stage</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">Number of Vehicles</th>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>1</td>
                <td>5</td>
              </tr>
              <tr>
                <th scope="row">Priority Scheduling</th>
                <td>-</td>
                <td>-</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>-</td>
                <td>24/7</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Package Benefits -->
    <section class="benefits-section py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Package Benefits</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="benefit-card text-center p-4 h-100">
              <div class="benefit-icon mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5F6D"
                  stroke-width="2"
                >
                  <path
                    d="M12 2L3 7l9 5 9-5-9-5zM3 7l9 5 9-5M3 7v10l9 5 9-5V7M12 22l9-5v-10"
                  />
                </svg>
              </div>
              <h3 class="mb-3">Cost Effective</h3>
              <p>Save up to 50% compared to purchasing services individually</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="benefit-card text-center p-4 h-100">
              <div class="benefit-icon mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5F6D"
                  stroke-width="2"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 class="mb-3">Priority Scheduling</h3>
              <p>Get preferred booking times as a package member</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="benefit-card text-center p-4 h-100">
              <div class="benefit-icon mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF5F6D"
                  stroke-width="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 class="mb-3">Comprehensive Care</h3>
              <p>All services work together for maximum protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- FAQ Section -->
    <section class="faq-section py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          Frequently Asked Questions
        </h2>
        <div class="accordion" id="faqAccordion">
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How do I book a package?
              </button>
            </h3>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">
                You can book any package directly through our website by
                clicking the "SELECT PACKAGE" button on your chosen package.
                Alternatively, you can visit our location or call our customer
                service to book over the phone.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Can I upgrade or downgrade my package later?
              </button>
            </h3>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">
                Yes, you can change your package at any time. Any remaining
                balance from your current package will be applied to your new
                package selection. Upgrades or downgrades can be done through
                your online account or by contacting our customer service.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What happens if I don't use all my washes in a month?
              </button>
            </h3>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">
                Unused washes do not roll over to the next month. We recommend
                scheduling your washes throughout the month to get the most
                value from your package. Our system will track your usage and
                remind you when you have washes remaining.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Can I share my package with family or friends?
              </button>
            </h3>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">
                Packages are generally tied to a single vehicle unless you've
                purchased a Family or Fleet package which specifically allows
                multiple vehicles. For individual packages, services cannot be
                transferred to other vehicles.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                What payment methods do you accept?
              </button>
            </h3>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">
                We accept all major credit/debit cards (Visa, MasterCard,
                American Express, Rupay), UPI payments, net banking, and cash
                payments at our location. Monthly packages are typically set up
                with automatic payments using your preferred method.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5 bg-dark">
      <div class="container text-center">
        <h2 class="mb-3">Ready to Elevate Your Car Care?</h2>
        <p class="mb-4">Choose the package that matches your vehicle's needs</p>
        <button class="cta-button">BOOK YOUR PACKAGE TODAY</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PackagesPage",
};
</script>

<style scoped>
/* Import the same fonts as home page */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@700;800&display=swap");

/* Base Styles */
.packages-container {
  background: #0a0a0a;
  color: white;
  font-family: "Montserrat", sans-serif;
  min-height: 100vh;
  padding-top: 70px; /* To account for fixed navbar */
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
  height: 40vh;
  min-height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
      no-repeat center center/cover;
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
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  animation: fadeInUp 1s ease-out 0.2s both;
}

/* Section Header */
.section-header {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  color: #ffffff;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #ff5f6d, #ff8c71);
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  max-width: 700px;
  margin: 0 auto;
}

/* Packages Section */
.packages-section {
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
}

.packages-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
    no-repeat center center/cover;
  opacity: 0.03;
  z-index: 0;
}

.package-card {
  background: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 35px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.package-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.package-card.popular {
  border: 1px solid rgba(255, 95, 109, 0.3);
}

.package-card.popular:hover {
  border-color: rgba(255, 95, 109, 0.6);
  box-shadow: 0 20px 40px rgba(255, 95, 109, 0.2);
}

.package-card.premium {
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.package-card.premium:hover {
  border-color: rgba(255, 215, 0, 0.6);
  box-shadow: 0 20px 40px rgba(255, 215, 0, 0.2);
}

.package-card.family {
  border: 1px solid rgba(100, 200, 255, 0.3);
}

.package-card.family:hover {
  border-color: rgba(100, 200, 255, 0.6);
  box-shadow: 0 20px 40px rgba(100, 200, 255, 0.2);
}

.package-card.luxury {
  border: 1px solid rgba(200, 160, 255, 0.3);
}

.package-card.luxury:hover {
  border-color: rgba(200, 160, 255, 0.6);
  box-shadow: 0 20px 40px rgba(200, 160, 255, 0.2);
}

.package-card.commercial {
  border: 1px solid rgba(100, 255, 180, 0.3);
}

.package-card.commercial:hover {
  border-color: rgba(100, 255, 180, 0.6);
  box-shadow: 0 20px 40px rgba(100, 255, 180, 0.2);
}

.popular-badge,
.premium-badge,
.family-badge,
.luxury-badge,
.commercial-badge {
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px 20px;
  font-weight: 700;
  font-size: 0.85rem;
  border-bottom-left-radius: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.popular-badge {
  background: linear-gradient(135deg, #ff5f6d, #ff8c71);
  color: white;
}

.premium-badge {
  background: linear-gradient(135deg, #ffd700, #ffa500);
  color: #000;
}

.family-badge {
  background: linear-gradient(135deg, #64c8ff, #2894ff);
  color: white;
}

.luxury-badge {
  background: linear-gradient(135deg, #c8a0ff, #9061c2);
  color: white;
}

.commercial-badge {
  background: linear-gradient(135deg, #64ffb4, #00c781);
  color: #000;
}

.package-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.package-header {
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.package-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: white;
  font-family: "Playfair Display", serif;
}

.price {
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.package-card.popular .price {
  background: linear-gradient(90deg, #ff5f6d, #ff8c71);
  -webkit-background-clip: text;
  background-clip: text;
}

.package-card.premium .price {
  background: linear-gradient(90deg, #ffd700, #ffa500);
  -webkit-background-clip: text;
  background-clip: text;
}

.package-card.family .price {
  background: linear-gradient(90deg, #64c8ff, #2894ff);
  -webkit-background-clip: text;
  background-clip: text;
}

.package-card.luxury .price {
  background: linear-gradient(90deg, #c8a0ff, #9061c2);
  -webkit-background-clip: text;
  background-clip: text;
}

.package-card.commercial .price {
  background: linear-gradient(90deg, #64ffb4, #00c781);
  -webkit-background-clip: text;
  background-clip: text;
}

.duration {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 5px;
}

.package-features {
  flex-grow: 1;
  margin-bottom: 20px;
}

.feature {
  align-items: flex-start;
  margin-bottom: 15px;
}

.feature svg {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  margin-top: 2px;
  stroke: #ff5f6d;
  flex-shrink: 0;
}

.package-card.popular .feature svg {
  stroke: #ff8c71;
}

.package-card.premium .feature svg {
  stroke: #ffd700;
}

.package-card.family .feature svg {
  stroke: #64c8ff;
}

.package-card.luxury .feature svg {
  stroke: #c8a0ff;
}

.package-card.commercial .feature svg {
  stroke: #64ffb4;
}

.feature span {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.5;
}

.package-savings {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: auto;
}

.package-savings span {
  color: #ff5f6d;
  font-weight: 700;
}

.package-card.popular .package-savings span {
  color: #ff8c71;
}

.package-card.premium .package-savings span {
  color: #ffd700;
}

.package-card.family .package-savings span {
  color: #64c8ff;
}

.package-card.luxury .package-savings span {
  color: #c8a0ff;
}

.package-card.commercial .package-savings span {
  color: #64ffb4;
}

.package-cta {
  padding: 14px;
  background: linear-gradient(135deg, #ff5f6d, #ff8c71);
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  margin-top: auto;
}

.package-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 95, 109, 0.4);
}

.popular-cta {
  background: linear-gradient(135deg, #ff5f6d, #ff8c71);
}

.premium-cta {
  background: linear-gradient(135deg, #ffd700, #ffa500);
  color: #000;
}

.premium-cta:hover {
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.4);
}

.family-cta {
  background: linear-gradient(135deg, #64c8ff, #2894ff);
}

.family-cta:hover {
  box-shadow: 0 8px 20px rgba(100, 200, 255, 0.4);
}

.luxury-cta {
  background: linear-gradient(135deg, #c8a0ff, #9061c2);
}

.luxury-cta:hover {
  box-shadow: 0 8px 20px rgba(200, 160, 255, 0.4);
}

.commercial-cta {
  background: linear-gradient(135deg, #64ffb4, #00c781);
  color: #000;
}

.commercial-cta:hover {
  box-shadow: 0 8px 20px rgba(100, 255, 180, 0.4);
}

/* Comparison Table */
.comparison-section {
  background: rgba(20, 20, 20, 0.9);
}

.table {
  color: white;
  border-color: rgba(255, 255, 255, 0.1);
}

.table th {
  border-color: rgba(255, 255, 255, 0.1);
  font-weight: 600;
}

.table td {
  border-color: rgba(255, 255, 255, 0.1);
  vertical-align: middle;
}

.table-hover tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* Package Benefits */
.benefits-section {
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
}

.benefits-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://images.unsplash.com/photo-1551830820-330a71b99659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
    no-repeat center center/cover;
  opacity: 0.03;
  z-index: 0;
}

.benefit-card {
  background: rgba(30, 30, 30, 0.8);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 95, 109, 0.3);
}

.benefit-icon {
  width: 70px;
  height: 70px;
  background: rgba(255, 95, 109, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-icon svg {
  width: 32px;
  height: 32px;
}

.benefit-card h3 {
  font-size: 1.2rem;
  color: white;
  font-family: "Playfair Display", serif;
}

.benefit-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-size: 0.9rem;
}

/* Testimonials */
.testimonials-section {
  background: rgba(20, 20, 20, 0.9);
}

.testimonial-card {
  background: rgba(30, 30, 30, 0.8);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.testimonial-rating {
  color: #ffd700;
}

.testimonial-text {
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
  line-height: 1.6;
}

.author-avatar img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

/* FAQ Section */
.faq-section {
  background: #0a0a0a;
}

.accordion {
  max-width: 900px;
  margin: 0 auto;
}

.accordion-item {
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 15px;
  border-radius: 8px !important;
  overflow: hidden;
}

.accordion-button {
  background: rgba(40, 40, 40, 0.8);
  color: white;
  font-weight: 600;
}

.accordion-button:not(.collapsed) {
  background: rgba(60, 60, 60, 0.8);
  color: white;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(255, 95, 109, 0.3);
}

.accordion-body {
  background: rgba(30, 30, 30, 0.8);
  color: rgba(255, 255, 255, 0.8);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.8),
    rgba(30, 30, 30, 0.8)
  );
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-section h2 {
  font-size: 2rem;
  font-family: "Playfair Display", serif;
  color: #ffffff;
  letter-spacing: 0.1rem;
}

.cta-section p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

.cta-button {
  background: linear-gradient(135deg, #ff5f6d, #ff8c71);
  color: white;
  border: none;
  padding: 16px 40px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(255, 95, 109, 0.4);
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
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .price {
    font-size: 1.8rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 0.9rem;
  }

  .cta-section h2 {
    font-size: 1.8rem;
  }

  .cta-section p {
    font-size: 0.9rem;
  }

  .cta-button {
    padding: 14px 30px;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 35vh;
    min-height: 250px;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .package-card {
    padding: 25px;
  }

  .package-title {
    font-size: 1.3rem;
  }

  .nav-links {
    gap: 15px;
  }

  .nav-cta {
    padding: 6px 12px;
    font-size: 0.7rem;
  }

  .section-title::after {
    width: 60px;
    bottom: -8px;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .hero-subtitle {
    font-size: 0.8rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
  }

  .nav-content {
    flex-direction: column;
    padding: 10px 0;
  }

  .nav-links {
    display: none; /* Consider a mobile menu for small screens */
  }

  .section-title {
    font-size: 1.5rem;
  }

  .section-title::after {
    width: 40px;
    bottom: -5px;
    height: 2px;
  }
}
</style>
