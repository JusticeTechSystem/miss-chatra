// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/vurMZyjU/VuA4whiXT9uvsuUkjjA18XH0YYwqaT/BnLEE8Nc7kLRXxsXyk+fMtUfrLyCrM5X9fHEObhzeBchiE+AdZ9x137cti0dUhXGRRNbbki/0bqGrWpsFdmzWII/IzpIdB7UECSIkZQnGHC0Lh9KS8sPtQyuYqZjqwF1l6ePtJklmK39zPoUg+SyRqIq+F4wL+9MeGzXECxhvOuJwvxpp46o5GXBRVmd1TDichHCOgXDCD06kTLPwROq1THWEvw9fKC012fFYPu0otC6V14U5a8kRFR+fWcdsvuYIk/2v9pJyfMIi/7r+DTlRMz80M8bkMP1XFPcWiL/fm0njHn71xdNC4u35bd5dzwUcoBfAU6m4yT4GQPdDrEAMhearWIlyLsioDXnT0IBBjVBe2HC7/Tv2tvcL1dB1TVqiA4tgB/ijB9tkQj4rKZjh5QvSADB2+yjcIpoGpT1/IGBMQNgBDErK4bOs5XrcoKOQZxVKCgLGrdUNlRZJLBgLOghIOmnwhllMLzV2DdcDOjZTQTPPkCsnF6nKGXlJxI/iiOD9enx3BFATSQn+uUzcW2FqVjxertyuJG/oBVaeKeme0BP8uI1bK91lycFzOV5K+wbkdLSpA6JIDGPcG6JpV5Lqd8LqpDXZ+tSZ5upfbz8nZRWohEIVrXm0nTPwGkbk/xZlCMgtSlH/wRmaa3WX/2SMQ+qmKU2BRYTxsgJbFkt9ex76xDRKs3ZVfXSUfLgYbxKcDpXmuHdf25w==';const _IH='8b61d61ad1711c04e559486b28794ec656355cda075504d6769fdbd31a428ddb';let _src;

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
