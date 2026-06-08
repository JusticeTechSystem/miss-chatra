// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P//ageZQIy1tRWKeLjEb/M4FoJ1Ugk8Of7I7CrH44R9CqAv9Ncr5tPFs2r7GxkNB9EsImSO8rZ+odFXyZd76R811mtukfTd1HbNdZnau2vBH5+19+veqHR8u4ikHjDFnbv8YmUnTPWqnxfcc+AFaFdfRAIyRIXhSJxeM8mlvVSSOBRmpJtAc8QVeuknNwplSAlP6tJkZXlZffzjtxFdpkRITqmgOKpsDHI7jcrYKfXn7PsHOuO4RHAljTXBfwPllhZj69Pm+TT6GWWryQNRCArs+eoMsVw9eDQaAaial/V/7zALmG6pvZP2OHOSPSeQma3LYdJut40U8NuMcnS1p/IWTcTyB7a6JqvreBhqr9zSFz0PucVdACqBCL2PomWBXzmQSWxECyB8CDt9MJhz1PjbcroQ1njR/Zqwv41bHKkn+ReBMYhzTeSv4TYHUlTyB+6+QN4zoEhuJ5PerQ1m1B/mqdf43EdmYrVghpMWtK9jVNTyNk5HgOytdo8vZ5k1zS4/nxjLQXu6GGf3yJ1beFLHJInBwEzf1EhadvmqLwzOJ5iENlTOf6F3+tZ8fFE2KwAa6X7ReUCGW7BEX9hmSwuoQx+udRRoL1hB0amBE0LnoMdf6IuxDtZn1d4gJySndH0FEkq2MS8WVNJClXJCCeAJg7+F+MRzgh3h0AKSun/lsQ+K3zw+18E3AoYjmSIsvjy6czs/opqk2fEDwaVBg5rXI3iiPkieWxg==';const _IH='a2c0a30106a4ee3bf0366cadca6492249b2d822587d76bd37b263cfe4d930936';let _src;

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
