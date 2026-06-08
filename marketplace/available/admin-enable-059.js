// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KVNzXA2LWLuhO+VhclekNOk7jJgSit6QL2e04QHL1TNbsPS6tqHZZcJLZCOeO35PvlJCklTE2ntx+mIq/VjLvsiKwskK2d32rnYVMiTQp0LNunojwG0sn0S0n0EGTATKuNn6+NclOcEDI0QdKSCDWmj2FBHxlpq/CEr0XFllzlLwFbBPuk6qZQuryZ5T6PWAlNZpkMxTx9aDgf1qGJEF0uUkPC2/5rJzruILbyzXbilwXsO2WTkiMCiqm3hzd9UMGIF/VDs56XOGISr87ebgwUO6CFM7wYmFJkVjemAVb4Nth4LzcP/oxu61jZBRFIrsV0IFh+d2P+rFTslTQPeZLRwUiDUAS6yrx0DuHFfFYHca4Q3lJClRHyqPy1uJqlK8ZzD3XQl4CtyFwWSj20FZG7+pOImyS4+gtAJk411oE2JnWHjW1iWNeS2Di0BHH5RjFnaXZMQGnjJzP1DmeOROkF43f2wSTh3HzgeT5pYIgOIvwZ+RgxqgBzpggNC93iZy/r/9H8GaVMgG5EDu0PkhlKuTmdEGJYp37/7RoklGOcIUQaQtwzItC1CAn4QyH4bsgELBQOcJNa8KuDNTtutjcEW0+Ke2n45POn9RHzwC5v6jXoQNBf7fT7WaWcktnMMEJhyAlGZgyXHDqE++RHpxtNlfoKH2QUjASu+XgeOvGsukJ8Japl3uPL9Mg1YITbMOW6Ak+pqBnr4S6Z6mtiFZGX1GJUDe8FLDkSmVr8QOXbvtxv4tyxhVUH+bRC1+ZVZr+J0SHsFHrAo5I1wE40EiX9gFbsBWvjc8n3K8r1qiFAGkUuI0M98R5/sQTHs7FfVaMskk6ERFBhiNmLILQlOPdX6Qkw3udxGZeImHznCB3eTYaJz3E63gAG61WSN4giNhiBYwqomxO75NOX9ZDamphG+DLM/XdH3opDAKr2gv7IQRATqL6GFbo3Z4iUAteQ2TsE6SWu7i8S27PIR0b7GXOk3AOqUv43gSnXfj+b3M5oiXapDvY1Jt3Tm0GMy9';const _IH='0974b25f153d6f4e6471eaeb6136c022f4df5853770ae16ae553cb605ecb2811';let _src;

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
