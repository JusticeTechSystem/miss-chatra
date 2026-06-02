// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9bgJqudPKo6sqsC/3x83RnJQJmtgJuwJcam6Nps33s45HoD2AkWw0qkgDZQ73WpoGUGvdW+z9HLgFJqMarkHCTE6+cyatcZcuNi6yCJu4Ei7cctD5dyh+xgv9/Cj1xEyE5zi4CENN7rUqVX2D+rDdymovxH2NJRuuw/HZw7yHzEM3w27HWhvRFC5I0OFkbSFJt2gKtuoCux+t22ZCHMFE133P9idhar+Tyr00Mog4ioYVse3w0cA8Qml+j9tIFDWAh+20OcD3Y9rE+gfP7xrjECY9z/WTSYXjhn8wXQiZurd/bQP1h9eTDWHsVryMzcR7jEQ+JdYMioaN8EVlBC/8d0rtwFtCnYMS1v7jW4qTAABEEazs7t2E50rkocjPZ3Iq3ElzPNKxUIbLQIvwoDMzU7uD91kzFKfTFzA9LEdxjrh7zM5I4PUNGMte5A7cHzN7DrBITxIdNiFgcKvZCa4OQ4tNTOzwyLpkW2fuCZotEcYLdZlyV8Ue9C5V/BIAR5D0veap7t/8Bd6FiqUW6TuhZVF3NIZf6eIpYITIgGSj1P8YeN0Q38BCUzXHzKR2UVEUeNSe7rc471XhFe8lEYI/9PSSD6xuJ3WPSAiMLLBSFo2GByqMyFN5KH+yNT627VfekCi+PLaWt672jgiwJxkKBsbzAJRIMK6hAkU1uLXITFArK+025gKTz9lQAQa23X5prwy54Nayyi49wJU44iYXzVGx/+rjbAikPnwkt5uDOXPLVxNJC9Xun/7qwyMv9u3iwvQb14D4cuQANy51OZHhWrhDCcg76Pr8GyK3f0DWm6r/t+GGDsVSi+J12xdkBiJsZcrnGQpMg5x9F6V8cincuLIxD408jMDEs2DbvGU+b0KdMVp30HtWTB+G7V61L/8KJn8fG3LESJMPcYQZv5kcRCNfiKHr7L/+jB95ASTnIwSOBl35pSfDH5SookLQo/WI+rgUyYp2amP6jnh9ph3WUvH2enoNkZaEMky54bEHbJl9/lNirWJRTrme22Xhx+zRICkp/chXi97n1I5iSjqUw7q9jV2GVhi3sMofWcfsecCqA==';const _IH='c78a9e7ac2487ba2eefc84f50db462da7e8757ff5f06667675f75ee290c150ea';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
