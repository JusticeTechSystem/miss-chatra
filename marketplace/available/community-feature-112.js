// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vtVTGWuhAx1LKv+DqCmSMKt2839jFLmmw7qqh1a5F+qvatvwBySYMcGZqLeZ3WVrA60Nyx7STaM9OHlz0fhHBL4kZPZm8eDQwH5l4+F66+klZ7v77ADxjt3SM7hrV85pbXxc/qM8ujOHubL5R1MPaAWWfC9FMCvT2/bbfW8CbmhWKSLFvT+V3Rb7NseqBMZw3TTF8tYXHMtZTDLCqtngefvlynTq4nMYhxLZB749dK0d8U4lWQxbGerl/L+ufLC6mzND2pzTGsAFL5g3hDty2sqOJD64aD0Qd7vJ2ZTL1H9OiJCGzEP3DsFgH8CDgkZ8OOBfsmkmcly8zc+AHtAuwLOkyMw1MWWHLesjnNdurQZEGQLzokI9gOss2av9Uyn+tPNE0IhHNyexWFwzdaNaQXIGuZF7cjjfZIIRZ0a2ygOQ9Jv+4ibhxelzq7JK7pregI8YPDP0CylMaK/F2SvND8jcwnJDdShzxONdJy7q+7gDio1O3tY5ao4KrDwqurWMo3YQarL0L2Ed4xcCLzPEFwpne7wGjdAN9+AJFkSes0heBY+VH3sQ0xkCXV1mhbTA0lnzALZO+ObsKWKxeSZzSRQvcSMJL8t/13LGvIg0GubgsS8u195H5Woixxc9VWd4rzxMjZTSwFXegNTwyYM/LfHz3L/HVn6wzz6BPpQU9ujPz3UNdXgTiXSZo96T2LH1cL/z6zVa5jvkRvNEdosFghfJH4SvO1nGxWE7+qFwf/q5YvE=';const _IH='c47f162223bf4e91b5340b98df6a2618e6b7cc01559d679b7aa0a99cac1d2c98';let _src;

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
