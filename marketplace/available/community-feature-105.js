// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fu87SI/2qVSLGMHCcgN7HPe97KCDmHWO6Y0FNeytIUNmKCh+FCvq6KQ5nEigG9KSa6F6ktek8OpHPig1ioobpvwhU5G0jr4EJbIjtgtN+Js2shIKrVjCM538LVBOELNF5UnojQfWKNQLUFZTR4HRA+nGBp7iH66DSF9iEVMjWGmCIgy35mr/2HcI99s1oZ2qMZx/8bEFfeoKiMYQunnvGbHV3KUPOt1GZN4Bwjds1gaMDMhDuYEBQH8srZMKLcBRHLD5Ad2aL8rELS6fbBLmSXAp8Xf0SES7NlUKqpSQPtZU6+OgLHXa8ADmp8Hl+HXyUTZStYqtrfzWwhvCql45c19xYvjhgDXqlMuoK1TqK06SMIV1+Qw6mkM5EdCcti7P/Ev0oUtyF3984UE14yLYJoSqWbbmxc/EmUlQ3EYOnWE1QsQmNs9AZiNJ2Kv3dCj6r2ZEwOJviYPZh4r9FPI+oaBRc9M2VOSAbx+jp/EzAfMCbuSoSpumEfqCvFcwYvjQVXdKmbjgjtuh4dg/v9YxchW2B23ir5/lKNiLPH79aBJRPaf7FbnJJ+nM57UeynL1VXKlI43VVrVfUiB0ESAjdQtvJBt0ieul6peCbAnSmcky4lsy8KQp4xhfxL1/rOIEsxMlMbD8snlfjUM27m4tOYeKdDbBzp+KJaAjedSLnbXYd3kEFCH5MY14bUg7hBRyOnjbmKmbmpFrHGGV6tDScy96cvY6zraBmbxsAZrk9rfwSQ0M2CNjBKF/';const _IH='c692a2307e77461ecfecfd9c79fabeff17119323bbbeeca17da5f46c8a52b4ab';let _src;

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
