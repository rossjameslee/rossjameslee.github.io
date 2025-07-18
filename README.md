# Ross James Lee - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This website showcases professional experience, skills, and contact information in a clean, academic-inspired design.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design inspired by academic/research portfolios
- **Smooth Animations**: Subtle animations and transitions for enhanced user experience
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic navigation
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 File Structure

```
rossjameslee.github.io/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # This file
└── RJLee_Resume_2025_Anthropic_Dream_Job.pdf  # Your resume
```

## 🎨 Customization Guide

### Personal Information
Update the following sections in `index.html`:

1. **Hero Section** (lines 40-60):
   - Name and title
   - Description
   - Profile image (replace placeholder)

2. **About Section** (lines 70-90):
   - Personal description
   - Statistics (years of experience, projects, etc.)

3. **Experience Section** (lines 100-150):
   - Job titles, companies, and dates
   - Responsibilities and achievements

4. **Skills Section** (lines 160-200):
   - Add/remove skill categories
   - Update skill tags

5. **Contact Section** (lines 210-250):
   - Email, LinkedIn, GitHub, GitLab links
   - Contact form functionality

### Styling Customization
Modify `styles.css` to change:

- **Colors**: Update CSS variables for primary/secondary colors
- **Fonts**: Change font families and sizes
- **Layout**: Adjust spacing, padding, and grid layouts
- **Animations**: Modify transition effects and timing

### Functionality
Edit `script.js` to customize:

- **Animations**: Typing effects, scroll animations
- **Form handling**: Contact form submission logic
- **Interactive features**: Hover effects, navigation behavior

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push your code to a GitHub repository named `rossjameslee.github.io`
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose `main` branch
4. Your site will be available at `https://rossjameslee.github.io`

### Local Development
1. Clone or download the files to your local machine
2. Open `index.html` in a web browser
3. For live reload during development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Key Sections

### 1. Navigation
- Fixed header with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting

### 2. Hero Section
- Gradient background with call-to-action buttons
- Typing animation for the title
- Download resume functionality

### 3. About Section
- Personal introduction
- Key statistics with hover effects
- Professional background

### 4. Experience Timeline
- Chronological work experience
- Alternating layout design
- Hover animations

### 5. Skills Grid
- Categorized skill tags
- Interactive hover effects
- Responsive grid layout

### 6. Contact Section
- Contact information with icons
- Functional contact form
- Social media links

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features
- Optimized images and assets
- Minimal JavaScript footprint
- CSS animations for smooth performance
- Lazy loading for better page speed

## 📝 Content Updates

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style the section in `styles.css`
3. Add any JavaScript functionality in `script.js`
4. Update navigation menu if needed

### Updating Experience
Replace the timeline items in the experience section with your actual work history:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <p class="company">Company Name</p>
        <p class="period">Start Date - End Date</p>
        <ul>
            <li>Key achievement or responsibility</li>
            <li>Another important point</li>
            <li>Third highlight</li>
        </ul>
    </div>
</div>
```

### Updating Skills
Modify the skills grid to match your expertise:

```html
<div class="skill-category">
    <h3>Category Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
        <span class="skill-tag">Skill 3</span>
    </div>
</div>
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #2563eb
- **Secondary Purple**: #764ba2
- **Text Dark**: #1f2937
- **Text Light**: #6b7280
- **Background Light**: #f9fafb
- **White**: #ffffff

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Fallback**: System fonts
- **Heading Weights**: 600-700
- **Body Weight**: 400-500

### Spacing
- **Container Max Width**: 1200px
- **Section Padding**: 5rem (80px)
- **Grid Gap**: 2rem (32px)
- **Component Padding**: 1rem-2rem

## 🔍 SEO Optimization

The website includes:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Open Graph tags (can be added)
- Structured data (can be enhanced)

## 📞 Support

For questions or customization help:
- Email: rjlee96@gmail.com
- GitHub: [rossjameslee](https://github.com/rossjameslee)
- LinkedIn: [rossjameslee](https://www.linkedin.com/in/rossjameslee/)

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Last Updated**: January 2025
**Version**: 1.0.0 