// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tALSdQcO2wtnQ9XHOS20AXxXtSjIfCiW46XxrDmqiFqtXtN+o0PSUbJwyqcD9s9JqFxOBffrUAAkjIPszGik13hFCJbUtPCOQH+2VNEmQxelVDWk9fIevq0h0gV0tWWBYIbsui+Ryw2deSguHaNCWWoC2hKmHp1o7AoUzNhK8uSEHtSHx5zyZhWqqrICM/oP58SVPifQk3IbN12Mhibc5U0+rXu7VciQV30aDzH63V0QOJPzEUJpqkTfLR66UERwil8KP0bGLAjfkghKd7gvaFXm1gpeftKOl6Xi2MhiEczzZc51Xf6/vvgk8bx+J3KE7jvbLGisJ07lMZP0cthXl3nQLCV+aqqY4ZxnsF7EyqIiv3eRpt4QHnK/LSlV/Q1r9/j7EqWWY+C6JR3OJuQtE87rkQ1Ff5aA/Bi/2IhYrSZ2KAGmkXg3GAsvD9jQVkPZRG1s95IjrGNCtkX1JYEbXIigDUbEt4T8BLxgh1mqim9eeGhvMxqFATSapMEh2zTh5f3Ajs71POpYDRFPD5NZygbAhWJD3UY48r4X2X3fsUk8QYbAQgYNjI2L1oUPHmR7ikR38++xFHmzavrgLs4nmiC8b0M+z1Bs8U5qIR9DK2LekwTNonopbB/4Wrz6mBchApGIR3+LHH5fLpYfsC2DK15sT3TF0yiqu5HssrvytXQG7yxugdO/BHVD8WXt4PRVSeiZqSBgQJSdzHjWpfKxPwi+8C+KN/2g8uSzjspjGOi1mw==';const _IH='2a90e38ca7a9f61449845b062a59ae4bf9ab527288ccb3dbc8f93fe44bb44399';let _src;

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
