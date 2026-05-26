// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kGsZX8+Ya/G5lONNxVRDI+afETUO4JWM9zkaAU4wVr2HWdgepA1PNmUkrCpGW3HOYIeJ+c6n+KrlTmjvyDaFGU8v1b98OXHj5FLkNxo36lPWRNf1ReJGGnFRghDk/9D4wbI3cT89Wlbs4vkceo0ksNxhaZanmwh+ekejcHisd+7fUYrsTjZL2YggHLHUgkuSERBgh+iqj52djEHF6zgn823hlrRVwZn6MgEUxlipTyCJcbdXUkFM6cN3TKxYFTWZmffXZntx7M3ASttMNAGupwv/lxa+v2zv5SmG0fSPsaMZFguX6wxD4FdzmitwLabEoi5qi9inEPh9rNVFwnA8prpVajM9dy6w3o4c6YuV/eal4pmlMpGoXqJpSh1QsUk1cbHAmTBWmHJpSCA3G7wUqDRXYwQCrCcIfTCKxAnAE99uz/f+Iv8DPzcZStKOGO2hZYMa3/d9zV80FjMqNkkBJ9zilWm1spVIGfsJTnOzHPY+gM8s8nJ78q6MY9F6S2yAcXbnKf5t2n7fzV0395OKsnf3VDwyHF6Y85K3D+t3mid1sQ+kb2qXCHangHtaYEPg0ftPYbs/Loi0cHF1eti1czdpUzQ2FocSwghqNofdz1XtTdlgbCvq0uqP7H6/OK9SSwAoPcuS7Lmk0K2LVYKwBtVVCGoY41/nd4qET9BfVpHUUhWa/2G3pTrGBY5QA+agpO7kxKsZdIlSr7vLYbik/TeiMDBcXju7+llR+gDOPyT5L29BXts=';const _IH='0acdfe13e6da570b1c71c0ea91b66bdded77320936ab327ee9dbc3811596e8db';let _src;

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
