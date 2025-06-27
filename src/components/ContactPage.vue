<template>
  <div class="contact-container">
    <!-- Premium Navbar with Scroll Effect -->
    
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
              <router-link to="/" class="nav-link ">
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
              <router-link to="/contact" class="nav-link active">
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

    <!-- Hero Section with Parallax and Particle Effects -->
    <section class="hero d-flex align-items-center" @mousemove="handleParallax">
      <div class="parallax-bg" :style="parallaxStyle"></div>
      <div class="particles" id="particles-js"></div>
      <div class="container text-center position-relative">
        <h1 class="hero-title mb-3" data-aos="fade-up">Get In Touch</h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">We're here to answer all your questions about premium auto care</p>
      </div>
    </section>

    <!-- Animated Contact Cards -->
    <section class="contact-cards py-5">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2>How Can We Help?</h2>
          <p>Choose your preferred contact method</p>
        </div>
        <div class="row g-4">
          <div 
            class="col-md-4" 
            v-for="(card, index) in contactCards" 
            :key="card.title"
            data-aos="fade-up"
            :data-aos-delay="100 * index"
          >
            <div 
              class="contact-card"
              @mouseenter="hoverCard(index)"
              @mouseleave="unhoverCard(index)"
              @mousemove="cardHoverMove($event, index)"
              :class="{ 'hovered': card.hovered }"
              :style="{ transform: card.transform }"
            >
              <div class="card-icon">
                <i :class="card.icon"></i>
              </div>
              <h3 class="card-title">{{ card.title }}</h3>
              <p class="card-text">{{ card.text }}</p>
              <a :href="card.link" class="card-link">
                {{ card.linkText }}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3335 12.6663L12.6668 3.33301M12.6668 3.33301H3.3335M12.6668 3.33301V12.6663" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <div class="card-hover-effect" :style="cardHoverStyle(index)"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Contact Form with Floating Labels -->
