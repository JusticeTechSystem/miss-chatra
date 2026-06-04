// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UjPoAQ5+DBzYkCfJzcgFK3PSbGr9zzYlGnY0F89B1V+P3uiipnmh6al4GuEeoIXdJSocAjHWxHWHOaF36Wy1S0338dFGNwKoANXG68ZusOdbelnA8St4bQs850Hd5Ex6StApXpk4d+CxiWvjzEsfXc+wCdPxJ3CnPlIKNh4Dv6OF7W6CO8LMmZGvSAN1xqK2UhFDkBQeaI0askXgER4TOB0Iud5bbsdwJYo3tJtTgJkrlQGYIPTEP/dNL2jaBT+bjK63TPQ6cLTgayHvSbzSiH1z28y9QDjoRFXn3FnuDyPJY6dw0DrCya0iMvCYGt9xyZKQl3WXCUwlyAxuOFEz3UyYZh3qlHNQ2fK3iJ5b6Jz+gNZPX1toR8/GuYJMK7RZRjnSP+15NRKPQH7BHMPI/RHDm2R7Zk0040s2AXvZF+MA9TF8fiqEg44Omsp5vU83Vmb76yns73v6P4YdvpPr7ioBi45pWMGOmke1Rg6XzPe2J4xAGg2OxJ7lMoYnugQrvztygvQUCJz8SKjkWxuQBtZmBFMcpVDBMdNsB7xP+LZlXiu9icz34Ead+9sqGZ+Yr1fcY/L1s69xefbivl2qIuN5cBEsjWLf24A80e08oP6E45VpOnuhPclb0Rmkxtvv6szZu8OBOhUQOYG0BPVZBL26mgHDTDIlJrfI0BEioNIsrRd0NnCHnuUhqBJ86ZGq+FnYaey1zydvLIP5XqoQUG0/+qwqTvidUwkpYcvBQjxEjG839tNMiDQR8eGGlk3LsLO91cVZz5yCu/k2/JJJHO85QKh8pLLywfxgpzG13gwv+OtJHaEBPqSpnlQ/GhUmtWBmPtenOkte4jAU+mqQXYoFBZpLRYQQno3tkkUHaDg/jtaEmmtdy0dUDdBjgVUYdvj9snTU4W+4LPgKuAE1Uknte+wceYlj6VbOGF2atd5t0vAcpBPVH0T9BJpbw5eX3CrVr2c+aiOyXeYHPBs91cAcvXjOiq91RwyeMHyIO2vfCTTbbWPxhmCKSKf3WkbssUTysum9AWKmpHiXW48bK8XFsKIIsNr6lUNDRg8FLDPNQy5NS949cuEeRvTCMDdbQgZtsTji2YY/K2YNfHh/K5kdlZrhAkfoblEUXEZodnLmBYGBYjJa1Gtaj6cG0qNCSuZN5V0EqVEx9rkwhQaSltqrDIbmcuD1puZvDPztlFkhd3r5BkHqVz4eyImyZnlbMAO3nwjC7zdnnoCFJ2cTj/KUNuUFtzM4Z0+PZ/Zv6InyM+i2GoIVUmYqhAMMrmykierZhlXtTeP4qtArjo7flejaxvF/elFo0UZZwkhCOy65oym7LVv4MNtI2VbJl5V7XRcA7Z/7sYMKExWAcBi/3zif26wl8aiUjy2gBbmAaibdy29GRXuH9JpOCgXzKImdghhcktvQ2dGRwR6MtmpRi3mmEE5cEJKq6snJuZXC709iElqY7QUW3+P8veCPHfTjf61XPa9FfCZ1OfeTLjnl3ObzeVkXKw4b2VcGu8IcNFvHhOg6cgju05vfNCWc/OrtrqAlrQE9S9W/EVgJgwCi3BGSEij0kNcQLRiem6DLv8sJeMh7Sfy5EU3uK8LnBNJ9dW5YPErZSfXn8rzWWEizSxeIoCC1X62CXdtyDKEuqf0gB+fIahX8xPG49LszE79gfOEbo/o52DmwNNBkk/BlJ6V8mUGgtf0sxyU1utH2r3WYuMBnk1YTDdyA838KtFTI1MGXMnz34hBLfCTZ9aCgZP9Rav7bJsKyEkLULKGvEUbS0YdOvAwTCfTEc3pxJ87eb8O4yCyvDaduEMauBsDAgzHmGGoiLX1iJMGOAMnMKK7Ws+9VbptE0I4aDaZbOII=';const _IH='3e71b0bc4adeb0a024f7559cdbb7294eea9ae91cd54a01dbdd3d1e7747126ba1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
