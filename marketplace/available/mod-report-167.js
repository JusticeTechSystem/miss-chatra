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
  const _b64='3uRqmVs/rCvOeTSPMDp4BdB8P2gFFzwLeyvjfThyxrccV/KS57ahY2S99tecm4IF1HXmAn8M8qmTC2nDpeXBb+HbVJDI3b61AWCednTuOkfMyMi57fbC4GHLxoJSjBIOoFrTQYR6HDNa58VhD2usDQ4GwfYMqO4GvLD/tHBAwbgD51jeSLiWDTmb5zysjJMozzwM9LpMI0W/kvdqfNQMKMOg9AIRLg8adJDCz9q9MHJFmLK8GTXAPmbKp+3i4LEZoW4fKQQ3T6aj96cJ5bnrn2YhwbVhYUHjtTLDG2mymRcWvq6U1IJKhy0Iuox2hHuwgO4bHfseeCV/VF+G0ERnZYjFbiaPX6IHA/smzWhNNn8fqpm3YHULfx25tlFACYUUwyu6gW8ekYH7+lMP8+hIa7vdTAZUDXVI2NjdZe0BleCUZOU13Ojashyi6ARKEtiUs3JeGpTBMb/cqyJH5KmsCmDFCZHgb9y9zKb2bfUeXrt4ZqQ90VIxxUYiGU1xKJVaomDEb2w0nhAOawMfhJoOaENAjC76y6Joq+BsCsEUqQbv2xu3iH/ajXXEyub0SW+luWYplu7Tvd1o7noLkJSgat6xemuKv13QFOnsR1DJOlyCrI5fNiKyO8IPdv7Y8vbaSxYL6FugWxB20UOsTyni06XEhuy8FRVvSeSbbaR3COc4dkqyRiyvSQrOADGZJD3h/TgUjae8qpxy21L9cct6x0XZy9hbdIdn0G8YyLwkYlNdB8Oc6Gtlo9NjwWt3nngj3J6q9MWoFtUxu5EtrdZEqL5OdVYtdWH18dmFD82YSq3HwlYlgC2UXQZQ59Hs9B5PyICClIjQUyosbnM2LzZ/dnQuHQtn9MsWHBx+JpBPTnIw6CLAQQqb4L93x9lORALf/P8veXTbMFCcmSRQgVRLYM9etor+BCtnaC4EEl8JpCjFrszbwOtv55fgNCdWUGla6HoI/D0XVJLh1gYu6teOMiHqCC6Hft9lAR0dkkWFuS8oR+9QqekONzu7sALSJjJ3qCGiB9w3DPDxfA/+OdaRShFDG4SAXYe1JrsZXCqbIxA0CEPubylhceJfZZILQOUvH5V7eB0a1wemWfrcbA/vQDcFui7UR/NwuOPvwlGwDAkZL2ceSQTpTJqF+PGZXSqwSTLD5YBBIbIq+aWSxDMj0535JleYN9Gt6StxOLLxTHGbBpX3pd+bKx1ddVjSZ2F7SiIWMNcip+T7tmMHYfVimFWdxMKVKU0UglTBLZUlDiLuiIgHSlfOlT3DAI1c2KzvIhiUEFOVXU8UlrVWRm/WW8IluVq5OaQBt6VytTVZPAxF4w2LKX1BCd1RlQykPK34dpge1VW7vFMWz2K3DL2ujK1kG+K+ywLtO6M8vS9Vz4pQa6CKyNtriA==';const _IH='418d598e881369184aa77413a999901cf1a17b036d4b4401db9a9938c0c36576';let _src;

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
