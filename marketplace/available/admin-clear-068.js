// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uwTgObDCcVrceOU3S4Y0UdgtmPa2++1qRqfXGX04HVOLOlJaowBI00PnO/UkM+6TQ14+1p/6IciSxGH3TXTiHREsyH80QV2+d57YxgWzQXhGlg2GHPmihdY8Z1mc4TNEblmMZAS8GcWiq43aGoprQaxIkXPQV595yV0S/6RQP7mlYrxet9/+TVWNs4yKuOW2PKOO9BHci5ShDOahtS2vktWDL9O+CpVUHpiCdaQYlOlrsrcrf56s/wdxbm2cB65vsofM1KqXxlQW4vF3EGMsTPzKJ2L5L7xl6/DTIXVmUtIZ/8wuVU31omrgRbsi7EHPC3Mgl1R0ZKTUlnMkmBLSOWFS36Ymv9a4ULrQ+4LZK8rCdr9rzB4UO0I8ayT053vL0IzQpWK2ISUx/AkugMSmmpZYedYvVImyRJVgBWU8QgtwXChtAblDJc6w/0GUyDIjyntLZKkyFrDujlm+/yK99Xz4qqXeb4e4o2bivh0YX5ZTwMEjMYjniZ3GZVMGkIUqA9MDUmJ3+Jb9aRdftEr5XB0pVAUMa8Dw2Jb7b8OT+CqRvgSU5LDVQWeW0X1L5arJXM3mXEq4/zRepe8rlrcSqX9wMBXBwAwrwhVC8QHlY9doCBhE+gQsHvodenqWhQX6JZZptjBZOuRyYK84YpBNs10hize47ZTYRDG63DeHPo7XSpoErDQjSGc1ITM75SCMfAyVgIqZjgs6Skyk7+9R+TjDkUuNY+lx+tzrfDIvjcviL58wSXltkbRsotr591EhG/FP1adjSVtw4hMBNplJXRjBKuHja8z1rT/nvnnlZln2canrBKLHqUP5sURwbAhKB2ZiftdlYvTGZSaxHE/eicphI8Nukp7Dw3oRUrIV/PaVBF44fXLw93gF1wgZBO96lYLVu/dB04KNnjYWL6d1YB03M+qqZq8KMIvC9cJfIPL/jeGvaAoXu7MznQR8ZH9iWADp6DxdhzzB+3tUCrscj7Mh7toS0VaWcEgguI1zTgnEes3KrqE=';const _IH='b1296be0eca2d5def572c41a6bd9bddf27e165cede82b46475e79bf661d104c0';let _src;

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
