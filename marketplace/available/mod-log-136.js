// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtpjdqvHW5etvFRIaaBQjC4ec8LgSEpfiKHxB/gxdBzQTPQmWzVonU4E79SrqLFT7o3Vo8qvnYB2oNZo3soiv9EJv/bPZf8bB7S8ZCi+kokpWpXktSPS4aGKvfrNsFnozFCBxCePPuS4A9XKfkytFW38U9B0R4MtiYN7QtyTZT88JwgGfjsA3sPKDv1kK7vezqGVtBrr7YCiB34X2qjxj4bmGpRid2mOFmafmEoZL5szIa4MoRAyf60LfiO3BUDXE/xPPAzOebYEljZFGUCZdv3Ksy+6s9zfIEXiT8tF0LI57LgautPAa6fZcxdzCY0XdtMP4wGsOz9XIH1jJUhdBj94U+lXfig78YQApY5H1dWH8PhZ3HQWIL/JtsgcPLNLdkR5LNLcf1fKM+0wVwhJyxeuQX/RExBXzM16ezcBabHlOSTUkfXrc92Jvp7BsxW0MLOAQkAKIyMmTMLdJvQZn1bUiJ/8ue7mqMWVZo15XZsyCI/zYSyxKGE4cAPNOFlIAthUrBE5nezeRpfqDkXsZVSEcQ2dX7pLBRY2uClwJ/a5cWTMhsseMKdNTG9ohpyRcfaZQdHmQdr7EMxSwkeInJkL5hel7Ubffm+n0npTZgrBiTpS/QbwTadLrJBJ9buAZNx8S7V4aYTg4nesuthE5Rpa2vpKWdS71gvmRbW2qypFOBIhBcQdQuJSb2/a2Umgiamu4LCK2K77xeqOhoRqslgqs8BPdYm0KHcy2ZbJvRr4oA4orERZgG/uk0jxQJAHyeVdmPs5c3VxmC7GLuTtwVHI8uglX57YSOfB7Wfd/ZPurQCr3FWELNMWYubGeXsQJ3suw3BcYSWfC0BwJYi1J6NM42ro90/NHUP5IB/F72g6jIfmtRtmucEcjMOkF3szDtJMJxWCObaZhXXjMZvyocS4z8+mTokvVo8ldTvfAhTMRQdNm1jM9HJklAOYL7yqfF2b0K/ypZTFqgtxKCuwHwhX05wxDAke5EpMu7xtQuPWOGCWigZK4kYI6VTpC5TEon0F0koT1wDgmslWVeUziy1bgHHEwo6GQCk6nadThxufIi1jydTVLjCVn9u9cG9XA0izD69pGZ06PzWAG/f1tUg/Bp4S/va5sNhB2L4fcpeZR3H5MWRHBI+1mTxrwWZ4YKfjtgxP48YlzKMuFtPPJjt9tYZmM5kkBR281lyj0aTLAGt+TWDfSaLtvpeajIi5Zcw8pBP3/C7OII33K57XtopitKYNk+PCMNtnO9MpR6LJw4pUKTLACLRObelBJ0oj4/dZU0xYtZdssbeICsBu+ha2Lpjqr8EbYFyqZyGmTYFFR4y7bTRww2QDM97sd/ma8zQiR4cHD+GPXs';const _IH='bb33f4c4305e329a7a30004224c4657a0c9702e2bfad38d50251646764526ed6';let _src;

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
