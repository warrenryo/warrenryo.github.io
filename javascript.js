const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.add('show_2');
        }else{
            entry.target.classList.remove('show');
            entry.target.classList.remove('show_2');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hide');
const hiddenElements2 = document.querySelectorAll('.hide_2');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));


//DARK MODE
function darkMode(){
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const toDark = document.querySelectorAll('#toDark');
    const toDark2 = document.querySelectorAll('#toDark2');
    const skills = document.getElementById('skills');
    const projects = document.getElementById('projects');
    const navbar = document.getElementById('navbar');
    const navbar2 = document.getElementById('navbar-var');
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const toggleButton = document.getElementById('toggleButton');
    const contact = document.getElementById('contact');

    home.classList.toggle('dark:bg-white');
    home.classList.toggle('bg-[#232946]');
    about.classList.toggle('dark:bg-gray-100');
    about.classList.toggle('bg-slate-800');
    skills.classList.toggle('dark:bg-white')
    skills.classList.toggle('bg-[#232946]')
    projects.classList.toggle('dark:bg-gray-100')
    projects.classList.toggle('bg-slate-800')
    navbar.classList.toggle('dark:bg-white')
    navbar.classList.toggle('bg-[#232946]')
    navbar2.classList.toggle('dark:bg-white')
    navbar2.classList.toggle('bg-[#232946]')
    contact.classList.toggle('dark:bg-white')
    contact.classList.toggle('bg-[#232946]')

    if (toggleButton.checked) {
        // Dark mode is enabled
        moon.classList.add('hidden');
        sun.classList.remove('hidden');
      } else {
        // Dark mode is disabled
        moon.classList.remove('hidden');
        sun.classList.add('hidden');
    }

    toDark.forEach(element => {
        element.classList.toggle('dark:text-white');
        element.classList.toggle('text-white', !element.classList.contains('dark:text-white'));
        element.classList.toggle('dark:text-black', !element.classList.contains('dark:text-white'));
      });

    toDark2.forEach(element=>{
        element.classList.toggle('dark:text-[#b8c1ec]');
        element.classList.toggle('text-[#b8c1ec]', !element.classList.contains('dark:text-[#b8c1ec]'));
        element.classList.toggle('dark:text-black', !element.classList.contains('dark:text-[#b8c1ec]'));
    })
}

const resume = document.getElementById('resume');

resume.addEventListener('click', function(event){
    alert('My Resume is not yet available');
    event.preventDefault();
})
