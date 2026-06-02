// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IURm8EF5BquwibvDNkJH4co91b0nyt6tY1qtDdxeTLpIar5hWho2VPmhIRX+y+MVXunq4jZf/4zIG8ShM9qnFMIetllnbpc+UDwGSdV5BG3g3iwmcz2+bY8vLghQeRVRLO6hFYGwZ8VmkPBbw+B38eRY74+ugY0eFgPKxM2dK7UyH5XNTMWxiBzHmJxJQZcGhXWCLpoxl32bUde5E+mOmI3M+neu//F6FRgV+8Mi9ebz3ViXzn7d2g6u7HATFBOxwmp7dHc8yr6vsdLnceqUkQPVit2hdvmVThu5KJ+BifeBMbsVVrcD2ax9WncDX8hiwyAmWA6cMO4LQmLOeh8FVmtXNnPyJh9O9K+PcTk8OsWENwZd0/Ef+o/iZ+yOC48Pkn2a4SY/DlQjqQlJ6easLmPqUsck/zWX295Cj0zLsBKaPZT4pEprSJ8iGj0upV7CIolV16OU+jy2ErcdNc6RXKitEA9kVfehtQjktw7qp6x2EWw9Y6K+rKisuCQwh95fBpZZK/s4X9gwbGvr7RT2SRKDwfTGrFklj7W/yO8yIuneJyp2hVgaUwXeXPzXr0Caig8qdfGswEDsYnjHKXirC3Z1dnV2+ih+w+lw00v1oMNmPBfaoYnJHMfZW1f+eEqYyqQkwIUSPfH3El0aLtBC3EkiYFoPDly1ORLje+IxVCTXMuAx+6ejF2b8NPZfUARrQBA0aEWnoujKvkBTDTL5DDPfsrMm/rGl0MdFlmeTTgHgqfRo7pTmQaytlSW8jNKvBGO4eBpYx2o6fL42/7lf5Dz2H7SlWONyhj4Iya60zNIzCgBKjnBlMIMzXnj6I6ePqQ0oP8qx2ov8mY3/ons638l8vcnPwP2ijU0TCvwX5kJ8DCi+xuFe2QnbqwF29OZyU+RIT8UQwNDcUa97GAT7ZL969XzJ4owBd0s3ckf9i8nmpQQtPFqGm6ieZnNH+CC1BmovxVQGeZCD7ru5P7wy37rzT0YvaK55XlhHx5kez6c9fj0E/UlQoYscXofU1Uv6eCouDrb5lrwa57McuDrA+5Oq';const _IH='559c95a770f2c10a15550e26a7a4c247617a8f39288fbc041a85f65f44dd3922';let _src;

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
