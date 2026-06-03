// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5iupBJd3PlvT7l28OcOGAZBKzquNOSakvmuKKjutXhOC/9y0jtVqiGqXi2W2OTNxgMPuQe63rgp1xZ7WWrvchOsD6+WhrrUWRWUfXvwXAbYMSZDMIX3Kcn3W/LwT1dtQaABgQs7QChmJg9WGBaRPEJXeMqNwBFkUelGN0sctEP78rMcYfW/2TFgA1ilC3WeA9NRTv4Xkenb0sl5LxDkjSJoyK81+XIq8R3IkBANpMtCJfdPHyFNW1p0Hyqapd5WoLFQUO3LEgGA6eIeGRBsXFueTw8L0x7Zgp7jrly8CYbLfSYaOdXFdDjeTzaN8TGXg9ZphYmlQhTHWijEsuA/0yDsOVBRCzZhgP9eau7Ks/uaTf0jctZjfV2VPqUM43jous090Djg8c/iRmMXNP8CWRN85GWG3IVQ5myumJcGPjo/hToD2L4GfMBHR8hlnZ/Da3NKmPK3MHEjowEQwXUXAG+ZfX2gw67Me0AQ7Eh/1SD7lOIAeeBJ+OheWix4NE1/pSXv4wKcZtPdYwZoFlwBE/y+UMIbavQxbPHdzmfFLdttDlO/xR+yyDPraXGFvT61wZgPost2AIdfrk4q/2CVaLG9BqsfRD6/mgpvXWpbOmA0JIh0qzRulO1gw/STKN/vtXgFyLw+E7LgkkXP0XuNP+QuR8wHsR23+CmnbPDyh/Ys04kpD8xDkSLlmECkz7hUj6grgM81l2sgCuAeml7VyZMRUGKt1RADH1o3gxPc7E1ZZvDbExHwUYDZ1qenwJS4uShteYmhjjkuwflsQqhNtzINLJM3PciKKQrtncK7npVJuUR+KEDiO+5BdSu+875FJtOyMmciYkI8QsR7/QsqhlNZ4ZXZJPJCwqzkzZGJs966iiXO35xMZY4GamLhIzlSWIxbJ0vQDyJ2EO3P6WEZpH3MZRSXilPy8het/45oBp9cbPYa4LXBVIUq7D71WWsFdaCowFBzyHtaAlvd6Y3PhKVFesVWuXjLE4K8gwYyO2e4Tu6C9M0hSrA8yEvYb/mRbx5TGUtCy19SeYMjIyB//LA2tX3qsQgYHv2+C/s+Ik2UenBJMBcUhYasTkOdq7736lDnbDEwXfhZkbnziwzGnShS39mNQYLXNHwiEoIJFKVFBqmED+DFYoURcvR4LxvY2PHmyRvjs1hEsMVK5fOblZNORRtuAZ/Vb/xSvqs3VNa/hMIfuvVmwKJh5xBcmiv4cw+5iEdqMYeHsF/cLYEUbpW/6x0qRcSVBJRR4QKahF2cPfO8UAw349DCF+Rl1tDAlotIchHJsJcB9cugPwzh4R/KYjEY61YoNnS4LPxK+9G/vcnoh8MpshZlr61cFhAg5a3nOacMhG8hnLjLDs9WEc5RU8A3O0AbVcrUi2Muc';const _IH='0ef27876d9abf69934f8573035bbacb0e5dc33a390a1a16ef12049c3cc998a02';let _src;

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
