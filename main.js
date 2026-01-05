/* Scroll reveal */
const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    if(sec.getBoundingClientRect().top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
});

/* Projects */
const projects=[
  {
    title:"موقع أناشيد إسلامية",
    desc:"مكتبة أناشيد بدون موسيقى",
    link:"https://h3macraft.github.io/islamicanasheed/"
  },
  {
    title:"مركز البراء للتأهيل",
    desc:"موقع تعريفي لمركز طبي",
    link:"https://h3macraft.github.io/Al-Braa-Center/"
  },
  {
    title:"متجر إلكترونيات",
    desc:"تجربة تصميم متجر",
    link:"https://ebr4techstore.netlify.app/"
  }
];

const list=document.getElementById("projectsList");
projects.forEach(p=>{
  const div=document.createElement("div");
  div.className="project";
  div.innerHTML=`
    <div>
      <h3>${p.title}</h3>
      <span>${p.desc}</span>
    </div>
    <a href="${p.link}" target="_blank">زيارة</a>
  `;
  list.appendChild(div);
});
