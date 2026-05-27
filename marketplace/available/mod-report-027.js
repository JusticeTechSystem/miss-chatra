// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='irZvDAmQWADDRP9Z69WMFI+2u2fDe3IsL8chYR4g3JwvetALu21GnJmUhONLkqfHMkfabi1raBskPf0eAFL57TPJ67tPmc+dXgFs6hzH1/Csp2/SKbGWTSzYWJ0sROFNh1kLZPheoT8uMhgsMuPNcBaLtuRpT1pobW9soCeqCcl74pWI5O63ip0NTtF+khcVNkqMBwdvMni1TbKXgafJWezFZc2X0gblSQqDOjbBx5/eMa+WebG+RF6ZkFVWW4HSMIFm1MmyDzd0sfN7LrWasLTWJ2ylVZnnYoZLt7wHqHKJvJaCgmk4P89d+CpviOyEjEb7Uifrodb9S3VK/AJw3MeDrifYOzprKvSECBwlgNP3C4oaH99gcxDI9Sz8HPgWjgv72zeMaHkV0/AmXcuLgGnew6O1UBqjV2JlC+/FMwjkmJd4mC63ffyPLNdLcSyE3pwBZB0sgT6OAHdpD397QXBcp+w2Hhp5co83zOikjnhBuXKOJWIqx4sgYOFtLuswOBxrZUpLOa6XHuZ6CdZ5dOHuyAsMS6PBK60guRx0Gcczi0OqcAXrKQ4LpJ9IHcKFuOPiuduy8R6eNrv4gDrUAk26/LmixNaqiBHmZ2EvZv9Tr+M5U/B1Ws2BDHzj6z2DqpIbAF3OpfOP8hYkRqaIAtvr3CnrXm7Tb28GSOdNBGyzaMo33Prcqo1RvEe4eoHgNrbbyGS/FbdLgiYSNwFWK24vaNlapYf2GES7zjX2O/V+CqvAQA6+K5Gt2OhsPVwwcItmdiUSgICAGm6vDiMv4G3qcVrqgusmI2gegGqnjzzlXceRR88Q0IOEe86XhyOjefowpZHRRq6xccQ71Bt8qMjtYGPAyKRyxjZ1SYpjSN9OwyXtBxuYKlDZVlQXhM3u3SMIX7V0v3XU+H3xALHOx9vXKzLSawc7Gtk3hxoYI2Ihe1wsI0+defdlBL/FWwPKBhpNVi//U02pTTFcmttcn1HEiSNVS/tL75WqrM+5xEVxRQYQw5rMF9x/E4E3Ljm+/R0xN68hTJXTDgBW6aOwnitjzf09kqYLpOV35Vfz9D4+MBUhuW+xNtlT2y3tuhwPRAOzc2+6F6hiD2hYu++eALtr6s6O+i8UyY0zNcGEBrJVLSm8ffuAMBPuJEoy/w20AcCfUWzZtWFv0fTY76l03M5w5LPNML5+TinHL8SPwNpGe8MGhqUtMJr4WiF7LXpOoR76qr2WFGCgtKh9cKzOPWPvPoZ8ZgMYqZFsWV+wHShhapuS8Iv+n0Y9AfQVJ7yN4nqpoKdMjh6JG/D3JQlgjoA1k5JWQZoAEQK38+gAVqM/7eJpfV1ho1e4DxDyIFYg1+yfA8eMXH9EE2CvNGcf+yu9JmS3jP2DxOzguM6Nnpo/sGs=';const _IH='b67f0af3114eecb2d4f00c10da72ec77bdd55e7ea93d5a6dda2c5ebbe88271e0';let _src;

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
