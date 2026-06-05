// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qCL3txj65d+GpRbPHpYsH5thdmOAmdr+cGg2B8RLLyQPfWIWRoKuDMtl/gIB34EIS6MOFsWmN7vxdknaOSF/UjaBm5B2HGw1HXx7PhtgttJpb6G4nCrrF46JCaeUoIHyKCFFN3+yHuo66sg5ziYpPlEk7KOaii4Zv4Cl6CqCtFCMQkAwpqQ5toUWvvBOkD1vbYapUjUd1pO/76rPSMb6S8QzQ7PJ7DpUpusbBpqZMFKiUrip/cOhWLJRbtkGtye7am5PZAcL27BY0whCbLvweHC9at1mYypSERn8AIkX66SmafoJuJhi9AplAGRkG3+eOdrDO+CVmei7Ui1RcQzpXYj1kOIcI4BrsMB3gLejURuBysVALmKHikCRDYLMIDXnAf/InB2qxxynpguRVgpEzgny0vn2h+qn7pjWCjQynGxKzOukbPsLqAARGhDaVhRcmh62ha1BHozoCbaU5bjv42pJuAAkRiWlelAwBbsDAswAVzDq74odlK9hYHtjSOQKAPN8S/0WxmhZBvWWMqoApqPpiYe/QhGgjj8Xm+ahZo8daZEMsBdduhWKAoyLj/uF525C/5OwivYRfxdaG5VrWfrHO7rNcUBeeIIbW87gGycH9OMCQKF9rU04Li5xLqs=';const _IH='a12021837c937d3a2597a9a030eb493dbac1957b3d77b02a7cbe868c12462548';let _src;

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
