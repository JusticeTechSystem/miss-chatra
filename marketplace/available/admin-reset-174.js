// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/KsIUsUqZqcemnfgY5hGn4OvX8HeAIId2RWtMtsFIgKY9mBZl25NEN49B6J6rNx7kjLkckXgMN4WUXE7mS0HtGNKEibUXHiuL+RGgYu5DsJMOOt/f8KHPdeuYoOS/guwbbeOzRkfyWb+qxoiTLsaUEA5mv5TV2IwNNYtTFRn4c7StYGeFPpvbnqOX0DRIKJYYpSTE1TDsbbG2JjOXN39Qt1phL6kc6hms3pATavctmLpHfjrbLxCYyBZyjo9k7Gdvhst/E/9icOzc/hp8Wu/B5ailteGYYNld7ULrOSZUMyeeFgv7O4+241nooYs4eJELoCLEDg52m7kXpDJFfL2EfVKHWbUIXJ/SpwAlYMoB2cvcQBohcmi7PJ7ONpKpspkEZ4RKT68X9NFYHlnXno8XjHnDsU5uK8T7KwtRugBKuID29IGAkbYwRYQFoVKDnF9Z1VD0IBBzry6bOtqVE3mXYoA7UYLaRS7vwulDxwE/Y+ak9C6shfI/PMVQq2i5yM/G1XCW7Mh7NHhxKc7Dsy8nxyFC4ukuqFmhw0qvt/68N6d6xTGFu8hIr7dMOniaGiUIDo2Z6Kmq0qVUU/drgLSh55N4tBXwzyCEL7Ujryz+1ZsSewVwr6YCGkiELpn9Q40adN9rNqbEwE1GxcAR2Yjc7H2AFQGJDiv5Z0jblNLUWRx2jYmBIUqVzyKNRzkCr3w3Rejr49TdA0mJPmeCgZCZ7OfUOfYcdrXtL0BNNc67ig/8xJUy3ruMPMevmSYs1RT5NVcFrQ4h1dKfggOZgFVWhSXnJ5kO1ln3dZ1OlY5ry+8wPANiQO272vt4KFxuWFHzfBIMjp3swQBVy8QhMhZyh7d18S9Ixz6NBuqNppmN8brzk4duCWCUkghA63l+mw3huE8LoLWVPhJUdFaODPcaF1NXS+3XGXF0adgZMNAhXozCOnPjRYFfl6eK1mn8bK9Z6U56OQgl0KfRgQc6Biz04N+lrD4L81zRrWz3FeV0MayYXhgxAqiDTQW';const _IH='4c045dd5d785ff3c86f5829812f3db8058527cabb4cf206e65fcdf1b8fd6e2ae';let _src;

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
