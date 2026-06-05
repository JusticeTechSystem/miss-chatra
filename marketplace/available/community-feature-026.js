// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SUGs3BqrVV7cUt+ftmohrAlFe2M1HO74T9UV/7M2+Z9Ayz+kVIo+KXl3cXigpOMlx2phah1rrxcvPyA7xsSjBBC04e0T74KtW5ABopX7EDezCD+E+qjPOo0aouzw19Jb9VcmLfB9+6wW3lLoup1hTqy6SFEmo4tpq/Labe8hygyDogSE83z5USMNm8AX0qiJUdy++fBMXAJKKXSX0DDARUMXBVv8Fxed2z85O/dAxbsy4qe3SuS/OsKrQNhGAG75f6IRC7Iet17Om59B0MDQdjh7AS8RpXoo9hTbECphoUL9PBpGVkJMR3glU7fbYDWf3nbN6IL1/wA70wsENBnL720BRqWzPTSYA1QbffQiK44dkx0Fu94g1hPlX4SKQj10AITktcTkreCmLUS1hTxu12a4c0nMlKFx51UTlj8lz6GleaYCWgFEZWbb1FVmkf5rGqw1YXeqYiZmpPIL/qw5CA27EofMq/B/CK4uVnchq5vejz0FYekRbgK5Mrif5CP9zN8OFZ3yF7wnjuXNk6FO4AZPW604uNwZtQC0ROSG+IY4QN+is6Z1CRzwvhF2TI8u8/WIPaiVQpQ7ECpPNx9fVfZPyR8PkD0lM03Z8mh9KJJZAAu3A1rIu8Y/wqjsIwAsiz2vPEaD1jx3S6oCW+SD1mNWaSbMY51nDuRrO5jmwh5WzfPiQpB8eJClKqqkY8X+DUlw7jibdrzkUFnpVCp0hRp3SQI=';const _IH='fe1ea268ff87ba9fe22128ca7ec969ec1685169014616e382a74b62975657085';let _src;

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
