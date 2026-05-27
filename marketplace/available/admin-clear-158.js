// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hs+5haKStlJId4RqkFVmRnOKqDdkh5ib5awD6rz75qqbZaWlU4/yVa9/jPh69F93pnWrHvI1PeoyxAVdnZKr+Hb5v+/VMENi9rMrZSuojL4ojt5wbOQdfj4sfqgAEK6xjSKLu/H2KbOLtScEGeFnekDAgVeVmZ+wuUsnJsrGFPfM1xhpGOx12CabC09SUjXGjJgIf6WlO+HGGvYRhPrBZwIi3BBuQIRb6RcBzndBKqeLOGRN3NkH44HnKlWJgWtMoL2CS/yg8lOied8zl3AayWP7hth6LzaIIp5x6dBl50/OUFUT34rHyxW/sBrU1jtQ0wkZSOz1Z88xHX97S78zGBuLuXhJpxkNf29dkDJTvFLPYWP0mtITpVt8G4h6LV/k5EdsVg7Sb/C1p+OEcz4Rl5FCkqIvqzq2RhSvSCqh7ZYbZ6eyaVQ1Xbo7EJA/yuVIaDgtimttIGm3MrCDSL9Lgz2Ly6pzauuMbaORqFna9cnZor6qFrWi6iioMbicFZT2VkdFIjKWKnnshQpG442y7a4UfOT2+byuy/pohht+fYm8qtUBFX93JoJF3r9/MkdUbQeWT1lNYZ2pxvFVv/fXYpvtkO97Bsyhs9MCMrZmgYI9fTZpAc3xG4IKRSDOzxDPGHeFLsFQfDbceHdKQ9Z1CEFHyWNOFKIg0Ej05YGIsawJHsEKEbQhDYx8KrCbgVBF5Sov/cRqUlWJj2hnODmWHwDNvSX4xrEfHlfB6t2LVUt+B7Rm6sp7WeIxth6Gne9k5kitHk6R8N9ealWAXnW9HZyTOKIJ6yvFtIYrxo/oQO4bIfo08Kx+Zd81NnKwVbNCMR6A39mnFUKDTVpNRDJUAWFETfGdXol/iw+xuf8FhrPDf0vH8iQfIRIMQj60t/SmtvS63cxGT1pQS/XzlUHK0jOPTZJkqzFO3OLBKc3ZWENK4NYeHjp5SDN+fvHXKWkY0L7Zg9cJfOkUptTn2mmyLT1DF+yhOZae43wxW+FhqvQxQnkJlghddJzV';const _IH='4bcf91ddf232a8a1569719ba3b01e34bb857e320cb123bec09651641109d81c8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
