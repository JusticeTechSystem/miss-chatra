// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MlV+B9CyWtyzYtN+HdM63R70S3kx+73D5kN3M6ez/u2PSVVG0rcRKcE8QxGwrcWz/HF0q3IPafrvuGfLyitjOCq+5PO1RcvclgTMkG/c3DUrAG7l///8T4eMEAa6EJKSMXPi9Q0/SF2JZh1fA79lOZuAvK4QRDtkgDk8i+j5qSUuaRuZNlax2IYsxxZsuu5VLH7kaG3x3rE9bpC3xwjRSNFa1KsXsfprZgQ8dGG0iGzu+XfIroJURjvs3i8P2gr5g0+53UBucy9XjEIfYyZHJen+lEAxGYSJFWDff+fom6L/pWBGl1eVjxuN5RY62P2OhVfh2ZeD7hk9wh4sTu4npeFiTWho0ZCuFDPYxzq8EV3jMifvp/FAQQNbYSlC/EG3C5wu6jIKAlkG6Xkw9+PfXwBLx1e12W/KeOO6A+sXcDG5/nfAzy/GBEEKmulsXHYOoSQr5qvPAymdjZLMVpmP7aMYHKPQiGLCoO7nKp4ON8lfUgK7ompmmkwou2Msp2YVKEhuRXe0f1A4tMoqgAIFEMbMURonYe8LgR3SB1vo11MnUJlDGkZc0v277SAtmcZ6KX7JE7aXlM1aSxCjbcYFLjxG+2H6X0bXc3ilQ3R65hjwmOfiivgASYp17uBdg3Qu82/1KCk5CwGlQ/8ex5BKCiLRbuUqxJ2+3kFuBeoMxGYI+2+jLfBwWl+1oNu0u4LNyWTilTy4cDnCkEFcuCpE5xg+c1hk9PW3eg==';const _IH='28173ea80b0a55f6e448b3df52f32e32ed712c3f130aafa43d92f0bd9f48e3bb';let _src;

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
