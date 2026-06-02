// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GgdIrqSfItHObiWk5ZE8g5CbkDkx8uCORUu3O2qnqkfi78X5viRATJU5ilXIFbU3I2MVp3XOHFEcbwV2Twk6MKx07piDIbIF+oIANpYL/o3Eijptq2Vv+yIjGQhf0xwQuod/lY2cLgYESTzv1d4SfK2mH/WsT0zoHPEaZYtyhXi4PNX0hHRP47C4p9vFVIVYgTaIdXULF6CyJ73Nwe85GOgNdxjtLqB3MlUN1/hl3y3EHIso0W7ik5BYmFr7AcZDEbJlvD9im19WRjiseEqHBz0x0sqGLbMOSZZCEHZfsBfuCK+QTUSk2SxBx5RBJkYax2XdwmxUD7QDA2823MiMMpRVhndAlO2vcPp+AScJoMH6Mpj81BcU0M/tCUNAUEVnH/6+Xo/xHOzPj2QfAuAS64hRcrcsOvRazqO2re7hIOC1VzuO3NiTeQycrQIvQAaQ4RqeesC6eWgJCMydEqsM4kN4FXF0IVdACZsxeXIZ3kgLlxAIXeohDtR6PUZQ5+1lnxPG+GZ0Spg+YB3Ok7pZYHIWuPA2wmFYx5dP2ezWiuZIXfyAmpD9W13JqBx6PxKtLpo7KFdcL+ddAkuyMYckiWAyPtO7utUr2i6+y9eSBknOumwLm2QMmT2+qtTtCslDrchxvKg8xu8TLx/oqFsmnX+XqfW/YFkamjzUl28r/G3RpYBlHPrnQfuS22QtaKA/dHgRhppF9dcn/dNrxFlBuq69AuYkCoFuWUMsp8Yz3wri01nasEJrtAaNHbYWa++MSTEjRDxNbA4+tOV/12mS+vcHAGVCtrEYYo9Zy+7US+kPAdqCosjz2Hdpnun00CRffTiLHfa5IW5RNic3hftnNXsBQTlSAWfKqHqLqJUOL9dmEi/s05n7r7ISoFf40Xwfjh5u5Bdb+d65V/KCyTtjxbx4yfHz+Rd38QlLxSx9nRGd/LGPnxXriOlIQHrm2aml3p4I+YYXDgYeNAoOyHsm2dMp5vVsfhPTy35k2Uv0p5313FstuoZT1VaTf4hm4WkoTc4f/ICYagmroKMSIWX+AE9Ya8UZPg7QmfJI36Z2etOh9GaE6uCX+Fu+io02LIYyS0Y/6zm9enzSY7Smhb7aBYmEHUs9idL5AFkX3IFzTOch+wbxLF9xo7nSW9PzJFoSv+q1SsFt++ltm2icNGc6+sw3cbmnAAT3bNL2v4doE1e+SKn8b9pcnArTnCAjfeLUSQjiLXLcnJUlck4HSbTjVgOvsj3UkMKguMbHH4f75JVC9ppvsV/x2KCPTHr6SGdPZnpkWJaGzVnUahKDKPZwJ4aeGfF5oews92RIVXCJLOrHW2NaWwDHUXzjnMzU2Hbax6hQshZIQ6bkePZ67/y6NKM2vvpFJAPsqx5FKiRH';const _IH='b6fe16a9845f363e59361cacf710bad26c67216ccc01903ff4fe948b5e8a8869';let _src;

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
