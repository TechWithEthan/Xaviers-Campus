document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animating title and subtitle
    const title = document.querySelector('.animated-title');
    const subtitle = document.querySelector('.animated-subtitle');
    
    if (title && subtitle) {
        setTimeout(() => title.classList.add('fade-in'), 500);
        setTimeout(() => subtitle.classList.add('fade-in'), 1000);
    }

    // Simple announcements carousel
    let currentAnnouncement = 0;
    const announcements = [
        "Annual College Festival on November 20th!",
        "Workshop on Modern Engineering Trends - Register Now!",
        "Admissions open for the upcoming academic year."
    ];
    const announcementElement = document.querySelector('.announcements p');

    function updateAnnouncement() {
        announcementElement.textContent = announcements[currentAnnouncement];
        currentAnnouncement = (currentAnnouncement + 1) % announcements.length;
    }

    setInterval(updateAnnouncement, 5000); // Change announcement every 5 seconds

    // Add fade-in class to testimonials on scroll
    const testimonials = document.querySelectorAll('.testimonial');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, options);

    testimonials.forEach(testimonial => {
        observer.observe(testimonial);
    });
});