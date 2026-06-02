// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ewwwTubrd4PRy7wOcWs7uFKZLEIivKkP4O86RZNaw3m5BFDpTZw5DC44LH/L1PHjpAooTRxwGQTAwGN5OLFBq/YF19UwTq1GEDHZUsctCX4Cq0zkyvL5QO/QgxRe9zedl1/JYpismE0tMe5fmCEM5+g282uTkL7k/OJn1F2iz+LaiA4y7JV33GbbIEk8qtExKd0IVmiNoqgZi16yodm862ADToOCgc5KIFNtomaty84p9DEK4yK+k07HAooR2jHK8oLk1E1RApCCnGjJ8LcDmp8Ms5MQWBdGMIns6qZX7LTQAeRxYiPQtmUppWlLbfxxKlVza9hAvqI5WFir6uYiTWX+xp9L5NtlhEbHxWtlQSEsfir43ey/yN7HhKNpgaIVquKLiDLNuTeG+QS+ZXi9JFu2MJe+Iy8j4gOggpVV0j300yIqEroNBHnr0TE6v026ndxue8MNHH6lmXgyJEbY5ZjZaVaG8hBKzoLyzBPo5GJQM7q7LdCd1Ag/dYNYGQQjTh2V0gEKgAuVQGnEq3VfC3A9n09axmAdglOB/RZbzqrHyyZFznwO9+W/O3LtPI9BiAfc3V98FBSx/wSVtfFDnoN1hV5i1j7XUBUdbWCcgSEouoOkTYvfBynYsBYQggzHfvm6CqA5W34X05jVLzdblb4x0MeYxKKIHTox3k/QBdEvC8qu8PrRMXLMFNTgVNWyhjdB69sVq4uXtJZTbNkI2f4+WcrZW9m30Ai23oAp1cat044u2Lo7cT10Y/ATNBEO5p3kMD5EF5SZGjy6wDLLGLBpyazFiJHG4QyVVgaIm73/MgpgdGJMukyP+he8o9qsEyTaR0F/SwwZ7naP3Sv+fUcgS4BHIGiGT+XP9KsyMREGpVnpAZaI5KhROOX9bObxYiy5K2sU0/Tniptkzzh1OR3ya4rNqVeQEWKaPhSVQZWoPoXsQantrh3xaWsfd0W58m1OYx5Tfx8oem7ogi1tI73Q8Pbw3OynPzohg0eGfa9yTmCAAvo+91T8hdG';const _IH='d22e190e9f2b6b10a09ca8634556d09ca038574f1ee3aac487ee17bd2ab9b036';let _src;

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
