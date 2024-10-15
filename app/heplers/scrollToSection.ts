export const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {

           const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

           const offsetPosition = elementPosition - 112;
   
           window.scrollTo({
               top: offsetPosition,
               behavior: 'smooth'
           });
    }
}
