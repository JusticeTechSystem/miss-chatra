// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3O4zXV6K35k4FqihuJfk5hU3rJBKUgWfuSIniQEfHS0YPSUl5NUoDa3rI2XZ4uIokB7NCIf9YVHVgsiWTIZjXcIsjVyJEIUE7vMfnE2VuPb4aAlCU4L0WtsQRePSVoVRm/KXvGu8Ws+FsKzD5MoF+cdSoAPJicNK4s4osNiMiKO4ZONHpoa4Va8+q6aMrjzH31jVfyqNN4KBOv2QtPm/s4VyXzPAlo7sVY8LbE3O39YF25SC0MpqVwzpsYTcr57YaBgzz1umJ2bv1jWEj0lsWwOy25c8244JYMEQxfz3Tc3iH3S+66kOL0CmbI4JgYDJoq1gWamzIhOzkcFB1TLJOC/j1CqYkt6z5DHuJaN6cxQJ24/nXvZev7cjwr2kbRR0c4umW+fbyNjkQ3FIdTE3U6gBAVkIcr4tRSyG4f139LeyRxQLrtD+0Y3ISqHgNm6vvV4qjr2l7zn3Znq+5iKiGVUeGd6vjTKF46S4mZZJoj6bAcweYprgwNIJxHHLBga6uuBXOERbVzvoXRUW7Eaw4GAycnRjadjZdkjM7k7XVgSYo5vqk9FkYYf370XMSUDjeiOSqYN7QqfxXbrO/hwGyYz5brYUUr9FDNTNHoaP2+A1+yT09MiG4AoRslhtkQSWbrNHgMCnIxICD7w+yyHmvBbYvR+nbOqemqY9y1qQ2eMRcMtYqotc9TpwHBmhS9eYC1DImUYPC2aQghX4o+5FtvsaHgrhvVolqAE4dztr0A==';const _IH='e041a10105755a019e6ab09afd26d6d9bf9ca6f7ab0b5c2b9176ba189f80b20e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
