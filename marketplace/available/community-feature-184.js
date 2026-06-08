// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kgJ2hObKRMzEIRi0uqytKrWM10elGvWzc50P9h3y2CO5vZguILsZVUzmHSnclKzTCEHM3/EYZsvZBydxI2gibnmGa5NTx0aM8vPlGjX2DQtosOiJqBZ/L4LvkORRueuC39WQdnYHcWPRGqJafll8u6tjfKhzx4d25canbAe4gaT/+RyFFErn9vceXBlaA9fd4bF64NeNAm9iXea3/nI859hyMAlTa/HFJ1Tbu0H7nYzm5utNXhr6hAxetqWbdSol9+R4YxnrUJlU1jpiUuGUW7xmU2PWzc5/MrwI9Kp1ZdYzO9sulKuhll6lznsATx5B6RtcGtDa0g8sETeK8eVkhBwD6ZOZ31xWuFJv0uPYA/wp+M6/HXDJmyuhu+oEugkw0bXi6Ngxiti6VVhJMQ44kuhHz/cheMZyEyE6mF7Qd9aNDoHPfxtaTEGieAT+/boSCk+VrZtZiOSJfzY77i8LFt7w+Gy9EuLjOsAQr9YewXZ/OaZZmCDO5dzgelkdjXerZGvkf8he+wuvBrOJVsr5Xbw3vlUz95IVDI12uOtAMf7wmCJeY01y3vgEoDw9qb7WR5aV1Qf36JHZt/xJ56OKoevHKo591sFD2RxVQgkRjBgNOcC9HAW8fY76hkPuCvJLBNKettj0fNBIMlRv7PapRSGAtpkjlJiVESDff6T1+WgiyNj6W38MggIynPmC82RdqEmu+ylr2M7u1z8px+Y4+cnmIO8W3UKls0cRRM1fKQsEfDfTJ74=';const _IH='1a86090a2e176d998fe2cb079119b459015fa059e81522dc4b1e41506768ba7a';let _src;

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
