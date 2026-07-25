// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjST4yG8NnNZqjFF2mXNP9rK9UYhjuxHE4aQoPjQ5b4KMjI8w3m3AoNfOMpI4Z32vDkNhbbJhBLGXihZn1hS5V6vRYgUBADV0C9iBVFAnaGYU7DX7Z0tvtoth+bR5xrmkigvJGyBDY/EqNmO+VLveqJyKntjFpYWj1IuVPNJhd9YP4DxD6loakM7v2tJoZlqg7kaMkoPy5bIEJpol1XNu76l7qFgoQ4tX7lGQiwbiGCUMbQrn8hlhFwebnLn4g0b+tHxweio0CiYSn79PSjJ1LForb/TV2+mWEYxEmUhew2Vb0fpsQLHPi4EqYvVCNEACF0PkLwWNQOu+v741L726TNDKdy6b+OVU57YIn3SvEmv6B6qtxTtxNjTMk+haAXLvnwVoZd0/5Eced77vufXoFwOX/CdLkn01RMXW8n4uZlrq8AkKzfM7Dqe6sowKX7+RvkRy5o7XQsQBzCQQFGo+4cRh9JNWTNWFmtnbY3vrdq65AOzM2nx5hfAHwZPwOTO6L5XeuWpdr350QjFncZzi85o4SGjla3kfl2VAE7HvafmOStvPKytGTdPWwNHC87XC1wiiA8UtzJxqhYmwrJAHhgDZAJNbvJmjujStOteZYL6GbDrDpajMwKBbbbCQC69mLxMs3W5k4pTNsOngE/BB++T5MBUyVxiW4rudDiipG4XiHxUwvVRh828jl5kY4ddJStglMclzw6vyzlJwNfp5puLVkAvN95TZDkgIeSJIlWUx3qb4ogWGZuHD3mYHjFm0JCofBpMGaaKOX0+C1foSYxymsFXuyYRjkAgtV6lhzNO4OqiXvY8dq27N9ssdsJzELuzaYz/RIp0TV/Sz+Q1h1CFdh7VYSfCeISaMG22cl+QKzYp+sPcB3K+J3YxRkaBWh5qCkqzGkIaNMUPMu7VeANtWP7Iz+XjwpJZpzzcqsp6zRTP0iAkBo/J/dRGfLM/Zc8suv7a8XhE3s+m7t6NV+fdGAkDC/06LfOJ6rCIvj1djmuVDIJKWPUR9Z4aYGrTzib0H9xU60uJ9cPNpc05SXo6D3/CFvjlqKM6ZqSRDGJpgGk28eDtfxPzlQv5obg1cXVqvs0z2D+ESlYW5WpQxDnEp+FDvo0gFWkLR3/aulF46OwBMyCMpfWdrUA18uDWA02lqZmMV34T5HF/YY9oTe/0NXVKaZzJaAfeV+P84DlfERCqre+CUoBDkUJ0PD37kD63bpDBxUuBn9O9Ix3qrMo1CDxFZlLItw9Mj2TRsd8lRhdosPqCBxr8wtynmMi0n6AO1F7J1DlUFQYLNI1Fo8ys8lq07Mx+uCt7tkQQwpYSxm5gIP7L+O4s6G/sPCY/jo0ZVpa/YqkJY9SflzwcehLercmA2BFBoFKr0dCaKeHNqJKe1nBBJnAqhZOV1vKOpIN4K3bQpKWb';const _IH='3a81c38a331c2ab658cdbca5ed358f500c282195cc09472e009fc6ada5dab0d4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
