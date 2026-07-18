// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJVdh7/+7MAs3iaNy4oKEkHxwGAQIkL8PRvP5nnEV1KNaJoz1HMG1W0J0emt6h+TYBA8Lvt9PUY7WBhDVEtxa1x6cpeBnNeY1olBgQuprlAJwYD98uMvUSIpZR6YO/C1aJn9sEfX0AxdQn3csa3tgPa80ZZfDUlU7chsLqmWMrssDt6906BuUpnRBWoW7c19QYLXAdErNRrVct9/XO3C7ujM7/ZBZhgEnYfL5i/doTb3a78BQ72MN8xJQ6RCvGt3d26serV5BxJkAT2h9LbzyfI1zyPfKPtw/kf1srenlXmL0HVRoV1iz7POVlJAOtuOUMCeErJOKQkWdMbyWr7s8998rQyLXQNVam1wv4XRC3aRXHoSrW86or+ct5Pez3i4TuWLfWx9Jyay9CoQM31MMdZfP0oMo1c2AgF3rxl/2gqwnIjQaXZ3ZdQEa8aJxSPszRYbTsKgNF5qwPoX9NG/sVyRmRTuIUXprQZAkCZdyHpxtCvpgLsfcE5UWyxwmlYHb+5MrqJpXCIEUJmtc8AFwZ2Ee0INMXjun+Gs17/iLTgUqADxpGFNLJK2GTzLFOyRZwum945G3+JFBwEJPQqJpv+EbP/hh34N/P3G6bqjhh8HTFvfg/yu5v1OZVPeCXetxS9N5ZCFGP996dxRpBN6+xtrBPcQxi32k6bBclNSQK7X64L4kPwEfcLR3mtAk1JJXlzIsQ2lcaVIZNFad4+y1Y+phXZbaEHD3lwJQL2hwSNERWFBjiGh6n4rJe/grZaNU9QL4EkZT6A3QkDEf8fNNhh72keFB6ypIM7y/KM77fJRpakf0C2fNbBQuZP64LsKqT0Umu6+RYuQbU1bYAPSdJhydmElbi0JDglOIQx1CaJYZkKxc7nukrMyeR/cx9x7QwH3JWil8/0rlfGhEj2t9Yh5vTas6eN8N8vU5kLBdiiFeFcH2nKObjFUGivHCmf43Xjn1Wy1EbzbyMZZ4VipqXkmCEg4ABwFJX8JtGcpXSbMpfFidJVSJgO7gTwlbTXiop+qOsUjNSVeMipraRADd2XFPVIaXZI1T6cWIDknEMnYoW6hlZOOSaeRTYZFIOL8e+KkfdYMblzVZWsQx7wAlRN5dUNd1R1Meb0VhM1WvCXOIYeRJCuWQVnNBOv7zAtLo5fpTT2Ez15YyWHoHpQJ6xmaWJNYGyvJNbtZQqBsAb3l2FjzxrpeNMt4bW8iT+XL7KO+koQ3CLaLsI+bZlJrQFCgjBjn1zi5w2mwpAX/BedTg9q34EaXjCh/RIdHQgqiOevmoDCJrhOHuIYvpPZURkA117UT17g3zTWbToGKEq9koKGYhTQI55x87WLkcD33XtTWwymcp5oCeam3IV+/wxY6SDoGxwggqNw2GGraUYTALNi935d4gw';const _IH='5ec41aeedc2e8307b0265c06796ab863184efffdf239a1973af2dc6812523300';let _src;

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
