// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2ZHgMlZr+ATwDJAbg2zRIGffv5vy44DBV6w5zM57ZpDV4E45hGnhF8U+IHI83fZMcAo6d6XzUfDkpyoW5LTAJQH4oTDqzS63zHnRr5AkTvEGDLWKhJBk+gKxvcooQBWyEWU93XWSosNg5hKeLwK3gk8P4TIlHSpAp0/uoIXJniCec+FUL9XeD9m2RTUGLVEP4/BwpJLKYih4vHKoJYtv7UZoS0dbfRsaKCfUczA7bDhlLjCZ+U8L/N5dk5hwlt3UbHIBo/x4F52WXePydc6gIuw5ULoGbBzQGSMKPbGTFCC/P46QRV/0o9D93QagTNB/YsN1jED8x6BHnSSGoZHA6I3EXzYFVtZoIN7yWtrXzIhsIoe5cnlnaON4DNf40U7BCEJuAs3oabTH4UYtHWeaMQhN9BpM4t0jFMZJ21or6kltWvSOjiuVSaUKCEdsixzWkJ3pztwNc+1TJF7sABkVYL+99SUlE+wHa4tgf0Y2ZPZDSIwfUwXDdYYVMD4/3WzweNl1rymUttVPwioiNo7RiB5EAi4MOYgJa19vro5adcemdJlfv/KTKuy+jlC/aCkp70HSHr9rGNNvTmJLXi92zQhnvrtXwt2JoqUtPSe9pAI7eQB00VYlrvG7jW7a9pKo5Fiv5zKUmLAoG8M4DKs4q0PTyjYEK0zt9VA3b983fMBTsBtQrOkfTsJrumTi4JcoFnPzJhaexSMlQKXhOdqu16MZZdW8JmpQxbCYAhPj5TRBKhasQgdyoeEWetZnMLod95RlRmaVDHfiqYwYc24TXLpZb2zO8ercQRF7W+nqURQBfSNtARtbb+bjKfh3uA2wNeD/+cDjxJvjZQJk0o2r9Kh7ENg8FkmkFbQmtXf429bgiO7p79Fj8lUGMY1lIkwd+7QyIGlI3fVx0UFVwgiAnlywOASJk9hnRSLZsjI=';const _IH='4909f80513ce609a093ce358a6bcce39e54475d20a500b51789f45ed81788fbb';let _src;

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
