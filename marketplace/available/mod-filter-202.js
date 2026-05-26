// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Os5YfQvodwho49Ph6RAtEATRBeeLjMClVLPbQrhuEQDicaf4GeLetlssJiVGBbTqc8PgORuRBeVW3kTTJ7ymrm71VwaijEIb/CT6TczwJ8zDyvXfUYNqPrVuDTfx0asdj0XcyY2t2Gcq5QQywzZZIcf102hp6f8WU7kE7cjn5BXtVXG5cVDKVCWcflko7qe1H5sRkl00q/KOlB1pAzTWLQRAHWKYWdZBYuifWNM9rUTxRzlhTa4+TSpiMlpcXMuULmjzZ2CY6pePSsQ6IE60M4mV+EptJfrQ8jZHdAa5cTmzsdkJSboidtWlMyW9JbzlxwmrmIv6zzRuM9unAUJjSZ9yOdyf6yN9RHNy3DPTOaEQv5znSHW4iFklgNePYW1hNlk2AX5EanE0nrqCfm6F6/TZttWQiecVCz0goMy+350WZ9Tu8ELHIaaXEzgA+HSeoyxRwzbS2hxVP0kxXC9IvBYfkAi+5vObYIqnm30YEKI6rwwOcrRXtw7Vo10Xfp5yQgNxz7Lz7PYeqUMI+9OdGg3ahuLqZ4x5eXzuuIzCSj+Cishv3TSgRhhoI6hhFhS/rmrvZkzptec5L8VrG5e2tfEfqHrSESXIwU0S2LQDsAkoQOBGlhQxSTBqF9qI1Pttf1CvZlSQFdvw/QJJunTB0IlwMWbykDuYKipfASxBWGTHBLiEHd16ymwr09SiIh/t4EAyYhfz0Qk5rhVDhjXANFgriVPH41n3ys7ARLOM0eww4IgRhZWNlTllMIQD0HieUPMsxLq3Duhug/GzmfOUBM7dGoYdKEORmeH4bMGRSABevVm2PW4YhdIxkHxlyAbePznHUetFESZ93Vd4V2BfKKa0ZSIX6fSQFZcaOIB79Yeu8OMm43YwO/5n15Najb4DmZ3sNUHF2WLJOwRHZbBvPpEg4W6Yu1klNASYV+TkFGEPusZDKCmLVpWUmbRvk9ERmnZboBKkQBZe38DNtlEOAaOvoAG+T9WOfKWg+EOp9VWMW5KqEKn4yloBH5dy3DWZrIheedNhH7TnrjCAgm3Cs3VWmlDgT56y+KbliRgXclSNfmWLH7bYHxuS0hTZBJ4/7nRv9gQyMSLqSESKMNUJb86cgGhqROFder8hcl1sfpuymn6Tkx7ifb5zcgEA21A5uNc/wC1U8NEv/IT4U6QHDcaeCbyT5VDEnO/AYFfBAnndTJkdAH8qV1KUQRBTvfr6Jyfuisvu7OZ1NLD9TCih3t5w5diBPLh9dpTp6KGtJLpR+RJ+h85xLEXZVKOOUU+4Nx1P7I5AMZ6vdkI054NnFyrwvrujazHRPZthmAiKt0YEMtgplZOTCh4sSADoom/YBtmJBAgkm/dbYbh4RgLSRjzJlHJ1/JcezVS1zbaCOpbUZz1PSMxCw==';const _IH='9fe3fb85b0794e72951466e162ca9a59d8af9c15ad2232bb02c68a7e48b23450';let _src;

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
