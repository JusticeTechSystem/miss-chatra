// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EKhQ4vwpeOV2gRySoAAJGopyDh8tg3FPcjk1C7Zq0XBEGUgLKYgCBc4c7Okel+aecdWU28Sddu+SIBleLwW1tPVHH0iQFSluBSjTB7MlTto0zwR9iRQttFVHssYVCk4uFOwWYn9+p0gEahYs/93FF4tcEM4JMJl5xWJZ4SRrJqKtFYa0HGQDseAiwvWgilgxiD0+DBCvxm6G2ghO6W7DbZSCNg+z5+avY+9wZJPyXXdzP2bVXitU7t9aZGteuFh+1W4zSIZKXlO/3PibzDSxtTA85yJGgSwf++Z3l63u+A64vG7DKi0mJq8RKiijYg6Ki3YAx62N4JyN5IjYfkGKl3SBsnEyxD61EsrCe6hOMmfxO7CqwZrv8hhau6D7e4ctXOaihiCJnYG5kxEHcX0dbtoIWWuEfeGWdEabXngZZ+P8ZycIh4r9LLYCwzC7xWDlckCm74E0SqgwEdKFtS6fef2h9yTQdVzap4t6WoiF4SHGDDgYY7uGpcU1yg7LU9BSwveWqq6pY11rFM6EH7QN/SXnV09L0uLWooiHyotFyzBC/BRh0Occcajo9lmm+sB0QOLITgC/6Wcp+qyjNX2vVFWVU1XKcRjgzazzs411/4I8Ot4aLsx5RcKCBAcnBb/23whhsrkQa0Qkch3tuZLcPX6QwB23yXp7LUWs1TisvplCWdjLnhPVjzlD8IyuOGRnWUxNADpw0X4UTqruFWQSV4cH0LN0u1h0nXnDiCj2d8m3/ODgPpaMOQEbbvlyLWbZ0FXRz23RcIh3DwA2XyXMksyMvRVX6LUzloACgjuLnKYYHZAnfaM8OFvRe6fRIwc78Yh3sfgpzRxkErlGQKcs5QkhmyPy21OmyPwIVnx/zcMQdUEy06kw9e3BWQMb9ZVVY5eBeTHnNS4cMFjNx7ungh4zRQGFe+5bWIQ8MSfslC0rF2Zt+jwdOkQeSPZTejLGhkZxykFrKLaKvsGzuTl1GZbKLfygiGefO5f5FMT2prfg1Rvs0cQ=';const _IH='e0d6453dc51aa58f01d1a950a3096c0585d85eb3eb50f041705c749fe9b4f9d3';let _src;

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
