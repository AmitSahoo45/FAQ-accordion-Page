const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        const nigga = document.querySelectorAll(".faq");
        nigga.forEach(ass => {
            if (ass.classList.contains("active")) {
                ass.classList.remove("active");
            }
        })
        faq.classList.toggle("active");
    });
});