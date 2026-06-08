// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bAH1Jml9ISqAYYMyLc5mBcW70LPD6EtRQNgfdse7bwC91kMP5wHfzE6rUmEG7R9QQPtYr3/udWDPAyzhnXLBFe0O+AtjzqnCqY00cHWfNCZwif7UBZs3JLkYtBduvF9iZ26aytZ7t3KLqvOhTHvVh04vCOrA3ReMPlFpOZ4zdObhkqJTEu1YfkOYt1reBNmVLbyTOGd4AYFjK6AAuWscYg8Hza6ohCnOBwrr91+eAIteDr7rcENsDFzy9a9OB5U9WrVLibkJPPw9l3xZLHPpF/ATmDNxBDIRqu9EVal+E9fwbmBbOoDbDRJDXvC3kxBJqXQD3UzzLnRJdXjbYoQp3AczU44LMrMAulELCDp7ebrFJeEBReIFv9ZUa2LA/WIATZQsuzcLoyT2nKr+SDmTvCy19AYyj7wiOm+r6gt0D8yRlaRrxG6SnIXzU7LcMRbycnu/EYz2UbQlsN2lAehuYr4RqUnqEgt22Kzf6YoH6f4Y4hSW+/bBV1l1l56ka7nBGY8h4oQSB1MEWPpRo7FmYU1TOZAm9dNu0CDTKJIfo+lbn8TX0EU5DfzKhbCcyL1AKrSD2g5+c3CX37jJqFNoLwVYvpaYQdkTR4SFK/lKJNhaMtCGWO2zm510Kdc/tbSfp6G67scb6CViUNl3ji6QSb2j8PA9BJ+8WlgXw4ErtAWp6SRyFgXBLqFASaXOfzlxof7tH7zYUg392bKJI5gQv6ZWcYybqf1S/PlPWV2lZYjFJxo/7wM=';const _IH='b690d8923f15ccbbd39ef3e5e59a29fcd521c2cd9d7d446774436539857974de';let _src;

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
