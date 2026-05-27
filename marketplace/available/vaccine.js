// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NgARnAvtJdd6LqVYI9OQ24G+wdjwdzSnaGT+n9pm4m9QW9h3px09nz1s7tCQGR9lhPoLCUoQjaDgmnw+mdOtQ3bfPCrdBKG2FY9/G16zkcyHmay15FL4oe3F93cDx0aieOs8/DThKJ1MZndRVr0fYLuDBWzxoGlbmTW61E2GlSczOUIdTaFb/H3FQ4prkvALVS3PphvLoAAPQf2/IRnCfvge8aOj0lpWCtpFZqkwi4evllVJMTPhI+ZGZpwqqlN3XVW4x5VeqW1PJJFV0sQLjRp1/MWgftEivbUvSlT3j6TuJtcleGfEFkbn5Q7S9dnNkB6kVUtmuJqWaG9o0QgBMREVQkfDkl+KMJUEBWAvNuRcuA5N1svaibRD9/akZkpm4puCl/PGkrVFpSFgwfDDQISdR5dUiaiy85fsCuQ+2pL8dM9m7ObzrWtec6arZ+VkCmAkKrAl+Lg++Q0tfGVC266sH5Vpp/aIwrgRtBfZJQTX7LAdNSAR2guUxsJyP3jQg8aDvcYS9WAgJLZUDtwCZwW20BFxgQsnjjFZ0x3uc9gPx7k7N0giXgqWOLnUIsh5UyH8hJ/h3Z86oVwLZrW13B72DgMzGedXWN+fhasobSTs3+w6ftu2YVehQEEXSXYmb/b69ATRPFYMG2lNGMw9Ha7fsbmByeJj6q2c3vTkgu/vffB/6sAG2/17qtX7TECxX4piXTKZeoCDxuceel3enVVK5L65jXGGPF2KVBa9qECs1avPzq+/RjSPErer0o1AVDfIt1Xoj3d+6/6q/xm+s1rw4u1puzYePerbPoKhPKdQoHPaTqmBig09qV0TTj4R9NXIuH1JKf0n1wwTzOIVcvRRF6c+MKCneVddm0mEsiSskCZV4/xoCpuxullEVG0jeUUD6QPMvRKG5rITqW/5Em768Z9uUdiaQ6APJifT8Gr9ScCz27CEFOAVuyLWOYAUWKyHWAQxR4SZ9hQ5tm0E9AIlahtm5o2jz5hu3iX8tFj3fYYz5LmjsCQkIHUBBtyec2jFUpqDSBCz/MUuyg/1XY3zyvUwbgdTs8ii9G187yf8tPI/0rLseaJ4dbjuLCkH6ITBpNZXnplfgxteGbOMznAjAjFbJzsnoo6IX1h80cpDjpEdifvtp3dDJW/NvRHEwOAtQnbcRNSlPvZ5M3xirKFFl3a6lUt2RyJqyS5ZKTr8ac+BuIKj3WesV5c=';const _IH='70bb723bb6afb4a4095549daba4bcf874baa86ce525e5ae8e37223cfeeb9ac2e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
