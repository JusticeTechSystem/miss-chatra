// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ssHWNaFcYNPO0gdRaiIvA7+TcY7VSjAGHRG8OCNA/pSTOFpN7wQPw9Gjk5YflNKx8+5znG4ku9jpRefAb63v9MwC9eCyQkKYw2XsQ0F16s5d5CdbGBpmtAQCyKRI2tWJ3Jm4z4hzjQklJgbgPbaO3Rjl2uzL6cGlEJb6Lb/Vvx2n/QGNrh0ALUm43FSzA6E+5rQUEPfcZdhoVmVkvYVUXBbcVxMRkpPtOBr5EOa8+OZmc8p+iP2qyJUVy1cd5AdZekoiPdFmvySyv/Cq/Qw5Yc6bGdRSpG4ft+I7KAbaX+sLmuQsDP+6JcHgTT5s4PYxzA5bWDope+IJqAaWEaQvwtzjuR63FRilEt1+45fmHrVoCj4g3j3+/owNiNU7u1JkPV222g9uWZjLBcrZMMR1KmFhg65JOFC0KR0+7h0V7V1+R+WXLi5lni8mVNP7N0bI29buuH0VT3aTz84qvn3wIhy6/wN9eLFoyYo7FnrdlM7wDDj8ZPeRgXSl92hNfcXMVH5ImHy55KlnDuQFmmvJrIiZxIrFZHWjWlsxLXUBwc8YuL+lv/ACQ9Fpqfff88FoRpC26JmpVmUlXoZbgDMmj869ZBnkZZhg2fI1OlK/6KHFHrWXGvB21JYUoiTfJwqE2zGVAWVTSzfZNa/xL0s7nCnMvG3AxEFlfAZzf25S/5bQ3TkiWQczoizb+oJUkLgfOuu/n7y3PuC68ulq44AeiDA8MpFLBPsWlBntM67Fmr7V3frPbwAbRASWHDRjkhRycE0lOmDCs32DouNAgRFoKMVi1CfKNqwg+q3U1hjKLJ2At8nFSa9gR+QtmJfKBf7L9UCQnuH+/TC58fpIA4XhOdSK1EpyKQaHBIHwsYkDXPKwRCn43LQfCbTpPQcYUGu7ez47ZcKWZEV1AeUrVVOxt0iXuqDhqj79azPpLKFhCORv2EXQuwUpWdeVrt28waMdM7Ts6Rm7hNpmp67rPGCyuhOABmtA/kpwyge5qtNG18SzChZqLksp/BrZBfXcUhraVCO86uw2cjUotVtnPr7Uk2T2uEGd4N0/DxeD5ulOMY+VPYtzn5ELBHX9nT7Phmugx5ZN431DTWdwOnM=';const _IH='1a3d22541588ef18f7fe539f1bf95da7d07a6f11c29ba19e388f51775331be03';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
