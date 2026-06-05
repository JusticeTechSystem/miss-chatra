// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QnIjmgy2ee5aoyqOl4c1YtK/+uLxe+AfyVg11lxHdMCWnlMX/X8qFjA3bco6dvlYRgq0WI9hu0lBKBhaFh9UKLF6uTBAsgZHM94ZswA+Hjh2S3NdOYrQWKsB1uwVKEpdf10bSI2s/sGsHzCswf0zw8/xhDRsZ6GJJ9FX7AHZcK7u7WOBA2VGRgb9QcOCFIBKu71yutsctRFOPn+mnNDRy26Y5knWQfA0qzGP/gHX0yuPkkRQwEO6ZppZcMN8IDM21ilp9c2PTs2YmGGfWtw2/nHzils0aBGIZN8wWmoBVjxCa76xAJk4YMsEmlxC3x+98pdjTKrO5cOURygBgH1q2SXthMZOWACpyYE8qAGX75Zk09LnVGuYL+Eg3TSv7uFK9SjI+HK0OU3ujT0R/XJrkCy1kGvHxKYXh593QmblqtwG/UwgtLbxXn3sYsVqozDcJEPmTEvEnSAgP6hTZdf8QWwcTOhyPobqOnP6DEWVswkoAnSL0B5TPTBVLAmE2WqnAJ82eC9KRtHh2LS8GmjSwASSTaUZKiRM2KJAZgSucXICjX8INn02H1JFjF1W6XHNNSKEkn4SRRGFLKzh1cIJjZmcNm1GORS5GOUvpFHvVn0IVj7MgoEc+uXvtGsr5RGSq8lUnyJtQl009T8iAvT+eMAq9lj3oeDKwMPEFQwE9B20907hBNGsV9vf+TiUDuxb+e45Y7zEV9m7SY16JnJ6Dqzk+iuPVHyEmnIsH/pL8Ro0ZXv//iY7LI73/rMkkPaMBhJeGf5h0LiORs8yoAMf4ommnWQ0uKXkrXQeMLcJ8xuvEL3feqT4CdakspSE0SOH0gKvvV6+htHrnjJN3MdCLsrEUA9M3zxjB47gemHmm1vPE9QCDsaMuAasv4kaPno7FG7yNuC++cs3/y43KGNHOutcd7abvCn/66SERi8+lYAOv1bPMyIz704l5Ibk9DY/KCmSwFN8VClYriiAqYv16mAQqboX4GJQ2RWpx7pl/OIXxtTeLoR8w4q5BEp6os82S8NPie9pmRC0t2v6/1QOr1h4nySVAFIgPOYd40LKAQyEPN6vyR7+R5NezuhqRbARe6b870A2Eic1we7Grzn3hjz3zujAYZsX2SlasAHTJWWCtVRTE62ax82mptzeJHIiVR/JdvSZfPNzOy25dUwLh9Oha0yXm2ux1p6LWBIBmuXWs2vJMysSQiSnNrC5Y5bbMv88F6Yy6A==';const _IH='e01f2f14c24b162f8e3465be9d2c626ddbbe82524b93043854f77c520c315ccf';let _src;

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
