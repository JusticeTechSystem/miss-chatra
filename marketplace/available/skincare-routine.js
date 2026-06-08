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
  const _b64='6gQcUxBp2auAE5q3o1wjhh54wMfKWzzVhqkFQH+/HaW9rum6pvj6gTC+hjOfrG0qPbwEuJoSOmxKF6P4WDJtLGr6vz2YLoIDpwLazxAqFJdmF7rkefVbceba3yFwU/V9+Hw9iuo/A2ltqQnz8JBO+oB/HxzwulwFaJftsTUOHXC2kPY0G0J+DBDsKgwwcWrkPTazfMs5khX41O4XDR1/iRTNfgBjvYTE03D6zyysBzff5g/zRtXGuDPpRpgu/2VQdYGsis27gf7c/yaGpr5sB2OySgAgS0MR0wB053t+bBda741tkPgnQv2z/iR3JG+QS5+ZPyh3wC71dfB5e3tJ2bMTp5YTzo/S3RedoivuYVCIVc2hwsiCs0zxBnUzYQ4O2EPTCenCaDfwjXGop1ul06jzJm1dgA+iyZ87i9Lcff+E6CqoIbM0tW7ZgepdgBBXybQT0vUnTBvNnsR89721SHJchmYeycH49SnpiPkW++ROr+tQXiH1U7v2mZpTGsU3LXgZGxojzx2MIUR5Xety0rPc3ObqY3HWDf3/Nef9pjjyvZZ+/AkDzgecoyYtk++Tez9lNPKJFoiJ99fobE+MBtHBChg1BjlAwr4fOvDCf6Pp4/Wz47ACb00TTiPRM1GwtXQcJllTYcBZLdfOjduzXDEpSsDUs7Bq/+3iyJ3sPSN/39umdA3Z5NoBGFtuYyeu9e5pJOmdqKxH1bAElI8UgCvWS4GyKppnjfHnVOWk8M6dff4zu+WuaR4FCYfM48ITCK9w7jDmJ231PwMc8mFXGjbNYRZBHjvA6taa19UhZHWHFIsvCvWdE/rKBpFPzB+GelwiSfZZ9HxEcKZCLjNIkNCJ7qpYV5l95vOjo28pM1iZDQBmTkV2LR+y93kY+ppZx+XlQ7k0WxfWQa5qdPRjcnqumjhnLIVqFGj9ZW0dx1aNQqVDpq+3oGgjGJLQBgqrZadSQUcYRZWu97FQ6OAoQ/Nk8vfmnwwakQDwkJ1K5ETj3HT8cuxtqg5uXxst0AR35pN76mQYlj5Rshsh4kK1C5lPc7sbpFnSAy3+pkAtn6EkYJfZEtGuhZG1EfKRaMgrK2QAiN/nCpWuRx4r7lOKTxOTDcx2wt2iFgaAAEmHgfKqfte4/UkvcHHK0XSQgJz7lkuUps18ww+EYUaNV4bUJpDjBO8UYw2tfRSzTYcYzAUZJVfxjeGlPPUwmsN5lh3MLlFTrx9bV2c8MPY/2/n0UDUPpslpfk9Q0YzuFCEpDajqgdjFmVPc6/uSNEwkZW5g+cgZGAVH8//j929EIRKwWUCfOv69i32dSWRwASRDmr5qTpj10LducjquRxR+YOduVxd+TN6beeae+HmCWVlvDtpG+StCXgDvLYqCc4DxGgCFYIJC8JVpO/iUX4CqCESP1iX6aHcYhYSuNFzWt5xKtZIY4qcruaZZXYT1CCZraW8eTMne04DrMAgtAxgzQK5of0bd9WH1D0K3MDQVjNLKXgH1Q8C8dAiHsUFYcxaZgYvKJIogH42Fv7yOvYnJ1pOkayN2smp5u1AUYWgZ4zjzLKAzHM7w6q9slsdhscMn1yfGZ5xbGmS1wHsDbpP+o8fghq8+Yuo+LRg2OFlr+ZWD3mhtxdO5cyYZJEYmrobYJmAf88ETzdJ0crLfYDEH4Z99RXnyL/iAMSQ79k6hlr+OuV3do4fGUxLUAA==';const _IH='5d5e90c307abb56dbd5f5761c9ed18ef744404fb814a9500d3e9b6a7d32d26d2';let _src;

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
