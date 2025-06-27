<template>
  <div class="login-container">
    <!-- Navigation -->
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
                <span class="nav-text">CONTACT</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link active">
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

    <!-- Particle Background -->
    <div ref="particleContainer" class="particle-canvas"></div>

    <!-- Login Box with Animation -->
    <div class="login-box" :class="{ 'animate-in': isMounted }">
      <!-- Logo -->
      <div class="logo">
        <span>AUTOSPA</span>
        <div class="dot"></div>
      </div>

      <!-- Form -->
      <form class="login-form" @submit.prevent="handleLogin">
        <h2>Welcome Back</h2>
        <p class="subtitle">Sign in to your account</p>

        <div class="form-group">
          <label>Email</label>
          <div class="input-wrapper">
            <svg
              class="input-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 6l-10 7L2 6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="email"
              placeholder="your@email.com"
              v-model="email"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label>Password</label>
          <div class="input-wrapper">
            <svg
              class="input-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 15a2 2 0 100-4 2 2 0 000 4z" stroke-width="2" />
              <path
                d="M19 15V7a7 7 0 00-14 0v8m14 0H5m14 0a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2m14 0H5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="password"
              placeholder="••••••••"
              v-model="password"
              required
            />
            <button
              type="button"
              class="password-toggle"
              @click="togglePasswordVisibility"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  v-if="showPassword"
                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  v-if="showPassword"
                  d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  v-else
                  d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <a href="#" class="forgot-password">Forgot password?</a>
        </div>

        <button type="submit" class="login-btn" :disabled="loading">
          <span v-if="!loading">Sign In</span>
          <span v-else class="spinner"></span>
          <svg
            v-if="!loading"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div class="divider">
          <span>or continue with</span>
        </div>

        <div class="social-logins">
          <button
            type="button"
            class="social-btn"
            @click="socialLogin('google')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </button>
          <button
            type="button"
            class="social-btn"
            @click="socialLogin('linkedin')"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              width="24"
              height="24"
            />
          </button>
        </div>

        <p class="signup-link">
          Don't have an account?
          <router-link to="/register">Sign up</router-link>
        </p>
      </form>
    </div>

    <!-- Toast Notification -->
    <div v-if="toast.show" class="toast" :class="toast.type">
      {{ toast.message }}
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { ref, onMounted } from "vue";

export default {
  name: "LoginPage",
  setup() {
    const email = ref("");
    const password = ref("");
    const showPassword = ref(false);
    const loading = ref(false);
    const isMounted = ref(false);
    const toast = ref({
      show: false,
      message: "",
      type: "success",
    });

    const particleContainer = ref(null);

    const handleLogin = () => {
      loading.value = true;
      // Simulate API call
      setTimeout(() => {
        loading.value = false;
        showToast("Login successful!", "success");
      }, 1500);
    };

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
      const passwordInput = document.querySelector('input[type="password"]');
      if (passwordInput) {
        passwordInput.type = showPassword.value ? "text" : "password";
      }
    };

    const socialLogin = (provider) => {
      showToast(`Signing in with ${provider}...`, "info");
    };

    const showToast = (message, type = "success") => {
      toast.value = { show: true, message, type };
      setTimeout(() => {
        toast.value.show = false;
      }, 3000);
    };

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
      // Trigger the animation after a small delay
      setTimeout(() => {
        isMounted.value = true;
      }, 50);
    });

    return {
      email,
      password,
      showPassword,
      loading,
      isMounted,
      toast,
      particleContainer,
      handleLogin,
      togglePasswordVisibility,
      socialLogin,
    };
  },
};
</script>

<style scoped>
/* Base Styles */
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: hidden;
  padding-top: 70px;
}

.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
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
/* Login Box Styles with Animation */
.login-box {
  background: rgba(20, 20, 20, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px 24px;
  width: 100%;
  max-width: 440px;
  z-index: 2;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  transform: translateY(-100vh);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  margin-top: 33px;
}

.login-box.animate-in {
  transform: translateY(0);
  opacity: 1;
}

.login-box:hover {
  transform: translateY(-5px) scale(1.005);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.5);
}

