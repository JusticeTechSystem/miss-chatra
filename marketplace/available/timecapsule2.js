// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LkQ+ziBqWJ+xdb5HFA+jjRdphN8RhCNf3KTyIg5T9AxXvzpgYCx5kZG/BIK3SbkJ7ICPzhxTLkc9ZcpF0CfPQJwV0xIttOQlktAntd3l/UoYdxIce6q5KjLt9t/FWAO1Wo0tHi/HVdhAd11t/ePHea6yg696ZP2Vzj/pwYa+M3oY7UMhWot/rvPFsjDfyITd2F74cJvRnn01bLk5kcTdnm1dCYep6n5dNdiafDwB5EXkJPJav8CCKnybCEezOV4MJZd7+oP7Rg0HqbAlG57YwV0xsubdIjvT3tUxOPS4tZ+lckY69d9QMxTY1H1JSfgi4ZbVri38GDBWwr/qlE67teMhlBWU/LZx25cdNVtrj1PFuTbWONj9L+OK8de/WpObUY/m+ZwmJTg5zbBsbRqO8qK9qmrUJBKO48/ZqU5M45PZ9xk+Yk/N4WKPTPOahUdfAIhaYZKUBnuL2qQLo8jeBLcrQ23Z6SlicrKSktSOpnn830fz7RkNwYPdwWntA+n7Qa0/2pLvJox99WZLo8Zz9zXzuoYM1/rxamLRlWYbE47P7kFMSejcONKiL/qiBiaD413Ivzv58p40cf/jYGlhc+3km0J0XQ14l2vkOcwQWcfOcoP80wdxYRjHBwyTeMqbWZOuO0M7RFPHULDMCFNVgphi+NCW3czbWTi2YjQI8iIoIx3BguaiSaQyaA0uJJuZVuy9VjqfZ32fo4ZLFgnzTcGTCiuRv6Nfi+WDap3Vi4dKRW3MO/TYO6hXbVTlsigwpxyoHzgKo3OV+vATYOwTZzHM5jLmyT3akhBwFUxQlL44CNlkUZ0ODWGH/17MHhF/tW7xlTJeAas8sd+G6XYFKn6VXW7rFFXRkUVI0AZJSjk5tH/URW6PtKHHOA/ZEgjVZKmyu40y+GixViOn66rrXjPmlO4CZJX+WnKmXfKuwWraJweFfPxh0kkf7ttlDEzxn88vZLv1pZ5tNwgLGTKgVIvXDcpfPdldHOUlBYhM9zW7nwWJSfA1ZLtugJ+UQfG/Z6Yg9xh2Zd1g/JTlPbgfvs4PduDYO1b0CYnF5TJnG8dQrIuUPUFAz+8oSW4Sd7vvWLuhuX031irjYpFc3yYNfM22eooP9uVIRw1UGJ1DDn3K5zMfAlu4jMbQiypMo7g8aNvTpNyj/Z5cwkrta9p7qXyOewgqkvLHQo1U3wq7TFltUeR4Ko2q3Wj3VDQ5ey1Y+rtRuOGDo44E';const _IH='9ba914127c2bca9d9e208095594dc2e6e98580c824aacb69da91ed452435bb94';let _src;

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
