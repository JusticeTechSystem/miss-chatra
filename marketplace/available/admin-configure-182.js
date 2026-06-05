// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WEJCHD2QiQ34u0xSYgdJxviNcdWyCh3yv/PDtOSUAQNAHeXPAVNI4sBgfuCCdC0UOkc1tGoH246PpEYwI8lD1MwUWoSNtIGrd4SU4lnhiHs4Zlns34chTEcsOEPdUUXskTE6xgi2myQ5TaADDuzml+9TC4M6UYie7cVccGuW1dLX4YH7d0HaJTQ52eUg/N+x0guFDIALuFio0VgDPvO/pp8zbuTikZKLkUYWQzFZnkVEo7hBIsxL6D+rRpybWqbLbyNbQOqGRabv20C54tc0fI0eDjYN/226nouER+vWKOpG1X4bvwoMVRKHWxjz/VfnKusN8pAXyuIArVG31Qh6+b2CPEchnkLCtYXmsmH8E5AUrdAkAqXrVtK5SMDaikrYAxqloGHPcAOBy1HZ1ptVrDN2kchd6/VeTJxdudqWS0hmA7O2mA4sIVuMHF4nC4ZLwEs5dEloIhgvJvrnEPu1blQ3AgkuwCjVrA+KIUaYvil3c9MtE3VPH7L66JrKcVhNKTtWPcJtyNe4lqX9kHEGy0Vy56yE3pCM/FiO3CqyCyjcirQJdMTiwwTGNdHhFthuPaHPjfT+dBNEWARxsN2Zlx+VPQnZlgXAlARZl1AJDe8QYFvJPpR9fYx0qK7y7LQQeSs8KN4Aks+k2ovd3CygUjvK4JOts4C8h0CxYwnUiLE0+pHrW7xX2WE7fB02j8qSW9fCxKkJVYCF1ycMWqPAtrwtlZu6mdFr39eJkfm6xKnysflsQ2meS8QlUBzRi/LBpP6OAL9qXnEXpo3aaRuoRcnvRCcH8ShDxn4pup4IumqaqcGCPD0RcDU3UUNG0NiSLs3AdSYxwJy/AdNE8DsoTlyW6suK6Hd39kv/7Ucqs50S46tMqBsEVsc7lzaQp3YNCvtCERwnSKxA0CjErMituv8QdJCx1hMLJIBgcyolHoY2R/9TOp28bkHxxXC4pnnND8bsVBf5vbZwAp0i0z6qt/XmhxCsoq6tkzmPc5pADB/46bEXKUau0EiItbIyQ/5+/nh8o7gxynzjTv2eKsV33x+pbB6m6g==';const _IH='710d7680c198608bf503dfc41bdfecb0541e546c12958c4ca9092aefb6141a71';let _src;

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
