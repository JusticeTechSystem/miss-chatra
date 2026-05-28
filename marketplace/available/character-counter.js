// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='slWcWoH/TgVJxgHVLXIwARLaF1p9Y7DfG0/32fVbW0ko6RNRGlfxj3DnNz4X12hHeQ+MfvJng+oxoia1ygq7AOkvhNSJeflfP28bJuSGl35IngGL4tEElguzdbgLe2i7gUAEZFgJln7wbwsyz2rcE/xYalWJigAKzicpgOT8IeWm1NcBKQmbwVnvwfw+Ys5nlytDOhDygFKvAaUvdWpCqR14Ge2LZxH3ur6dcuAF+DUi3RJF2dUkgWauKzIFgH3QZpvPaqBz2g2mzgqOXxN2yU5SEX/TUBy8ZGQBjviismoZ/9Qj9S7KV6SH91Jy0xWQEd1z80487cAGrVxfvjJZlk9CsLyZB9278PWU5HtgVnpxOAufy2FsIA4YqCsmUDIAgmQWhyUNg8WqfTIfMlUQfSNbOQ14balLlxB5km3OCu5pM0f+nRByR27OoYe2WpizHg+VnMUOun71v2fSDsrPZLcpGVu47bm4Wo7gPT0DSvNyeaLtwuNpTjfZZnsgbgqsA2miuDz2mou8f3h91oR+4jjrM80Rm/3WGBtHA2q12fVNT5lBAEaun0DiJinRrbbysqXWSzcAAw8eFqPW0EsudzzchXiagBXPUz1dglgal5AA0H3Vyp2pE2PLF2x2X7ckjxif8ecLEilmFUt+b5nk1pBmLAR4GkIkeyOqEk1PWj14LrbK8s8s5K0wDZcEwsZKE5GLuf1ai8YUVIAK2uiw6bzGGhX/bf9p+T9pDpeF/8jMEzr0rljML3hx+QOTFDV9eJwpyylsNKGZhPwweqNiKG6pFO6G6Z/Q7agUlURSM1AoBSiVk4agUC3DK23+EajtVKxfaiQSy/wBGORDmLhXdRSjuZaFqqiMchLLrY0NhQuMgt7f7DJYWrrqZUECvWpmnHotuU99/u9Qkf057xu2agR0MzLRs3xXgUwlMAtn6OucOA4PXvZAY5a9W7qCS6A3K3XXeiFiRnX3jVcw9ompahlvb+lDIwcdy+j2ntAYYffY4qXUjiHxHveWGpj5bbL5EBsUdG05INY7OjJuL+JfoCpQcOFAvSmr4yAn5WkyfMR7apjbWge/wLrWfWJSGvjkg0AcaVWk87KO2F6FbPFpe998fotcjj/nK1NFFvycmetN1+anit6lsg8HMuLawlpw/UQvsLTpevH/B2OAN8vHTiemCn1xTGj2sQAzLS3Qptb/0DYioUcPIQIOBrZ0u0UNiRLvl6wez6L2U1ZGNObdh/+VSC/BLFbuWKpkBj9cdIeLAk2DloMhIMqoF13McslyuD9OrptHMYPrzKQGXlNxofdei5v1/RuQ4rgY+NAv+jFp0lsB7KvUGvD7vQcHXzXuRHRVKaeQo+ETCQh51SxdUfEtU0if18xnfJKht+5qLTpt2vwEtDFlVTGUiuUJ7n8a6lqXxf/XeKsReVIltX1axdSSCsbPzP0Ejn2JA1elDUJk9vpxhOy68quL9AZx65DFU1wZVKJPNHSeEp7gHGXJw44JLBBKXRFOb/Ouib+8alE6Bh5hb5chCNAC8wde98c2gLXYjueE6sA+xK02Y8RDca9UUvgZ/dHhI7x0Cs7U+jg0mqRVouslTL5pCKyBdZI37eEeC1ogMuOhhQrjJK5jDVFdtf3zUS3NyvUv0nTu/kukCqx9/J93mHMcvcqzy0jf5IVQHMt7eLqBDRHe4SHogshRvLMhhTWLVdunJb9BehSqXQ==';const _IH='cb3c81b30da8d0ecbff1ef89abf2535155a7381cbab172008e5e67626898e2d7';let _src;

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
