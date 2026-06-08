// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N5qwwB7eR551nLpHhtcQlfAiqdusBRDlQRipWOTiYxwLQTVE5eF1px6wETMpc/e0TdF6Bx+F6oDobFaWskameb6H9mjEF1w3p21JqFcXFF0frh9WeMgIG2b9rZBXBYZFzLX0w7ZJCn9yYJI/geYx3t7sqprv76QY52Xs/c58ac4HJx7hcrKfYPDXnypRTVl3vNaOw3i+mnbeWZ0srjUYGH7q8rrX8EhGYeHawh/DtgllOaEvduTWlATvB5NeZ1LQwMtNPgiVwEpsQ7OCIdSdli1JRDQm873T0qN44pl0T9rWwuWqILAJ/xGq4r88K6In6yAq27E5hSHy0+w//eOx+UmAy3QvljpVEaizDKs86/Kr0zhhYCb71t0S9ZJewpmbx2mld4IMyAFdXsRQl1qcL6m0gWVj6BngVencd1mplFvdYwDgi0BWb8aqIGoUwqDxdsgEQLgqMo6rE7P5UW5Sxy4vouKhz9C3W12Qk3D3CU3SID1OQUyioLzyIJ+NA7OYmq2whWHGJLdPVN0BgNjd/NNu5hFye6y6Q/5pfNSObuLmoPrmiehReqKW2lXKlzAiFwVXyB4Im/6LDHe7fh/OJcQ+On4RJ5B8jD/4zhY7+npe9Lkq67xH/7V4Vh+y4MULMMHMga4yt24fD5YqXetVTGoZN8bf/8/6OHqVQczJD2s45N9jAL0LwSFCXhinfdETrI6Tn4fp4EfS9QalS+Mvubw+gO48fSKwWXfFS96F3Q3QHJUb/m2Mzfm804JVlHSxOe3Dul27Jt+MBkOOcKMsWTcqyZXsZc+chLiXXTm97CVVcnVyghcg2lT9z9PXly9iGHICYpNHJw2vprQEUt1wYmPIA9md+5cQ2tplbWDqDhVb+rP7BLaRAeVVXul8Uso0qetw8FCZUzNZBcvwsZsKRjEgn6t4CEgk82yZTCCQylSfllKH/TDyFd3zde6xg4xCjqTdrQciktHinxlQSF4zIjWgPaw=';const _IH='29555ebe3e6fb56084f39ca20d0d824b63e5964ca8246853159569a0df428c46';let _src;

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