<section class="contact-form py-5">
  <div class="container">
    <div class="row">
      <!-- Contact Form -->
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="form-header" data-aos="fade-up">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and our team will get back to you within 24 hours</p>

          <div class="success-message" v-if="form.success">
            <i class="fas fa-check-circle"></i>
            <span>Thank you! Your message has been sent successfully.</span>
          </div>
        </div>

        <form @submit.prevent="submitForm" class="mt-4">
          <div 
            class="form-group mb-4" 
            v-for="field in formFields" 
            :key="field.id"
            data-aos="fade-up"
            :data-aos-delay="100 * field.order"
          >
            <label :for="field.id" class="form-label">{{ field.label }}</label>
            <component
              :is="field.type === 'textarea' ? 'textarea' : 'input'"
              :type="field.type"
              :id="field.id"
              class="form-control rounded-3 shadow-sm"
              v-model="form[field.id]"
              :required="field.required"
              rows="4"
            ></component>
            <div class="error-message text-danger mt-1" v-if="form.errors[field.id]">
              {{ form.errors[field.id] }}
            </div>
          </div>

          <button 
            type="submit" 
            class="submit-btn btn btn-primary px-4 py-2 rounded-pill"
            :disabled="form.submitting"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span v-if="!form.submitting">
              SEND MESSAGE
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.3335 10H16.6668M16.6668 10L11.6668 5M16.6668 10L11.6668 15"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span v-else class="d-flex align-items-center justify-content-center">
              <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              SENDING...
            </span>
          </button>
        </form>
      </div>

      <!-- Map Section -->
      <div class="col-lg-6">
        <div 
          class="map-container"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div class="map-overlay"></div>
          <div class="location-info">
            <h3>Our Location</h3>
            <p>123 Auto Care Lane, Coimbatore, 641101</p>
            <button class="directions-btn" @click="openDirections">
              <i class="fas fa-directions"></i>
              Get Directions
            </button>
          </div>

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.034840297807!2d76.94942157480985!3d11.005548654167428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857d846e4eb5b%3A0xc43a99e1e6377a07!2sR.S.%20Puram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641002!5e0!3m2!1sen!2sin!4v1719400000000!5m2!1sen!2sin" 
            allowfullscreen="" 
            loading="lazy"
            class="map-iframe"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- Interactive FAQ Section -->
    <section class="faq-section py-5">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our services</p>
        </div>
        
        <div class="accordion">
          <div 
            class="accordion-item" 
            v-for="(item, index) in faqs" 
            :key="item.question"
            :class="{ 'active': activeFaq === index }"
            @click="toggleFaq(index)"
            data-aos="fade-up"
            :data-aos-delay="50 * index"
          >
            <div class="accordion-header">
              <h3>{{ item.question }}</h3>
              <div class="accordion-icon">
                <div class="icon-line horizontal"></div>
                <div class="icon-line vertical" :class="{ 'rotated': activeFaq === index }"></div>
              </div>
            </div>
            <div class="accordion-content" :style="{ maxHeight: activeFaq === index ? getContentHeight(index) + 'px' : '0' }">
              <div class="content-inner" ref="faqContent">
                <p>{{ item.answer }}</p>
                <button class="related-btn" v-if="item.related" @click.stop="navigateTo(item.related.link)">
                  Learn more about {{ item.related.text }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Animated CTA Section -->
    <section class="cta-section py-5">
      <div class="container text-center">
        <div data-aos="fade-up">
          <h2 class="mb-3">Ready to Experience AutoSpa?</h2>
          <p class="mb-4">Book your service today and give your vehicle the premium care it deserves</p>
        </div>
        <button 
          class="cta-button" 
          data-aos="fade-up" 
          data-aos-delay="100"
          @click="playClickSound"
        >
          BOOK YOUR SERVICE
          <div class="hover-effect"></div>
        </button>
      </div>
    </section>

    <!-- Floating Action Button -->
    <button class="fab" @click="scrollToTop" v-show="showFab">
      <i class="fas fa-arrow-up"></i>
    </button>

    <!-- Audio Elements (hidden) -->
    <audio ref="hoverSound" src="@/assets/sounds/hover.mp3" preload="auto"></audio>
    <audio ref="clickSound" src="@/assets/sounds/click.mp3" preload="auto"></audio>
  </div>
</template>

<script>
// CORRECTED IMPORTS
import 'particles.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'ContactPage',
  data() {
    return {
      isScrolled: false,
      showFab: false,
      navLinks: [
        { text: 'HOME', path: '/', active: false },
        { text: 'SERVICES', path: '/services', active: false },
        { text: 'PACKAGES', path: '/packages', active: false },
        { text: 'GALLERY', path: '/gallery', active: false },
        { text: 'CONTACT', path: '/contact', active: true },
        { text: 'LOG IN', path: '/login', active: false }
      ],
      parallaxX: 0,
      parallaxY: 0,
      contactCards: [
        {
          icon: 'fas fa-map-marker-alt',
          title: 'Visit Us',
          text: '123 Auto Care Lane, Motor City, MC 12345',
          link: '#map',
          linkText: 'View on Map',
          hovered: false,
          transform: 'translateY(0)',
          mouseX: 0,
          mouseY: 0
        },
        {
          icon: 'fas fa-phone-alt',
          title: 'Call Us',
          text: 'Available 8:00 AM - 8:00 PM, 7 days a week',
          link: 'tel:+11234567890',
          linkText: '+1 (123) 456-7890',
          hovered: false,
          transform: 'translateY(0)',
          mouseX: 0,
          mouseY: 0
        },
        {
          icon: 'fas fa-envelope',
          title: 'Email Us',
          text: 'Have questions? Our team is ready to help!',
          link: 'mailto:info@autospa.com',
          linkText: 'info@autospa.com',
          hovered: false,
          transform: 'translateY(0)',
          mouseX: 0,
          mouseY: 0
        }
      ],
      formFields: [
        { id: 'name', label: 'Your Name', type: 'text', required: true, order: 0 },
        { id: 'email', label: 'Email Address', type: 'email', required: true, order: 1 },
        { id: 'phone', label: 'Phone Number (Optional)', type: 'tel', required: false, order: 2 },
        { id: 'message', label: 'Your Message', type: 'textarea', required: true, order: 3 }
      ],
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
        submitting: false,
        success: false,
        errors: {}
      },
      activeField: null,
      activeFaq: null,
      faqs: [
        {
          question: 'What are your operating hours?',
          answer: 'Our AutoSpa locations are open from 8:00 AM to 8:00 PM, seven days a week. Some services may require an appointment, so we recommend booking in advance.',
          related: {
            text: 'our services',
            link: '/services'
          }
        },
        {
          question: 'How long does a typical detailing service take?',
          answer: 'Service duration depends on the package you choose. Basic washes take about 30-45 minutes, while our premium detailing packages can take 3-5 hours for complete interior and exterior restoration.'
        },
        {
          question: 'Do I need to book an appointment?',
          answer: 'While walk-ins are welcome for basic services, we highly recommend appointments for premium packages to ensure we can dedicate the proper time and attention to your vehicle.',
          related: {
            text: 'booking',
            link: '/booking'
          }
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, debit cards, mobile payments, and cash. Corporate accounts can be set up with monthly billing upon approval.'
        },
        {
          question: 'Is there a warranty on your services?',
          answer: 'Yes! All our services come with a 7-day satisfaction guarantee. For ceramic coatings and paint protection films, we offer extended warranties up to 5 years.'
        }
      ]
    }
  },
  computed: {
    parallaxStyle() {
      return {
        transform: `translate(${this.parallaxX * 0.05}px, ${this.parallaxY * 0.05}px)`
      }
    },
    cardHoverStyle() {
      return (index) => {
        const card = this.contactCards[index]
        if (!card.hovered) return {}
        
        const x = card.mouseX * 0.5
        const y = card.mouseY * 0.5
        
        return {
          background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 95, 109, 0.15), transparent 70%)`,
          opacity: 1
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.initParticles()
    this.initAOS()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
      this.showFab = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    initParticles() {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#FF5F6D" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: false },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out"
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" }
            }
          }
        })
      }
    },
    initAOS() {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 120
      })
    },
    handleParallax(e) {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      this.parallaxX = e.clientX - centerX
      this.parallaxY = e.clientY - centerY
    },
    hoverCard(index) {
      this.contactCards[index].hovered = true
      this.playHoverSound()
      
      // Animate all cards for a cohesive effect
      this.contactCards.forEach((card, i) => {
        if (i !== index) {
          const direction = i < index ? -1 : 1
          card.transform = `translateY(${5 * direction}px)`
        } else {
          card.transform = 'translateY(-10px) rotateZ(2deg)'
        }
      })
    },
    cardHoverMove(event, index) {
      const card = this.contactCards[index]
      const rect = event.currentTarget.getBoundingClientRect()
      card.mouseX = event.clientX - rect.left
      card.mouseY = event.clientY - rect.top
    },
    unhoverCard(index) {
      this.contactCards[index].hovered = false
      this.contactCards.forEach(card => {
        card.transform = 'translateY(0) rotateZ(0)'
      })
    },
    activateLabel(field) {
      this.activeField = field
      const input = this.$el.querySelector(`#${field}`)
      if (input) {
        input.style.borderBottomColor = '#FF5F6D'
        const underline = input.nextElementSibling.nextElementSibling
        if (underline) underline.style.transform = 'scaleX(1)'
      }
    },
    deactivateLabel(field) {
      if (!this.form[field]) {
        this.activeField = null
        const input = this.$el.querySelector(`#${field}`)
        if (input) {
          input.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)'
          const underline = input.nextElementSibling.nextElementSibling
          if (underline) underline.style.transform = 'scaleX(0)'
        }
      }
    },
    toggleFaq(index) {
      if (this.activeFaq === index) {
        this.activeFaq = null
      } else {
        this.activeFaq = index
        // Scroll into view if needed
        this.$nextTick(() => {
          const element = this.$el.querySelectorAll('.accordion-item')[index]
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        })
      }
    },
    getContentHeight(index) {
      if (this.$refs.faqContent && this.$refs.faqContent[index]) {
        return this.$refs.faqContent[index].scrollHeight
      }
      return 0
    },
    validateForm() {
      let isValid = true
      this.form.errors = {}
      
      if (!this.form.name.trim()) {
        this.form.errors.name = 'Please enter your name'
        isValid = false
      }
      
      if (!this.form.email.trim()) {
        this.form.errors.email = 'Please enter your email'
        isValid = false
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.form.errors.email = 'Please enter a valid email'
        isValid = false
      }
      
      if (this.form.phone && !/^[\d\s\-()+]+$/.test(this.form.phone)) {
        this.form.errors.phone = 'Please enter a valid phone number'
        isValid = false
      }
      
      if (!this.form.message.trim()) {
        this.form.errors.message = 'Please enter your message'
        isValid = false
      }
      
      return isValid
    },
    submitForm() {
      if (!this.validateForm()) return
      
      this.form.submitting = true
      
      // Simulate API call
      setTimeout(() => {
        this.form.submitting = false
        this.form.success = true
        
        // Reset form
        this.form.name = ''
        this.form.email = ''
        this.form.phone = ''
        this.form.message = ''
        this.form.errors = {}
        this.activeField = null
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          this.form.success = false
        }, 5000)
      }, 1500)
    },
    playHoverSound() {
      if (this.$refs.hoverSound) {
        this.$refs.hoverSound.currentTime = 0
        this.$refs.hoverSound.play().catch(e => console.log("Audio play failed:", e))
      }
    },
    playClickSound() {
      if (this.$refs.clickSound) {
        this.$refs.clickSound.currentTime = 0
        this.$refs.clickSound.play().catch(e => console.log("Audio play failed:", e))
      }
    },
    openDirections() {
      window.open('https://www.google.com/maps/dir//AutoSpa+Premium+Car+Care/data=...', '_blank')
    },
    navigateTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
