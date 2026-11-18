const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.textContent=open?"×":"☰";});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰";}));
document.getElementById("enquiryForm").addEventListener("submit",event=>{
 event.preventDefault();
 const name=document.getElementById("name").value.trim();
 const phone=document.getElementById("phone").value.trim();
 const product=document.getElementById("product").value;
 const message=document.getElementById("message").value.trim();
 if(!name||!phone||!product)return;
 document.getElementById("formMessage").textContent="Thank you, "+name+". This is a demonstration only; no enquiry has been sent or stored. The finished website can connect this form to the business's approved contact channel.";
});