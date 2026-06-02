// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5fjlkL5JqaRGWReva36OCIub30LIx6p3seLl9G9GDPtrZCRZm4wNch7Aaxj40gIhP/U345+RTc/jZsB5SQ7edMW/knrq7G2BchVg+LrpaPhpcJjqBpSbJAO6Ri9YyWxYBYsZ6pS3ApPAaAVHam+NbV50IDviYc7zDLVZH2xGWU+mKeV6MNfBWaDd4jCYQTm8slAc5t+FGO2xUfWbX88FvIXsrsCAYxtau7z/CtcasTlZdLiPWp7Q+5Gm6eISGGO+IFe3uhlig/QeRv0eSjXp8AcNn2Cu4/NeCHIKFGkvRf5xkNbB9kWUwYp66VJkYzX4jOe6qvRVMiRgf7Dn0p0PhBRUFGu9SqCvT92PO2/1BDTdpZUWE/B4kvfBC93XDJDrOnZx57iyzeDpO6DD+IBwV5LHuaBu5HVAAUYSpa/GJB6qAorHwtGcaj+Oy10q++I5oA9mUmsOFid3cTYZ7ENYB3c+VnEO0IKWe06EOR9nHcsx6z/RzgqxVdXe7oS2HXu4AwqO+AQK5ka5sI2PrHpZrbZ32VZLxC9fcIM4PQxJDqjgY5s/wUs0lL89UgQSc0i0ZOIJitPJgm64qcqHEUEUrAwJVvvXM8mYG49gcZ0CN3MNr9QHKjUHTAOcfdqa1W6VQU7VQz6LRsN+XIqoD988HARCcD/HI3hNrnV/cO8mMK9BPNWRdbevR0EO3FiOyYOShuEbxWLnfqKEcp0OpkQ67S7Ez06fIFUwFc1t4s0I30kRiaFoAsbFddB7tL3W9knsELfLRnq4jSD51gN9xonO5pBGOyJOyESkxeBFEOL3Hf7k+/WY9WJY9W3pG9XsLxPUjVnSIpEmiraL11M3gtneWYJEc1eWILgb/bt05oY8S6P7mJ4fjLAODGfbjFy+VqIMKFYo9uOjP21+pyBKbO/5+AR8PO0zblB4J3IhkWZzYLpE4/jsHCc5gCIx3bw=';const _IH='ca717e665a33d3d355a4e14987883c43076815f8b7bd25c1cc705af0dcdabee5';let _src;

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
