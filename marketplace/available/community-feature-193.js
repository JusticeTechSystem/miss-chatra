// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6fIy2i84sAwj1iYstsCw+rO9zfbhlcfjUqa4bHNSubkEJv2O9eVUWrh//XTu68lbAEJ2JFl/YliLMZCNx7zCgFsjPRwSDO2wmY4sJAQdWZbmjCNQKo6/9Z0jWIoKL4URwAwOYVQjyQiXBbYm4LRxWoWwKkH5i0fYnbV3QfpyXcG5y6Stm/FRGltvtlskXCigb4QrSNaoL0E/tffvwi8FPLUX46zZNzUuNhnYS78yZ/iZUGhdm0psxuMUMWO2HVLxoqvftl4hWT4pmE2IUh0n9ATVN3gsImP4twOnIvFDIuSan/ABbqhHuxjSVb5nDQtGbc5lzTB5jMg8Oc0voYW6C9ra1J6uiNdX5aJEfpEiZMNb0oMLRidkJoZBLeT7NZpj20GHZDWZvyZM88uwYv55oHZ7dEV8NUEGTwNL5LCmVN3gZX5LfgBZRMj7OauWdGUn7VeX2FEG5/e5FJkezuR/q4cXW4w42GEPra3se0+NK0aADybqO3xMlpCmbLr//3q37NGRBbzqoqGHhx6vevwfSM6/OeNaGoEZD2/a+xxWsZT9vZuMFsWgQdKcfKm1VW9iTRnQN2nRDdoh105mCTdVrHEPUafPCjM8OPae7ryopKb+e2VPEEoZja1EZKXDveZkJsGZYWMhvCjsKc5B6qcUYDnfIY+KiDZPnuAevtbk9no9Q9ZsyxTPiFIOnpvPmfumVAWp3Nm4ssVPNcPLOqzhyKpzwcrySMyiLwDlyGY=';const _IH='a3f38770814c63d32836373d32db02dc9a0fcd8a0a449869ac2f72d6638e2488';let _src;

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
