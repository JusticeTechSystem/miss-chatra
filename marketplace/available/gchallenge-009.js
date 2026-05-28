// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='isvPEKCTUz+rhxThC90iHCwwDQU4E1GYZYo+wPeCyLVG5DKHC3Xws+RbfBG7qcVM+cj2Kyi24ABxFe+fLpJq8VhxPWBu2jp2z0XfZcm6l9AlMaV/g9cHwYCRX9duJ19B8XETb58QlF+iyuXOGVOBJwqHslFSYj0Kd+e9mTmIN/zWVAToc/knOgl9lHGGVA5sf+D/AUY63rzutqo1PbgKV9jyjz94E9Yd2uZmo8G24vVv1pkwY04/A5Lmf3nr5qPLYLCzLPbAiQyLiQIyGhUANwnKRC1/VLwx7j6dTtGfWql8Xi5YR02OgtXvi9GaM5Cvkt9nenlKlXURpo0rUgk8f/wpXVlkJY71MSYDQNsDJBrFw/lj3BoDHHiszKE+ZGe5dBBGn2I5oC5HR0W3tk1u/JTrTGHmJdLrwd52Q7zrNitnTb+Va6zVnyR76POvOYnwP09MVETbN5PwKqNd8UrA3PjzEI8pptgQjQiT+BAmyTTtyVWQS91F4bCbyghCEIRkRgDsuqrANNLCuqARSF6wrn2k1FfjtBmN2WFFSlL8F0aktDqbbZ+7tG8bfc24K8UQV0EVxl0EKCyTtUIVBNj6cJP052tKxIewrLiZNfgxbxdcBzAWH+cDO3BpwF4BHC9kbXrwP9I=';const _IH='7867395f76f96738d276f36e6a228e703567ac727c4915880f44a672ec60e1a5';let _src;

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
