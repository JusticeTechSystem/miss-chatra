// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7R02pWU3zfYn65i4dNw/9JS5l+JQbe1QnCuqEbSZHL1LZG4o4rBV1tvRtvAxZ4gFeCWG1aSRhSg1qCfP85aWWgogEj2I8jyYc2Mob6DqDCazDlRde8JiJ52FzIHKKWG5O7aer28pGmZYPBeZAU4rg9W4c9vrCSTfai37Eeyy81FpORq0J5pFcHl0RrR7CV/WjWBD7Mv8mKhtd9BsgJBWueow/Zpu/D9AcxFrsXsZi3W0AMgyrCy7eaWb2idcCnJT8mdebrc9/Cr7lbZiKD6c4lPc3wFQfY9eGAvYMwMR2N2y1Hom5bAgRiJMway+jryKItFFJSbZNq7uJ+4cGsYFEbdmOnkYUcTcLJCurMz1QdgxkRBuj2ONW7XyNzmDJkQ4bBEjObGIEMs9Fc8gSALdx9U2YiMimkC+OaIrg8GEaACIXIY0//eQn1L3jbSSaBugFuKCvLXxiu5I1DgN8By2cmUmAubJAxgIePBdJ75yEa7FIxK2N6e0tKamU/mcd9RopOx/9qCJhimFRegIcmG2z7/lMAMehApRkXguLWP2f6Od8NxcirHYhI1OVz28GDWXC4hPntpoy32fe7nohOghEF6MYgMELJ1Gz2u3tIvk1HmBo+owDMLxVMuQThulaqpryD0Rh7QedtKeLrXPkGRKDaCa7pp5ZAcoL/7X+w2LM1GhAoHvt57LEuXiZyfGlAD84QOWj2BIVpmxFIDE/+W44ObUhe+6y8Fy1qLx1KARVUugCnh9cG+kJWYgUztGNke/3PSCJ2US24dXpxYJgEOI7DmVQN5cqFlOcyaT8QF4E2K0Vd2Q0l9l+PVoxiOWebq5KFMr/a2H2odLZPzYGFZgiu/W1RHbYPUzvgsWqERkVQzKrvc8BSUlh3VT/DcoY55wD6qQpd29w1Jb7Dh4FEqwavbWQJe9yvqXN+kb3gwkPqWmxJp6Q6OoZpsW91IU0b+podRudvLhYOXB+jlgMNcndoXh27B0vo2YZAwOjmIXXIVVOqeoCNjtIsDa1qtJJ4BBp8ySuEeqDM7KjAY1X5vhfR99oTOQq4=';const _IH='7ec0a41a05a6ef0a9284cea725747052bbeb49b57722d706989c20685f3475ac';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
