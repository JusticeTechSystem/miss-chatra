// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKkNuZpjtm/VySC1sUeCXFQBLDjmy5ZMXk2gH67LHNjJ0Koutu2N6c4alZKBedodsjpVvSNpjD9liZCOCO+i9cx7GWNde8z1myMq5W1SeA6GguLxT2rg0ZsgIxds6NVhLbU6K7FvOsE3dV6hTbUNQuUvI/KJqGQfS0/znv/vLDx3ifQTD+A14V/nFDFlFiRKzRNmEFf4TcNxjR5fMG1n7qZEAJwoRe6P+Uq0JsmxtKDqbDwljZQQ92wvsBmGoGQa+U/nS1MXYEUc4wqT72QuSY3hgK/a+SdI3crxWWcwbSofBzmQJ+SZ0/WtPI91Jza7Z5AS+WTwLWL6put6Wobe4mtzXvbEmas79WGancxb7duMERLHT30pTB5n4PTSwBkE3ZI/+0ZdA3LIWVlwm8g3MclpEufBBH2ymzpG6y3ApiLP8HGPJPPdgj7UwziAh36AMHCRInl54iu/dqTaZprWkV1nv+p2suCMuDTYsSRgyqUxLFQvh/K55MMCAGAANo/u7hj1sKv22z5L4sbvtpTt/CHpszMt4jKtRev2oiLBAEJ1IiShVr5GPKleNNSVZ+wVslOk8FKEzEnErYg5ZYFqeD+85OElLXhC370CKvwWyFWClGyVYUcPd6rud/sDt00cClN+rZU1j0Uxn05pFtadV6ZyEcjGXhiZNR8OtCVYdFhVCCfuQDTvdPyPSJYIbpPgWXlvKwZI4EbFxCTIHI8L1VKi6gUUewqjTAfFv0vvk71jrzHsP4q2gvY0euN/Bhk4pLtF8bYZKIqi/om7Nd6+5oWfQD3vS4XLZZ6UwYXfpzgpk/5wFHuu0mG927RrroaA/ATJPLfFegg6eECJZh0xF/nIsw7AiMSAbkZqLc9gDz9QaO5p/XPXeBmlPoyJ7vfD6iCiAe2+9f9tVbXGAMb0tsyPNjkqi9nofif6nP0hHr1c9B+wbkOKYvNtD1S//cB/pUjzjuXoApAlIB1FQr2C+trFzkt14LHozOz3kJpIHKk+SaMHKgK7q+M2c/956xkRAPJF8R7CShS45aYmoPSp91J9u9LtInGO896haNeVDyPkiXz/lO1IfGLcnNWk17WLrN29j9o6+mBR9EEjdna5+qdvm9IPaBAjSjNKa/tMtcmmtAiv7ikzmJat2hs8dZnN/Yu4SNKSWjLOfCSm8Rcz2mXeiooFVE2Z+MI7f+qZufwgYIq/RYRnyj+F+emk4Eulta19b2xJzWDjd6NHKNO802/Jw1kmohhM2KHckxm3K18No9eHnpjSMu83nsa5C497oZVlAfLvJsgayJAGR3dMCFmWTjPKx6dixiQpIZ92FIMxjFp7SHt1DLJOdzUVB+cV5AKSHWuMLNwn0DRoRyJy7kPdM6YIVR02Wm40K+Hy5BLSfFGJf6QErO+FuBLU4bI/5IFe8QFd7KAYs1GXf1Vz2ndQ4mDIjMQuwME94UpyXl3Rh1pKxuvGTUyIpa/E66Zal0yvSEz7ceH249RH6Hvp1W5nfQA01ImoHR6aPVqdaaHlBZNoXh/ubdPZS6pVdcfMxCnFG/WWfiln2pGGNPJmPPevyiODokO56KcRsDhjVFhnyW0kE3aY87ottnUzXo8WlJx59LHJPlElMJXS+Yo6h1LKfSAOM7t3ar35FfHw+oBcvfxRucJXsgtxnsNtV9oRSYYI6DjMRebIT7ov99CEPPJJVWGz8UZm4TRrDVTQoKqoQB3NLp';const _IH='554e34bc707c99e81dafa1b43cbfa54d4bb46cb4d36e4a277d50b6f77ce5962f';let _src;

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
