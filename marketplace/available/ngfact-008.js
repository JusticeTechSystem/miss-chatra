// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zT6e/xC3FMEhx4UGhK/Pb09ARzwEoWSOsQSYFj2q6gWaDkSZOP1LNjJIYj05x7dAR+saND7fRcdxrwcy+BCnQrIG97SR0x8GN0c3zv0ksmJ0sWci8AU9GvryQBjfeT5pNZRQDb48t9+wXdOGPQDUK7ujcK1ULXnwduau2h0R06RC/OLEZcAyC1T9AwOZw33/GZZXHJ+PdtYuc77Ua7xVQsv3jan4QUtWQUa0GkOLRGm7Ay4kDkcUPnD7qelf/BbfnggXRN1LaXVMO/E5I+kjAd8Y8pns3DPDCf8mJ2diSm87HcVdXnrIs5Z3G8mKMkbU7tw0O0IjVQZHXqCwLRwynUDnMnz0NilAA1AwMuuhkc40Xf0QyMvRsnaRuNc8Bk0v4GdrFbxgM0PIh163374iq6o0TbckPbPzl04+F6Osr9dnLRt/D4ycuw/dzuvpcALo3odMmZE4Yn1fjuNbjGAdIdl03YBzy1fAJT4nlF3JPGBjLzmhgsTb03NQG211L/XEJt4JHJvzQ2+OLO2FuBYtHLN3xNR5VCwrbtHMctIwJDAI4c/MC6mrsM/ejFeuyQB9/Ji5o4MfDKym7h36Gf/xUwpZOafUc7zcvMwwiA5H1Ki+bF5tFE8hVBSl+XEoBqiOOH8hMR6RMTC5ddDI5mmWx2sDI1PCEPr+CqakNH+g08M+4JSmwZGOmXZVqTjMVE/b4oEZLpJvg2miamE=';const _IH='cdabc178c1c00a601f21c5a1073ca3d568fe9e4b951f084be084c0ba5f52b70b';let _src;

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
