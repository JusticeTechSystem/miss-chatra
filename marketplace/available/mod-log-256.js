// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x988fDBDechGnvqxG5DnXMUmGufpGSokdIkgFyLssg3J8b3YmXi8i+hrHpXNH76QJgCKCYDpNEap39proj5fCTgY+TB9GmMaKbv19meFy6fQy+W4jm9OOn/O4Cy4Js86PYR/5PreSRsG1GhUM14dBiPWPdTMerXlBI52bUCJrg6PeeSOZfY1ow8ck8RNg4Sg+kwKOy1503dykRHRUo1t56Lo2NiMdkquKaTpvnheu8TVFDlUcATf3YZ45tSpzNt73G5e6qEMoFvn+wZHuX5gH6LHLrL6ccL0jM7thvix197Pi+MfGONUnPEm1vX3BFGJeTqTDYSiwpxMHhhd+RrwyOGbNe2DuymwswMspN6E983YTr4guctR4rPpoNL/NWSsVUbzpKFTMI2Fsx/70lSAAJ3ITn+iNBitbFu+JhdlPMpvQGQNbImFjzanWPlXrkzAoCPEE0LZs3q6IoXDsXgys8uhIGQqA/jHZqPnRMvVJTwJQQH9mYw9SqykUrrIjixxxrWbsmNTz4LC5JXBnklLOz/aQV8CkFymQZopcE/BAMLfd1b4rPxg/ygqHDqNEuYTB2xIkqo6ycdfOYaQaQIV/NrP3SZCJVg5k6VpjFnf4q+FyLoCtZaOwsHqNlvNsjdt/QiEj7S5XMwG8VQ9i0n5BbNBOy7XHeSveJlksuEwomKPFYY7J1xQXTHMwiz8Pjw/L0cyYB27n6OLzHb9EIP0mnGdsteEZTlT2ZhbsG6cNJTWVuzj70AvcCmSU5D23bLeNnn6KNDeCJOAsdurwpXIuXiCCbyOvLa9gveoivds0pk7hsKEyMgbZZkqc79tXiEXuWAj7sQkp5VZFPNpbTXtfIJjklxdBWhWIIHCk0BeYJY1UioDkHBLo+wVi3VgTEPzJCp0P9Py03t6tSV1bIyxj4MTocQI1qjyy2uHnGqJKuD9Gb8B25oe5XVGPvMQYzM9xA1rT9hH147nIxadLuiP6mIj3d74hulsvNWOjjYGVSUC9fn7S5xyUng2oToIkeNXi9LSz7a0XXHMRl/pQC29ndx1TbOP00ymWVmLe8lgHjmxjBZejkyBmRgoTDOt6GKCmoyRSJYWG4JQXItDs4SLtcdwcCXsLkA8dINYqS9P8QFfcmJEfIh4GXuUICRZgk7OtI+Uibm9zsHeCUgal4hkGHXyPK2JlBuWDlVyQvwHaeUc4Iuayihd04vsaVKD9mnuTcCZnhWcJClaZJXujKorILolAuluLtviTpd04VzT5OfbNO1l/PqxvJ08yvlGPSV6o/Qgo1mSqVxW3Al+0xxEBY1Xx+QTjZ/rRJTvp+Y9WVKIrjFnqkmFp4QIw5fZjwi1boyge6o2lNZuRw==';const _IH='ecf0894e60b9a4b43f7d736c1c75ae77743601dafa79e2fd92b8c857dfb9031d';let _src;

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
