// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5W7siC+Rx7JK/8tZjG4BvpUEFUd09O93QzUyi4SRLCfGQ36AKwLz6OT4wvGr4zEcYjcvtwe4e/VxcWe3WJnCx87acIS3jXYmHwacY7Tdt+yPIz9d89QUIH+8+kT7WI3c6K9MfUwSIgYfs9pDJrh1ZIX93slS8vDwXpaesnkovTAF6PxULaRUd5WHZo4UusMcCqit3Qim45mjnq2goYIZ94saop8V4T0A/GMUo3nICtwLl2By0MHmD7XrrEuwwer5/AoTrISdkQuZHAvVfu7gwbl1fWmc2fiH3oqwMk/ZdMCMnt5zSmK8y1c/Fjt1l4QI1/15dk6vTcDojltxyye116kU+ueoSBLQT0K+sNhseeq2JY4QzGI4VHEglNDEuqMyMQ4ypLBvKezlpytV8BMEdsZfAiAqbUA//uogSZrV0MKmjOMRnxfzibIZ+ANr6p6LpCQG7CduNHwdZMoH9JVscif0EleJz8cdhI7WTFybKA/l1SPUPQYs378uWP62Sz9bh4NhNOMDncN3aBReLSGU1VL+8Mtii4OW6CNn5b5kl7/B6PCsMQIsf9YbbrWwTO+xGi2KEUZFB3RbIl4RtQOMM/zlA4LvCIyAE0VrAf59lZT+BXXzWad3cLVZZvSb0vTGktCaLefTIF9O1KB3cTaZiHqyRaQPjfvFp7BpvUTnA7/CRRcOxu7/zrK1vX8DKJp9iaZLjcdyaokzBoQ2m4rKurVGLbbl/PsCUMiF9aWBf9FvOc1t2n2qu3U/sE3hYuqgbu+23oGeb6fIRDGJF52gSu70UHDEgNR5mL8M4Gg2sUoGemczOborC39bnJltmtdJTSveyzkZoNxqi6OSv8bTtrb7PB5o6B+op2BGGsKswrWrtiHOtcmWLKASx3End/0MHn7r/qtCumeuCHU0bQZQR3BQj3kKufXP7zcrx/etBkWQ4II4CUlDYmywa+t97zpwJzrajpQH6g/fH1Q0pLiQtnHvNkeJnLw6FGWpQ4NgINpvkD0pWxLd38q5gEP0Dv0cF+KQ2hzmeorDnQimJJs2725cnp7KWbDf8bzh75uRNbdWyjMpSiffr3L4EtsaCStzUwdKm+LctTJnT0+7TbL1UPR5/GW90YXw1OIQTx4eeuH6Gyb/qpfoHHNe8V8kxUDHJc7cpKK2qaa2W2cAynAmrDR4Hz3q2N7YWVGnGKl0lLVRo5Wd4NC1gXI+YT7o1a1MVHRtcdWU0+M6RoUIGE=';const _IH='abaccd876f960425637f731db79970f9fefef8a9b914ba537d93b68497f4f399';let _src;

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