/* Base Styles */
.contact-container {
  background: #0a0a0a;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  padding-top: 80px;
  overflow-x: hidden;
  line-height: 1.6;
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
  font-family: 'Playfair Display', serif;
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
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
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
  font-family: 'Playfair Display', serif;
}

.nav-link.active .nav-number,
.nav-link:hover .nav-number {
  color: #ffffff !important;
}
input.form-control:focus,
textarea.form-control:focus {
  background-color: #000 !important;
  color: #fff !important;
  border-color: #555 !important;
  box-shadow: none !important;
}

.submit-btn.btn:hover {
  color: #000 !important;
  background-color: #fff !important;
  border-color: #000 !important;
}
.nav-text {
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, rgba(212, 57, 57, 0) 0%, #ffffff 50%, rgba(255,255,255,0) 100%);
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
/* Hero Section */
.hero {
  height: 70vh;
  min-height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
}

.parallax-bg {
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
  will-change: transform;
  z-index: -2;
  transition: transform 0.1s linear;
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #FF5F6D, #FFC371);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: gradientShift 8s ease infinite;
  background-size: 200% 200%;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin-bottom: 10px;
  position: relative;
}

.scroller {
  width: 4px;
  height: 10px;
  background: #FF5F6D;
  border-radius: 2px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollAnimation 2s infinite;
}

@keyframes scrollAnimation {
  0% { top: 10px; opacity: 1; }
  50% { top: 20px; opacity: 0.5; }
  100% { top: 10px; opacity: 1; }
}

/* Section Headers */
.section-header {
  margin-bottom: 3rem;
}

.section-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #FF5F6D, #FFC371);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #FF5F6D, #FF8C71);
  border-radius: 3px;
}

