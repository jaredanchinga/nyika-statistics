# Alpha Statistica Website Documentation

This Markdown file provides a complete overview of the Alpha Statistica website, including its structure, files, page details, and instructions for cloning or remaking it elsewhere. The site is a static HTML/CSS/JS website focused on professional statistical services.

## Project Structure
The website is organized in the following directory structure:

```
alpha-stata/
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── faq.html            # FAQ page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript for form validation and dynamic elements
└── alpha.jpg         # Hero image used on multiple pages
```

- **Root Directory**: Contains all HTML pages.
- **css/**: Holds the stylesheet.
- **js/**: Holds the JavaScript file.
- No other subfolders are used.

## Dependencies
- **Font Awesome**: Included via CDN for icons (e.g., `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">`).
- No other external libraries or frameworks are required. The site is pure HTML/CSS/JS.

## Page Details
Below is a summary of each page, including purpose, key sections, and code structure.

### 1. index.html (Home Page)
- **Purpose**: Landing page introducing services, testimonials, and call-to-action.
- **Key Sections**:
  - Header with navigation (Home, About, Contact, FAQ).
  - Hero section with title, description, and "Get Started" button.
  - Services grid with 8 service cards (e.g., Data Analysis, Machine Learning).
  - Testimonials slider with 4 client quotes.
  - CTA section.
  - Footer with about info, quick links, contact details, and copyright.
- **Meta Tags**: Includes description and keywords for SEO.
- **Scripts**: Loads js/script.js for dynamic copyright year.
- **Full Code**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Professional statistical analysis and research services for businesses and organizations. Data-driven insights and consulting.">
    <meta name="keywords" content="statistics, data analysis, research design, statistical consulting, biostatistics">
    <title>Nyika Statistics - Professional Statistical Services</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="logo">
                <h1>Nyika Statistics</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Professional Statistical Analysis & Research</h1>
            <p>We provide comprehensive statistical services to help businesses, researchers, and organizations make data-driven decisions with confidence.</p>
            <a href="contact.html" class="btn">Get Started</a>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services">
        <div class="container">
            <h2>Our Services</h2>
            <div class="service-grid">
                <div class="service-card">
                    <i class="fas fa-chart-bar"></i>
                    <h3>Data Analysis</h3>
                    <p>Comprehensive analysis of your data using advanced statistical methods to uncover patterns and insights.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-search"></i>
                    <h3>Research Design</h3>
                    <p>Expert guidance in designing research studies that yield reliable and valid results.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-poll"></i>
                    <h3>Survey Development</h3>
                    <p>Creation of effective surveys and questionnaires that capture the information you need.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-chalkboard-teacher"></i>
                    <h3>Statistical Consulting</h3>
                    <p>Professional advice on statistical methods, data interpretation, and research strategies.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-chart-line"></i>
                    <h3>Data Visualization & Reporting</h3>
                    <p>Creating intuitive charts, dashboards, and reports to communicate insights effectively.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-brain"></i>
                    <h3>Machine Learning & Predictive Analytics</h3>
                    <p>Building models for forecasting, classification, and AI-driven decision making.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-graduation-cap"></i>
                    <h3>Statistical Training & Workshops</h3>
                    <p>Customized training sessions on statistical tools and methods for your team.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-stethoscope"></i>
                    <h3>Biostatistics & Clinical Research</h3>
                    <p>Specialized analysis for healthcare, clinical trials, and medical research.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
        <div class="container">
            <h2>What Our Clients Say</h2>
            <div class="testimonial-slider">
                <div class="testimonial">
                    <p>"Nyika Statistics transformed our raw data into actionable insights that drove our business growth. Their attention to detail and clear communication made the process seamless. Highly recommended!"</p>
                    <div class="client">
                        <h4>Jane Doe</h4>
                        <p>CEO, Tech Innovations Ltd.</p>
                    </div>
                </div>
                <div class="testimonial">
                    <p>"Their expertise in biostatistics was crucial for our clinical research project. The team provided innovative solutions that accelerated our timeline while maintaining scientific rigor. Professional and thorough."</p>
                    <div class="client">
                        <h4>Dr. John Smith</h4>
                        <p>Research Director, HealthCorp</p>
                    </div>
                </div>
                <div class="testimonial">
                    <p>"The statistical training workshop was enlightening and perfectly tailored to our team's needs. We gained practical skills that we immediately applied to our projects."</p>
                    <div class="client">
                        <h4>Sarah Johnson</h4>
                        <p>Manager, Data Analytics Firm</p>
                    </div>
                </div>
                <div class="testimonial">
                    <p>"Nyika's machine learning models helped us predict market trends with remarkable accuracy. A game-changer for our business strategy."</p>
                    <div class="client">
                        <h4>Mike Chen</h4>
                        <p>CTO, FinTech Solutions</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
        <div class="container">
            <h2>Ready to Transform Your Data into Insights?</h2>
            <p>Contact us today to discuss how our statistical services can help you achieve your research and business goals.</p>
            <a href="contact.html" class="btn">Contact Us</a>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About Us</h3>
                    <p>Nyika Statistics provides professional statistical services to help organizations make data-driven decisions.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p><i class="fas fa-envelope"></i> anchinga27@gmail.com</p>
                    <p><i class="fas fa-phone"></i> +254 724407899</p>
                    <p><i class="fas fa-map-marker-alt"></i> Infinity Place Apartments, Juja, Kenya</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Nyika Statistics. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
```

### 2. about.html (About Page)
- **Purpose**: Details the company's story, mission, approach, and values.
- **Key Sections**:
  - Header with navigation.
  - Page header with title.
  - About content grid (text and image).
  - Values grid with 4 value cards.
  - Footer.
- **Image**: Uses plateau.jpg with alt text and lazy loading.
- **Full Code**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Nyika Statistics</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="logo">
                <h1>Nyika Statistics</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html" class="active">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1>About Nyika Statistics</h1>
        </div>
    </section>

    <!-- About Content -->
    <section class="about-content">
        <div class="container">
            <div class="about-grid">
                <div class="about-text">
                    <h2>Our Story</h2>
                    <p>Founded in 2024, Nyika Statistics is grown from a small consultancy to a leading provider of statistical services worldwide. Our journey began with a simple mission: to help individuals and organizations harness the power of data to make better decisions.</p>
                    <p>Over the years, we have worked with clients across various sectors including healthcare, education, agriculture, and business, providing them with insights that drive growth and innovation.</p>
                    
                    <h2>Our Mission</h2>
                    <p>At Nyika Statistics, our mission is to democratize access to high-quality statistical analysis, transforming complex data into clear, actionable insights. We empower businesses, researchers, and organizations in Africa and globally to make informed, data-driven decisions that foster sustainable growth and innovation.</p>
                    
                    <h2>Our Approach</h2>
                    <p>We take a collaborative approach to every project, working closely with our clients to understand their unique needs and challenges. Our team combines technical expertise with industry knowledge to deliver solutions that are both rigorous and practical.</p>
                </div>
                <div class="about-image">
                    <img src="plateau.jpg" alt="Scenic plateau landscape representing Nyika Statistics" loading="lazy">
                </div>
            </div>
        </div>
    </section>

    <!-- Values Section -->
    <section class="values">
        <div class="container">
            <h2>Our Values</h2>
            <div class="values-grid">
                <div class="value-card">
                    <i class="fas fa-check-circle"></i>
                    <h3>Accuracy</h3>
                    <p>We are committed to delivering precise, reliable results that our clients can trust.</p>
                </div>
                <div class="value-card">
                    <i class="fas fa-lightbulb"></i>
                    <h3>Innovation</h3>
                    <p>We continuously explore new methods and technologies to enhance our analytical capabilities.</p>
                </div>
                <div class="value-card">
                    <i class="fas fa-users"></i>
                    <h3>Collaboration</h3>
                    <p>We work closely with our clients, ensuring that our solutions address their specific needs.</p>
                </div>
                <div class="value-card">
                    <i class="fas fa-book"></i>
                    <h3>Education</h3>
                    <p>We believe in empowering our clients through knowledge sharing and capacity building.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About Us</h3>
                    <p>Nyika Statistics provides professional statistical services to help organizations make data-driven decisions.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p><i class="fas fa-envelope"></i> anchinga27@gmail.com</p>
                    <p><i class="fas fa-phone"></i> +254 724407899</p>
                    <p><i class="fas fa-map-marker-alt"></i> Infinity Place Apartments, Juja, Kenya</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Nyika Statistics. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
```

### 3. contact.html (Contact Page)
- **Purpose**: Provides contact form and information.
- **Key Sections**:
  - Header with navigation.
  - Page header.
  - Contact grid: Form (name, email, subject, message) and info (email, phone, address, social media).
  - Social media: Only LinkedIn link (https://www.linkedin.com/in/jared-anching-a-001539357/).
  - Footer.
- **Form**: Basic HTML form with JS validation from script.js.
- **Full Code**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Contact Nyika Statistics for professional statistical services and consultations.">
    <meta name="keywords" content="contact nyika statistics, statistical consulting inquiry, data analysis services">
    <title>Contact Us - Nyika Statistics</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="logo">
                <h1>Nyika Statistics</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html" class="active">Contact</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1>Contact Us</h1>
        </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-form">
                    <h2>Get In Touch</h2>
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Your Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Your Message</label>
                            <textarea id="message" name="message" rows="6" required></textarea>
                        </div>
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                </div>
                <div class="contact-info">
                    <h2>Contact Information</h2>
                    <div class="info-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h3>Email</h3>
                            <p>anchinga27@gmail.com</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h3>Phone</h3>
                            <p>+254 724407899</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h3>Address</h3>
                            <p>Infinity Place Apartments</p>
                            <p>Juja, Kenya</p>
                        </div>
                    </div>
                    <div class="social-media">
                        <h3>Follow Us</h3>
                        <div class="social-icons">
                            <a href="https://www.linkedin.com/in/jared-anching-a-001539357/" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About Us</h3>
                    <p>Nyika Statistics provides professional statistical services to help organizations make data-driven decisions.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p><i class="fas fa-envelope"></i> anchinga27@gmail.com</p>
                    <p><i class="fas fa-phone"></i> +254 724407899</p>
                    <p><i class="fas fa-map-marker-alt"></i> Infinity Place Apartments, Juja, Kenya</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Nyika Statistics. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
```

### 4. faq.html (FAQ Page)
- **Purpose**: Answers common questions.
- **Key Sections**:
  - Header with navigation.
  - Page header.
  - FAQ items (5 questions with answers).
  - Footer.
- **Full Code**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Frequently Asked Questions about Nyika Statistics services and statistical consulting.">
    <meta name="keywords" content="statistics FAQ, data analysis questions, research design help">
    <title>FAQ - Nyika Statistics</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="logo">
                <h1>Nyika Statistics</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="faq.html" class="active">FAQ</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1>Frequently Asked Questions</h1>
        </div>
    </section>

    <!-- FAQ Content -->
    <section class="faq">
        <div class="container">
            <div class="faq-item">
                <h3>What types of statistical software do you use?</h3>
                <p>We primarily use R, Python, SPSS, and Stata, depending on the project's requirements and client preferences.</p>
            </div>
            <div class="faq-item">
                <h3>How long does a typical analysis project take?</h3>
                <p>Project timelines vary based on complexity, but most analyses are completed within 2-4 weeks. We provide estimates after initial consultation.</p>
            </div>
            <div class="faq-item">
                <h3>Do you offer confidentiality for sensitive data?</h3>
                <p>Yes, we maintain strict confidentiality protocols and can sign NDAs to protect your data and intellectual property.</p>
            </div>
            <div class="faq-item">
                <h3>What industries do you specialize in?</h3>
                <p>We work across various sectors including healthcare, education, agriculture, finance, and business analytics.</p>
            </div>
            <div class="faq-item">
                <h3>How much do your services cost?</h3>
                <p>Pricing is project-based. Contact us for a free initial consultation and quote tailored to your needs.</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About Us</h3>
                    <p>Nyika Statistics provides professional statistical services to help organizations make data-driven decisions.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p><i class="fas fa-envelope"></i> anchinga27@gmail.com</p>
                    <p><i class="fas fa-phone"></i> +254 724407899</p>
                    <p><i class="fas fa-map-marker-alt"></i> Infinity Place Apartments, Juja, Kenya</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Nyika Statistics. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
```

## Styles (css/styles.css)
- **Purpose**: Defines all visual styling, responsive design, and layouts.
- **Key Features**:
  - CSS variables for colors (e.g., --primary-color: #2c3e50).
  - Responsive grid layouts (using CSS Grid).
  - Media queries for mobile responsiveness.
  - Styles for hero, services, testimonials, etc.
- **Size**: Approximately 700+ lines; includes resets, typography, and section-specific rules.
- **Full Code**:
```css
/* Base Styles */
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --light-color: #ecf0f1;
    --dark-color: #2c3e50;
    --text-color: #333;
    --text-light: #777;
    --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-main);
    line-height: 1.6;
    color: var(--text-color);
    background-color: #f9f9f9;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

