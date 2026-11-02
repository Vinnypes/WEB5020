// MedLeaf Part 3 - All JS Features
document.addEventListener('DOMContentLoaded', () => {

// Modal - Today's Special
const openBtn = document.getElementById('openPromo');
const modal = document.getElementById('promoModal');
const closeModal = document.querySelector('.close-modal');
if(openBtn && modal){
  openBtn.addEventListener('click', ()=> modal.classList.add('show'));
  if(closeModal) closeModal.addEventListener('click', ()=> modal.classList.remove('show'));
  window.addEventListener('click', (e)=> { if(e.target==modal) modal.classList.remove('show'); });
}

// Accordion - FAQ
document.querySelectorAll('.accordion-header').forEach(h=>{
  h.addEventListener('click', ()=>{
    const acc = h.parentElement;
    acc.classList.toggle('active');
  });
});

// Tabs - Our Vibe
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Lightbox Gallery
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbClose = document.getElementById('lightbox-close');
document.querySelectorAll('.gallery-grid img').forEach(img=>{
  img.addEventListener('click', ()=>{
    if(lightbox && lbImg){ lbImg.src = img.src; lightbox.classList.add('show'); }
  });
});
if(lbClose) lbClose.addEventListener('click', ()=> lightbox.classList.remove('show'));
if(lightbox) lightbox.addEventListener('click', (e)=>{ if(e.target==lightbox) lightbox.classList.remove('show'); });

// Search & Filter Menu
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const menuItems = document.querySelectorAll('.menu-item');
function filterMenu(){
  const search = searchInput ? searchInput.value.toLowerCase() : '';
  const cat = categoryFilter ? categoryFilter.value : 'all';
  menuItems.forEach(item=>{
    const text = item.textContent.toLowerCase();
    const itemCat = item.dataset.category || 'all';
    const matchSearch = text.includes(search);
    const matchCat = cat==='all' || itemCat===cat;
    item.style.display = (matchSearch && matchCat) ? 'flex' : 'none';
  });
}
if(searchInput) searchInput.addEventListener('input', filterMenu);
if(categoryFilter) categoryFilter.addEventListener('change', filterMenu);

// Leaflet Map - Roodepoort
const mapEl = document.getElementById('map');
if(mapEl && typeof L !== 'undefined'){
  const map = L.map('map').setView([-26.1625, 27.9036], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.marker([-26.1625, 27.9036]).addTo(map).bindPopup('MedLeaf Coffee<br>45 Van Wyk St, Roodepoort');
}

// Enquiry Form Validation
const form = document.getElementById('enquiryForm');
if(form){
 form.addEventListener('submit', function(e){
   e.preventDefault();
   let valid=true;
   document.querySelectorAll('.error').forEach(el=>el.style.display='none');
   const name = document.getElementById('name');
   const email = document.getElementById('email');
   const type = document.getElementById('type');
   const msg = document.getElementById('message');
   if(!name.value.trim()){document.getElementById('nameError').style.display='block';valid=false;}
   if(!email.value.includes('@') || !email.value.includes('.')){document.getElementById('emailError').style.display='block';valid=false;}
   if(!type.value){document.getElementById('typeError').style.display='block';valid=false;}
   if(!msg.value.trim()){document.getElementById('messageError').style.display='block';valid=false;}
   if(valid){
     document.getElementById('successBox').style.display='block';
     form.reset();
     setTimeout(()=>{ document.getElementById('successBox').style.display='none'; }, 4000);
   }
 });
}

});