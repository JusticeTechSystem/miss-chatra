// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BSM8psGd9FhLnZN3aeWvaqq3UV+NozGohMkHF4AoyoFg41ZTTf2I1z9RbypOConPdmEQuDXtnuMkrrIiaaS2xFEaI6ul58u4/YOwYqRkp6nvv9usjIISGqBhQx2BL1n/zKt70EQiuWrdssSXAcSYgvxZ5YD1HpSAOd5aApfi04BM5ymoQa1DJKF7dP4zeuUVy91/CNKKYR049ecG422mVQgjzqXydu4l62CLGPW+whwdqWrDPDKh33hWel6KrPeznZmL2g67MqV0X+Fp0DrrD0LxIx1WJ54q21VKwBG2OlQrTt/XAKGASgd0kwuY/JJxMRyMpPWs46CXPN4ByCunKgXWPigCHvobc/ISzZEfNCUjrww12DurPuVqQzi2DF7XyXntYUKQBALW1PcWVAEI1shEABTgwFnk9odEgb/xAZzPUvvx8Pe7eudNtn0cxUrcdMTZoajCLTb1k9yWwmomq1tS4zBnLsBIzbCFILHOtIl1esifuXVbJaCq+e6drXgSxGAH1fSHUsIsZb2uDZKhmNp65OrnMJ+7Q4SIasZs+PDldmDwH8d9tacE7MT2eMz5qIxTrMDU34J6Tjfcsqvj8uzZn/9J536YgK5bxvBDh0OZih6wlFfpWmzytneeV7TK0lGbuHxFx/dkIWGHAZfpgUpn7MhUfJ/ajhoDYrFSxHuSv28vdM10h57dDGHpAY6bi54FpnGiLhh1RTa0YNbvefEPk/hxIwihEXbiqjwsoL8DYJnrvs9e9UsUl/5/ThrZ9fDj3P8yOn/WwxOEhNtRk++wjNyQu2ZLjUs3R0pI2OhD0faep8Uc99Oj8zgov4UwolKxo3+h89u2RqpNe3l/9NFK3SxFn7ONBNwXURvp68ggNtHBDzL/aOo/myMcBcF+q4e/SgKwYC9YypCeupwEIXWCmSYny/PNCtwAvv9nS04ws/KBwRT6F9rjwd9A+RZXBVtjSJquRaTnDgTSXD8QHhGMSQDNcM5Cb7N0e6+OgpxnV9jz7Pmpenu1WVSO9hKF9Q==';const _IH='5ee392f11cc62f687bfd6660e6a6952ddfbf54ceb033aebaaffce4d6490edf67';let _src;

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
