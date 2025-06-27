<template>
  <div class="luxury-container">
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
              <router-link to="/" class="nav-link active">
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
    <!-- Main Content -->
    <main class="main-content">
      <!-- Particles Canvas -->
      <div ref="particleContainer" class="particle-canvas"></div>

      <!-- Center Content -->
      <div class="center-content">
        <div class="title-wrapper">
          <h1 class="main-title">AUTOSPA</h1>
          <div class="title-shadow" aria-hidden="true">AUTOSPA</div>
        </div>
        <p class="subtitle">PREMIUM AUTOMOTIVE CARE</p>

        <div class="cta-buttons">
          <router-link to="/services" class="cta-btn primary">
            <span>EXPLORE SERVICES</span>
            <div class="btn-hover-effect"></div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
          <router-link to="/packages" class="cta-btn secondary">
            <span>VIEW PACKAGES</span>
            <div class="btn-hover-effect"></div>
          </router-link>
        </div>
      </div>

      <!-- Luxury Footer Elements -->
      <div class="luxury-footer">
        <div class="social-links">
          <a href="#" class="social-icon">IG</a>
          <a href="#" class="social-icon">FB</a>
          <a href="#" class="social-icon">TW</a>
        </div>
        <div class="scroll-indicator">
          <div class="scroll-line"></div>
          <span>SCROLL</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import * as THREE from "three";

export default {
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
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
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      this.$refs.particleContainer.appendChild(renderer.domElement);

      const particleCount = 400;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = Math.random() * 300 - 150;
        positions[i * 3 + 1] = Math.random() * 300 - 150;
        positions[i * 3 + 2] = Math.random() * 300 - 150;
        sizes[i] = 1 + Math.random() * 3;
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        size: 1.5,
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      function animate() {
        requestAnimationFrame(animate);
        const posArray = geometry.attributes.position.array;

        for (let i = 0; i < particleCount; i++) {
          posArray[i * 3 + 1] += 0.03;
          if (posArray[i * 3 + 1] > 150) {
            posArray[i * 3 + 1] = -150;
            posArray[i * 3] = Math.random() * 300 - 150;
            posArray[i * 3 + 2] = Math.random() * 300 - 150;
          }
          posArray[i * 3] += Math.sin(Date.now() * 0.001 + i) * 0.003;
          posArray[i * 3 + 2] += Math.cos(Date.now() * 0.001 + i) * 0.003;
        }
        geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      }

      animate();

      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@700;800&display=swap");

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 14px;
}

.luxury-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #0a0a0a;
  font-family: "Montserrat", sans-serif;
  color: white;
  z-index: 0;
}

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
.main-content {
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.particle-canvas {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  pointer-events: none;
  z-index: 1;
}

.center-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1000px;
  padding: 0 20px;
}

.title-wrapper {
  position: relative;
  display: inline-block;
}

.main-title {
  font-family: "Playfair Display", serif;
  font-size: 4rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.2rem;
  margin: 0;
  position: relative;
  z-index: 2;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
  animation: fadeScaleIn 1.5s ease forwards;
}

.title-shadow {
  position: absolute;
  top: 0.12em;
  left: 0.12em;
  font-family: "Playfair Display", serif;
  font-size: 4rem;
  font-weight: 800;
  color: transparent;
  letter-spacing: 0.2rem;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
  z-index: 1;
}

.subtitle {
  font-size: 0.85rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 12px 0 28px;
  animation: fadeScaleIn 1.5s ease 0.5s forwards;
  opacity: 0;
  text-transform: uppercase;
}

.cta-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  animation: fadeScaleIn 1.5s ease 1s forwards;
  opacity: 0;
}

.cta-btn {
  position: relative;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  padding: 8px 20px;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: 40px;
  transition: all 0.4s ease;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 6px;
}

.cta-btn.primary {
  border-color: rgba(255, 255, 255, 0.8);
}

.cta-btn.secondary {
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
}

.cta-btn span {
  position: relative;
  z-index: 2;
}

.cta-btn .btn-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.7)
  );
  transform: translateY(110%);
  transition: transform 0.6s ease;
  border-radius: 40px;
  z-index: 1;
}

.cta-btn.primary:hover {
  color: #0a0a0a;
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.9);
}

.cta-btn.secondary:hover {
  color: #0a0a0a;
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.4);
}

.cta-btn:hover .btn-hover-effect {
  transform: translateY(0);
}

.cta-btn svg {
  transition: transform 0.4s ease;
}

.cta-btn:hover svg {
  transform: translateX(4px);
}

.luxury-footer {
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 25px;
  z-index: 10;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-icon {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #ffffff;
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: rgba(255, 255, 255, 0.3);
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
}

.scroll-line::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 100%
  );
  animation: scrollIndicator 2.5s infinite;
}

@keyframes scrollIndicator {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    transform: translateY(60px);
    opacity: 0;
  }
}

@keyframes fadeScaleIn {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
