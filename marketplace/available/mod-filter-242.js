// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ05qkcO9GRSckSnqbTy4ahKiaOMMRACQZTkOV5t3kmAUab69GMYSDCkjkZ0nMk4eCyB2sFKgtEC6b6Gb2iM2bDnVq4m7B66rrvMFqXPr8GEiltum2t1rJmkt9F5H9gk9G5jEKzNdyxigSkg+Yk/JY1KUit3DzYGunoPA0gFKNg4qlYdKRTqHQ15/aZNI4mKLx15im/JhYVjV/20j17Ld44ymzskMejMDJ7cnbLzFwpob593xTPAr8zACmHIE4vr0uWYGdTaLq3Wu4nmDS/ASxd+LMbt4e9FOygJ0hx0RLb94bK71zkH1WLUGLTkeBpX8WFNnf6AfWfWFqDlkLcnQMhd5DZaXBnhvvWEiHGk0ZeyBQRHft2w1enIzWI568kyTyh/UfsqXWGMDKO68L7B4p586j+L0M2aCCVXQ+T64kTl8iJnI1L/PXrtU7ZMOxWKBeasxGlG9BmlwysSLg1PXVnMRN16lAg/mIUyiEt27vTsUsqLDNNC08ygr1g10LlL+Qa+PxmqX+xyb6ZqBu570+cOGvV1yQU1+QGzvs/ltAOxY/FzUxMcbg5M1GHnZUwta6WyKytfcRWTqh3mUFegTPRmYokgaT9LlqHnjge9WMvkfsXVwU0Ae/+I7qfFBQf/k7epTXPpZUQEJ6I7Q7coqBYjSW29qiN1m2+mpjXAEa3/qT3XhzO8amgWG1nxkWwjehiO7p7860RKuHXoyENVrN5zPfNNV9OIHHDGazcpla/d8vId2d1U1lMxajZxF4lNV7n2F7KdowD+F2uCSpRqK5MTGn9kMOTh6h3wi9WrCcNt1skiLNM0t25vkoZR8qQecZidRGvlPLeJFfIzDQ61/2DADBy92tyiNRB4GGxggGfBN/iKR9eQC/ggNm0K9uydlfAzSYIn6pbPpHRPfgqLd9oQzPRCzO382zDaMmPNAx4A/gvRixPaluDpm3zBFzO0o4Yb1qipSoNBjyhTqW/wwc2AkIjVYp9zrPXeWtOQfKgOuXdal0BEwu/xvA6KCiMqqUOCLMSK121t7DmBBJXBV1GZPjZu1XPYaUPaWc8ZctTeLE99uYPV1RewByCVW8p3c0dDEkgXEOGinEOGG5iL7qmgNf8Y2iTagnK+VWBrR9QMGhe4UGLKOfTT0vlgBxSlUhTZvnGhRsDBzZLihsAYRe+Im/1dpx/XiSfV7I+l12NXDkKss+CVAyu7g3c2imsXCW1rRc5fOkwMWoTVDF+ruxDucbx+mG46F7xNMglfZgGaSQyWz/5ikLZ7Swpi/5CGkgW6zu7YcHZ4WPgIbZLQcE0HaAnzhjgqTqP6E0uw4sydw992YXOyxrFUbP5oc0LaOGPFCxSyFnWpA5LF4a7/BAMAAO8Y6s19MIzDEIXfkLZO+Si217KDc5wA=';const _IH='b05d1378ebffda7464772ffb03d1584c11736e95f40af027f3e76c39a45f18cf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
