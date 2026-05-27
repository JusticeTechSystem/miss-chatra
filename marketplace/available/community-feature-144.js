// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='80qou8I0XFfZMP/m2bOTSKSp2tYXg1+9RaJO2lZlON/iJiGlpDGTVRxpm/Vhvu++DfRLgM1Q77jhKMvthVK4rjZfKHaPicqKmNMEFL1q+iS+z5fNQn09RY0oXwOiDBBdHTe5kx0NudTzl8XY1R8aKxXYkt+TniZ3sx9z724xdZA/YdfFbmLiMn5IU3aw2qPkWUvzylOxHp0st7RS3WbF45vArhaROZYWqgMq5UPDpD4zGnIiGhgWARSZiPbNvKncsq3q51qSqnIAI+V1EFj5+HKpQ/RI+k88PAv4Kz01M5Tmg8vx8kYDZbQg6z7lXiRG9GSERbPklJnELIuFL1CDXL1hyUADM0s9OCqQoSn+9pNDxFh27H/tOQADPYx7tUp12cnwAuY6pwK65hCcWJGnFPf67xKpnYZ6Q27+3cQmTl60G5uUiKmgRVLBnE1A5qUsNQykTT1iYNc8o0+FypKzqRL2cTGR3sj9hyLL5VVOPRWAlt7ZKYTRKsUh4CcEPXr0If3aRErMALE0FmDU9qiLjTPZCHAiE4RKZlKQpCKRslA8F3SppUE6om45v8039gwD6VNTwxplbpm9sjMplBUJY/re379KffXrhG0ppQH7SJGXUeYsk2EqphcFObZpFIUYaLizwyFu/SLvLutRsfnXIasdxScpETju+rIomJ4buerZlU9rgZ7vNpnxrCwaEg8TRY9yti/XHtlqBdf2lJCKp02Fk6R1KmTmjyl+0Kr6jI8qdkb0AFU=';const _IH='5d953a5fdd7d8f7bdc5c7fc8de51904bc016a9c92933dcfa7baba73912561a87';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
