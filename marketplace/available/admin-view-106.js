// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T3a6FKghpIQWnBqFHpGVcg2Z2tVCt320fjoHmwZpRgnH/xvfIlysH7UNe8DH/Squ3tXjnS2iARDjh4mEpEoGiaMo+eGtQOpJ91vIn24zsf3NKbzvO8WFcYN19BMgnjaaybolAh7IXOd7aoyETDtrA6aLQRXRbeKDnk5wnyZSSMCq/zr1DWktT6By9rxwlryAxiV1Q7+Hqo0kY73Ub0MFcX7Bz3BIu0kFlp969ZN9J3VsRBEsmIrzKFpLG0l9mRP1K0BB5bhCbLfMqjigOL7dRedmqksS7f6fB3fPfnbLRDgoktG2r6c+YChiPUTp4crn6K8oSNz4yD1Sssy/5uinzRJxUwe/hKlWtQP+xV3zMR5gAaKg/gUDaOj1XhUccgMo8RwjkcSKM9SflSn/sSiEf4HLDZvDx38iIACMDk4ieSr1Dlme61c9m2bz14PJxLQf8lDayYE9HJVUvYFPGbSUPjKjPlklx46gT9Ed6hGA/szBreZHBr6Pe1GEq7Nn267j87DR48Znc3uG6wrG2N0GSdWW+VZa8kUmd7w226FaL9nL3v6BXZWlrNdEcjWQVVJp/bhvZGTqHQY5c0MTEH/V6vX7MEXs52DppDmk19HqLKv4KSc8QvpFKyNS7iD4ekvk7IU0llv3OQcmkBYFiSp2g+rflb/6gDt+Hfej/gDd2p871WrTAB7NTSdOigfmegsfys//1U7cCioFHYKpYhM9vDRs9e8y3ttWa7YtipuhUemvZCYea2cyq2gSpv3+zpapIPDT2AuK7/KKvwHjw5Wj7DZVzzyL0hb6KvKKyyUDOkisICFZP5EiIUKkhvWoyX4McnCXQF5jJIrBXHsNaiBvVLMaywg707xKsWTkU9A6lOuJq353NWiAQkLOcQ7S1wv9WSQQTNTs2kbjfLIMLTtDkQfHXEAywEpwPKQR5DzH+eC2ZdgOxrXT1e5sokbujQycuUI0ouoaJRBxHmVM3fd3nI4uVyfpdpeUggsNnj8VQkEMNZ8=';const _IH='4413b41f5868f1b12f5b5013aea4c074a3919a331ffe4574245e41311242fc52';let _src;

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
