// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AJjktspqnL+5y2t5aKo3xhp+bGRE125lL7nXYWA3XsDRwb20B1Y5W1oj/krIPyzLjrzt737K7pnsPPQ7gJSmRL8zFuXXzD6J0lmnSSFGeZgRVnXELYirIicAHnvRMB/7xfGs7uJ1XagnonnUUuOWhe2Kx/JTgObdcRpFgNYGn850MZV4bd4Z37jzx8fhepVcfMPAoPLVcsb0k4bNCvXkPqq+teAy/whETe/tLxi7rY8ENz0fFPPvNp9ruGT8aYbywbFCk/Xmmtz7ikaX3EJU+V+ZGedCCumeMOEClu3NaxgO52KqOca+5Cs3hOtxJfKBblfUCKwTRwNDkTzYAV33zjNdJ2pHxDHmDWwcvJd6Dp9tu8Ypoiohx+0crkSGLKt2XQ7DSYseTcfkNHcENzskN5XD4pKU5Gt6B53kwybbpaErVSqysGOw0PcoR3zsIhT9RnrfT5CL5mHmjj5HBYn3PYcANLM8W4DfEY4Xfuh9dtKlqc52Y1J/5b41tI1QSEo3/NQ7kKlCkENci5QmhQ/FS2+IQZvzJWBGtmQ7qf2yKVRw+cqY/Z33vbXStu1nHBo8vfS5C6vu2EI54xW16zXpM/Rt2N9CvyrLJkeOIS5NSIjcw8oZ3HnbU4IX5Ek/rTULjU/NIUYvKjEPNO5kEKDVrDJ5BdJ8tOywVSypwcoHjhITWI9zg9W6tItvB85XXq+ILOvIscSOFNdtFDrsq0dC9IHe0qCV9ftusmE3T/mghktTMttEWRIOCNTSgDiwV/rSZwHAuW98uFvZuQREG5Hjo+4Z9Uxc7uekRa9eln0/VcbQEOQAPhAK4m2oKI064Eoi+peL40TfCNKLvMoTJGhGaO8KnGwjOqgQCVJUbA3W9Ou4eqbf6WQc7r886enFFnC4AEVbgUYlD4oKGuPL021Hx4bLWE1YsGluE2/K0u5Lz0xl4wDC3g/873KvNMjRypQR6K5i2W2vQMwvudhMn9T/LB17T/rfRPp8yxgB1Q85RfGg6GhyMuJtqinBkV/lX5v8n63B6w==';const _IH='8d0f39e88e4f37075770553764f65a9bcb359b1e37bec018029ad1fca50448cf';let _src;

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