a {
    text-decoration: none;
    color: var(--secondary-color);
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
}

.btn {
    display: inline-block;
    background-color: var(--secondary-color);
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}

/* Header Styles */
header {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
}

.logo h1 {
    color: var(--primary-color);
    font-size: 1.8rem;
}

nav ul {
    display: flex;
}

nav ul li {
    margin-left: 30px;
}

nav ul li a {
    color: var(--text-color);
    font-weight: 500;
    transition: color 0.3s ease;
}

nav ul li a:hover, nav ul li a.active {
    color: var(--secondary-color);
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url('../plateau.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 100px 0;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

/* Services Section */
.services {
    padding: 80px 0;
    background-color: white;
}

.services h2, .testimonials h2, .team h2, .values h2, .faq h2 {
    text-align: center;
    margin-bottom: 50px;
    color: var(--primary-color);
    font-size: 2rem;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.service-card {
    background-color: #f8f9fa;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.service-card i {
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 20px;
}

.service-card h3 {
    margin-bottom: 15px;
    color: var(--primary-color);
}

/* Testimonials Section */
.testimonials {
    padding: 80px 0;
    background-color: #f8f9fa;
}

.testimonial-slider {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.testimonial {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    max-width: 500px;
}

.testimonial p {
    font-style: italic;
    margin-bottom: 20px;
}

.client h4 {
    color: var(--primary-color);
    margin-bottom: 5px;
}

.client p {
    color: var(--text-light);
    font-style: normal;
    margin-bottom: 0;
}

.team {
    padding: 80px 0;
    background-color: #f8f9fa;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.team-member {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.member-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 20px;
    background-color: #e0e0e0;
}

.team-member h3 {
    color: var(--primary-color);
    margin-bottom: 5px;
}

.team-member .position {
    color: var(--secondary-color);
    font-weight: 600;
    margin-bottom: 15px;
}

.faq {
    padding: 80px 0;
    background-color: #f8f9fa;
}

.faq-item {
    background-color: white;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.faq-item h3 {
    color: var(--primary-color);
    margin-bottom: 15px;
    font-size: 1.2rem;
}

/* CTA Section */
.cta {
    background-color: var(--primary-color);
    color: white;
    text-align: center;
    padding: 80px 0;
}

.cta h2 {
    margin-bottom: 20px;
}

.cta p {
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

/* Footer */
footer {
    background-color: #2c3e50;
    color: white;
    padding: 60px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-section h3 {
    margin-bottom: 20px;
    font-size: 1.2rem;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section ul li a {
    color: #ecf0f1;
    transition: color 0.3s ease;
}

.footer-section ul li a:hover {
    color: var(--secondary-color);
}

.footer-section p {
    margin-bottom: 10px;
    color: #bdc3c7;
}

.footer-section p i {
    margin-right: 10px;
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Page Header */
.page-header {
    background-color: var(--primary-color);
    color: white;
    padding: 60px 0;
    text-align: center;
}

.page-header h1 {
    font-size: 2.5rem;
}

/* About Page Styles */
.about-content, .contact-content {
    padding: 80px 0;
    background-color: white;
}

.about-grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
    align-items: center;
}

.about-text h2 {
    color: var(--primary-color);
    margin-bottom: 20px;
    margin-top: 30px;
}

.about-text h2:first-child {
    margin-top: 0;
}

.about-text p {
    margin-bottom: 15px;
}

.about-image img {
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.placeholder-image {
    background-color: #e0e0e0;
    height: 300px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 1.2rem;
    position: relative;
    overflow: hidden;
}

.placeholder-image::after {
    content: "Image placeholder";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.member-image.placeholder-image {
    height: 150px;
    width: 150px;
}

.member-image.placeholder-image::after {
    content: "Team member";
    font-size: 0.9rem;
}

/* Team Section */
.team {
    padding: 80px 0;
    background-color: #f8f9fa;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.team-member {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.member-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 20px;
}

.team-member h3 {
    color: var(--primary-color);
    margin-bottom: 5px;
}

.team-member .position {
    color: var(--secondary-color);
    font-weight: 600;
    margin-bottom: 15px;
}

/* Values Section */
.values {
    padding: 80px 0;
    background-color: white;
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.value-card {
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #e0e0e0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.value-card i {
    font-size: 2rem;
    color: var(--secondary-color);
    margin-bottom: 20px;
}

.value-card h3 {
    margin-bottom: 15px;
    color: var(--primary-color);
}

/* Contact Page Styles */
.contact-grid {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
}

.contact-form h2, .contact-info h2 {
    color: var(--primary-color);
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
}

.form-group input, .form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
}

.form-group textarea {
    resize: vertical;
}

.info-item {
    display: flex;
    margin-bottom: 25px;
}

.info-item i {
    font-size: 1.5rem;
    color: var(--secondary-color);
    margin-right: 20px;
    margin-top: 5px;
}

.info-item h3 {
    margin-bottom: 5px;
    color: var(--primary-color);
}

.social-media {
    margin-top: 40px;
}

.social-icons {
    display: flex;
    gap: 15px;
    margin-top: 15px;
}

.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--secondary-color);
    color: white;
    border-radius: 50%;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.social-icon:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
}

/* Portfolio Styles */
.portfolio-content {
    padding: 80px 0;
    background-color: white;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.portfolio-item {
    background-color: #f8f9fa;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.portfolio-item h3 {
    color: var(--primary-color);
    margin-bottom: 15px;
}

/* Blog Styles */
.blog-content {
    padding: 80px 0;
    background-color: white;
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.blog-post {
    background-color: #f8f9fa;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.blog-post h2 {
    color: var(--primary-color);
    margin-bottom: 10px;
}

.post-meta {
    color: var(--text-light);
    font-size: 0.9rem;
    margin-bottom: 15px;
}

.blog-post p {
    margin-bottom: 20px;
}

.blog-post .btn {
    background-color: var(--secondary-color);
}

/* FAQ Section */
.faq {
    padding: 80px 0;
    background-color: #f8f9fa;
}

.faq-item {
    background-color: white;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.faq-item h3 {
    color: var(--primary-color);
    margin-bottom: 15px;
    font-size: 1.2rem;
}

/* Responsive Styles */
@media (max-width: 992px) {
    .about-grid, .contact-grid {
        grid-template-columns: 1fr;
    }
    
    .about-image {
        order: -1;
        margin-bottom: 30px;
    }
    
    .service-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}

@media (max-width: 768px) {
    header .container {
        flex-direction: column;
    }
    
    .logo {
        margin-bottom: 20px;
    }
    
    nav ul {
        justify-content: center;
        flex-wrap: wrap;
    }
    
    nav ul li {
        margin: 10px 15px;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
    
    .service-grid, .team-grid, .values-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 576px) {
    .testimonial-slider {
        flex-direction: column;
    }
    
    .testimonial {
        max-width: 100%;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
    }
    
    .hero {
        padding: 60px 0;
    }
    
    .services, .testimonials, .about-content, .team, .values, .contact-content, .faq {
        padding: 50px 0;
    }
    
    .cta {
        padding: 50px 0;
    }
    
    .btn {
        padding: 10px 20px;
    }
    
    .container {
        width: 95%;
        padding: 0 10px;
    }
}
```

## JavaScript (js/script.js)
- **Purpose**: Handles form validation and dynamic copyright year.
- **Key Functions**:
  - Form submission validation (checks for empty fields, valid email).
  - Updates footer copyright year automatically.
- **Full Code**:
```javascript
// Basic script for Nyika Statistics website

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // For now, just log the submission (in a real setup, use EmailJS or a backend)
            console.log('Form submitted:', { name, email, subject, message });
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            form.reset();
        });
    }
    
    // Dynamic copyright year
    const yearElements = document.querySelectorAll('.footer-bottom p');
    yearElements.forEach(el => {
        el.textContent = el.textContent.replace('2025', new Date().getFullYear());
    });
});
```

## Images
- **plateau.jpg**: Used as a background/hero image on home and about pages. Ensure it's optimized for web (e.g., compress if needed).

## Cloning and Remaking Instructions
To clone or remake this website:

1. **Copy Files**: Duplicate the folder structure and all files listed above.
2. **Set Up Locally**:
   - Open the folder in a code editor (e.g., VS Code).
   - Run a local server: In the terminal, navigate to the folder and run `python -m http.server 8000` (or use Live Server extension).
   - Access at http://localhost:8000/index.html.
3. **Edit Content**:
   - Update HTML files for text/images.
   - Modify styles.css for design changes.
   - Adjust script.js for functionality.
4. **Deployment**:
   - **GitHub Pages**: Create a repo, push files, enable Pages in settings.
   - **Netlify/Vercel**: Upload folder or connect Git repo for free hosting.
   - Custom Domain: Configure via hosting provider.
5. **Testing**:
   - Check navigation links.
   - Test form submission (note: it's client-side only; add backend for real emails).
   - Ensure responsiveness on mobile.
6. **Customization Tips**:
   - Add more pages by copying an existing HTML file and updating nav links.
   - For SEO, update meta tags on each page.
   - If adding images, place them in a new `images/` folder and reference accordingly.

This documentation covers the entire site as of 2025-11-27. If the site changes, update this file accordingly.