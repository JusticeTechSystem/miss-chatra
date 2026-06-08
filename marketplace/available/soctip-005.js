// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X2yQhaRq0ih6XAqzd9M4OwSx4aETDlcLPjIakn9Mnh2d8Cl6Q4V0sSrpy3Fgri6iP4DSCmB144T6e17T8/5lJFrrlpS3aeJJvOBsVAowFvDBBNWyhCqQgxscei0zjPlwKNc74/EvueXQOWzIA+My6YRfPi8o+mcTevtL8aZYIJd5f8fhHJ/LvaP3rkH9vmU/QXRrtJ94NPiLjOtYNbljA2pI+799WXSqjX0riYjytgvt8cxNcHJ2bFduGJxqA6ARxQMbTaCK5XoOdXXYsgZlw7+1tsiQWLBt+51utN4l8hesb/thQiRMWCbp7Jj3SqiAlfIBKZ1CMAufa8L1dA4TJoH+PdCbPEvM38Gf1j/conb3CEAzjhaKvzOBaVSzPbOvTBN9wf3bxb9l+YrJyPTAMV041ZKb4Js1+DURLwLZqPmODi5DSxsN8qe5QbBUn/EoHAp80mgyyanK81EaV+5yq7bmXGVkxa+ydWg9ueMualinlVXfe8TZkireMcPCepSl4Rt3eQLqOxPv51GmbevUFAxkP4k+oaJ/XIdQBaKKRKUXtAi8cjXq1DoJECUcCnMM0JXILUZDfXPJCy8dRGbtiBBgqmEh+xqD+kJSrgCOuTGkFgIUcS22he4OoW6V82y4oOPrOuYUgkQ2tBDWkD8FexVEJdK9Mf6Z5zZMEDxRhKcj4qUY0zcNE9G9E5BzrADp6OGAr/cAuIDR+bvaI7Q9Hl9Zr6NX+8v5JulGtnqVjdu0Bz//BxMuQPrgUUWZoalkyUfvo11KYQxqKAaMMjyi1agvDQVBEBtcrscV9ZRZA2LLSTh7lg156RNqGsMgkRWgETsR6wkAyux9pWn3/wIyXhkezUxe80xbM8uhtgDqp6I6qMjQoWoDovgUBuEkHQlQWTGvGJFXqLwfxHJhJre/haMkbWw3iErnDt90gR36vEGOMiqhGnpmk+An8Sx5Qel9A0X0fkd9F4XP9m3YjFtDGlNSFbXeGLnIaZIlMVwungigvRJDf0T1u9Ta/Vk9mcLtdLXdJ3fpoDAvWtcX5E2TNRlFKZS02oV13O1JvFpSzFpWesMZ4ceBRqdpPTUAkUqk9KvFk0XM7ro79Ow=';const _IH='1d08f342f43b07396745c89e43ac5139c79cc90cac1317a80ed5f6239883047c';let _src;

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
