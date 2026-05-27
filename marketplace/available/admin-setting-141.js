// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='slQ3PTRZYIqv7ketXLZrKfEuVkeXV0080x8Z0s1/Ad38NfXzKP0XYY4cq2KvlnZ5GQMRW3NfCinKK9lD6CmuRgrfgrwwDY4zzqbduOju6QgCOZrI1huJj3yOXQuEOgVN/47x4gZN65/miEfKVvtAqWuycUJu9KfrapjJDJz9RtozP+M831TrsqO9IQJixftdKv7Dk29VNVz6jDEUP/iBeopg0FQmuJMUpcEZOgy6dZh/mmT/t2B1hrRMdqG08qJPT+LjqzH0szAOi7o6jWW7zkzDKlp5o4t/9Ae6SjtMZI2IQf+rvmDqoGzo4/u05Zs8upFp5CEc2K/EhpF/otyf1z94bT+0pzpfU7RUJDeUxsSuUbtT1DSWrc//xGDZuaICWv/IXzsBF4UbTz6UgMjNWSa9WQVVaxbx6T/3ktZe2JfuIs+EB5yt8t190FRyC1x5A/RIuBcePumQFDGuB3Vl0jOb4QVhwtcxLWvDDyKHcYItI/LyJSg2/uTuMcNInZng+vzN3Z0q6S3Fyfewp69bSem2kRznaYejBBNIGvwS4mcAJINV1s1krabWVyCMzh3pXCxxDuQcPrZYuhKIGfhJ1ADrg/9K1wtQG4r9DYieNQLDPFrnJ0r+S7e4VCL1FkhldCw0U3v6xr9eBDIk+nLqkQ1CdWUFcLoSUHpRFGteGQ38hxHrKwz/oPN8ArDTsIdMZ4q4F6fsiOtUuTyETNjOsL9t+1r9sXfb7/LnPwZHRtw0e7mXz9LFzKPkPw6l8UCB8v6nMxM/hkrNXD4JeL1PsP1igpiOjUtAgpHNL/S6/G80QbR3uWzAnWpd3zP37sjvudvR/WtnAJ7xJ36tPY+QhFdgkqD18gUbRubVNBG3TgEL9y0/89r3m9Vmi3SCTDK5BgcRM9dD3I4pNOMlwH8kKy8TqUFTI/z6cF9l/6DLbFku/HJf9D9XrZozPd9H/0alU7uwr3i7Zc1Eq5cPMrD4IEeHXsNaIKwD7pPerPIaEML1ZYNAY6Cbwj4UFHA+F7L23gm5QemhFlA=';const _IH='085d35fe78bc4cc20ccc7a1cb20f3d39d38599183e8d8a6965ba5ce0bcd826fc';let _src;

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
