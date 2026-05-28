// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/JOmvzbo7badClEC82cmvKZ7W9aErkUtouPymcP7afxcggyQ63PDx35ddvBne3fI4qoOANtvsZ4EWBbcZdLlB5N/Xvyt8PV0N6xrebdtYh3LYL52OTCXeVkiwMTyHBkzValIp4bOCBsVQnh0BaKz9pji8DjqpejpwvJCB0tjKT0sJZgLWw7yY+qnuLlWI2cI7EKyBEzwfASTSL1PK+J1oa6wkD+L3656kHMnquMVmLHqdJSw60Qwp99bJB1obzEXbhmSwdNpQ2I4p7QZoABywYlJi7Nz00tm0+dULqGvyljTmq2zAhogm+ueqY45RhpqVMcxlU4YCZt6FO2qm5QeUv+lGCHdz9gFeFlL6ZyMgSrUGXDF1hVp53qNJ6dQAnwfTeIf3mcfw+sHw2jynap+0x62JSOhTOR9Tqw8rzd1DE0u8OmJdwyYahPKSONzh3Wlj6EYqEoOke+ZQm9IiCD5bNSXZE9xBtZ4kFu1CoMcX6xho341AHcv5lZka4Ph2AgXsqwCoJOIudzVQaqwxBsFKQ1w0++Cstl+JN80LCWCvkAS/hpTQ6QO6V7OoF8vdoSaQXNTR1W9gwwqWPptQpcTXiuy5QSUIY7OJ9C+pFVM7gMsZkWZm7BK25PdLRaZkg8xOAK89kHYTR5YzrdQO9v4NNEzLpR5OL1cPDPZtMHVV7gk0Rru3czgmOePPpsfO/jEfImxVxS5Z+tfUw==';const _IH='957123ce06fc99c52242913ab7090bef15a3c2c7cf414d6f864f5e2b746ece74';let _src;

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
