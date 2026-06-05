// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DCiYZesZ1IUb9N8iH5wfYAeDyE0hn4Seqa/QiQbzvzBYavSJiiQMP2eNSj1n/+JyVndukzfEPgDN34AJzmGxurkvqGuPmgVdYzwbebi/nf4OOAYafzWqGYdyOzV53M6oElFoCNra2lr5ezpiwg0boZchrMsTL3jC7lfqTpHDAXFnTDv9oOEFA+dkw2XK8UdCPSmg+YOmfmy9DD1GuztomFlOHmXf0TnxjEbqqiksNHKkzzQcR1CmmDlu8k4ZRughkgE5nSISPYSRZGe7Ty7Zl5beoCDfgaPby/BbJ1kiSmCq0dwCo40XAERCYqBkAnHndf0eYjjmgKc7+cUDYjDeERQ8rUcnBsMX0hUGsr9eYHl1l5ff7AH2nudbGeCBP6YIV28RfaA3DvwpwrdZvINjaBsM0trnk2w6yVkdgNt3bk/GZY4swSmndS2a08SyXKA/iIqWWHYJr3Fq2UHgdi9Ja/k9GAiBSZSUjswJikeFG16WKg3ZhvCkBr9aqMpq3/20NMH905i0WsRRWtc8AqX5EXd2Ivbf/5FmnAxiVTut6Kw/wxxS0Ymynxd58lVUlT57pCCdEpvPZGuoyNg1ge6wP4QOmi5jW4nwJeeaLzYelKNPobMpZu5uNq1JzoUf8qi2C59r4MMsEHMEDHMtQnRS7GPOc8BXANK3dw==';const _IH='726cecd66e09dc46a8c5b3877622ebff85db100a467ada61543b28be9f6a2df7';let _src;

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
