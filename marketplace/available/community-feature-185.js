// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JCtvpxECDEHrKwVfF0dhEahaS5Z0kuKjBN3z28NhvYtEgK4eyRPoni3gZaLr8IaS1pIh8Tzm+lB5T9Fg3hx6ZKEcKn9pNIyGc4PUmSbUbkyDOhG2wMw/d4sDQDNXDLVaNWgpCF9ayQfl8jRUJjiMUVQkQ+TiTfMwY0NrIwCQeZcWoTW0uECPY9uutrFPrNhxa/aiiUPpmxGWXFLWwkn2Ec7Famik1ePZCyTzXq+pCyeb345JR3Iq+etiabQYMWPCsf9tr44ywuODdwNxx7irId7KqN5eZ5WREo9RPZl3N9IQpnrl+uLcQncHPMkkLUCRYzy6HFoCOn5JC9A8Hk8PdiwpQ6Ont+d5h3LmxUxi9uPxGo96UqmJFzhafcnLKLZPGAoKfkkN1Zma5K9q9pC491okNwDVV/Sp9+ThKfCRPgIYaX6/LOZ6TDS/CuOw0RCWuhpB+dLr3k2k41l/4f2TnRa8HDFUbMcpkYiasrA444jKBTsQame3OvDBYm/FVtA4qnP5dUiOh7DzrgO+wmlaQ50P6PQ2SeIan5a+WAomB9jtG+X/4qcBVFgIjvVPPwTy7M/hhtZG0iHWPKL17AYD5b2M8ffyTDmPr3XifCbVtuE5dKcUGZ8C1CBWeO74ELLu+JyKx9N4AufD37aLC3dsnkQXe0pi88wvxBrrFNbHzcpKFxwov9hq/uMljMvc5rOFfVTIpAyrHF7iIKvUNoE0IaKxsOQYPImkqtS18GIj7EIdm9yH4hlKD+tX';const _IH='f802679a1ac2bc1dad8818905144d258bfab31e7cae97113ecd7d522fae62627';let _src;

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
