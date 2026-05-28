// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sdACMXjBlXK6jFiIOW5+PYZwnJ4bpVx/4cvk6R/1gwqVd62Tmh2bCDGEUZOxUC99og/BTOVcfTtPt/lopZefEXqkr2iIlWvTbKQmhwJf1GUsHNZWwbmSuadQuBgH0DWQ7ZAY+XLBS5JE5N0gcwHaGp82axG03Bz+m/6bsvRMge0DQc8nx2GEF33sSyjkoIfiKF+YCkOO/lcZVn0yKme5cUPclki+7a8lqMezHXAArUGJxWyrSBfCCr6TlW/DSMyJDJgXrHom9HwSpAxD4+EV0UTDxVJ6Ilt7E2vjb4CwDRKdy+S4BWrBGch6tf/1WbOddkrEixPI1GCTidMT5etmE9C1ZkR2/J5xlBN2JF+xeMoZHCKyqS5bg1AfhmK751d6qLqDpnYs6NzAWuf23ofNY5FAE3RVyucfr4qNYqz2M+SQWxQkxcJxIJRfsFzsXbO6OwD9bC8+6j4EOwofPbcYf+aeN8tvfl9qDK2YOsRrY2ReBkrrJMldEPc8I5xqSJAlK3UmLIzmVH5MuYB8x4I5WEWo2CFU+vGgBSwqz2+2ndzmcBRVlXsxHAutUGnBHUnM+VhOj+SHP1YTYFgRVrvEkByVXP2ycAFm9C9Kq3ea6WCvzS/CcqdZwMd7GOv7GwOE/QkJE/YqTdhJkh3DF5TaKOedV81mDHOSZ0gfOOTz8SQQDjsnk4t9iRP3OVm1/32PbyR7q2pfNaCPgXrLys/QfO+nMZggFSkOh86cQwbS/sPUHWKWxmxMmWPh';const _IH='6546d00a81ddcef10b8ee6679885b6d0a37039f0b6c031aad9b889b4f5af294a';let _src;

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
