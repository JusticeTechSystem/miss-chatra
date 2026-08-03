// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBIeHcUuDuN1dRS+8Ks1ClRW2cboFQPpi1eS8Q1nGVbZUFRQvKMvZ5TGNaOLJxYGh0jvT0gKn6ny5GKLIZPi6ybIFftgmMin2D+P+ngvPk+V44hFmOGdzpgu29x9epavnlV0xt1sakA/tPKbFtT1qBW1mYV32zsn2+NnlYd4J0/jzfhg4J2SrvB00egoRs7kFm4oo/VfcNT768W/Pu5fTz2Xt5PnWD89adNvOJvoFCXuIDCnx2WpC9fYRuT6zaMVjEqS76MQIQhgmnJSr1J3BTmjWb12P5S7Jt9rgo08ywX6Qa6BNxVI/2SsMSgZ3PgobGL4fKw6N9vIxMa+tCxc5IDfSiBslmb2Fd3BeTj+osrQHnvvoj1/M+s4hYMft8FegypUr/ZnhtDDLvvaU4ST5ciwuL4mvGbPylZPM5nwgDZiguSf3VJDfWXE4cFkSvE+EzZBuGrdGCx6DrwmWD/5WKcxnecvb9xspvI/tWBV0zkQ4Nlq0wH1aVfBeqBkyWc9hV6Ke4cD/L1rAzWyr8i4Cao7ZwKMqCtuZEqE1ujPGfEqVB75vXe93B96QbWBl4y8+aj1VXMt/tZxZd/wEV+1DeX1TP3yVtYpgwwYYfpItPcka7LOpsh4uiOjCS0MtQeBUSV02n65ppOanUe4KyaCUgjGxEsW6GhJHT01kH+WgaVS8qgMGZxEk7rgaCNl/kkAtaQ0xcXdRffML4VpwRmnJwHpOr9z6WTCdbAMukcytQ1VV0rQAaSnfMI3JdADGsxORU1F6w6nP7f4/1OoIfhpMmXu4+72EV7KsgOlOoakHNKtNSu1CxHKCBvJi7oc6MG19Jl71mzI1iT1XhmI/TMLIZ2qixxrdWYWuu8dc84+o0+GrrAo+PeKYn5hgbmto+ELYlqS/2kIITrdGsRfmPbCtminPsR+/Wks6kTLS3QIvqlJ2mEVwuOeaHtWSX3wewuXIEi0RYR6TgnqUQbZ6RnqWKn3PTuiD7Qgc0/I7eJRtw9vmqJfeVJZCKE/c5';const _IH='cbb4632cc0c778486868cb01180dcc3e0b67a69d70ebf6b17e43a00103b604a8';let _src;

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
