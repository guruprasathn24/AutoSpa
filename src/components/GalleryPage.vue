<template>
  <div class="gallery-container">
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
              <router-link to="/packages" class="nav-link">
                <span class="nav-number">03</span>
                <span class="nav-text">PACKAGES</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/gallery" class="nav-link active">
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
        <h1 class="hero-title mb-3">Our Work Gallery</h1>
        <p class="hero-subtitle">
          Witness the transformation we bring to every vehicle
        </p>
      </div>
    </section>

    <!-- Gallery Filter -->
    <section class="filter-section py-4">
      <div class="container">
        <div class="filter-buttons d-flex justify-content-center flex-wrap">
          <button
            v-for="filter in filters"
            :key="filter.value"
            class="filter-btn"
            :class="{ active: activeFilter === filter.value }"
            @click="setFilter(filter.value)"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="gallery-section py-5">
      <div class="container">
        <div class="row g-4">
          <!-- Loading State -->
          <div v-if="loading" class="col-12 text-center py-5">
            <div class="spinner-border text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">Loading gallery items...</p>
          </div>

          <!-- Gallery Items -->
          <div
            v-for="(item, index) in visibleItems"
            :key="index"
            class="col-md-6 col-lg-4 gallery-item"
            :data-category="item.category"
          >
            <div class="gallery-card">
              <div class="gallery-img-container">
                <img :src="item.image" :alt="item.title" class="gallery-img" />
                <div class="gallery-overlay">
                  <div class="gallery-content">
                    <h3 class="gallery-title">{{ item.title }}</h3>
                    <p class="gallery-desc">{{ item.description }}</p>
                    <button class="gallery-btn">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-5" v-if="!loading && hasMoreItems">
          <button class="load-more-btn" @click="loadMoreItems">
            <span v-if="!loadingMore">LOAD MORE</span>
            <span
              v-else
              class="d-flex align-items-center justify-content-center"
            >
              <span
                class="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              LOADING...
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section py-5 bg-dark">
      <div class="container">
        <h2 class="section-title text-center mb-5">Client Testimonials</h2>
        <div class="row">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="col-md-4 mb-4"
          >
            <div class="testimonial-card p-4 h-100">
              <div class="testimonial-rating mb-3">★ ★ ★ ★ ★</div>
              <p class="testimonial-text mb-4">"{{ testimonial.text }}"</p>
              <div class="d-flex align-items-center">
                <div class="author-avatar me-3">
                  <img
                    :src="testimonial.avatar"
                    :alt="testimonial.name"
                    class="rounded-circle"
                  />
                </div>
                <div>
                  <h5 class="mb-0">{{ testimonial.name }}</h5>
                  <small class="text-muted">{{ testimonial.package }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5">
      <div class="container text-center">
        <h2 class="mb-3">Ready to Transform Your Vehicle?</h2>
        <p class="mb-4">
          Book your service today and experience the AutoSpa difference
        </p>
        <button class="cta-button">BOOK YOUR SERVICE</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "GalleryPage",
  data() {
    return {
      loading: true,
      loadingMore: false,
      activeFilter: "all",
      itemsPerLoad: 6,
      displayedItems: 6,
      navLinks: [
        { text: "HOME", path: "/", active: false },
        { text: "SERVICES", path: "/services", active: false },
        { text: "PACKAGES", path: "/packages", active: false },
        { text: "GALLERY", path: "/gallery", active: true },
        { text: "CONTACT", path: "#", active: false },
        { text: "LOG IN", path: "/login", active: false },
      ],
      filters: [
        { label: "All Work", value: "all" },
        { label: "Exterior", value: "exterior" },
        { label: "Interior", value: "interior" },
        { label: "Detailing", value: "detailing" },
        { label: "Coating", value: "coating" },
        { label: "Correction", value: "correction" },
      ],
      galleryItems: [
        // Exterior (6 items)
        {
          title: "Premium Wash",
          description: "Before & after our signature wash service",
          image:
            "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          category: "exterior",
        },
        {
          title: "Tire & Wheel Care",
          description: "Professional wheel cleaning and dressing",
          image:
            "data:image/jpeg;base64,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",
          category: "exterior",
        },
        {
          title: "Exterior Detailing",
          description: "Complete exterior restoration",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1youh5wko6vBowqqhjeLK4oNViyJV1hC_hg&s",
          category: "exterior",
        },
        {
          title: "Headlight Restoration",
          description: "Bringing clarity back to headlights",
          image:
            "data:image/jpeg;base64,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",
          category: "exterior",
        },
        {
          title: "Paint Protection",
          description: "Shielding your paint from elements",
          image:
            "data:image/jpeg;base64,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",
          category: "exterior",
        },
        {
          title: "Convertible Top Care",
          description: "Specialized soft top cleaning",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpt_Pe96K7igG5UabX2L1lor0M8MME86C25Q&s",
          category: "exterior",
        },

        // Interior (6 items)
        {
          title: "Interior Detailing",
          description: "Complete interior restoration",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9mHXUlAAJUZh3K1vJugw6QuUdP5FovKvBA&s",
          category: "interior",
        },
        {
          title: "Leather Conditioning",
          description: "Restoring leather seats",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXAKMTM-ybcJFTnV6dv6Cgrnh_OtY5OjH-tQ&s",
          category: "interior",
        },
        {
          title: "Dashboard Cleaning",
          description: "Reviving your dashboard",
          image:
            "https://www.financialexpress.com/wp-content/uploads/2022/05/Bugatti-La-Voiture-Noire-620x349.jpg",
          category: "interior",
        },
        {
          title: "Carpet Shampooing",
          description: "Deep cleaning floor mats",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Wpmx61knRVXkpJpkmzgyZEpB_EqSEKvKOQ&s",
          category: "interior",
        },
        {
          title: "Odor Elimination",
          description: "Removing stubborn odors",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/11/360738650/HG/AY/FW/83088084/second-hand-hyundai-cars.jpg",
          category: "interior",
        },
        {
          title: "Seat Restoration",
          description: "Bringing seats back to life",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/e6/Lykan_HyperSport.jpg",
          category: "interior",
        },

        // Detailing (6 items)
        {
          title: "Engine Bay Detailing",
          description: "Professional engine cleaning",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJO4YQkD_fpBGtiA2obAi9dFh38ntiohQqw&s",
          category: "detailing",
        },
        {
          title: "Headlight Restoration",
          description: "Bringing clarity back to headlights",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQxNPU4QGQP_fz_hLOTAATm5TuqncaM_G2A&s",
          category: "detailing",
        },
        {
          title: "Trim Restoration",
          description: "Reviving faded plastic trim",
          image:
            "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2025/cars/malibu/visid/special-editions/2025-malibu-specialeditions-midnightedition-01-v2.png?imwidth=1200",
          category: "detailing",
        },
        {
          title: "Convertible Top Care",
          description: "Specialized soft top cleaning",
          image:
            "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          category: "detailing",
        },
        {
          title: "Chrome Polishing",
          description: "Restoring chrome surfaces",
          image:
            "https://curvaconcepts.com/wp-content/uploads/matte-black-porsche-taycan-turbo-cff46-2.jpg",
          category: "detailing",
        },
        {
          title: "Glass Treatment",
          description: "Water repellent application",
          image: "https://wallpaperbat.com/img/298301-black-car-wallpaper.jpg",
          category: "detailing",
        },

        // Coating (6 items)
        {
          title: "Ceramic Coating",
          description: "Premium paint protection",
          image: "https://backiee.com/static/wallpapers/560x315/184337.jpg",
          category: "coating",
        },
        {
          title: "Glass Coating",
          description: "Hydrophobic protection for glass",
          image: "https://i.ytimg.com/vi/3ZLK4yjFkCk/maxresdefault.jpg",
          category: "coating",
        },
        {
          title: "Wheel Coating",
          description: "Protecting wheels from brake dust",
          image:
            "https://www.cupraofficial.com/content/dam/public/cupra-website/cars/formentor/automatic-gallery/cupra-formentor-side-view-lifestyle-parked-in-an-dark-urban-environment.jpg",
          category: "coating",
        },
        {
          title: "Leather Coating",
          description: "Protecting leather surfaces",
          image:
            "https://www.indiacarnews.com/wp-content/uploads/2021/08/Mahindra-XUV700-Black-Edition-Rendering-768x512.jpg",
          category: "coating",
        },
        {
          title: "Fabric Coating",
          description: "Stain protection for fabrics",
          image:
            "https://www.autoblog.com/.image/w_3840,q_auto:good,c_limit/MjA5MDg5MDgwNDc1Mzk1Njk2/1970_dodge_challenger_black_ghost_001.png",
          category: "coating",
        },
        {
          title: "Trim Coating",
          description: "UV protection for plastic trim",
          image:
            "https://www.bajajmall.in/emistore/media/catalog/product/m/a/marutisuzukiertigalxi_pearlmidnightblack_base_1.jpeg",
          category: "coating",
        },

        // Correction (6 items)
        {
          title: "Paint Correction",
          description: "Removing swirls and scratches",
          image:
            "data:image/jpeg;base64,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",
          category: "correction",
        },
        {
          title: "Scratch Removal",
          description: "Professional scratch repair",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuTl7VZnQwrYaImkEYLvhXcsKcEeAnAE3dg&s",
          category: "correction",
        },
        {
          title: "Swirl Mark Removal",
          description: "Eliminating fine swirl marks",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmPNleTKnmlcUGF_ZBoY5bVv3heJCCHIowQ&s",
          category: "correction",
        },
        {
          title: "Hologram Removal",
          description: "Fixing improper polishing marks",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXAKMTM-ybcJFTnV6dv6Cgrnh_OtY5OjH-tQ&s",
          category: "correction",
        },
        {
          title: "Oxidation Removal",
          description: "Restoring faded paint",
          image:
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          category: "correction",
        },
        {
          title: "Water Spot Removal",
          description: "Eliminating mineral deposits",
          image:
            "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          category: "correction",
        },
      ],
      testimonials: [
        {
          text: "The ceramic coating package transformed my car. It looks better than when I first bought it! The team at AutoSpa is incredibly professional.",
          name: "Rahul Sharma",
          package: "Premium Package Client",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          text: "I've tried many car washes, but none compare to AutoSpa. The interior detailing made my 5-year-old car smell and look brand new.",
          name: "Priya Patel",
          package: "Essential Care Package",
          avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Lykan_HyperSport.jpg",
        },
        {
          text: "As a car enthusiast, I'm very particular about who touches my vehicle. AutoSpa's attention to detail is unmatched in the city.",
          name: "Vikram Singh",
          package: "Ultimate Protection Package",
          avatar: "https://c4.wallpaperflare.com/wallpaper/305/180/970/black-car-car-vehicle-sports-car-wallpaper-preview.jpg",
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      if (this.activeFilter === "all") {
        return this.galleryItems;
      }
      return this.galleryItems.filter(
        (item) => item.category === this.activeFilter
      );
    },
    visibleItems() {
      return this.filteredItems.slice(0, this.displayedItems);
    },
    hasMoreItems() {
      return this.displayedItems < this.filteredItems.length;
    },
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter;
      this.displayedItems = this.itemsPerLoad;
      // Scroll to top of gallery section when filter changes
      const gallerySection = document.querySelector(".gallery-section");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    },
    async loadMoreItems() {
      this.loadingMore = true;
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      this.displayedItems += this.itemsPerLoad;
      this.loadingMore = false;

      // Scroll to the newly loaded items
      const galleryItems = document.querySelectorAll(".gallery-item");
      if (galleryItems.length > 0) {
        const lastItem = galleryItems[galleryItems.length - 1];
        lastItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    },
    simulateLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
  mounted() {
    this.simulateLoading();
  },
};
</script>

<style scoped>
/* Base Styles */
.gallery-container {
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

/* Filter Section */
.filter-section {
  background: rgba(20, 20, 20, 0.9);
}

.filter-buttons {
  gap: 10px;
}

.filter-btn {
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter-btn:hover {
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
}

.filter-btn.active {
  background: linear-gradient(135deg, #ff5f6d, #ff8c71);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(255, 95, 109, 0.3);
}

/* Gallery Section */
.gallery-section {
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
}

.gallery-section::before {
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

.gallery-card {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  transform: translateY(0);
}

.gallery-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.gallery-img-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 4/3;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.gallery-card:hover .gallery-overlay {
  opacity: 1;
}

.gallery-card:hover .gallery-img {
  transform: scale(1.05);
}

.gallery-content {
  text-align: center;
  padding: 20px;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.gallery-card:hover .gallery-content {
  transform: translateY(0);
}

.gallery-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: white;
  font-family: "Playfair Display", serif;
}

.gallery-desc {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.gallery-btn {
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.gallery-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}

/* Load More Button */
.load-more-btn {
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  min-width: 180px;
}

.load-more-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
}

.load-more-btn:active {
  transform: translateY(0);
}

/* Testimonials Section */
.testimonials-section {
  background: rgba(20, 20, 20, 0.9);
}

.testimonial-card {
  background: rgba(30, 30, 30, 0.8);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 95, 109, 0.3);
}

.testimonial-rating {
  color: #ffd700;
  font-size: 1.1rem;
}

.testimonial-text {
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
  line-height: 1.6;
  font-size: 0.95rem;
}

.author-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.1);
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

  .section-title {
    font-size: 1.8rem;
  }

  .gallery-title {
    font-size: 1.3rem;
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

  .filter-buttons {
    gap: 8px;
  }

  .filter-btn {
    padding: 6px 15px;
    font-size: 0.75rem;
  }

  .gallery-img {
    height: 250px;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .hero-subtitle {
    font-size: 0.8rem;
  }

  .filter-buttons {
    gap: 6px;
  }

  .filter-btn {
    padding: 5px 12px;
    font-size: 0.7rem;
  }

  .gallery-img {
    height: 200px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>
