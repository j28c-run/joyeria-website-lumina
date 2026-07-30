let currentIndex = 0;
    
        function showTestimonial(index) {
            const testimonialContainer = document.querySelector('.testimonials');
            const testimonialCount = document.querySelectorAll('.testimonial').length;
            currentIndex = index;
            if (currentIndex < 0) currentIndex = testimonialCount - 1;
            if (currentIndex >= testimonialCount) currentIndex = 0;
            testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    
        function prevTestimonial() {
            showTestimonial(currentIndex - 1);
        }
    
        function nextTestimonial() {
            showTestimonial(currentIndex + 1);
        }