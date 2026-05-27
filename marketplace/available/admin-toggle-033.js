// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D5k+S8jodIRuslRaunB1lP0RrqQp5RwuzsU+LrqAerEt6VOt6aRSue5fyP1GJJroLoRZo5nGVfGaQMBtAmbzpGmpE2Wsion8J/j4psOmKFpuVudXN4HmWCMkPm5x2FfAk8vqZku3SX1a+2+WIGdyu8sNdpqRujMaINJveV6AqiEWRyUCpxE7TIATnNOLpF1kaMtA864iiIO8EBsDknrhViv9IKxz8IzsxZJU8k33iicSXwBEMYJsvqehkubMmTA0qSfdiLdG4+o91kUydgG+mrIRbCkWuQ7yksmz/lQpV8oCz69HTVifV4Lsajz8JB/d4JAyWwfYEv7nzMIOav5IDxtd1fnMHRgEsCOU2XREHVHZ35bm1JC0O4LgtyNWsCIvsQ6TfTKIERo8CSRnA6W5oEhD/fT0pUhg3UMzTwLqLKexcx55MzDV+uSPfUk33uji2uLBkegwS9tmsX0L20pjmvqAacpBmR9umG1WsHkornFayRrZuVX0q83+Jcsisik+rt1zi55DwkjjjuFGWXLjGDI5l2ZTlVskjY419fFmcUjK9DQwjLc8eRbKfvMPcp6o+0VMyhGrH20QNJRkHuL0h7cu/F8wkeybKYkJEnbCrwqjJ50JuSwk4NNPmvF7c4vmN9uEbDwK11f+YHCCXrJMizNN00314m6FqU7KTCb0yW8lqTWiY9qzDhH5whIgnpXHX8ZlaUjUg27Y75lzTcpHQ1v9XB5i+w5UL+PHdCsxNFsB9P1QNRyko9KjMPwMH65AahfGK8c/K2D8jb/HY8BlhNp952BH94sKC58PTyx7Yt+5b/uydX+otuHgP9GMIK4NNs+KT8UXEDliouHKXC4Rrzt1mKzCU55qFwFTJcHgDS7ioKptePfSmYC168wx30LIJa6/QBM/ELLtFI2m1EnZU7TcBcVoyGImJUh9bha1fePHQthiGWjD0vkqNr36jB4y/yEpBZqYwCwa0HluRXjJW/Cqz4d02CsD35jLc8q/ixsKPYRuNS+9zykmyp+1';const _IH='b351780bff7883ac14cc199c13969f923d0bb71e27bb61612ed3d033ea881319';let _src;

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
