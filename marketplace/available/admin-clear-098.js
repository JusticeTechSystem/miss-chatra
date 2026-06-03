// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hZ9UHWH0TNyKmte2ecg38FJIRPdTpXoonWscHmAsEpmD6zjNDYkcflnVFEnSQxE6vVfO4YIt+haEMr8oYGIXP0D4p+Vlg/9012UxUmj4DtgjAniAD/s+wKYsY2y3zetl623xvzSrUexxlCdHcrVbuUrrVjQvUKBRNShKIQimYSyl0xvDATrcb3jr0PpVI70xsjmOVwi+F///88dn4hEjPQWOSL5Q16zNB8nwzDALUqqwPuzX2i/0UyoziTrnhn3QL4dj/NBWoaPkSFsW49YRVvhTOY7Fckqaet4NHNeN2tjnE0ziyNFFVCEVMuUT6I+5BVT44cU+sgL3i9XWQKbv3t5WdhoWI1DB6eImoXyPJrlkPs0S89z6LCJByICKdIvpi1zr5icAjgRoXJpZcTtVDUgnVOz3XED/pNS0lqnA9JezXXTqr0tumDDHG/V67cZVRe2h3r2c1TfHPUNIYvKPfMYmJ0ERSGDgbGQ7n0/bq92Rn5rMY6aOsHxBWixO4Bj9BRkgK9Hih0L4DaAFknZCgzSHfCJPSthdqBnDqdISBNAhovV1GkoIk/YsCIZPvXsVdfaPHZ61ZSUKhizMZx0vFBc4YF6UV/GBQx1hg+JFy8+TIA9bxhhgoumLXLP2aYF5LpwZh8wrUhc8hGZq3gZEtwF9oXovIAsgsoDp4wrmotabWBvrpI4QVLwbYW//yiobUJNZY0mOCWMzyE7G1GMvjhvOq2lC0rseh8hrzCdxx8ynzHY2EJn+v3Y1RmomXiK303SWXU+ZrWZXuf4JjsIj6u6WoAYJFeCjS+ep6RS2wcznJYxAn7Q8jHy4ymZoUc1YMtbGTIiNXVEx+ntZFPXyqwanb6zXVTVOsyY6K1m9wY4rkaYQ1n16WCW00kK9yeUQJpBSySpg9w9E8isKPItGr3n+ZgKuUx3U0/FLgRfowhpxkt0JGgIQ5HLtW7rVhg2HcMPtzXqudtM8UGBzlJJoi0FKJbHeNWLYLTg2OjNVwybMhhkBT64=';const _IH='c48a905255fbb0e2aaad499d8d313a55a5e5cd48f18dbdbc91b41d556dd5a208';let _src;

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
