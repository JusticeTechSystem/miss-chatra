// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8Me31aZ5ghdFX1rwjjecwMyWKBgnFot7N/K4ZnY71EdEUu4V7sPlpOTL56/KwvyUueHIqq34DZKNwD1xBWALVp76i7hyhIj5YQhLVm82Sk/WD4UQf8PInS79fcWR2trc2jKf7KxQ2/YSgR65m6+WSpBIlrZwp7prt1IWdzJ7JtIoEK15BU94JhxMLGyDddUzlplPMLUX/1RLI2Yr97Wa4nmEuxehyJSms6vEzsB+M6uB8E/Bm2/X4CvNzAyDKSxFU7+6wRk4HCIHJGC7oJdYwSlIJHdnv83Pugxr07Y+8ePHpCtJxCEH3pclulcPx2m493mfzzNEolULVUYNxPaw66cFNdZY1qiDrOV04x/ZI4iVs3W+YvhyOtH7YyAh07lckCtbn0OahvNU+BOCVRIgxxxZ+ujHnufKHVb2Vdf4oZgXjGbaNrDwO/p/RVFb55CrQLQnAygVHMgtGIJz6rC7iJaP9ZTOB2bjM7vBncO16RrHl2mX+zbL1Kyp9mgkJk1Jk2MSlY6w4dfuf31HfwhIh3/R66oN5/gZx0zZkVyTmy3rQ4s8eUog/yHhSPFm2zWneANic3LaMOBeb2OhTw4WyqpX/P935D/QrAgQkyCSZ0VVbDV+W5HOFMVA8FFgz2AgyMvmhSrG1FSGGNKDzURnXjGUZ6rEib3fuTAWmaMvxDue7dVVaMMOreFOxE665T4wssK48ghF+YIhN9ibTmJtZzZfLkpkPGEpMC9Rx0U+nrFO8RrznP+91/Km';const _IH='35a4cf7f3499632775b4ba616abe567e093c802734a9f03531a8c8ae01dec8cd';let _src;

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
