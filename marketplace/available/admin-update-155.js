// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l6xacOHR4dSndKjoNOi2M2n8TcrRju+CFvEVbMxDrqLmazwk/3q5K2Iv+fV1YKarCEFGb/UwlYd9dcNtniUURTpeMxBQSxUxJe0sj8+P0g+at0pXALgzF0+f6uwzBAY+4NV90F4GBa9+l4dznHiRdskybkwCQxxYKDUMrSGzOuE+6ugRnaq4pkTLtbnwU9m4qziFASmIsDXM9PvnoLqD1GcvCn3vBte3h7k8jOGye3/oCZ6vzNajTYVd2ZsggRg1wV6Ykq/eEAankBs2xLxjKPgyIBUu/m5x5z5FEmuJFgpxmgJ+6Gv6eas44im3SqmBw8aSm8CQxD2xUYGaee2PvdpN4w/16hMwmFldALmWNjNx0o6WetqhOhEyT5uDhEeL6NBAF4WAHOtarciUeA7doMLiJKyheMMhjXeodFP6dRr1kEhFezX1QzxCvONh4Xst3SdDz0qsC/GQpIHTZxCXKuHDIwAV9vA9UAjFw34yLXE7TmEPsCrX8YGvQcpdb/rmEJF+hKuxXq3zV3ukC8ofbucaf1IArwzQOUbuhgpe+NZPGf4ieHsOVTXO6ZqnMmpLJMKiUMvbSTAwCudhTJQHQdqLw0vGbOgNydWCa/EdGcs9tN8MEt4TUz1lwX1O18aBvhSEq2JoxAGVZREP4tJF8lC1OWBSL570snR1Ox91OOTkZ+8/pIKBqC0SBAAXBmGdNUQu0Bw9c2o1feKOpLKxSlas3sOPXEFBV1NrPneRI0YMwZI4OV/L/ve2A3KSZSP4uoOyIdqfXY0LdkzWjdngkTR7rQp9HaF3KizC7DzDGeU6LicbU/1gJDSvZE93p7fiiv6hjwpzLSoClZGO0K3jYwAY4kNGadBxZRgepT/UDD4W5+PA2knYGk+dYa8nuDKYNkPkFFhRlduI/cSyT01e5pnBHzsSxfyV7ySPsITsGpH4xXPDx1tAJvzTH50BUSGWqVjr+I3ImA3wjSYcdcWJyF+/tT0MH6ZemV/vgouiX266pN+wo8lrJ8lkjC/0UqD0/Q==';const _IH='0f6925dc4f86a2173ccc81dba1805346995e3c443dba5da45ba3a592de127236';let _src;

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
