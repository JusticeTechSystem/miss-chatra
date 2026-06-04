// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S9Jy9bUPf/UNbq/ICeU3hHEP03nI27xQgmJqSpyYa9qSCEKrwnkLsINJY0wkrzsZc/3rSz3o7K3d3aY6mEQ9ELv7PoNOGQPwWiXkGXE2a+199TRccElfzfDaY9SQ6qk5WO5tU1tpWkFN+dnjOTrS6VfT6Zm8JPPlyQ3MtQG93YD3cDwdK1oTWk3dApLfh3KXlHXVW+CG0YW9DME9BthQuN+slBRE1RjVyzxQusWPDVBWPrHIVywypmQABCMMepIpyGOVP4bWchePOPXUyDyNoQtpsbqVkvayrckgZWXkY1uMd36TdnA1z7MIDVj/6D2+cwjDihOF6lm4yen2fcrvF/Q6Ga5fIyXdnoDoLig6puK61D0uc9QBSAjCdWOTOy/lHVD30PdHfGh0dJ7K+VfmTNI/lDhlET7+eT8oG7yulJJXPfVGsbRdOZTXVApQxXqNjPcfORPr4HTdPgc7Vr5AN6auP3c4xIK1mlq8ZiSU6suic0ULtHe87+MWO7jgGQhS+iN8nQ9L7imj8fK2k5IVV0aDukvpqt8hODxjNiefjGA9+usM+8rtS5klgOkUiJz9HjORJVDD6zcLHfxyH+rafk7C7TaSZQ58NJTNPuIv+/q/Ucu0Z5ulE0RYDuJ4HjLt/2ChrCVajFwaJvEGQykjzdTn+EvwHg5t9DoIHVWEMJpxm6UNqeULEm8px5xSs+1q/0DyKAhqMGTyij2cOANU9vI6Zdm9iMEO2MOxqwFeaw==';const _IH='e7124dac83f260ef5b61526330f22ac2db9acf5aeef6ea556c0c4198bf129e16';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
