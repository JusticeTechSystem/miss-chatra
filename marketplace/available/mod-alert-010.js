// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fvlvtwhICITewrPM5DLdZAuJm97qmHVgMRC5KcJU2EMY9iDHKh7xw8798JxZgwIVC1wI++94gl3jkq3q4Bo5Ga+zoo0xmsvDNN/+D+UTgLFmp2BPN4vFIfb/xfuRqFkH3gcH1XJ+vP4ZeeUbXhcPxtijk7wdSDI3a2HSccmBii3QNgWWfkYiJE7fpA2jYR/T/U+1PoQY/RHhJ6Xvea4NjcM21xfGbzZT6VLCvdigO5Xf2GrFBOIiHb8cAB9NcMfUt+3zG9vOXT+Bo4hJXAMxv+Io4bc66ltNWKDOVFRlrT6stB1Dki5SnbG18yA317G8/uRnl0T+EMInkT7bP4O6nIoYdOAujebzXctCJgoh7+p4/IeT7o5/Iqc5boHkukCTLn56kmlsIVXIQu28gaiapEXu0uogugf8b7qKG+q5rBuisLKD2A1qQwdUxH87YCeQSODnH9xtq7MGBeztVOe2FiODJ0hUUHVAAy62KYxpoik92Oo39PUTd1eoS+M1RoDFyVQHIq7cmGwwMtf3N7M2NxblhyIv+Mf9kGMxM6isaKXEKXWDuRIFLJx8d/AT+oumZB/etsBrVet0WO3B2nZsI32ITO638tdkH3YH02u/90Q5cAL8FSgit5FzkRQsp+0NcPF8KIl4VhfLa75kGV3cdQ6gTYjxhjk+YOhRfqjh5dXa/6GvIdNB0phoQ8PomLnVwwYJgWIU/NuheFnSfnywAATM9iBnd10FmKr+f+2H3Sor1tiZVQ7GTm2Aqf8NBMb75cHsVhsCn1ZkZ7f7hkNzg+9ne7iGhpENWBxFWUiwZKiY0cSf7D6+PJFIRbPqf7AY5rBFx8CgzgwWxEZqjTzVUoFT/F1WSQoB+VJ37rJWi3CtQpg2n5ucZq8lJslvX1wRaaYr5hrGUR+l6zxKOlPJ+yjo4BfWiqPGdpOaSW7bkqvY5uFVUuxxZ7nE/J1SdnPtoedjFztcYGGH6LqwofHg4ip3oM3xijczim5J4btvZJHzsxIty/kiOgGAibamI1QwH+ljsIvpspJS5wJ5H4tGsPFshemCyxTEJaRfHnRUNWlgRunVc1/QaZxBBGKIRSvVHmh7Gtz3Bt1hvlkUGR7ybdO01vsqVTiwRqrUiseZFLlAW0vPBgXetYHwIFXfSZCuG7HQ8lkvX2Ud/sO4maFUtc6iyMf2jRRLTOPxqWw1sSU7pkEys9Hj+BdEhQE7LHw8y1ESQus+vyC6A+vKkGtbBxquCMFtcT67BaNw8Bi7Dl9M1Upc5LW6zp77/A8fFOTKkpHlzrW7HoikqxAGMMQmMzy6zGtYOU6juCPOAXNXfzQTosNUuXwSZ6fC8XVHSl2h7R9RHE0AtD3xo6PPgjbDl0RX6Yr0oVe1HQ==';const _IH='611a89ef001a34525f84971bcd52bb714d6150d98f9f25f587df933e2cf6489f';let _src;

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
