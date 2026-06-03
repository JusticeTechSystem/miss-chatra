// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tzpkFiAXOeSMw2Peqqi6qdblhbkoC6jizlx6O/rYuXVrVowiMf13IPZ4HYrkkLVzQY1lCPin3ulM5cswzgNTCwAhIKvhJEraiENQd70ajUVDcbXaMJmv958veK0AsjbGPfgYUv57dxoRfY1HVyo7L8VIGc3XNiDSjLi+HOb1DHEAlDIBDfJgPA4qW8QuNusjqCb1cWYModCL8yFU5iIKkvOjD2dreHubI80RZ6wILbnZ12kyJz426FO5y5/UbT994pohX4HpN6T4mBzqQMh9WpHGy6FGnWbyZdvuitkMjwT+kk1jxxzsQTdfuVLvU00VnwSxbwaGAUn+8Okkg1DSfugBCECgXCSP9TtGCNwC+F4hS7QbfW/0IKSc2DiligtSq59JCt31aa5KCIMCh5eaUg+Jrbe1Ry1DwqEOwc+/wC1ha1TMQwSRK+ppXm9aiUhqkoX/Wz/BcaU8sPxWDJJ29iu1Q5rNvgQ/HH6PWGWbSkCDyNCiTFElItPiX2Zw8aHRJPmbJOEHlwc558AQlS0+nuo12kGmDibuOQ2TpayskX3nPdgRhHGzoEa8+CZFTpvP6++2c6cnLhcDpAg8AyNKNIacyCR+eamOJIeYBbTqmBljR2m6PB4Keauc7zzr3X+rugTCBpx/ZpdhEbuJHmGTk0jdfy7dPlgTKYzDqB7YAXgOxnqzoqQNY/rO9qIrMk9rCEoHBcay34u4pA87GncFWZm54WzfCW4V5gcgzze2TOP68Ls4/73E/x/8hLv/XOXQqBMY6xpvZVsoQEL6Q0Jyzu015yyujFFUAWlky4yJ3w0VUHVBb/DSfvCFDLUFfEpQcg86jK5BDRnvivNVpsRiFX9LGvEG1ppLL2gNKXN0wQ1AWFqvaVnRgjjIdiXWmAvnurZjOVbWWf3UmGxpV4p3csKRWQq34UMcS0fj9gPJttzaI3yS1FLD/sxPGtwVTU/KZEjA39cUlrSv2nwDQuSwR3zPFq3JfU8ziPQyV37JzN8YD1/AyVSg8RWViFnzunTlhNtPrDPV4Pq+5TYphGGmg8MrGOv6W5mqD6RRr0kja078OXlacaf6+/m23Ag1vKbOV4Q7fNI+9IQOrgmJQDbjd9GFeZa5m3oVXDsM7uRNAqXsoTDBLxXtwd0q5WJl9c/fYZeg1okN5Tx+iviz6RBbOJpcvEgU2KLuii5D9E+J6Z1aeo90UxFbXh+xxGvxaNMFZsJRnJFM5px52oNbjnwd30M1ytmUPaFUPQvJXEmUF4yeSsKL9c1hWQWLrxo2QZ8XwTU0u0wP9hExDnXQiFBTyfyt2YHTHzYC5FF5trlAt5eyN+pUWtJV0OGC1i+a2U4QRRlRLxtGlbP+6LlUvzraCBOileEg+A10J1jesHJXHiIy5grqrNcY3kcIjH4HW01P9hCj6jfTFq/M2Q4ql63mqDJUhj5vLtccCtz1BtwSxulW8D/ZfFCvImIcXJBcIipzccAUgXH2r2EH4AkwveltxT3kWFSSQmUVzwoyxUvAZFsqNACCyaCSe4KPSQZhpda2sZyVzSo4ODMrgBynft7ynbkGMc6z3MdXhZQwapDNVC65aHmxG6MdqmFq7aD0FQy7HjzWG5wLxELa+/K59Xf4n2Ze31rBklw8k/mU/PgYkBgv+YQT21YqxwGT+rqL4oqPuwPSwsZJ7Q==';const _IH='eb8edbdb980b13640a6c09915e1be3c3e1d44308ebf885e62b9334ed2f848c5a';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
