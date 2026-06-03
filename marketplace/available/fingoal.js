// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Df4A47RcB7DgzoTlgtUvLcMTv840cdHo9fJQ7ibYERsMTgXQbyCySS9+kwuVbRrbp6KtU7f0GHsaDuDbKpTZ4R/t4dmJoGRR9Q2kcHbhm3/Q6Tl7VV42Ses8dYGWdFtRleDv25nlGH1b+IZMHI55PfAeCOwvvj6OLysdJ9FfqA3dZleM4+TSBFgLO9PPEC8jO/z1NCcpwVcfLqj/tScGNijPbNpgDnH3MS+LT6PVtvkXSg02hZDprFqRBl1M1I/dVheY1Xf9tVWx9cvmTiIuKb4DunmjloVblreCzX86mRy0MGfT0WBTusXtUPMPzVGFlVK0N1Qi0x0nQMnxVeU19JSFfsDdzhTXeHl+9jNASjMzQzpgOrQWMYKTnYbK4LRztBPFByXggTxcT0lFOacdpNHC0B60YnQzbsZa93R86TnEnfPv97WjJqLqkZvKo5xjGLYO2fr2VmxqOiu3v7et0hsXNLf2hRYae4TkzYYgwAdKfbnPSKF3CJRUoxiH4riU7Lh6bUol92xBpRzZM1h+MEvA4oWLL0qwNHv3BLY8v1XcE4LEM50eDTt/WnzaJ1ndy0SP073/S42homnc9ydbx0Y8jkErTC6+ASdi4X6RcuwYWVz111HZZaju4667qFiuDOGWynktRqhUCk3Iq/w6YN36JxJRi3g117OrR/Q12JwFg0RK0A3+1m6SPXgvUcF0yQvtnL2fSILoJTbusSYPhgIJ7rkExS7BLNdXvLnu8q6MoZchhh/CUTXlMeAfOXWcnecSZyeD0bZmgAvwXVajnPNXFs1pt6K63S4K2ERzuoUJKtZ5x01Vh7pVdlHyfXZZsNWBenh34vwHgiQwMsp594VLcBnQNW/bPkMig4sbug4HYmCzkS+d6AlCDnXP7ml7PXh5I9R/QKqJ/1oU7H40Jqf0AW4hPnbJiCAkimNovPxrWMaOzKxDfjmh2yuFFu8N1/L3x4VZGFqtcmkXXqkKkrezaRoyHwQlfqNeeEuhGJgd3fJdjXyuNJwsK/dzElgvuguPkToj3KKipTMKMoz7Tjvsolwpxt+CYdmCthJZZVG4OfFztaWjWdtp/AFwtXK1rXlRfZ5RVlfmyujt544hP7pi6KWllsv6893qactwB+n1YZVYOFJu9+wZaKXITkrMSx6x79mPcw/76xZd0jFFM+shWAdHogFI329SKdrXt2cwf3UQhkBRVaoOl67zaRH0YTQ=';const _IH='183d614960688c6e4c50efe519a0924a0a54265e093740682e27e44cd2651140';let _src;

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
