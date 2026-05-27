// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W6H+DtfLDItK7jxLmiU34SjRQITaxweABX5Ch/UyQypURmSKIC+TPZtyruwkh/Su7CdyAx2BigahATGVwgkA7krvBuOyR12ghWz4NtGZJvp4+H9BTGzEc5hTURr6JybyrMgA8mD6iJMwBMEAXP1LTj9Ty4PmkEKNfsDNFTaHypg83QSsWxZQwPIizTfvLvd3j0NotEsCVsASvGPBaQSi37rrk1MVYGEm0trZPdQiLIUW4jLbWZ+qoUC2KUfbfm1zf+WqaVX6ul89Mg/Axm2dGKBXXK8xYSEwWW5lje7ndAP0ioWM+nud3iy2aOPKPHJ51gU/wP2qSB97q82o0WXTdICJ13GfZThgj+694LyaU1RWarPSCoplUvXn6STUbhWMqWN63geaVaR4LnI7J5HqXtgI++3wuT5FwbtGelmhomg93B/dh/DciLjmtrNY03kT/F968LsY55LRnC17q2SXZCRmx3YRkJtQ3+xSC0nHOuGFgv8ShVn5cRKW8VbPAtPaukjrgpolKK+Lm1qr1Y2jhegb5Uf8GJDLAbnJwjBmHmXYfoV0E9o5kID/d8DeGWSHOGIG66Z6hHj7aU5NKT/vzMFSJGRclglE6e8m7TSe1+aBHnPh8oinKFf7GHx/wAMnWrAVgwAx4dl0jZSpPHcsMLCl1P9aV2tBviBmr+PTHsTzTvj3cwrIByDklcLD6KI73AUaLc1viT53doe44WKMcSkiVwtdmpl/5sszs0ZigV/L43waQtUnIEvPoN/rjlCDWR5SpEJ7C5B5TutTc92FCgtpIur8JWMJmq9/hEYnctbORYzXUSi3xpgmohF2yx8XxASVo6MlDfynp1ByM1OhyyICLAri81P0amgI3CYxtcpxj2d/a9JPbNMhCKlTDIw8KHd+VDgXhEbDQdnR/hXyW/Tg2RwOz6Suw9kDvSXQ5WSJ1z0PdexKxnegLYED3ZKTjf3AhpADuBdfbmAGPyNkdWN1z/G0MU8nk5YLuxvlis9hZrVg/rO7tEAEA7JWTv7PA7xNztrWdoGkFXGW/WF4V5zXC2jf81AoEzWyxNYgNl7HSTnjgZxiUyYwQSrGQ9KpgcePyFzPMsbRBMoPgErHlOulbvXrP9qgvy6aChl40Tllbr/DFCiWmA3FKMgmkk7ySzZcaMuGiCWa+7NZIUlSgTaosQTBVx/1ukHBKuyZ2l0auPeheowtqeXcqUP4RGjBYSCZLtQ0GJM9WvIV84JTvs9loWCKTjX7VuEJHmI8tEk0pOjtTMrW6Sdsq6H2sDLTA+cCp2qcXTIF0arfmTQZxdsqxe9NTcio9Pnyd0b8S5GZFlxdiXZqxUuy8Bv3zOa7SJkzE5WUQltLPSMr30QgM6jqkOjNpxPnZA==';const _IH='15e299d9108bf55f96489128b64cc949aabd4ffe5df547c1ce8d09042eda794f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
