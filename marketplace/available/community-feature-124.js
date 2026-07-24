// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfDDzBjUKXu9c/mLbzEI9bMccFnfURNN47kQQRgKhNp63xvuASXBVVLEB3qKFIetW5i5bwGwuNIFAGEpFQgid9pauiZlVOVitNw3f5VljaouEx+7pjwlTrPQaVKkIzcOzeoXLiGC4DxfbcJ7jbENRbRBDPrGHVwfrhS3dpj2fXqDKmZfpfgOzw3pQn+Z7/Jf+bolPNrCNlUVaAe/xKJzCi63xNVaZRqQBSfroxGtEpQr30Z8MoqF5n2m0sHOGGVEKhGsxBp/Vk3cZo5bo5cVHGuEx2v6Yl7dVXGgRh7hf+yl+mNBjfGLHYRwKPIJjA7u+aXTk9TbzT2iWli4VMLejp6O5qAKOVyUIH5TTnBjj3f7FOBFYrJT6O+LfluGAvTRZkmricvaQdlyd0uFOWyU/Egkf+AnHbWMxSi5lCfkWBLgLDx+Gl0qSawgbxs38O1i0y7ejQbR3FCBTCRRI2wF2WtHGOH6BfN45B/QmHPx1GBuy8BD47Kqwdyx4Gm5P0275EjKiVtKFo3BR+u7EW63RgSlkmzNwyGqHcVuusfQW9ldHHx3YcTtqFMe2a1djFgY9K4tBP/2fS/9nZ62T9anLcnmbp7F3x7DILNL34Jg9f7I82IopEUQOeTdSXsSFowpxFQ3z9Kj3hqeSNAdEJJD+bIi8TgIpMwFL3hWlC3mtOtlcEMgPm6CXxeFltFbfB2XaE2kzUpmiCZxgD7hgXkgNUhaKxsPuw6AgRDm4raA+nyBny06QnJA==';const _IH='b2df8c58d842ab0b496c3c03801deff241127b47292442c388028fd441b61a27';let _src;

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
