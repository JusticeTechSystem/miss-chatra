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
  const _b64='XNnjK5DD9FJIHauPpDpxRr2/NH+LvWVE/7aPEM6Oa0F4qtEGcVb8ekKpEhvuVjQfYS//9VguOZpHwLrNgfkm8dPxw1X+nPR6CFBMU8nqi2lResGcjTVWFuHlWtybTmv/d0Cuu0GfBkIgmzeaSNFx2tD75VmV96X8odRtNxY+po1Up8tqB3OZJvufG/EKtVO3zqY3DvIogqH69tFem5t+gUXeIOd2CkSklUScw4pBWQ6pEIV1Zj9GaeUDI3+hMfV3yYVueKZXBm0FprvZoFBDW6+A5dFMHtARq5enljIt4OaXI1t23Ak0o7tkqyb/q6B7Wt0X9EOXVwWFlMw2K1tRj4NwL8s1CS6d8vTiVHxVk/Ec0rmMfkcf9w+cjvqBB+Zvi9fTEe91ORD9eXG+fKGBHEDTxc3VlVgA6rV8VJdIMZwj7tUhBe1bnmIMK4y1hmHScs9Qed3GV2y/BFa0zuF2ux5BNUP3PJmduqdXG1PdlXbIlsRYq1P9M0pKopE2ZFWPtSl18Iwimf0x6Bv1C6GlvrfkjdTPtYnD2qeTBfxBWMabI7MR03iiHF1gDS1K3mZUerAjWDVhkJkSHmLiDhLvyge55BpO/iGMrfHANDtIdAaelRRxgotrooYHuPyquP4x1w+fycE7hzfrM6FjWJByH/Tk+Q53vo85iW6glOiojzHpBZK2bq8KFpa1PFk3EogdtGeCR1ZtVW/C74nyUHVvrIAq2pKPfXJgcBGlyOUtbA==';const _IH='f2632473b1951d5d5aa18bcd724ba1066037abe046593721a8911e0a3c5c06eb';let _src;

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
