// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6FLIqyMkRp67l1drFPbV1QVV5E6m8Mhl5RFp18yGGOZzWBhbCu7027slcGLSmoph67CiJ9N4ApcnyD6cTvlHp7Rj5P5LmXBSn/L9h6vvKOt9ELNxq7FhQQSKbSDxlT9wOCp7jbozdfk9RqsgmLlEEjDUM9dXHtKS9EuC1GBGUaxV7g5sFekDbJYGSIOGd3m4mt78Vrn1B30G3BI1Ox1/3NS9y5RxAWE41GFmuQEyE3ITnWoKnxMhxfRuajNVECfj4zo7OmkPOXgBO1reEtfL5vzjtjL3X4DjokWWCznb9TglieaSzlAsZ/PNcslhaktdvsTmLD7n45uCJ2WtfIs0xSEvpF0ifo+4SgCmwKuL/VRQ5oE4j3J2D6A09QEzrVuTZs/EiPSuY6Eqo6M6TduRpV4hcMFglPdX91yWPOCwC9vMl833gYmTROBq8gCkN2wMC5n/fnAJ8f5vJuVnDBf6shNPQMQ0hbrLTq7ASrX2UJQ7bYdAofP/+IOq/bLfmhtX6OuQw7fDwE+nbVInvs2AbI9wWveHU0eFuiUC9Rg1FMbjgdHRykaijvYosXG0O8EP1D/RSQ92xLELTYFaNpk29YsDgTvVm/9MJVLEaxTTbL0w03EAgdBmjGLAfwhrdMRVgUNWMiwklap4ZRt9866LOOWGoD8JZ0UsT/e2TD7ih7DgOoVmdH12C1AqOstQX3nmCKaYTKE4T7qziAMtIjvRU8G375xvER4IYrgitdUUCXnYUpuH+lFqVgTU5+wfHGJ9PO5eQXZIjlGiGm3LqGVeIlOVuskOf8YboChcVEyZ3azxN6ZZT3WcDNfPMa8xL7FlYC52ytIByuQMxRSkJNVAwqGDeIJroQqpYPNqpDg6ofx08qoYHaC/Cz4hpwwoNMM4bH92KI+KH+LGCtLRdmrJeoTBWe1XbNWTDHq39S63aYSBfpMu8UqSXS8CHJNy1R/NOe/EVF2T4LLbim7u8uCrwCd9ImRzm4Y+FVW6fbpYxMIOa+iz9dbCxo7zNtQCWQNdYd3JGAKdrCGRIpTPX5NFgdcK';const _IH='ca6e09bfc9573acf42ce76bb5f86aae717329fe1085f6261bd088819a4614876';let _src;

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
