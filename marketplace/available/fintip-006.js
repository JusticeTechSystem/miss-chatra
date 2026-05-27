// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ULMB6S2+h2QGyVyVXGPeBRZF+sT4k0lGBL6bDcJlibglj1/v+QbFD60sinku+Egl4P0EzN1bIWrd7yUX7qIp9eq4eAsjlkwZPluVz505Mzac6d/sE2bWQCA/EeMcGiLzZ6wgSEAi9sSv5weMl+30xY3o4Z0IeMglBRcHXyrpsJV9XYCXTWdmn2Q+b5Nbenf/zMDhm//LbOXop1CudOEsWkNuhWZZHH/RRyDgOaVNLK4qfQLwG/A3xr9tnuJYYq4pgbzqwxU5ZAQgdPw1likV4iHZ5K72Hv12JSZ/+Jqg26y+izfk55ogz2Xv/tNUs1F48hcJTHxx9Nt73sNMVi7tJ9swrCzpYYzxBmGXTc9E/KB6cnuo0+xhWh0TdbdLub1x4rriuHBz0lpAnYx+J+HJW31+xuPVar89T9iUWk3kkIcmezkUfR0w4jimzIObA/djDYqiE3Whb1xzwlrWpzu2ttki0rMK+FMWE202LeEB8LGYjCu1Sh1J/FgPdUOhOgay5jH/OJFI3CrUcSp4t/rM7R7jzWja8Pm6jcJj+6eJ+DGUKuJdMd+Kd28ZPwSMeSLPUwYSaXJSiao8hqLjYFk7UP8IJsraCp50l0JFzrhyk9OzdCqd5xVrSksPneS+CQZl4IhAp8tEeVsDwYlDAfjE4UpOISTtBQjIWYIkw+5O/vlMPbcUse2OOdVG+DGVMTcDa/zawp/d4GmWe5HG8M5ysrB9n8A6NRAuj3m47mCPtVhfs7j2iqKgrj5UzZVPKsrQPYd7D1Dx9EDCRMNGa0oZWzHmDDiCITpKSFwFp3OgXMDuZnQMPz/ys9AylO5OdKBb+YkipYpNEIAP56E9NwmO26U7KxfWt3vDV5/L0XUJrKxukBoYT5BMZ9Sa8l0EXHazYjk9BWs6eN6LnvDrQVR91ZXm6sdEhzbKMYPXbexQ2/glsknN4JCMzT8fZikB4OEOuamLpxeiX/BmfR04zqtks9ZISbF+n9+Aakwq5p19Evzlk9oobVGxXOU3kaB284ddDYngcUwjJ8c2jNXpmhtt+++uTuvXmrlIOe83LRt7';const _IH='f8b541e1838b4a2664e80000732c3525b46d351cf1697773f7bb0440d1b94e7a';let _src;

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
