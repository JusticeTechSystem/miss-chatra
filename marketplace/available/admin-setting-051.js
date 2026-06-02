// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kTwxXeE+RdQR1y8EtqffM5KisSVl1NJd+oIyKg+y873FBXDY4rlXis9vv/KFblz6/26iJpRSlKDmAs+C29I11ybhDYuUqs0q2vjOD9kjvAsMFDyaD3gdflM4LCz3100k4H0et33FK157fVXy6ugFfCu0HAIo0zWQlgvBYm36auRcg6fkFJ9n9DPzOwfYhtR9UVpZWWOsoIfK1vcvann6wl6RgpbLvSJQ8TMw2VqmNF7eTGhLsgt5u3zfgPMylrZWUXd/cgMVeFyrpMkaiT1KrrCtVdZaShAbbaxwyveSnrqmOQnnS52WwlndyTvdRyEk8t4pyksyatPlwXz+YdaGwPxNustuUQHU/Xhbp8a3clalWZhVUZm8Vas4aaCFCdEST2BSqZoec9sIXBMv9LqNnb24kjjO9UE6bnv9DuWPxjtiXVylMjhOUM9x0Mhrg4m+ZoHiM+WhHZ02SzcSF6Qjg1e7fX5Umlw5IV33ZDBDEp1MGjyQu8eYv1L7y9TEzc7jqr/845ld4JskNDEZ31EU2LvQ5Wrgbevfl2WvO3l0Tu5QKDbDRz/sQcZKhejw997x1sNjhuqXv1dc4zm3BqG2Zh/JTmE3JseojDUwZ5PXYe6DBMyd3cIGWzIIp38XdzLk6QBimLiejQOjscxNDhfJMjgJYA43whE44AyQjmtvThIdzZgze3L/Zb1nWgUzd5QnkslctQj4OJj2YhblrHSO3GXKjsVWHefelphDcgjvsbwKoofQclmzPfGJ3cKtcIFo3HUBk88iPQUmDcPrV/bWfkwGQUBp0CiArZICFPyshfEcSndM553qHch4dUVUnTTLflGTekweIwmsfSypjjbmHe+5jnyLB6kOVmom0CNl5QZmEuqNw3JQ3HOG7PHzJ1t5ZlMDZWUnCKptvps1xZxsyF/OdQ/znlzTk/oUpozlGCDSfVGwvC5KOkmly82qAb0nwAfhBCvRC3Y0Oi280x7Pyxi0p/DzkuRxgSs4eqOZt0rkiZ3kh1k6DgV4rmB12mmfEpGSDA==';const _IH='6969d19862527f4bdf241af649890dd1444d6c2314ec2c5dcde566248d8bfa85';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
