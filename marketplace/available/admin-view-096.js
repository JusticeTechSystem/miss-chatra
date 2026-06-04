// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V1QuSo3R7jhzemxXJ/gNN7FAGKHfU+e3HIxHowvupxHckGvGq2Ab1gQb1pNSOisUFex3oFP4DJ+EYquXYb/sjU6C4pkuUXUn994WW1nctheFVJBKLB0bKBqwgAtgVSQhEQJXRLPkAbQKsRClNQO17BDxuTsp1SIsYqjkZdPxjWDZlSBXAi857u4lvBYje4lWZH6CiBrPB8DedKlqId6dUMLZe/2ZgMp69tqwc0eg1XXNH/Lx2h3/goYjlvL8MGyRALN5K408t340SS6PvmFVmwIuMbcq29HBixAY8ygt7lgOkksOmDei92K24MHP4bnqvRutSyyQHPjRFNv0KYkvjd7bvdftSNNItJiPC41fmU4gbzdu83UtnXvva7O/DKRcV8Iihxc3d1RNlcmnKO+pAS+s+iIU5I4m0whmuyW2QyDVNir39dIx+0s048YA0UJ0MHkzACgac2F/DIHeArCZIVFAzXFWNpLdy6/2CxTcp1Ss0CiMPxax1IaGHblhut8z1fmaR00TQ0KlxEJN9TPLLxU724V0XfTANnL/r/c8qOE0lM1HS03AxfNof44E7zbYJoxMZWUArD59FAuI/i/HA9qhIX/wt6rIscv/BeXkhAevbE9S1Sw+fMZKQvUHbju+9IBS6aG+1d+pyDz2KX7FxWTl3QVAKP+0AbBkJFLz9a1ov/4KzWY0jTw6WXPUn7DP8mia1B1397oIWyv19GGY3+m4N2NoMM1CkNSiEsnCONz6CueHHAobCfQ+HFNB//+4iZpywMvy1F1UyIJsuDdbUhndEFoB1KT2IT6ATbkIqi5YcDxTJPKgPv8Wpyx2R1GQSs8pxF6GjLfxpO5S0NDMukh2OeIlbIOzoiHxt+/TXGqAaFGTOWEl3DItO2HTIOwW0IDDejIQMQtSCDQ3cfGBom9EhtqWsuLgErPRVDCfkXwYkug89OrZR9FRn7zRWabBWY6/8BSjYy01SlqdLjFeCj3Ny7CN/EPY4pHLMi1wQw==';const _IH='023621fa73475e0a1e529866b5e0f865acffe59ee90cb8fdfc1e0a49b41b2aa3';let _src;

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
