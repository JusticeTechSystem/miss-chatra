// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5Fn179sds57+0kfqO472oqgaIYX1m3aLJb43Y7NA434cloJzUExWahdNzPrno9G4vO+mmUpxmSlJbw/nQ+G6x0GKZhZl4+rfdDcVdswJqdRS1xRquV+C1wWAeTwIbRzyseeRfLatJZJPxzGjina+YM/3EEdcf1CAFr9ZEHDsPVytAi0JRA77IP4gPYpzd3j4UVL32gZZtit90oVzWsbgxEp1NllNM3xoHsZ1H+BsbOO20SL7KES6sCGRz9oOwDbN8lntBVJ2wAmCsWENHIJVi2xm6HWVm1c5+noVAVs1TH4VuUI5VHNpUV7yFZ8ff1tbRuu9U5MenTX6Ngk8D8K3aOBj/ICe/P2zjOg+/p4Z4QSiVPwtDiEmhyrxOzQ/GjnlvhyVg1Ivzebx/aVSTRXA/L6Go3REz0wsrtPJLJbyheWrSB1vtzeXxdYK/UNF/ZR9KtNpXUYoGxI9jTKKbtZHhfFad7cqGmEOtKH9AJwnBFqKXB57LaigtaQp+hCoBKq56i8gVoT0KhP0IanKYoA/B7OQByvKRb+Ks/ymAbQxK5hD/hlZ3B2iH9mIlyG/J4hDcqeRV/PdPn6wGoBI+1G1rYTLyIJtLOOZuRheYvNQH3NiFSl9JVNICBB+/Ap1OBXEay0xMIxddA0tpR4/7/AGHiGB3kv/l0ORQZwr8Lbc0KIHZtofqSzmCIjh3nboi+QGQjbYYkKQRRM/+Kj2KiTnWocVZGQehcMhAd7FZG8B6yKQhIKD2/lT7PCNB9l0U3AO4u5LHz1ADZqdjxmwFF+oaPWtfmR6163Ko7V7yFYRyuqL0zqnJbbt5ixnuFVcy471CAsfksyrkmCjFakgQxSw4JFW4PMHnTTDskHHQSiEjWfDeLRCbzI+NIk8tQGjZPFKCqClVFDnDrzC49r2Xt5zzTFMuhHhooTlhi8KEogbMr7pdVLvUgHaWNMBCLfJ83IyC0RVohK8YbktJuebByUsMiBVOOhRvzWZrR4aCl+uRnwxTJVhAz1NMmEU9GFl';const _IH='2ae1ccb717976381d57ac438be5734d9c7cff6fcd242cecca2257cbefbd80826';let _src;

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