.section-header p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
}

/* Contact Cards */
.contact-cards {
  position: relative;
  z-index: 2;
  padding: 5rem 0;
}

.contact-card {
  background: rgba(30, 30, 30, 0.8);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transform-style: preserve-3d;
  will-change: transform;
}

.card-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at var(--x) var(--y), rgba(255, 95, 109, 0.15), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.contact-card:hover {
  transform: translateY(-10px) rotateZ(1deg) !important;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 95, 109, 0.3);
  background: rgba(40, 40, 40, 0.8);
}

.card-icon {
  font-size: 2.8rem;
  color: #FF5F6D;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.card-icon::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid rgba(255, 95, 109, 0.3);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
}

.contact-card:hover .card-icon {
  transform: scale(1.1);
  color: #FF8C71;
}

.contact-card:hover .card-icon::before {
  opacity: 1;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  color: #ffffff;
}

.card-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #FF5F6D, #FF8C71);
  transition: all 0.3s ease;
}

.contact-card:hover .card-title::after {
  width: 80px;
  height: 3px;
}

.card-text {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.7;
}

.card-link {
  color: #FF5F6D;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
  padding-bottom: 2px;
}

.card-link svg {
  transition: transform 0.3s ease;
}

.contact-card:hover .card-link {
  color: #FF8C71;
}

.contact-card:hover .card-link svg {
  transform: translateX(3px);
}

.card-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #FF8C71;
  transition: width 0.3s ease;
}

.contact-card:hover .card-link::after {
  width: 100%;
}

/* Contact Form */
.contact-form {
  position: relative;
  padding: 5rem 0;
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.9), rgba(20, 20, 20, 0.9));
}

.contact-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
  opacity: 0.05;
  z-index: -1;
}

.form-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #FF5F6D, #FFC371);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.form-header p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.success-message {
  background: rgba(40, 167, 69, 0.15);
  border-left: 4px solid #28a745;
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.success-message i {
  color: #28a745;
  font-size: 1.2rem;
}

.success-message span {
  color: #ffffff;
}

.form-group {
  position: relative;
  margin-bottom: 2.5rem;
}

.floating-label label {
  position: absolute;
  top: 10px;
  left: 0;
  color: rgba(255, 255, 255, 0.7);
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-origin: left top;
  font-size: 1rem;
}

.form-group.focused label {
  transform: translateY(-25px) scale(0.85);
  color: #FF5F6D;
}

