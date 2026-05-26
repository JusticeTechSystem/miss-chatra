// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3NJXNnH0RXsnj7Y6SUgMtzJ6wZjF4udfTZKfh74dxHQHnMIKNmjZyTmmSP3VPmLGO4v8V6z0vL3DhMCVHLcq3UCYTwdFLaUJ2wd1eSQTykA32jlTThHpoWZFxmOaUTEPlDJ8Fco2CWy2HhuMpp/RmIP6rjqWhpRmSF3GXzPzeSE00SwFQCjXc2Q/NlhQunBNAHzTrfdmfXd+uFJo7yY4UVbAe7pHtlNdzZUqp9KXALBMFCGXw6MorNyGdETcwGivoAnnnxKnU4P1MRrfj/HZZL+JdiC+eBGyLPMgT2shnHSVsP7fkkiLQap0zy/P138bON9q8wpgVa0IwYjst66ofOCKFk0X6+B/tJje4wjIPbVwPlXhOvP7fzxLKIUSmu6Xfgy+ZUSZF/BbhtUz/akkTyDhoJHLeHW6sN2heAvBuaFrrEB0WEdGWcpi0QksQ6QnLwfL3p6USvzki90RqwBSFxUI5rBI+5N98xX4/7bgqW2LkwNAchkd5/ZpOXThnDEyZ1Appkd83w8roxvfQ1J0Z3I+mcDshcGAPzhk1mTBh5ZB0hHWoNvd1Mxzm4VLBpaN6ViluJMEU9srVY6jquGThbhZ9gqJZEM+6u3Xqb7q58pmLRSphFq2nsmo3vgd9CO2MFAXOjvPr4Xo40n1fLRCy5FvtMdGMpv3mzJUZgiRBoD50CvscOeiLg6bPB2FAyTPF3C3RtlMp4lHFEwyDwZuAjCRiD1NfsiN4wRpn+L6+qjjk3MX2RUddwKz2CPhqBoGPlmOcDW72GZEznjeQGv16tP03TBo+ZvyPy1joY45wZJGW08uXIkkGAngBDakvnLwv56QSxMIom8GcWhonIfMUmyAs8jRVWfM/9xENurXeQ/0P4yeFY3JC9byKPXGlj6hQJpliJvbU7CECouIxgU+TEDfwhHdBDQsB2Ulxi02SyB6zEfi59glYRC1xWU=';const _IH='b6ca8ab2261af095e7176a72c0517814d72b401f6e2ab98f11dca165f9ca7800';let _src;

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
