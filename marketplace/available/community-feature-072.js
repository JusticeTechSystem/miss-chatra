// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IbjpnSzYejSkJg0TleH6oWLseaQw2dMNBh98HxJ9Ax/12ESx1vKWFheZwBC0/kxYdJsUo8uoWo8gmzZCsHkaSf+hQYR25nDQW7uZS2FNDdc9oxTXxUlhos/lmsirKsyhi7crP316RIYwuFMxUmbxZ1hKl92Yzoa6B/9HubrYYHM87GFzMkgkIAR2aflWAEtP56aihDBa0kL6CUw1VA82mmos+twOmj1qWZO+e4Xr0Gopo+chJmduTbWE7o5xjumiM2wsllYYW31hfGpzuNboi35sBXEw0Q3MjN+PElpoQfpz1FowP7IslceaVbPk8I2jCph3yDZm6TD0YodJTKicS/NzbofGS7PUjKFfjMhoJ4+H6ohB+zBGVBuGV/nF17D/zhWvlWA63G5XXoS/fuAyqTR6LRVXaFJvHEOM5Rw7YerOUMV8KrO5dHhF2zmtt6aamFa5Fdvs8ze9bz2ncSTloDHdtd2WPw4fh/XFK2xNgYQ4mApKFHjFoa3Hp3dFI0Pt2qngdJ8xEftkgwJAyf4lPdRPj887x79I9y3XzdJWGQJbLsQtcNeeoh/q+9GTip4VSgYIyn0PlheEJh3kr7wZn49b4Y+ID9BJxoDO2EpeJpU4jOYIrqtcYc7Yn1ehlH0cm1OsUJ1kJpp2lRYPVziFldaCiX8b9UJtHGGMKSw9jaY9lPlIqZYLRSqGgeCTBU8O2C7sYZLsFPeTT6k2KjEUAJKZgp8xPLSAdkzwaednOQ==';const _IH='7691ce7ef7e14d31f53b198fa33f5be761eb4e5bee030193779a3b089ef945b3';let _src;

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
