// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PwaHhkv+vrrMajmA8NvBWsSRKXjaj/feq1Jm+MH50JYDGiReLb5+KRVKupgN2da99h4g5rcpvE3mYHUSCGqQ1crQfSmNV08rEKsls1rhjVscRraC/4UVFyhZeZ9FcQCwtFrikQCyzCq5WpEWOged4W3urwTTT7WImTaPyprs/filA4WIFkzriQkcNnb3aQxsA0EHwFCoG5dEoc6mhmISPRVwpfVh880qEe0uByiklZkzA9+k3NBusLcb7eAQlDsZ1sczXH8T7wQyXUqXe7Z1mZ89tiqnYU8qFOx3Fd8nIrnCXTtedetoXUF6IWzum3Tw5NbP+2WN8xD4sTMd+3znq2gfMVLIJzVWvCHJhhg8aDPJplRyv+2HEAOrjZQMyrpXkP1Du1CvQEfE9nJPIGbA0ASzEqEzBAZDfJ7SAVJ7s9vlEucYib7IFMCl/hrxN/BMnr1IU+pphMI/VfovQNhlTdtDRmKuzf99qgUFY/20/9BdCoKq4N916ZYAD9jT6vdIJbS8EwyOK2dSXVggnoiv073/1ccMOKom5EEAanwofUVmR4kAVKU/YfGznOGfax3xVfyQIUTQ1uQPqZ1GO/54ktD77By0gNX2W+tEV7EjmdAR1ObYpgiHJlYveBomOQkdPvEOtU/eqslEeWMhV42eaFF+NHGyPuxwrh81/Oam9y/IadDOc4aOcOD2atcgNHGC5DFDN7G10fqd8tN9jrFKIqvAjlnGGmesGQ==';const _IH='abe3b0b6b6cfe7fabcd79d7c1057916918fbdc869233465e5333ae4c67d820d0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
