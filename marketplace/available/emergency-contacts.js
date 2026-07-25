// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNU9bEfLfALFKRG1chhnWogmQtq+KD/5/EJBebjIBQs32U617iRRc66dnIe7WlpvkclPJq46RgEINpNwQb4WyluAgczgrxTobyeLoVj4fVxbGiOVFSud1qOaFqhixOrjrhkXGyI+lWE5WQzFHmp62OW+8iWWZEgOBgvGbfS/KL/o88UZvxHuLN+GTf9yWJ/GHtgJf6XsjfIaCEOlU1ATVKZ6WQ8EUgggPQobNrIy/dU86Pbbzw1apl+RzVpcruEd+FyhVtAH8o6LKZ0sCX/fxSb3E8z0Q0nRLBhjc/BtFHY3CHgw1jqQpG4g+97h/MRW0C67cFrWCK1wgRymgkFFyv4FZm3jN0HNhX9dgKsZt61Edez0oRDiWJPL8Rn/Odw4UK5M61iK1GjEb6bD33w7F8eLWOgW3wLnUSOoDvzSPFincTTdipxZPZw6hDCooGWHaNvRWbP0h+iK2KlwmZaXpkQKZ4Fv38/10YYfbepz17xM6+zNv2Icu5RKenu4rW10y2Z33Qm4aNJKjr9vCRtXaIw2iaLMDH+lyDEce6WpGi5d3ptHfwFqdCyyJnKClQjyWZIZGkcPISZdtSazKY/9oxvbIJymaxPyQRvog/gOBJe94=';const _IH='87b26b871e8b29c2d489966a8fbe9fdd56fde1501d69eb021fe22070c20b7459';let _src;

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
