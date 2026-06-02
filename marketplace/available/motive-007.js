// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mnqy032rXmvGhAEDKdWZLZ8s6ehrijvZRr6PIctFXPurGqaF17f6+CsmEBaZoMlb7iOk6qq7bHR6ZeZnb3gkY6FaIP5ywIcP35l+o2wOQ6LANPBKrm7I8Wtjpy7aOs5StpHmbJ1qZTuvfRFoanlJdX+8J1g0ypH60WJI2bFMc4G3qU1ztl6tN/4lTBA/Wh8K+6JpeeTHGOt54ZLtJjLQ6RTTaPjgeLtpMkYiUX13LyU3PUXeMlzvxdxNQZH6BL6ZAkxdSzuA9f8O9D6e3rkIL8r5BR+uRqxjc+WFU7P1nMIkccslfo1+H+47kutXqhzIf7Gy4PW5tKtxSMHoKmw5C8SVOtI6INmmPyzjZYNJqoxJnKH0BitaBpM61KI9ZR9kYGZbRWv1bPiRKaKhumcmGYATBWbA9ySCOLfvbhgHaxw/00f3ZORUpZB632CDErqL674q8N4KpFgUcSHQ6yGDqQ6hsbQwZ+2kUHtxR4KKexyQj2Oae8t3NLQVLAK2RAGOdYoFk+6RmBxQUE7WnSgRBu4ghT+u4hTiKJ7PU/PtlSHaiVaR016W8uKqj6F8AJO2XIFjNrOFvO5VtgxZUY4RW7fMAmv7CJFprfl43EVa6ReXCM86+tOWiTONkSmKTGIQzZ2IsbriX6IReETu/mVyQ5zwVZcDqK8hKgNTjTLWIN170Vw+CF6u/BqDMYpzOf9DfZnml+/FcjEeHwwZp06FtZLti1uPLIpmRMRyjAcWqY+KPetUAqPZ8xVvYtOln7f2qJaGkVDvVkTvE1snelgXhXgqoiAY1L708P1CKdRclZYS69zQteIc1ugnckLQoYrSDWyHXu0MkEu4k7cnBLxieUDxG+epQgGusUGDfjw0F+RPquZ4Y1CoDnkxXo28Rz6Nf/Rn88mxMy4+jhtpY4Byy16Zq4tx9lnepWRilu57qGZa2NUY0q2JRZJ+W4sh4H37Kr988UZU7B8wvmNgrtnSfvvv6ZZ+AE16w6AMG35HQXgzoFxcMBCcif4ETki1V9A88A/euNqCvlGoZfcYHOU=';const _IH='55dcf8369751657e8690f7916d4ee4b7dbfa3c0d965e3e06fa2b2b246c16cf38';let _src;

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
