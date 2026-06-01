// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7AIuXx9SSKryGujDfCyrFAi+oQ5pNo+CAzG8hN8xyFmoqEaIhAPrqfEhIwesoltDeCBOrIQH28ExCY6b+cFb1zXL0gIUCN+ibgLjveaSMMhzSAjreDAoXd65mxVI33XOW86ePf2QD6kwKOTN48wWEVqsPTH0JD5hbGhKUBwMigBfkovu48QDfD1aYFJiAUVgcSh/Xudwznw9P3Tm0145hgxujdRGClfmFiMhv/irQGxOSOBf7PVpANeRramEX5fAIuduVW8QU176XlnKaJ7YvA1I4kA6n8/yUZ7jR3l93ALFmFst3RinMJzSVHnwm31AKjIspFTZ3y6Wcu8l2SrR8ekv+3z9h36IytpthPVFQJQtPDT0Bs8pvB06LlCTgXJ2FvBJnSNnGs8v/Kt9+R0tL/5bEL5b8o7kaujPwllhitcU/Ije90YlVRGmD30uDzuMXJAfg36gmxJNYnMaUxeYYXrvgv4DtJLPHMpBR7viNKkPHjmjuDsXTgHWwwSeUerm2PCcoN7rcLbyCOHY1B2tbs4CDrd8D/7zLlz3wPHyIUWA9gmit6DTX9VZpmJZhtju07SflfsBKm4SyS86dnQ7nidyCa4p3d55J8fxY2dcckNJAIAD5blTI6iEiOZEK2BcoKKxR7DVXXdvAVeCkcgRZNTxDkHNqaKzDW6NsJgrhjWQtOYfumHoqZrsCRZ5ZhR0PuZCHw3tNSs5By2yDcQcxiZTCNw3NsvgKDUkJaNBIHrtVi9Sd2MBHUseNxI/Ira0YxMyTSNsF91A7zSR5xesawtv9H0+Dp57x1is1UxI5pTQH9w1m+dMWrjh6Q/TIe9PicICpX7f9VuoXS8vXv0IpuS9izjchzFHd/in9l6TLMT4nJc7ARaa1VKWm0+AHEbYCr5E1sWytsiqNjelvCQgcPzaw5wFgKfcGsoY168xZhJfXcNpAHBYrL5s6VzDMWTKsEa1PtWjl1AiiuWWh+fFaoUPmnNewiVN6yB4MjAY1dd/pvtosJOElDQ7Z8LMNWuCVo=';const _IH='c13070c9d18af8fa233dc71c2042b718755dad22f25171c4535fec34fa0381b6';let _src;

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
