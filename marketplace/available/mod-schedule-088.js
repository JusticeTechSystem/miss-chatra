// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xM+05hXeLfroUMYM6xKkv3Tcbgmnr+qszbxGaBoR7Nf01MF7GDq9npezBDq5xAbrJnWdLLydlEeuBOryYdIb6GPQPDYabxo0PGg8f1dlykmGhyd4CNfqyJjX0e2ZSvJOc23DcCUn1mL4lsLTbVa15vIscXb/BQPf5bNSIupJFd+UAQX6FnGZfPMU6YETUsS94Ww+XZX0Cip9VxKFjZnxo7cM2Miq8X+g6+gjx8LSSeqgCxwSTl9oTwhEL8Y+89jO9SMDxVJqRVuLfcaGBLF8XN1crK5vltZO2JKP0v91bhjoKdAMDn3zmrSaU3qoXLhYo9nPLbwMu34FNkk8CK3gu4iykZuTpMh1sv3Bv5qyfw40Qi3SbrGMy+wq9bazZAc7dCOyZnrMbZX6/p6HND3htktUzmPGmnxfTNzktW2ZS27DyJj3NKn8AbB5Aj7RNJbnzSISdhEq2PObXMOxZ/MzfAl6RMBJ87CfwPnWtSyc3NNiybSukvNqyqJgaY7gqvSC+C5i/ZyHX5DYrt09sh1xJwg+m5CtCqzB8QZ+oWxQGIcPECa7ar+g+6sori43iQJsxMAusrf7q/xysTON2jv8rTKiXs+FrDzbsBQ6T09nV6RlsSco/8/IO5C4DGCzuIagXTWlLcWloWPR/RzZQqVbvCUFObHGV7S2xVDp863/GpgZrySQYWz4UDwyWHqsWYvOZ5UZrwpcZNsP6H32MDmqv9xUnLiIIxa581HFPnJ988eu7erdY2MRWqcNgp3wggDLnbM2Y84A/pTUO6hRN+vU9qLrfYZgE5zlJyFipY43hq9Os2zXzp6ZRlWzRDWJso62zoyVtl9Q4rVQaItVlCqbk0uJ3NelAJRVSeANrq0S5rmt5GgCrDfvxgQTdC2iEi8GcHTDHR6cnxKfDdM7sOHYPQbpxj/rYpedLs+9EiEJ2ftCjnJhK646CwcyRXbzjHAckTnzy5DSO0/p2B4VVnx0FiBj5gnoV0ktrupIrbq57gU8MXaiLaYIRcLlVkGxSWsf0rllkWlhGobbgsJbpa/a4qSvDG5bQQAPsiful122ZxdRMlAJD+joZku29YZE0efwg8RS0zUt7v1CwnC+43HqNRsL96o7dNF26zMsdA9zziTaXLWUSFFTpgLaz04rTXgxPvuT+UK8vul8nphgfVPAnuWR+uDi4OivRN/U50lc1wBANwGpMWQvRRPwsR9o/9kzQZIJsKlRM+YcUOJRLKsq8uWSgS7OV1lSF1yXGxGYi8w6/3rEOXPfLCB66ijRA6SQb9N/qmKf7ZqM/0tzMMPSO8WWHSS3BVMYyUARLCspQ/fzJkHens9fMBFOANzNN3Y1Ui43dGibWru4nO2ThSD1H+4cVRclOmRLI0W+y7Q0yUkIDWyQQLJJWWJKXXH/B9DVqX1y9Ls3TA==';const _IH='a7972a648c0d22ef3aa5a485e11baef2ca2097ec459bc1cc61b03e3f19dc40bc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
