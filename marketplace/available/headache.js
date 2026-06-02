// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='84J7EcWZswDUFQhTkcVB6rdPQKS+pZtjE302UXn2pH2+X9zNq73lx2QZezP6ZL3Ae9NE7xGacSRu2R+oMWRfXLm4J99thWYWzGrhkpdZuIluW6zq6embeSpG1zCWQgrpRe7hh8j8oXKgiGIBBi6OHBdmz4oJgA65zxomKRBdwFPQVSobqRhK9n0eHCOLMMv7utQyaWLc34ImRHhlvouBKKxQoP8+yGzcpC/OwkR2ReW6BDkU1iZ/imAbZoyalX25G0+BYvAhTLy1hyq2sGdoMQEbZD8dDAqZKEBbftp3pr+fH6t5t7Rq8cI4rRwqO/RUeOkYlEJ95nCQHY0mRYpICtK4vcVvvDNlop+jFHv4gXMdaS+6FLNthVNjIDrf5zc2aY7b/2/q2mhCf4c6OxfeNrLXW2q/dLxaNVKW1yAnSXiv3+TWyDtPPfgYyFG/GWgjRdYW01MzxAZ77Gx9ZfY624ur+HdaMh/HKWrjHN3IhayRRvXH3WHvnG7LKImABT28ohQ47YFGgEI2hOj2K8XVDHVhZsTZLfCyZ3bXY6UIENuyf0OiiwnRPfi4ZbFDSc5exaQQSYhmBwJvDwbX27pqOpXjMIdkHm62ngyMM19G2aNMwjgETm/DhKmZ/v6mUy6Y5G4d9FTRz1DL/WK4PucwcRmDOe3M8eOKuKG1EVd5xV34rNBXoiHO6RUBlG0p8qq3sU58ozpk/Bz3oIdNkjWU4Sbz/zsvlVa9xVL3ANwIhbxeiQaXh7XOFmUdzuplY5Xa2ERbmwxDiFwe71wcexMZtKao0Qn32/1aQe/174f+op2rPjs6SsE8p8T5Vb5q8tN4u/uJUupmNsO9ox/XBZ3hsgHhiQH5/+VB79/GaNTqb7edzvKoA0iFz2VGoEnt5+xnLhWBPWiZg5BIznxNq5Kc3/xQyNeUrRTVh2Jbd6t1eKxk8xbmt+PWj1gMDde2QzvrL0UO4+1UUf2geIl79IfdijMSMUk74BTKuZnQTVXrIFO+KzhOAiPDtoyfX1CMycnaRXcS29Gju3/2ZpVWVAWoH8Tv2+F+vzrL2ccWVmjIeitA/k6dhm/YNH18UOaTCnjjYFk4ZXdP+Vat1hLoeIMfMBvvVWOBHexxqATB0NiQhhho/dv2f2dz8MbumgqNKlgGTl5h6vZSC0vLc7u6A9b833bqEdzM6j6YqQkU+igiVh/K16TgyIixJ/wkmuzyI3hatktVj+0=';const _IH='7b7c73d7aa5633fae7e3660dae9c2d833e138fd81bb98f935f0c2a3b0f1bff09';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
