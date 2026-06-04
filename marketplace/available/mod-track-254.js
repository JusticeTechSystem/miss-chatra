// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='60AtqEi7X+9vAgmghfOvUaMP2COdCdszCusA9JyFwgusnWnwizhOtevFgcWA76Zn/O6dNJ+mi41p9c62/MFY2GBpn/T+ScErV7AAl3AuEWkPELq11kyR66czSGMp/SkpRetuSg+8W2MFIw+5bkwONwD007dbzHS9Tp4m2xoN+IPkVdQujNka6wV1/2CLdsLNP0v4FrR3qRGQgMwy53b7C0Zlq+E2Dk8x/pUqNTz+mfqxpT2Xz/0fVEDbNQPVkl0SDBPrGFbHFEgFhGWtI0Ij7kPC64HOBVnNT+h2dXi7ZWjpz6KhiKluW8VGyEbiQOMKz3sQv7h1FjZMjL5kHnJK+oo9LQdzCrSiAxw/E7ap0LSvulxRXvhEtSOwOF2XHCf3Qv8qlwRPqeuC4TDFJYAWxr+X//cTzSvcijofCoY8rFzMD3UuTR9rvcJ5Ppc8H5Vz7pMBIe+wCeswC4JRdsB+e2YRlbNfa4PT9ISHAu0peAOmYDNLXZWslATOXOQU/IEeDYDvpAssCfRf8LG7Zr4Lh0urJkNEI+BLXZyW76Jtf1rDwqTzo9a5lnD6xkjEj5b26nPIXAuHoVygz+MXJbrovsKwNVHA0ozmHc8e8BavGEdqhs1+D7F7b1LGB4RWFz0L7sv9oPLhN4NOqnMK3tDZQouL1EnhFpuvMLTT54FkdwHpr1BhSY2t/Kd7d7JCQ4y9aCBuzqlUVKkvOPSuFWAqiBeL7qwW/oAy2eCHhC5hpH36i79ttH7yex3tygWxlr8SkHlNfDnzRAKgE2YSjVT8Ns/8cQ9eINbst2WGKm1p0CbvzC59129seefXvhvby7fZjSNQvvS6ByLlAKCCt2n6WPmLaCKXPVd1PSB3G5pTe7HlpMuai3O0phRxlndJup00wigIAmW1wL27NIL1VdOJgyOFkWNcK1g0FPp/HfGgQrngez8tcEA7Esd54GlWlDmT+rl+1Gxl7WPVL3xAwgq94ZDvU14QoDfU9XkbVUM4TZ5rZwklvx3GENZ5jtLM8aRpIKtyAiefNYYZi8+6U0JxRdOAT9AlygsbPlXWneqKmQOfW5PUSvifJ2sGdtSiWdNFw4rUd5ohmVZugJBYabpgeHpEgWTAKRQpBcFLMnZ/ZEq72QOhHw/0gL90JbCWJcMcCTbd1LMFz7CIXn7r2DgBVxXWLy2A8aasfEVNtL+e6Q5bvMaJARf0QAmQNfuhYsMcmIgep5STPFJHxp6DWGxR6XGJLiPQVUL4FloR1haAIKJXzDHUEYRLD7J7ulHKnr7eZHxQxkut2zpyLAR5k6y8G9Ej9SlcE23yfo5OcN5j1MWuzEDt70HD6/x5IRdF0vPOQtDIyXNU0qDpT2OQ0h/wt4zEgtBJZcAPKgkzfYdK';const _IH='7942bf7668a5e108e8d0ffdda32b6567019f63772b755c24361b61e6cc421b95';let _src;

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
