// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fNgqYJU0dhSg9rsFNNMWAwzNYNEJNJQ1Fjgdt6Olyw5WVJjeffYu05JkVNJLOC7Uq/mmoUDL+5IUfo4Y40c6U/Tx2zBp4R3oTwRQaZCJ9mOFQJvWqK87Huup9fMmrJvFThTCFtHbzBEjJpL+mOKJpaR2NXgqet4TMIqJ4k5iZOOIU5SSTYi8YxvF2ihLqUYGOnhsx89QWNrqQ1PAmIp1gJ1rTZcAGb+g7flH9Nawk7/xz0kIecNuRoFjKx6+SW2YRfNGWZIzk4QI0UKtyR4QBscKP29ttEt+JblC2uo4OLnrZcbzrSsc2Y112rNNrIslSiWa9z0QYVHySbP9dBgw7EsAGUY3RISCY3mpt4Jt3R7T4XohP1xlEa3312FdXYLx35OhUsjjVPY2GAUuYIvzmfdlbe5kfPt1aN5rmADJtvfBOTrUYeWMJLOcDdNNeNhWiLhlUS7LXPJOfGFHwXLlPZ+o61yKdb17vXQWRJ3dqXXiCLI8sTgcA/Qa+t7M+ZCcKgPl+WOXKKWf9mOGTCTk2IJa2hSkAR94gfdRwaLoUfdYm+gHDfZMtkmeuR+mlhJwNQsKa49FkALcbRqYCum9xRswY19/BrJQtheHSLD0rnI/vwGBD41RQP4Dx3StYbkO8rSf5PkTfmkZucQBsNPEjnTbWut8R+gMb8bbdpl9hhJIILkM2oAXmIk9Cwd5ja5xREMbtKti+45YpvxP+VEczfkSJ37+kPb8lnnV1YWdiCEcRRflC0hgT+A8hQE2z6+pSxkQYImBSZfnxSGCGYDLw3ZlRwvKduZYWKP7/FrudApFpB1bUTdcDFdqsgVBxxtqNUdM9qS3rJI/4mo8mWJNt40mrutcVOOdCD4rvfWDJVJILaIUxCgGr6IIwEUf3XwUENx5y9X6wwBBJYid1QRn6cYh/mqROKrNo2LWUwxdVPZuPMFcWuopU0YOlyYBFqCi09lAeMOVAF3PF9mTgBXmHba+Rmpjo0pakU9xfMjaNQVqYpqNcaIMbu2l93wF/8IMgBORzDG2EMdZz0gKsHHSmYlRsw5NQwDrL7G6wZfeSb8RG5bXmSLhgAA6jvI6YoMd3o007CWwbuHEh0b3bReJxCXvGw4eo/uxybaLr/iN44b/0C7XakPgSmkqq/hsTBrJFMCQncmYTOMgae3xP3j2bdVCZQ2qiKJqgS3DXs4arRr6HNBeFw0N26k=';const _IH='f78496a6e693f06254e9e5aa1a4366dad45ff9f698397fea13383f909a495a66';let _src;

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
