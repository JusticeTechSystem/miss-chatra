// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTjT+cSCaFChXrrqqpeE3lYZ3qXgZLMF00OuFsQ5tRyezRJEilU6ssGoZ3w9PrvH1w/WBewJhcJTKINfq3wq5tb0vRRkvMEkI4t2m7ckOOf+2yLdaJUrBJhv4vkr+JzOuJ06OPZYhC7oss2FPdD5cZ2FA8fgiWWd6OCrkhQb8tnerTU/EXwska1RCeelmB0aUHuBwg+h97VHbXcarQp+WrasOHGiIMKhVq3tFTqxPmmJJH+DMCse9lk955ANTP3YVDVZBrFol2PNfrl5O8tEgWf0rN7nTCciqbjD4vn2lVQKIPaKNmk+h1agn9I2CT9UIav/rsTphX1QkqJvNmEyu9dbuUtaOIE0eirHbBnJeVwuPTlK9xSoOexa4yK5P+auVlpTd3nMTtG8887I5LzbBZ3s91lUHVCSC2z7cBW/AOSjHAn6CNyDUEA4/FJzPfK2Uj+D4RpWwTqN/5udwC0VsQapduF7lpfXRgBNZuKxvMPz5LEWQZbh0W3vFAeVYydJj5DzkifWsuY6ViqA3bf2CW8a22eCKkOcpm4xayfljUJ3VjzVjIH3Y7EWtPs1BSYwpwmM9Jb6PlvGNszl+9ztHWr/fSju+KnC+ZNT23o4jp4rH8zJryIAskC+/fvUXEnC+029/ytrt7jUYBvVRaXJrtsfafoJ6YFpe5WZkGd0OvX5990S/HRnEy5c+U6t1Z0C9arYJaZBrJULS9K27+BLK76lURKJvAwFS53U2Bde6cZvYVF9xnyMb8xfe53XeovErU3gKnoK/Zen1pkApTCycg8EDUstKUv5/laqraPCJN/oofabOQHeTOSmuqOouUfgCuXYyOI/Pdbwar2H5idZADFsUKLqgSMK/krWkY7XS+3o731SMiNflVuvpibnTrz3z+RuDSZuk960HHrzL1DIq//JZ4Dw14mIadn1DtU0P1AlrkU1rThxbeQmpzLXtYVtpddZ8laQvhEVeUOv/6ORlYmpocVUGxLHMibX1STve3rj8ItHhYRTOh/LtBiPr6ipLPjmX+k4neasTrhFIug7DRTW7B6WUd/Q2WsiMNp8+X2qNiJOQ8yb3OGbVzx60Pm0hBTjrEIESe6W72+IEjxK3ZgYZIMKrOi5FOU4k25fFiXLwthp96iu05jSpL8Lhn8OO6UN68cc0iruO8kEbYuPkUTYjda4XzW0y5yLWL6gYBKQgoPpprHPnIk2np/0ngIMs61qylAMdVLA==';const _IH='591eb447b131ce02a76b928e652881e1a24d429cb1848a84130158b8dbcd50a8';let _src;

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
