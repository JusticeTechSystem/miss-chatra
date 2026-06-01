// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0OJjHFO6xIvwzlo//WZ2PUDtkhvbkqC9ZW68pLxN9xr3q302nCpwaIixVJJNc81WWewjdXydGOSDANrGuOPDW8waiMdKgIMsbv1WYiu4EM4y9MWbo8XXFJ8U9hd3wLAEiXV3E3FLpTGYyAy+uSrDcbGxl9xXDjYSnEhK2kqi3r34GD35jtAmRja2X0u3Q1l82+/Qt7IqUOXLC2XNqWTb/orLTdNhekPk82z89QCEKmyHM1mLukwMQonqabIwwN6CbL3+7xYejSc8C0wD3vwAZ8A2fubu482jB7vYlfK0Pe/uYeYPCF9SRfCkh0H4/2in1Kd/qVFzZyUr+oyKXI4raoSxNAWquvzWawnAEvAe3yPtarDhVZL8bkNdNlhOI+p93w3dpueHUADXXOlyq2Z8+XDK8tjG3bbozpSHK2Fd+xlZJaV+zZegxeGcVe9fsSRVHw/Dx6K3xuspbx9SwQV4dKuQWjvULrfVEQRgFOb8u3BYsp7V92KSvs4pFhvfEncm0iUfK1/nugFHjvDMxzdG+dBn2c0m/kdBp8wEz0i92PJU/9yTjg5dFDGpgp7v8hpSTqSGrTqo5XMVu8zzQ8msPPefhiCsGK6yy3VsIQr4s3Zh8biCacjYTu0fTxzSvdcvrlBdg5Lcz+gYS9qJlCh0IsIhQ9IMbJ/FFeAzEPeAFF+IsDbadm+ImbRN/CJFk5CssWyVnjJV1VV7/QAY+sRuKDJmB8E4fzv6m7JcqR454LuaP9ZJq/U/LjRcdMOlul6mOtCeMnWOJTxjCUl1DYq4wlIhT4l8rw8IsCdc/GrbgAWEzymXXiDaQusukpHTWJwYUVXNoaYyMgsNTZYKxoKyqkDvw27nYfevyqW3CjNXixhiPWhlxkTiUMSHCkiaQpSStZrDr/YtYEVRinvvt/nidax+4/cjpHOKr1fmbv2gg2fSn/dZsQnErx9Mv38sOfAi38ZYzXHsmRQEciw9cIc5Ipcly5ktpmM7LhZkztgNWASoUrypnqe';const _IH='6d3500f13d0ca98b183919a3ced3cebe8e09580e2563131944c853991e04b51c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
