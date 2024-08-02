document.addEventListener("DOMContentLoaded", function() {
    
    const menuLinks = document.querySelectorAll("nav ul li a");

    
    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            
            event.preventDefault();
            
            
            const targetUrl = this.getAttribute("href");

            
            console.log(`Navigating to: ${targetUrl}`);
            
            
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300); 
        });
    });

    
    menuLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "red"; 
        });
        link.addEventListener("mouseout", function() {
            this.style.color = ""; 
        });
    });
});
