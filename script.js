// ── TYPING EFFECT ──
const roles=['Web Developer','Full Stack Developer','Problem Solver','CSE Student @ JG University','Open Source Enthusiast'];
let ri=0,ci=0,del=false,txt='';
const tel=document.getElementById('typed');
function type(){
  const cur=roles[ri];
  if(!del){txt=cur.slice(0,++ci);tel.textContent=txt;if(ci===cur.length){del=true;setTimeout(type,2000);return}}
  else{txt=cur.slice(0,--ci);tel.textContent=txt;if(ci===0){del=false;ri=(ri+1)%roles.length}}
  setTimeout(type,del?52:96);
}
type();

// ── NAVBAR SCROLL ──
const nav=document.getElementById('navbar');
const navAs=document.querySelectorAll('.nav-links a');
const secs=document.querySelectorAll('section[id]');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>40);
  let cur='';
  secs.forEach(s=>{if(window.scrollY>=s.offsetTop-120)cur=s.id});
  navAs.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
  checkReveal();
},{passive:true});

// ── REVEAL ON SCROLL ──
function checkReveal(){
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-70)el.classList.add('visible');
  });
}
setTimeout(checkReveal,120);

// ── SMOOTH SCROLL ──
function smoothTo(e,sel){
  e.preventDefault();
  const t=document.querySelector(sel);
  if(t)t.scrollIntoView({behavior:'smooth'});
}

// ── HAMBURGER ──
function toggleMob(){
  const h=document.getElementById('ham');
  const m=document.getElementById('mobMenu');
  h.classList.toggle('open');
  m.classList.toggle('open');
}
function closeMob(){
  document.getElementById('ham').classList.remove('open');
  document.getElementById('mobMenu').classList.remove('open');
}
document.addEventListener('click',e=>{
  const h=document.getElementById('ham');
  const m=document.getElementById('mobMenu');
  if(!h.contains(e.target)&&!m.contains(e.target)){
    h.classList.remove('open');m.classList.remove('open');
  }
});

// ── CONTACT FORM ──
function submitForm(){
  const n=document.getElementById('fname').value.trim();
  const e=document.getElementById('femail').value.trim();
  const m=document.getElementById('fmsg').value.trim();
  if(!n||!e||!m){alert('Please fill in Name, Email, and Message.');return;}
  const btn=document.querySelector('.form-btn');
  btn.textContent='Sending...';btn.disabled=true;
  setTimeout(()=>{
    document.getElementById('formWrap').style.display='none';
    document.getElementById('formSuccess').style.display='block';
  },1300);
}
function resetForm(){
  ['fname','femail','fsubject','fmsg'].forEach(id=>document.getElementById(id).value='');
  const btn=document.querySelector('.form-btn');
  btn.textContent='Send Message';btn.disabled=false;
  document.getElementById('formWrap').style.display='block';
  document.getElementById('formSuccess').style.display='none';
}

// ── SKILL ITEM hover glow ──
document.querySelectorAll('.skill-item').forEach(el=>{
  el.addEventListener('mouseenter',()=>el.style.boxShadow='0 0 14px rgba(124,111,247,.2)');
  el.addEventListener('mouseleave',()=>el.style.boxShadow='');
});
