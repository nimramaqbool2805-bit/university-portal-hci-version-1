function login(){
 const u=document.getElementById('username').value.trim();
 const p=document.getElementById('password').value.trim();
 const m=document.getElementById('message');
 if(!u||!p){m.textContent='ERROR: Please fill all required fields!';m.style.color='red';return;}
 m.textContent='Login successful! Redirecting...';m.style.color='green';
 setTimeout(()=>location.href='dashboard.html',500);
}