/* Form Element Animations */
.login-form > * {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.login-box.animate-in .login-form > * {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger the animations */
.login-box.animate-in .logo {
  transition-delay: 0.1s;
}

.login-box.animate-in h2 {
  transition-delay: 0.2s;
}

.login-box.animate-in .subtitle {
  transition-delay: 0.3s;
}

.login-box.animate-in .form-group:nth-child(1) {
  transition-delay: 0.4s;
}

.login-box.animate-in .form-group:nth-child(2) {
  transition-delay: 0.5s;
}

.login-box.animate-in .login-btn {
  transition-delay: 0.6s;
}

.login-box.animate-in .divider {
  transition-delay: 0.7s;
}

.login-box.animate-in .social-logins {
  transition-delay: 0.8s;
}

.login-box.animate-in .signup-link {
  transition-delay: 0.9s;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  font-family: "Playfair Display", serif;
  font-size: 28px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
}

.logo .dot {
  width: 10px;
  height: 10px;
  background: #ff5f6d;
  border-radius: 50%;
  margin-left: 10px;
  animation: pulse 2s infinite;
}

/* Button Pulse Animation */
@keyframes pulse-glow {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 95, 109, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 95, 109, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 95, 109, 0);
  }
}

.login-form h2 {
  color: white;
  font-size: 22px;
  margin-bottom: 4px;
  text-align: center;
  font-weight: 600;
}

.subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  text-align: center;
  margin-bottom: 16px;
  line-height: 1.5;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper svg {
  position: absolute;
  left: 16px;
  width: 18px;
  height: 18px;
  stroke: rgba(255, 255, 255, 0.5);
  z-index: 2;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 14px;
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
}

.input-wrapper input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.input-wrapper input:focus {
  outline: none;
  border-color: rgba(255, 95, 109, 0.5);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(255, 95, 109, 0.1);
}

.password-toggle {
  position: absolute;
  right: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.password-toggle svg {
  position: relative;
  left: auto;
  right: auto;
  width: 20px;
  height: 20px;
  stroke: rgba(255, 255, 255, 0.5);
  transition: all 0.3s;
}

.password-toggle:hover svg {
  stroke: white;
}

.forgot-password {
  display: block;
  text-align: right;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  text-decoration: none;
  transition: color 0.3s;
}

.forgot-password:hover {
  color: #ff5f6d;
}

.login-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #ff5f6d 0%, #ffc371 100%);
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  margin-top: 16px;
  position: relative;
  overflow: hidden;
  font-size: 15px;
  box-shadow: 0 4px 15px rgba(255, 95, 109, 0.3);
  animation: pulse-glow 2s infinite;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 95, 109, 0.4);
}

.login-btn:active {
  transform: translateY(0);
}

.login-btn:disabled {
  background: rgba(255, 255, 255, 0.1);
  cursor: not-allowed;
  box-shadow: none;
  animation: none;
}

.login-btn svg {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  stroke-width: 2;
  transition: transform 0.3s;
}

.login-btn:hover svg {
  transform: translateX(4px);
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.divider {
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  font-weight: 500;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 12px;
}

.social-logins {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 28px;
}

.social-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.social-btn svg {
  width: 22px;
  height: 22px;
}

.signup-link {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin-top: 24px;
}

.signup-link a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  position: relative;
}

.signup-link a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: white;
  transition: width 0.3s ease;
}

.signup-link a:hover::after {
  width: 100%;
}

/* Toast Notification */
.toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  z-index: 100;
  animation: fadeInUp 0.3s ease-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.toast.success {
  border-left: 4px solid #4caf50;
}

.toast.error {
  border-left: 4px solid #f44336;
}

.toast.info {
  border-left: 4px solid #2196f3;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .navbar {
    padding: 20px;
  }

  .nav-links {
    display: none;
  }

  .login-box {
    padding: 32px;
    margin: 0 20px;
  }
}

@media (max-width: 480px) {
  .login-box {
    padding: 24px;
  }

  .login-form h2 {
    font-size: 24px;
  }
}
</style>
