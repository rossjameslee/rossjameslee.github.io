// Portfolio Configuration
// Update these values to customize your portfolio

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Ross James Lee",
        title: "Software Engineer & Technology Enthusiast",
        description: "Passionate about building innovative solutions and creating impactful technology experiences.",
        about: [
            "I'm a dedicated software engineer with a passion for creating innovative solutions and building technology that makes a difference. With experience in full-stack development, I enjoy tackling complex problems and turning ideas into reality.",
            "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
        ],
        stats: [
            { number: "3+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "5+", label: "Technologies Mastered" }
        ]
    },

    // Contact Information
    contact: {
        email: "rjlee96@gmail.com",
        linkedin: "https://www.linkedin.com/in/rossjameslee/",
        github: "https://github.com/rossjameslee",
        gitlab: "https://gitlab.com/rossjlee",
        website: "https://rossjameslee.github.io/"
    },

    // Experience Timeline
    experience: [
        {
            title: "Software Engineer",
            company: "Tech Company",
            period: "2023 - Present",
            achievements: [
                "Developed and maintained full-stack web applications",
                "Collaborated with cross-functional teams to deliver high-quality software",
                "Implemented best practices for code quality and performance"
            ]
        },
        {
            title: "Junior Developer",
            company: "Startup",
            period: "2022 - 2023",
            achievements: [
                "Built responsive user interfaces using modern frameworks",
                "Optimized application performance and user experience",
                "Participated in agile development processes"
            ]
        },
        {
            title: "Software Engineering Intern",
            company: "Tech Internship",
            period: "2021 - 2022",
            achievements: [
                "Gained hands-on experience with real-world projects",
                "Learned industry best practices and development workflows",
                "Contributed to team projects and code reviews"
            ]
        }
    ],

    // Skills and Technologies
    skills: {
        "Frontend": ["JavaScript", "React", "HTML/CSS", "TypeScript"],
        "Backend": ["Node.js", "Python", "Java", "SQL"],
        "Tools & Platforms": ["Git", "Docker", "AWS", "Linux"],
        "Other": ["Agile", "REST APIs", "Testing", "CI/CD"]
    },

    // Resume File
    resume: "RJLee_Resume_2025_Anthropic_Dream_Job.pdf",

    // Theme Colors (optional - for advanced customization)
    theme: {
        primary: "#2563eb",
        secondary: "#764ba2",
        textDark: "#1f2937",
        textLight: "#6b7280",
        backgroundLight: "#f9fafb"
    },

    // Social Media Links (optional)
    social: {
        twitter: null, // Add your Twitter handle if you have one
        instagram: null, // Add your Instagram if you have one
        youtube: null, // Add your YouTube channel if you have one
        blog: null // Add your blog URL if you have one
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
} 