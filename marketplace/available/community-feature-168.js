// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L+KuRrasB+GhloGVljkQhZDy4b/GApCbOPOVO/44BF99eOzpAGLimkq7yqwRrAaXi7Si8kSgmOXaYd/u5S4ugCCDnOo2ivNnTpDlIjw1baKJL0uI4hAFLDXso08Umh3y6rwQVBPdomBp3BgrOoTtvkiXWbTQrVs3ZVNX5Vfcg+zNDoY4z17OSrpW0kIW2bz8WvT3C4hqxAJ+wWvX01Zgky4BSmpMXJviatDXifol7DEOtX/5x7iGyqp6qzxJgeYGnRFRU8js3KXCqTWSwLYVUUtrf3gi87XkYoIb8L/Gr2jCvSdm1fW97YiAUmhWF9Fi6thkR1bmr3P332GwBTzBcc9WMeMDZLPo6FOcSTpwUqukzNPXaw3uQE9E2CDGxITqmNrp8CsPtikrTouTpAXLEXYL4la6ArFmK9097iCOMO7Kacfc+flVImIaAz4e4rdKuknTx0Lce0+MplktKAFf7rKG1cqg8h8VM/0P6jSRS88SAD0CZv4TU5aQceme1DWPb4zSEcXWtqil6P4mR4CVCbnWbxZ9aGp0zKGQ52ar1a52Z1Qh1GRkIf1mXtTs6xBnl2s3rs5FHOeGXOmMGR2jTagBrqBSsxbqSk4BGiHTCwvN37Z/EBw8eMNo4DKELdDOUkXphmLI8iXrOL1Shyo6k3sMk1MX1sTZDTkkPonEiWr/q7zwyBE4MhQNOOvPF/I1WSHAPyUIjT5EfooTiKNC+UOL/jG9La1vB4zB5ME=';const _IH='8a39099ccfb78bad52069fc0b5303c0290acd3fae61e7e1e1d43b4974ffa569d';let _src;

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
