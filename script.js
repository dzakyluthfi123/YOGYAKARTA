
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) { // Ganti 50 dengan nilai yang Anda inginkan
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    $(document).ready(function() {
        // Add 'scrolled' class to navbar on scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
        });
    });