// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jwNq2cy36syMsdT4VoryRv1yiVzFICz2yJUYTvw0PsqzADGetuiUjaFCcyU0zrjE1FWW8aC7uMx5FmcgcvIcewE/3GLQllwvUC0rOghBxbRRCfQXUT+QNzXkY7HGvN1PbRIdyrsL6ei3w88fHuVLgvUSXD++6oiAQ7nOg3LXIcORxyC5M0/qj3TryMFa11o3ryU3MK/WM3hgbKDImeVxvz/t/Kct6uaZwrkucedDtLi2naJSxAgIYMY22CZe32teMVzGMC8+LEtgZdL3P2xAQ01TK08gq80Vb1SWA6xXM17x4yjlCr4uibnYQI86Z1S0cLhdX6YdpgesfkiOWvmBPlSCJFLcwMhybHSygrcj7ZHbS0aX83j6jaAR0jv8rYqX0+eBKIyG2dKM8/0nE8vKAEKOx1lDcM0S3HA3fAZS2U83UKA3vUzsGUjHxwWVu/CybSl/mfXxEdaP4SPVhRkTCggn2U7pazCWhWKCeROtZ0lN7c93vmCb3jb3WRBd9aGZbapkC/L2a1YgMboMJ0IIhdpS3w3X9ydzXsr8Etc/Pb3v3kVT7s2dO/W+yYyZRwzngQRMujQxdfkWtcuw0XC0+hztGwKTo6A4pUM7N8BUQZDReJ4om9TlR4fbMfsFZdiEAiolP0pLJHgFrx0AEQqUl44YNoPx+o91e+MK5BJtr/xnBvhARvMzIJHpKgE6xS4bgAyREf5B58wc1XRb8AI65uF72JkgVuEtJuMOe8Wi7dXPKM5pkfY=';const _IH='e950a8b908f4b3d6355a5094aef100b4ec876909f621fa51cca4ea2cf631e0eb';let _src;

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
