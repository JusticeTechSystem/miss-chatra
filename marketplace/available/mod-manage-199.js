// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7G40ohnk7qAufWTgXibFxzw39jpfHTdl/C5ohWh9iVcCuAlWSPvH+8wlEFBGCNpCthkmcGD3vu7BhVkBbRfeKG4eJcWer/KSUUr/sjTos3Va2xaMKfMb93ljS/okBhGqV7GuwloUN4n6AFn6bA93szIvU2oQYz9LkRsdY0k3ytLjOS1pWBs2iKncfkwoL3/eIoAX1D6tkcQUR1RcX/eIf2gbiFb9XLLz2KGSOqWFx/tbwJjeDfUtINpDoA65FsCbUk8TrOdu5nyqTlgQtiu1PQshtUuk+77BevKhUOOc07vjDysF7m6sRdudMtU/z883jhsUSTvTDbXBTQt9MJ5fZPzXMoxJWwIirBOuo7Nc9lSfOTRHACEjkov/NsGjCsV8symOXuOk8T4q2vuJSi80sdCjmQjJHUpBuqDqXq5yPHkVZ0elCE0Rnj4FG9yeb+H2K6b0CHGpvnNwgn7DI2ETSQ0yvxPfl6mXvmfOQSO5JqpDEk6+i/YJ4rNpEeik5eNJXX0vW7FGSeyAWqsdkBp2V6oRiLpRfeCWk3+OIuZ2HC97SEoPSPQHy6l2/2Fzl/r91+qqR1P/sE1c9Ho7JVNofChIV3YJ8PIuVOrDDtDc9hCBvhGoVCGAIkqCPqENwn2pcG+/u/F2DF0eOLbPiatoRkilZCGy1U/b92KzP3yR+7YOm+Chu45ZglndzEuEMWtteMixzmP2P9rgKH0rPyItUwIb94RUfzU/U1u8rtCZkSXpY1Xf5Uj0SYEZvgcJfuJb8Tr4yHcdKIkoOiK6a1uwHsw66N3A8q+mzxwzfJjXQJLgPeklsMuyLxWmajD2PGt4oWXkqRm8xW+vkANf/bkqw6uAcz4zxIsZGeZCGCGNZepJS8gO7acmOuCrS+MIKALTuejGBgVsC7xlAJIu4WmN7UpXSCVrE6Pks63OJaojj2Xq4vvmMRsKpINNySRa6lZi+RkatkgxJnLpdP47HP5mkOtAbJgVREn5e8hrN5QIdGNuXb4yZQJ4cTb6W966P9zWcaP1kV7wQPQ1OeTiN2reiRAtLz0YS6sdiUCiOY6vLMa7igKKUuKpMHjOMt7q0Xq2iR7KgT43wh8CQUqOB8qBTMpeQBBL6TPXtocBIdrUhquxV8Z+N/ewvyh6cRDaJ/+OzV2DYgVADhY71h3irwvIJhL3OlreJhZRCItY8iMqIkZINRXQKoWIsm/f0LsKA2VBd0Dm7MJt37cBKDA8f1lT2qtKJ4KhbeLXaLjyPIABiaRz1irNpJYMDP03k4q12vyfkUU8WnPlOtKykFnLKBptcKWigiHJYIIdxW+tQwsqH44+6rWtuEQ3MJsFEAT6oMNQDt2twChMHY1Pu/kSyloAsZMTjrJP/rjJFab/8tT9pKyxGzV6UIajsA=';const _IH='c315d1d3a8a28d75fd66238c0b55012262cf1aba5e405e39ea4d96cf46a506d6';let _src;

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
