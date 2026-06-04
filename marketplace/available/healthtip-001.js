// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nygewk0+Y3OCqtV01cR+oHGunJVliNAsYfQAn3L2e7vS7P5Y8px0tUAjhgj9dyZlHBBXubtJ49m8wnDPYpfUy0KZ+18FaG7WqbR95uiW/+jSKSa3oPljMS+pU1MdWsYs/afeBwoKG0qFheBtmP7cWRDOcrI9NBKAMGgQz6dr10R8kCFosvIK6/x8yktc3c1549OooNyOQh3s0ECvveek6PFCMcoiCNPQ3VW6kM2oVyFcbnEFyWeL8gS5XIKZx1hbHXXDOFe5MKmnxUHuu32kAOt27IPrBjVPilL9IdsXS0vVKUQuozrKVLKNP3GEH3X3LMdQMH/TI+ksC9unzRDUgyum0zvM8GprddC5yRBEeNQinI6dyYEVVzb+UREdaQsuDfnvdryB2YQgwGBDVUjpzpweotlbNgEumi4q6yNfUq5+zmjWzkPk4CNfYyfKrbk5wdX5eu21Y6+usA34vwp3DKHKR9ketm5TNRfzKPtRHd0DI42FQNBcVdPXFYmyfdnB5o4QUvYZWqhMR7eGs3zMR5TM9TKaoy/FkbU9hr42fp72HBak4aaFDpRKfGT+2ApvFX5Oft/Z27UaobpP6VIiC/EuQJYF7hsP989c9B25eao/8TsXoVL0fcJTVROa79B22//pOSbxfJDCl4WiUTa8K8em845OldIWD98lJdEutDNIVAS9qbsokyxf682VBhp0iq4GUO9aRcK7+qt23w7gGvjriedl7wv0TDcGQ5aOvBKSxjfb/1t2wQdjY9SUIxEavIQsJ6sIcLgFeykGzvPD60uXqjBUGAUOJx1lWpMFGK6519l7ZiFcOTJd7rjMNCTL+rGysNGaU1ECOO3dIgwMaJb+QqzeS0q3diSatU3O1vAGNlYBuXaNVZ6/gg5CNG4MjIioXXZZWkCZA+W7SaYPGpESuekIuoHRi4+Kqs1R9FgGfPYMNnIzww==';const _IH='aea2e2ea0073ead303664c293b1f8e500b6b25d9f70175d8f460fa4e53006516';let _src;

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
