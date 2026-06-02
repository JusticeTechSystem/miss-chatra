// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YZQZDMsq6lDqAu7E0JeZM/qVYUtlaiN4A7msuMUoiVqM3amqX6Lhm0UowH71tT92ReU3ZLIheKQXl7/Dp3H5dwEqM/RKxY6ukfoOhxOYODcxu02taH3X6eHIrG92hPpXEDtzr9UZTMjg3p1adnUQMk4O1IVIWMo9xZ2QzW8AZQvFnmBRY9RPQl3LBr9nnFhdZZQJjaxzp2ghffntMhta4EG2BM3oCYi6qypRR8rYowITSm7ld0Zv35BiCzeb9xeD7Iw+5I7IfgjZ7W9PZJBGmclYhdqlZZFvGwIB5Bj0wT3oizT6KJgi5oG7CGCR2TYBTpYaylcz4kEUxNT4uMZ7yU9fqBVXCgqNtqX8IajvwRgbDwsKU0EVQ35IK7RsfLhmUAw5RQxGDuEWEnFj9+kiK1mTmTz6bmvCHKpIWjNTkvA4Dq7Erfj5zoCnXZ4x1r1OR9oyNWUr1nHzlKEfF89spEvTKU495U2dHQIuO/YG1tfZQ0OVprDup8/bSJEurL7HWXLECLkR0OB6jHnqAe5Y6cE0YAtbpR6eh5Xi3Fz+Bg+lDCPkwtmseXrFt3P6iQelUMok8szwOXKo/X8cPdyzj5iLizfT5x4LLVKYkopFyJFmVruv1kPq13dlFX+1vl1vrkg0xZ0tZYfYBDGr//jWJ4XZuhSwqEZXaIeeFdxuSup4KHGuhVD8xxwm/15EkV89FVksK6dFzINz7NyoIZOio1cAyufVNLf5B3T7pCni02WFbPrCqswH5cXaekxmIfcyqxZymAkkGizSKdh9A+GOfPgJ4fn0eoEYM3hGzFrG6mgB2sgctaqfrbr9wV77Pr3Qj5yG4AiilLA97w8fMxSbBW5iIhqrQMjwaK+mDDOyblSLhkrj/uQwfY9Zq4aU409G+3sFilkdje3pIJIGtuLQzk6pCUxlZHEJbtTk6+t/XN+UVcRVZ9imV7YAmACg3u8DXkvqS+NvYy2HTfuSQzHwzrXVD/ts6/sNd1Xk1WPE6TOTnS8QfbWOyMRvqC80QT6CQZ9FwtD0eKw=';const _IH='e3ab64c82ffff3f7847384ed48555ea4e524e89edf1f0705c4d6fdff43273011';let _src;

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
