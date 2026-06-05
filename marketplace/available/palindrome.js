// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OKDGrlqPy8U6vDv4jxo7qT2hfOXjjtGjI7wEuaUsjpnGAh5bZd37yt03r4A5GXoWzv+J1PJt0/6DKX7ukKk2B/KjKB6aw5KZhof77s7VTo8CjX/XN5eM7crs0NXSKEWtDltm4D5yoTH3k3sJ6FEuxBlMO8f/YcfxQskXtwGR2cxwEBQydZz8WyDtq+0wv7dziu63pMKQkOqKDf1LUxNNxRDDm2j3MyixWJ7E4Uixa61YmHBhjp3FodUma0RDo7dIHWRwkVOOYuQHaDQbSiCkmxGByrb9zXyVgKeA8YIez2JFDjf31Tpr3dqSsYRiU/c+8jl2hTwywuJ14jLPQlHSEfMsEUd8DD3w8rDCnqKA0GGtP8czgg9AEij5AyCb74u/ThyKwnIWCst4F+wb77UkYWAO0ekDoiU20fVhdQ8D5jGNNiewPwMeDevdR75PhI7x1vN85BnerFhz4y8xtnYYDZ3unSoIYmhYAoJ69l+u0IINIqGrJ7dyMOplhfaWan6u1DvIEx+CDSBjrWiAaphJySpVYUjmV8godPZhwALDWDUFHAONuEmFJUVEHCRDkiXFhS123vVhmvs4xG95OWZ1ZbWsxi7EU3vvbBqYKR6/w+ViqeDxMl5r3beA2fr5FZ1X2np4+HydxNv4LprdsKHxjrwmvSNX+h2DpJw8E9bPNXnsBTJljjyqM+gzOvfd0ur4o73dvJehZJT2Ogi4ADW0CD+UqLsItljCeCBie6FpkipwZLYCdbwH57Ep83j/mV93QCCmQ588VuG0/96mnyUw+sO02nubdWuFyhaCsGgcZ9bXsiWnZDWUexSB17bso5ovTe/jeF0DY5sEhyL0Hf7D0Lun/yjpVcidbEQtRoYxjyMH+/B9uAavb1g/CcMRgMka4dR9I5EBPLdjRy5nI+z75ouMpX3XowgP9d2JGgg8YO+y4PZlwrCeoYb12RF8ambngA==';const _IH='3d11c1a90fd302c61d618cdf99d9fe8b7eaf2b8543a03987ea7863c345579fc4';let _src;

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
