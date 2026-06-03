// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eTD8TllElpJHbyb9ouswxVfCa3WbUyyJmLI4c4DIA4+hX+NFyvPbtPHwM6fVh0aRDxHqlq6B4YFCqwQHq2Vz06q912x/ECokRs0MiC35jlrLSb+9Esr4zbHSVW6Hihu4g/v9jF9/FgGj+S3fJglEgClql3yAMrAr26BEy+/REdfVHlnswE1LkZQh+l3/w1EctIBkKjjeMJ7MmFn0AX48VFYj+dRF1cCGN063kCSCi8mg6o5R0WlXmFtTK2kh3xBfrNiOYXclPXVvlrbFSdUER5AYFaykqwLUKCVh7GlFEaqmfGY2T8WBHaG/0vxV6WQ23nIUIPEPdjhkGJCUBN7QUzuVk7iUGfn+j0Zq7Zp9DB1TYruSB2ecWGz9BWApkynvpPFt5R+32CSWbiZTIl2kS5qJuh9yLuZ4BiwGkYiGUJLhyDxlUgh4yck3DIE+zJJ80Imd2mqoH/p/mmlvvTUEMAJc9b9bjPK8Cg0yM4P+6OIGhLgT0Gu2+KQz4Nv6zrFVumMB0jM1Vz8MZj1ZXP25iGC2Sk7KVu+rkXrw1OPGf9U2qYYflY+R6Bg7lsVzgqOdENMFyMg6H5XnzsvNACcqyKKVFq4+IgS//+htjaIr1JDi5EDarJHHN7pSPwDIS0v76KPD6Hh+uPMERpm337b31ampDap7pilbHiUq4lj9bT5K/lh0qcXrXSvtImn/9J7oFkUmdLf7O0qasoj7cvUvx+VjlyWQh/87zuOhYj0c13E2yMOCvtswTGeRtoTE222BVwjnOsTtA72vExAz2Ip5hsSgZDh+QsWcojV53TXlAgxTxXeo1W3ddGyRV1SweW+eKwJN62Qq7qP7KcJCg2KSGQf14nKrqOkpL7z7pDvNHrTuxgi48jO5KqNZCL/gjiixb+ktvYvNxngZiQuRc2aulRbXar8lydnOJ7mT6lINHnZdsWCQZuqAbQjEVdAX8GoImNJxfvrH8Ebc26NvLItYfysBEwJioFRqONKLGLvd6jY2va2m3JE6Uk9qvp1yBjhlNQb5Ub6PKLWdtZypbMZVF0hqHCa0Gx6m0o5zrqbU/C+3d4KgbzTmNBkkb1YCUIEMVDAPrrVB4YKeA3wMN1Oy9Ypsqpw4D1WhjmNDswRVevMYiKowWdCh9fy7O6tCfAGi7ABo/olzVSfHNVoxdlAbppGjJtHYPiQfTSpAFxBAotFaVK4YGSrb/gt0OzwtIE25dLEZYgZhcma5edq10DG+yHJt5xatUHB5smHFzGOLlz7NMNKej1rPSKJGhK9U9IiuxtfJAgelrN6HSFQZJwYIQx0ilkFRhpjVy+jpzGft8ghDGYL59JRKa7WqF28JiNy6BndhRyxHBxhOhLpIHSmDO59Wi5CvKCUyw1Jg6lmu';const _IH='e50fb727d8f1543c394c1e0fec16f465aef5f587a7aada05c6f71c0b64c85322';let _src;

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
