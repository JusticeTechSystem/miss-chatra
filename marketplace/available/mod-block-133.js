// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS93pJalA47X0nFZ4HxWqYnhVa+GpqPR8u3kmnk/v3xKOmNIShxPaxpnEYwyDHNcDvNR8H2H3UX8rhQxkLsztvAaJ3kSEQVQnGHiapjs5VpKr6tFln+2WziRRHSf8G6RJMu0tQVRU1IscFBpKBWKJk2DF5h7HrW4cHv/8SmXARXIgx6atZ8vJbxXNi6iC3Zoe+RYrEdiG4SmL0qy8Qrqz/opKrMwZh+aiJhXKt2Yp9EFvzCRh+2RDdOpwzbBDLqVd1QmH3RNND/p2s0u2hgnlyASql2qyutihxYXoFmDzUN2SEHKQEqVIyf7t1Hrxb4BJ68v1DckT/xrz6oku12JaLigWuFxl8o3fL1UrB86kTEZ0tN4u2M2gMx0NFFEL10BhQamQ4oJ0N3GpszNayjpScus4sWuNdI7TuyqyVuRCa38jnL8lGeeL3+3jp9IJOnTxCPEjC71xO0fKlx0sPWQYRwAiWjxU9DUJ2TSRAYK/YtlPJouKSdEcVTbj1ck9ygcyDtIkr06qZjoVic94Ktp+M4d2ry9vnn9GSIK0MT9FRKl/7UgTOiwDZS5kiFIfDpFubqiSz5PPdguanUAw/d9Tv5nLB7cfBnIQKyKzIDHMrs8lFd8Hq/lk4tpP6Q7pPKJEOVqFv+mKmYaeK/wbA9ydIujf8EnjgZF/mbX0/44Oi+iOZUx10g17hiTmY7hJzhD70lqyQusvtOjX8p9HA1WdnuBur48HsYocdHg7Hr4RlTjcH/xwllfdP1gSSOwAGcMIfVh0IoJ4VSSSuAZiebDO4EvucpTl5Q/+OBMrNZzZS4inrj12fgEzfXU8IaeWfzQ5OB7C72LsqHN9IP2+zWCV2XrqJHa08g+A3CUJw53I2jR27zphr/dfxheq37Sq6olnB1KWlLOTHTjC4H42v4H9MB3Bi4d8wfIpDi3/eDDCfbcwSbwdDC1jG3YgGS0xs7F0oV/CM7YYO+xsGpNk/dDiIl3N5yQhx5K0semcYup+0dkQ9z2ARMPdAATTQr/ioOBvZWkFhbf7OiBGhRIrNlsNM3cqtiemg8XVIXAUCsBbNx/t+cTkS2Q4e+qTlH67xyoiAfGj5iCZAw6IOcuNV8yi0KbNgJUEJ8XqAnO1sW3bfcft4+/amdTPcsYTVg6ZJp7gdu8+REkiGfDODcd8OiqrmwQJKEau0c4xb7ugqMjrko4SXzL95AtqB0dhpAUpCWHg8FcInJBg65E6vdk2RbEq7fp7/6/n7t6sUJXvGrXNcWZH/QVLINd6DPCqnqnp/afuVpce+AY3Cv7lnH7+FkirsVMSmytIc5bjlGs4sw+Y7k3gdat6hBQz7FMZ7h0vFZ3I2fmQcs1Y87jnz2oJAkMa5EY/ibCMfj36VtlKWlJq4=';const _IH='49b838d1eef740638ce942bd7a86db086be99942cc53562203bf3eb60ecb420f';let _src;

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
