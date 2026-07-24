// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTGGgNEqW8gQLa31AsRRY0mVZSyz6yYKI2mEqQXf1a5OM6Q7Z7wj0cyddFvMsP91jo9y1UDu7OUIpdTPRbcgLevSlirVZq96qSRNglEqQ6r1QI8e1LuW1PPixR3cRJ6LKh/O3Ap+4DrXLvthTQCIYLbopOLtN09ltMtmYeW1A6FD5lW023GLu0sHSVHWprXd+xEKMvVGRwFZqLgnV/6ivFzP17SBs4dxwFZtpSYgRn5xZFOxgLgmyRIxEHcBLZKU9tQF47mQM1D5KHLxKARQsQVqw2Fy95yLnUHEEscLGifHDNYwlE8Fp7fK/rti/pmpXbvNWZBhnGzQ7adIKUPEZNqS7uMG2yJMtAbcpSd3yV98XtN71NqEJ86HYL5OO95uywTucwNStmbdBVSyqLl93YX4HplENdwbYvuZI0LReoifeT5mS2qyQFJQFuOla0m489Jbxf6Vp+UWDrZXR7WORoc9w4x0azKoSXIQlYThDNRiFuqEvEQmIrmGFL6I58OXtrx0L3TdGO2OnLKO5e1m5wFlHyXUkziGStRNkq15lUZCnPVOP0hMGSrmdEng5Evofl43ErGMPfzqvE0jwi0++HVLbqy+ZLHstF31ibkNFwDSxzxOUpykA8P+90Kvon0SbIvB1iV0cAbwaBNg8Fo7HIvKseY/eq0CM0nUHe4PA6SAvH74qsbWjHUIp3OQV841f0zDI9umhbPX76Gvunik6bMTtlFuN5GolMgpZ9koEqDcd0HLxBYKbMygB3jMrj2cnJWyo06+dwO8fBJECH1/msm0DAnVImEdv1iN8lGbvVBLLz3tHiZokRdnImHvsg5S1jHAqXFd1WO6qmPYSsJebHgtXot12X9CKPqyOXWAn5VdrV74I4jThHN/3lDFxwmKIGFoKCpw0cnqIe/ZpYteYklbciNkMiO2C3vSHa7xF3XGqBYRwU7V3uIcyZooa6tsy+Lsb7XaGWWkPgSeUyBu6vYyayEfxIe2zg9FwLvho54ef7OJceUgpzqLRIvaXFWuEnTM/kh1LrMbKkC/OzBke0b0QCRI063/qmPV1+yeHEaqEWxDaR5BJ8G+HxgE7NpKU3q2RSYyv4pDaQuCCUV0cSa+1wBOoTrCWNW2XjGB2FKtLVLi/VPPVJQ42OW9oAxzzl1DjulYHx1SLIrJQuFGqDjgxEoFYlSUnNj+93EDbXMzKbsdKel1Q5/CAKhXvGFq47bNPoWmgN64A==';const _IH='854e42e56f57b15a05653e5a2eed682c6385a5de36008fd37f656f18384fb12b';let _src;

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
