// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9rStNbOT1qRRKDFLdJC+OwE44xSKHovbQcHJZ0vHTP8CGptQLb9aUSA+rwYzDbBD5XyafJoC01C0X0O7ACst41sEmf8g/K3vIgXHHrz8vVL3k+GdTrvaCE6HEDjWvs4+MvBLp/8QRxZKLI2aqBgprql87cLleFR+a/nOlBdvKWzGGm+EjmTv5o7Zla6AuOXcSJcKhMzu/iiIkVcpbmNpkGUiLs5RWL6Pfdw4+7iZZU8pBwRCdaImStz1UhZWmAKp6BDorrHvpwl0PfWVKv0PV1q2fw7UhB+ZRgY0/k8fTiQXRZxUh9P+we6QpirCE0MdCnnjVtfqyEIA9wPdneYW74upLr1RBJQYppeLwpeDwZivB+/trB2DQP0tYzFh7CE13ZEH7OQsnDBIFGL0Iq5LiPpSW/SzNYFxs6d5udyiuFmb6bx6vcsTqjmot7ckK/Ljs7v8rcV415Mj4j6L05Y1wHmqp0a5UpL8VvdyKDJ9qFIzIr/B3MASte8sBrgUoQuGu9tdVcdoYXtza6DLcPmR8qDBYAEb6XccuqAxcc+5zba+MuAry961UyEbANZWg8VyIwYbPmkyP/TIZscVMODkmO3l41JYL2Qd0OgcNkw5I6TukRPTS5aRaQ233mPGMjLoE/9A+KifTEPykjxEUcJQqa0RZ98lf77yxynLgbYr1fnZkszJFI00oqdAPGTojTWcvejr1pSNYRCDdPh55JSrVweysZ3WBdlPalUGumDmYw==';const _IH='d002c6ea371e7a2c1cdd9eb96956b178e653f247f50bf2cab128320749827ee5';let _src;

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
