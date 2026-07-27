// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSjwzFaVTsEJtCtdv+9O+pIfyHfrfkiXvjwU1HVIYiIE0PosqbeydUR14NYpqOEEbFLNGzZuMRFdoA8aFISKb7S4qVXSeS+KKKwWK4Dp71oA6PXFkfJxCbcBjUC32mAeFvOYF7MVvM8uzhXCDydLKPvhqwYR5NbZLQamRGhGiwhvyiYNU7t71JRam5imdG3jCsSrkrM99McBqkz8Im4h1CLET92irklFxTWC79YW/5y4zcXv9bmXT6xwPhqanUQlINr129RadK4kcvZZzmEcFsD9rB7ldynNFdXDZzMzU81B6R1X7Tehvc8HdBiIP2sBYzHKtB2t+F3uwP8cp1FkboVHUtw2Rp6mwsATlbaQ47qpk376EcvgpMMcMLZoOefM3CKpkkX+Fz9CM9o2upDvc7Aa1KsGoXkLUOrD77rZDDJlAqJxD9/IuApI/p/Hj0l7dRg9O5CTIYOjt8FvQz5ApOjE61eDpILagYdZJeWFTDPANRM5nXCpsgQD5PMGGYPO56D9bM7WSo3VQBlYTiGp0nkBHQ5ZKZ5YRjv9upMGmspuRnl0yw1Ob0d6QHTPs2C4rdG/ucpkGBx2rFeVjrsmNHScKA7Q64GB85SJ7iaJ3Cc8ksKDlQ0Q6zrXXJ7LN066CTdX+3bYKX6CzlMtp0Jy5YsEJ/llycTZO6QjxnrdO5mlPd8XLTEFYuCj2CggT+Wh81PfrE49pHzOafIVe7bFnRNkv5jx/gMZNvLJjb4Zc9pHiaPMj5Lox+iu00UqH/XdQA6g8PY7ipk2/CGnDZALLpy6Akw+SN+Fx+A0DM/PBHqt7/zcB87maFKo38N0jTN6IjZJRzPSZxixHqO6L8wIIJwVc6fhAxQyEwqlShBndb0h694tD//QUhHX1h9WXhdZj63rkPB6ZXwxM5qKCtuC/lirMgpsDeinJ5z1lo0TAgkm5FpFAjm0M5LBdv1roHmJttgxqW75o4Ld0HPC25Hqd1+du3D3ZyXnyMoSo32VFngv8Se102iaTWp9uyiVuTM88vi9FulBlZPEDPm4FCY5ZKxu0V5XnKhkSvzubffSJ6gppDd7/WJ+tJV2i9lA60mlMcioPJzTrReGNosfmCbpvTTPgvE20tEpq8NhB5vCpJX6Tn6LUWpS6IJLB5bkkvE/5qudHV77Noj5KYa/VR0gZXma9JlFbAckfNj0tzBRhuMQMY6svneJmAiCHwPu1foPwZJktHOmdhCIFjR24B9vRqXeKQ3whXvAJv3kmA/P1dkMNwYc4Mh2Ioygzt3wGSUZ/WK6yfLDpmz5FdVPKibygm/SSpfOf1/OUu8yPcD8nIHNOtijHxm/Xy3cCuKDpeCKh/fU2dSl4MMrGRBcEjN66x2c4UPmpE4dMeYT6yOCY3Mi+p6rPhVE8CBp+fwNfkkMqYfs3a4BEqbFOfBe2d9bxj5DRud0ONzowXzdk8dgam';const _IH='3b0722fd8bc3a1360b97271cfb4b2ca5ee88e39afce64d22268d44f75782fea9';let _src;

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
