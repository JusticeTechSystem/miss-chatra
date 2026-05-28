// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bVBqRlCkAQx6P+k1r2f89y6/CYiviNYKFWpbTUQrqviRt6jFwxoe+O4M79XI1mUb9fvnpQlpwg1Nq1OabRpEfj1jYgnBeJgQ9yLKsOLjGDl4OJgqg+q5UuTWTBWBgzUPTawG3NQAtqUNMyjX1GY/o2xCW1esYeTiESqg0V4darOH2IVB7XHSdJ6/WbuzlLmXsbc+3KdckRGs2Kby0hOAYWY9ktlsYF6Uctb2+CV9obNi4y6Sbf4H4gZZHaXJUPHNObxCj9o1HH1EP5aH5puT3HOx0w6F6w3KM19J2ZniOCCVzdvK41Gh7vqWypWVB9Lhj6kIzlxI/MyJvKJSc6R7nLLbC1BZjB7Okv6eoGXZjCzt2edOmr9AudYBrlDTQVOM15ArNisBsAFpb7jYbWRyH0H57JVpilUWgM5LQ0kpuORApC2uRtuYG9YdBRAvjVaZbG1SpNenxywXU9pbDGUN1yC9Cqjex3U/Q4MX495SRlXp5BRhaqEJLfRp1tCzyHORSTp2Ej5SJQD9WVR0YF+Tn88Wg23ez7m43UYncdsn77qUeGP89+JR7tIL/TqJrjlei3Tiv1mzyEng3Quf788xtD25cMqMRljwIPPYv0wZG5JL1s0OK4OavzE/E2dktqIU7qvIpeHK38oaaxdonrOvxBc9M8QtTpBnH8sd0iUMKna4tER+cOz1eIMbAUg8s4YdEnUep70KZdJYmc7q2AkzivYyXr1WArdEOT92O7pYhSZPl3w8tvnN6L7lqJ2qTb44Ra6ozLGZyZHadYaa9bSXfI8Jng3Pwl6zr3zaR+JJWAUqZZulshm8Vvvm2JMCXUGElZUVYuVA3sqYPvRBDPJaYdQAgfoVhnjARdTBnpEFZlzJc2FnHH/WZ2Dc+LFG8aW/vWL0JkFoR4SNlhNh2ryBzcXYpANxDzrjPgSZlOtAffO182/wypJ6Shlhl9HKlXeiQNVTMiQ3l7inBx7Fq/vu6vuKeRxK0q0rWa5igKECJEPttPto7Qnwvy+ZACrB088d2u7hNQ==';const _IH='39c13bf5b3386f730db4c591e8cfeb419a16ac42cb32b0feed188bf4a062b7db';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
