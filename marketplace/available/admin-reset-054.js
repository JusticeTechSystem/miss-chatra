// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V4UQPbW01spQIdEmIBZxQfdnL9HoSQhGqj0apGr3Xb9h2oA8jzqJtm19gB0qriXl1h0VnlolhsOydnDBTIVOOimgAr4H+y8hxu3XPdQDjufwm8w2N4XJFxXRDaE99f7TcahWU4oigd6RA2obbZiRSpeWQx2AShPJrHiBxsME62g5Dm8rYUr2XTh6h1B1vtViaEFxHmRAk96i9MurZgVJjEymS8Af+gtOd4HNdJt6/a1UmgTOueLlTRVagMfAtDU3DlNdmPIwoDQLbU0TtKzBTDyeuFtoSt/N6EnmlbfXnulM49eFhyG9nooRcBvREcFVG9/n6gA8vrzBvIrmmkUzbXSgr2ffwRnUg09SyXbvDtSG3zEnMwp6sxLtg1iAZecm8Ds8FKYy0RcbH/AtzO22Fvt0v3NLXwBeLDScqlPsqytAdVeljt6twkvy9H1l3vPrMecdHVIUTJD7OTQ1zWZlZWhIZrnKiqUkRlZVg7D8eQKUw5XWVrR2/eeRZ+S6zTUIhGKU1mCyJZkC2yeBuNMeXORS7G411cmyEo+NPwKKZ+/uFqzjnHGD4L5zSi0nYr64TeUluLD/orU6Tv6ahB9IIB0TKiZIjM/dPTCjRFJ1/n2wrYFl40zMZsSh+IfJ/KQAA7DzC2fMnmdrdtjU8FjXZGx1EZtJsUTIsgoh1LK0Pjo9f5jQkUh5Iz+2oBkBBBnigTbgbMoqHFlPvw20CvCA2HhpXVb5PCTj4+sqhC8XffDr+L+ChRNKuBJOUHfcINffwVJ/ryGkpI8MRAU9pp4dnAiRdYwmfGpUqrCQNjU0taPzxXOZsR07XFAB2ycgI0HG2yPtoS5IeJFdjWigI76dxUR5WH+0+fvCmj0S+aTtwpo2WZ8s61Q67sWOzDLv2ioTvsl00EhSZlOEyE/Ju6YmW2yskjnIUB2ZXruTBLuNqvD29f4iVYAKhoeO6lMyOmHWJCINSuejiMRXclNZIl4SdlMtEraM5PxPmcCP5kaBx24o7BjDCCI=';const _IH='1c56848991508fbffc00265d3cc19f87ef293d75c70ecbf54ea678e7b56cf4e6';let _src;

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
