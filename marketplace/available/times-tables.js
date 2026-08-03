// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQkxu+oExLtJEb+6asYssT1MPEauaxecNNsZ6yFjm95CVCx+pjHduL2KxzxQeWhpdByxn3QHcduUzaUStZSF6MWLTb9l+twQVbtFXIWlcU9RIg/YA2okB+lK5opf7lGFu+SNo6kX/n3dXc6Wkh748pZWA2xMGHtToEaJe+YoIZ08DIK9ktf7VZfOnILa8QfErIVF5CfjjL0Z4qoHxoEIScVIj43VN6n6aNaoYtQHITcQ++JTcMn9jmiunmWfGUtW2NHeNnQCzFSrNOdXvn7Tz+Z1UjpqUtQqH1V+OCOqR9kvptVU0kAPtBdzHG8/PwQR7lMBTzyrKLulqpnPEr9lAA8Hq2RJ52Oe0N43cNq5ytZ3bOCgt4p921mUoF6mGRKOA4HZ6NFQZqATtMjETEr85A1FpOJ0vpiJ1DxKApHLLHjIWxsDHJ43pS53o0pnjwjwR1h8lbWvwBBMyANo4mtguwybj5lE9iiYLeqbMIPfLnGsdfbjrUJbfJKNLjr3EDVHR+NdJyf2Yi2kXYxOn3KNkuX4W6wvTSC3rUhcGLo2Zc4oOGtJRhA1HgxQqPx4kWDN4McYLhQo9wh5tLbwsCWZFuCeoe7ZJ1b2UcYCjdtufgNYI139sB8b0oXCTUSlmGoPFXi3xZvdmSnms6zue13TIC/2QzuoFP2gIcWf2Xjg2iBRw6Y/7uldLCoAzsCVxS5YrF3CgPruty8mwh5DyLrWXSr2GIJ2uZdyuOPf1l0bC7pNBCRDqxFM+11h6YupaMugM6hF+EMK5mOc/o9DaIIdi3/x8mLqnLp1iO5gsx7fULWd6BwP/HuFohdwotNTqPi7ertR74ZYDteVAaOBHZRaA==';const _IH='38fe339f70b46b865b5bdbe16ae5bc5d5a5019b187dd9624622a4fe6ee47c96a';let _src;

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
