// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UCzikOogkv521AmcxBUA7M+byspwtQQhJl2JAUJiHqQOWyJWahGJqgoiL89miK5jJBDn0oR3usOppbhRwjp0xMB/OSO71GEE2OKhUw1O9GrmEDLex8llCvIFe9VE/5z0+T8/YDjCLtTooyinJ9A8uUjtXTvsmPoEBenIh/9Y5TMC6nQW8JyhgOMXzX3kGSXMGecPkjSuHPowKPyuglgdkAt79jvtmWQvBm9RUobb+O0enx+5q1K/T9W0nguu31xk3NOL/qDKIz1QT36fmxhWrYsRiqW/c8s7AiaFegu/ltXmO4I9AeEqJ0AZrYkTV3wwjef/eMnk/qi/l+shyxtwGkTZkCIrRWD/PA9BgoSKsdOOXJ2LoiQFb/oRrTZbixxNq+/xWVs1j6W3xxh0UfUUg6C+PUGmzlJEzPbPjW+tWv2wARtSoHBRklv+xWbJ5yS5EY+KVVP12wjD9dYGaJt2KJtVV3A6Uyyny89W1gRHw6hPA9a8APK6DKYGpfc2pOIAq9XqAF5/4TV3JkhqG90jYY87EgBjfOiC8pdZpudzA5nVQ/nB9uz6xR+buTwE/RvBn8RkyCKUTQug02OyHBz9BbrreueHJ3QaG0gVaWqiLqvd2qWaHlKnajZppZCKx2yew8WrHZl6P1YO71f1EPJoQ4O3vf28Xs9X73DTPCvmsLJNMsqW5KAhlzEtiR3Mq00VGRRgSiesRXxXFBaQoDpIFSuYiBuor0NaDw==';const _IH='0611797924519fa695fd2fa72021873b568d376f61ba7efb952c4f58365f238a';let _src;

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
