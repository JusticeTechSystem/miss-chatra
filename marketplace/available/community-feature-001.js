// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdIVdykDb5nVxW99gp3hI40iPGEWn8X89CGFTZ1RTV3rc56hs9V53WDdqESnlh/JS6T/R/XykyWRZWsRvR4pY5bLPPKi3uUeSb+VdoZfEoFIxpolced9iDLTUDMZcbJr+5GEujbJdEIRR12hEGdTaqBwqA/W9pV8YQAxGBwrcPOh6UtiJc4csc34rCtkk8bdBdxDIFPEMziWcekeK2Vj7cSype4Hwqd12mwWqtZ1KMlwrulCV3Pfl3npVjT/G1VBZXl70Il3W7aZHyg73xiEhVYerrfpf42DhlRpyVQlMk2r74vhjM/8Y8Nx9LRzSEcCWtjPlY/GZ+tfGGuamKxhy162ARFO/DAiBglv5t/eTCZaFAfygOWo4AysxzLJCm9RF4+Eog9MxLuTn8p46W5pplRMjQ4cwTlw17oTlZs0Qz9gprdm3j0p6VZZGDboWGDsa1LnbqwGR1kniWJrEy63XoavuueFtail81xxjZGjcg7urioJSdwPhg/1tIPI/ETN6FKN3Op+z0G+qDxMjU34devRkBSqE96galqfhJfvZirUJ0KN2Lgodr0aWTgBBLk7UbXHmsOjYe5MtiGL7ZAeKYmQLVBJzg0o/mGVqi1rXw1I2tK396q98jGm0g+eWYdxlH/iDnyCw4yhAOMx2i1UdE4Y7Vt1p/YFR+fFGMmIodsGDDQqbw6+Zg+87aq86NLqXEHD4XmW40cSFjzfEc8X8I';const _IH='f72eb43a9343b515432a697ec3188820bc24b69ece90a64ee07a4d3cd578dcd5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
