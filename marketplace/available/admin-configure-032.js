// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QAjY691XOSRh3kh2XmcxEEDrMhWAFLnBn3LoHnVKZB2AmJ4/YfbWYB31QbBXGIAJudSukWftkjE2t6iH1tRFLHLVJeA0J4eGVslk4T3JZOUpilHcMcZzPusQEhTy9oMk1TWsUIvAhkKE+0/qvreiEtcsbly7GF8Sw4eO5Po00KB8Xg4u2o4+QKvv+vl0M6qnw0u0/1r5NSZrecefXb0Yg7LRU031nWx6+2LPOQG7EBZHRgCpF1gGL6dJpsRNsYTLh87SYzGD5HTmjv8T0yYwno0KjuhxjV78wQpAM6eM3YJcxWeW3YdCWUGVTRofRD9C4jN3U1aTpbkwRN4LsfInWol4uc+np6M3AZp3+HpMQtVooaAgqp+j9eZQh5SAJ3OIj1LxT/zKolA4UZKE6Aac8x8nyiGcJmH9DUEWoYziTOjFDMLvONId27B8r8QgaR31xhL/+eKhez2LPNRkmcExAPvWNSe6ufRFLWclyHUhqmFB8IVEUnslYCzrIkwcuPpizKt70EtPJ7ICYzjT9MfT4bLtl6x2Dfafy/+DkRjgPFvTgGuSI6EwBRZVUnPbmPE92YLkhtSJcl5z9DoXjZuTq44ZD3tYGsG3jQXI/YRcTUwDpjJ3LpzDeLUefhoar7sh516OQWLyO9llUzX3/PBfTrkTHzGBUDB4xF4km61JYFShC8lhB8ftDk07BgkIbr0Bllx2bU2FOA5GP4A/Roi38BDe/km1O8F8m4J82QXNq+G/CW8D+odtAXOm3v/j14k3/0cNebbCoVhsKSs5HsjaJN9PMrUlRZMhWmLVWNL4Wrj3/61Lng00d+uUY6fLuOVpk858PuWTFLmBl/ORFyjkQpK7JNG5xe/T1o584itOrBZ6V5ctr4RLrIK1WdLqWLEuLzn+yJczEaotM+Lm5qeh6a9UKMXpWH0dELErRokE/HekpImvTGYJj2BOcvrRjbPbbAdCcCLIbp+PFZppQbNxqE0Ecy+yJ2QK+1LDZW76w5QxXczLeRm4ii7SOMJEikWTiUmj586kMpxKEztK/acU9qXo';const _IH='81bdf4eea0e2e32c5b5f2838cff2b47968b7e425755c7deca7fef3cc8d887ebc';let _src;

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