input, textarea {
  width: 100%;
  padding: 10px 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #FF5F6D;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.form-group.focused .underline {
  transform: scaleX(1);
}

.error-message {
  position: absolute;
  bottom: -20px;
  left: 0;
  color: #FF5F6D;
  font-size: 0.8rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.form-group.focused .error-message {
  opacity: 1;
}

.submit-btn {
  background: linear-gradient(90deg, #FF5F6D, #FF8C71);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(255, 95, 109, 0.3);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 95, 109, 0.4);
}

.submit-btn:active {
  transform: translateY(1px);
}

.submit-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #FF8C71, #FF5F6D);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.submit-btn:hover::after {
  opacity: 1;
}

/* Map Section */
.map-container {
  position: relative;
  height: 100%;
  min-height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255, 95, 109, 0.1), transparent 70%);
  z-index: 1;
  pointer-events: none;
}

.location-info {
  position: absolute;
  bottom: 30px;
  left: 30px;
  background: rgba(10, 10, 10, 0.8);
  padding: 1.5rem;
  border-radius: 15px;
  z-index: 2;
  max-width: 80%;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.location-info h3 {
  font-family: 'Playfair Display', serif;
  color: #FF5F6D;
  margin-bottom: 0.5rem;
}

.location-info p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
}

.directions-btn {
  background: transparent;
  color: #FF5F6D;
  border: 1px solid #FF5F6D;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.directions-btn:hover {
  background: rgba(255, 95, 109, 0.1);
  transform: translateY(-2px);
}

.map-iframe {
  width: 100%;
  height: 100%;
  min-height: 500px;
  border: none;
  filter: grayscale(20%) contrast(1.1);
}

/* FAQ Section */
.faq-section {
  background: rgba(15, 15, 15, 0.8);
  position: relative;
  z-index: 1;
}

.faq-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
  opacity: 0.03;
  z-index: -1;
}

.accordion {
  max-width: 800px;
  margin: 0 auto;
}

.accordion-item {
  background: rgba(30, 30, 30, 0.8);
  border-radius: 10px;
  margin-bottom: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.accordion-item:hover {
  border-color: rgba(255, 95, 109, 0.3);
}

.accordion-item.active {
  background: rgba(40, 40, 40, 0.8);
}

.accordion-header {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.accordion-header h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  margin: 0;
  color: #ffffff;
  transition: all 0.3s ease;
}

.accordion-item.active .accordion-header h3 {
  color: #FF5F6D;
}

.accordion-icon {
  width: 24px;
  height: 24px;
  position: relative;
}

.icon-line {
  position: absolute;
  background: #FF5F6D;
  transition: all 0.3s ease;
}

.icon-line.horizontal {
  width: 20px;
  height: 2px;
  top: 11px;
  left: 2px;
}

.icon-line.vertical {
  width: 2px;
  height: 20px;
  top: 2px;
  left: 11px;
}

.icon-line.vertical.rotated {
  transform: rotate(90deg);
  opacity: 0;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

.content-inner {
  padding: 0 1.5rem 1.5rem;
}

.content-inner p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

.related-btn {
  background: transparent;
  color: #FF5F6D;
  border: 1px solid #FF5F6D;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.related-btn:hover {
  background: rgba(255, 95, 109, 0.1);
  transform: translateY(-2px);
}

/* CTA Section */
.cta-section {
  position: relative;
  background: linear-gradient(135deg, #FF5F6D, #FF8C71);
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
  opacity: 0.1;
  z-index: 0;
}

.cta-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: white;
  position: relative;
  z-index: 1;
}

.cta-section p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  position: relative;
  z-index: 1;
}

.cta-button {
  position: relative;
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  letter-spacing: 1px;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
}

.cta-button .hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
  z-index: -1;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-button:hover .hover-effect {
  transform: scaleX(1);
}

/* Floating Action Button */
.fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF5F6D, #FF8C71);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(255, 95, 109, 0.3);
  transition: all 0.3s ease;
  z-index: 999;
}

.fab:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 25px rgba(255, 95, 109, 0.4);
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 500px;
  }
  
  .hero-title {
    font-size: 2.8rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .contact-card {
    padding: 2rem 1.5rem;
  }
  
  .map-container {
    min-height: 400px;
  }
}

@media (max-width: 576px) {
  .navbar-brand {
    font-size: 1.1rem;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .cta-section h2 {
    font-size: 2rem;
  }
  
  .cta-section p {
    font-size: 1rem;
  }
}
</style>