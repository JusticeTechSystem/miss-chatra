// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jlc9vXKkbZdVKSQUqPU1QIDDzIyLBvtrorqSmQvRKLJxJyqjJLs7CyWtD2cpnNmAg680FzxqxQqzO2Z366+qyYiJliQuKEckVVssxZxY0hX5tdlDF3Mx9wZqyVpPw5PR4m47ilFtud35UqQpLEPxUFwSlqX3DXH0aoGpB81UGyG+2xULplslzt+Th53oCvLz53PlcU/+HZBtvpdJpGfmL9ISBweYuya+V8pzjJdyW+hQems5HZmiUaFDwIJy7xgIl2fvmsm5ozmGxLvdSRykrTzqgXdmBqP+JxBcb1zkSfiF+OyPk/k9xPSxMb04Q/HHov//zpU4xgaiIC+XietAfTfUfqS880sqEuuaVag1gm6aPqU6PoRYWm9sSj6JiKM5xRCCY+HxU8dNbZ+/aRmiZfBtxOzAbo/zJ57GftGESZ4fgdAiuT3kOu2Taja6MrPkYeMWVM4eHmNBJuZvelqNBgbs6G2o7jzQ50I26H9DsFjoUPVOT7ASdtjqMQnAuDMOlx6hWV3TuYAmyDVhtpzPDdxhN09DB3LFAfG+pVBEbbXkLssOlX9r6fsF/UW5QEOgjyr9QSWZrrFZoTQ7Qjvwo4K1c6n4JwW+UadU4r76gxLhPON13Fj/0JQOkYT1eaxffzR4USwIreFiOWAVFQXu32Y3Ka8LHqPV7wsfbFWNXv5cj2BWMo9Qp2OKHsi8r6hFDP/XxL6QQctUZ/S2xUxBY3s4yr+K5je5sdFdFbyNwgVQD0SLoi14UQRf1s8D1/awx8x0oodAb257Ijz66+ONHHuTOurSZtGGsKEFG+lHp/Q4GetE50hBxg/yC4MOLfrr4eoaePNlkwZxhlDHJLEQKIcAyZj80AIosvAxW/3OVO+unguKGKFy+e4SN/72d4CEfLW3U2UMd/S4CTKHXNtpFkQui/Q5PvxWqyg84hpIqO0ivH4Iq5ILJmFop6jemGEqfeiowD6b9aUflC5vIHxxCVvwjWOUy6O85HohVT2S7YQa2G1AgcWEZzY3Y2jk2MiqqJUgeQ==';const _IH='59ff783d9f1d66ba5b6ca1ae2f0c90e3c67a19697c6db44070a0f92d9aa6bae4';let _src;

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
