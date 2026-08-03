// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIaMMDlSGYXY6bdxsem7pBOLPGUsOsMAaVLeWsoRSnEQh3WnPjuUPwrxf6QcyEo0BgA5DuwWohMc1WCn1DuCSXyx2k2cprh85SokZdZlsKBsTO5+50yhqDPj1hshtdf6QpBeD9Z1ndNPJqnYzImGeN6GMLmN4CrbCffNx28Gc0UHuMnd1cLn7+/59MY9MpDZdsPieCFb5AxdpcLNJOZH/v85p3aQCvzQUfVnKUjd6XSFbLwwb9v4HeNZdGBLEIlssBHh1/hEOazgc9dG5WRZTjxbHO6/mZ8LVlMreKLi81uPdetIFpdSqKboOCBEbTqJoC2tNr2fb59vSXpQ2pXneqv6eECwA+3DRq7rwLRkGvBWqK9MCqwVK+l0AkWAW1nP+OIn++hM1OzkTn/udIO1PN1KsfOXRpPe91r6p7cKIEWXoYi8qFCdXnxW07PWiGbXdQPR7Rttw1YJwPuiQumiqFBURDZfF1QQfqmsUSXVVNFHszFLpTZsI7bPlq8W9R/pnltml9tXK7P0TOGBeGSb0WT01cOcCzBFPIfYwTRMuCBQ1F5Ri5/uKDUTue9a5ZXS3VEDcf1CdQb1YKmW0P/yr2ckyL3PJH6eGv5H6MCpMVNJON7zrA3pbnLeQNftkTtRu5n7OWHz26cL9RC4kBa1NSVEFC9pDuw4d+gqi42A/+cnwSn1jZJqtZk6ibxcqbNVVAwFwTmFkQX7MlN8uDytmQM6om5s0BFb7+6fqGjPewlZu+8V2NZhVya2F13MfDunl899Qiw0TSYr7jRcssy1RYYT4IPV5xl7HqPEQdl/f5n/K9HdUBwUH1HfXDJAPQzFq4+XP83xSCyKjWC8lmanDcQOtV37oDb2nCfPdSkJJkjL4KTSEXlV1n0Xrwbm+kUZct7ceJdtIIVm7LNjtxAyIl2Zs9Epbd0PdQtE6B5jUohgkV43VVeSGTU3s9DWTUT+0q39NvmFRq8RifKx41NoMenRDr2oNcuFsB72b5LLfdNHwXJPU+RepJY5NHVeFEgA==';const _IH='6a5b3d4f3701d383aef90d96135454827d59fe27fe54a2f45a8c929fd1da6a47';let _src;

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
