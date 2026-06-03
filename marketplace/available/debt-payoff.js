// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='796P/lbAmnxqxhB3I3u+l/KtGQHgvwnEv192qT3p/2B89B6C6OxIPQDDOlv7jNCU4cFUlvdXHwVtNHob1vCuF0K/6Ukugec5NOMrrekA9wAgT6QOxJr9HYUKHGkMdakkrly25x8qWDtJAarcasp1E16d1R4V5CZ1dkOcAz9bvmI3OPaa6CvEOKfK9kyXr3n5twJESqvG0hBdCvHEpZgirOaN7UTB34WvFKBF2xrIxa+aA6Lu8ynJSJYspilrwIQ+iUEZ6qP6ciOvzUzyj3v4FM14jfpw5nDpZuzU8arkT8fwq+CbphUHl8Ak+9jpkrybs5eyr5TNOHIwcYMK3YVJMTO05xgT6PMYpFDudoDMnKyEwlFCeGZ5CohD9BVvFGYn/+U9szO3O/SQjonZBvA/HIGcN5mADHfhZJlQ6L4lvT6u3YgDXm/dh58/aTNUu8UJtm+ipvSHbjaI0CRxIUpL0uu/vGzSonz+JGQ/3ChkmJIJ2Tf2tAW6V4WtOcJCxLngYlldPtr7r/jCP5j5J6jiTe03qO/eS+xKL8ZEobimTPLFjNlFBn4HWcLSJb5QjSgUeH9TX4MnVY/pUNnjfWiKqPLb3tDN378ZrHm4Zwt227dZVWULhQMnB8/ooEFP+QzKx97/Ah6Z62S6bVzPPP/lrAnIPzW5DK/cve5EioOWFg8rsb3nfQwH1Kdebd9lGPxNm2Fu3ozdebIA/duB/hGevlbjHmMkcoCKsUsXD1urYJS6L4LgiSKgiTf/p/zIyfBONA9aPfoxPvQyRzB1bawb8aA2GjdwdrMIslIAi9wMi6MncoD6zE2S6++vEpUCplFEGjT9az90/LHAnjImF8RQ4LrtCWAncQo14Al28wEvT0kgLoBUdNXlA2VIk2Uru5UqqZwH3Y+4IfWbBOOA62w/NIawVF57d0QAOd7yxA0s8TzERrTz0DLyRP3aWQO8Toa6q7heCFxtDIjt0bTDIObwRXevp2P9zEQEKslNFucVdr81vO10hFc1CWEHlrmBgcao3fe1YKtL/H1//sSLRToXgVXC82i2NpgRnM22GqyqKYdeSXkaCHZwR6WgO3jcgOqlSdc+Et0dy8p424VBCBq78SrSvMkxOlYX6ayn/XPFf9MENH31YV7OstxUm4BM1aGuiyruXLj+bvpctam79R+sgeG9DFPKeId2jgOHSP+uWP87teXmP/mr3Y0jdm/VJsYAakd2BkiUlYPSjYo2YdakPzkdAwcsKH11YR4tw4OGuBR1cyFs+7lWGyuXWfo9qQGMBd+lQAC4YgOyQmhOI2zLzCAsslt4EZb8jrPN/sB7wI5L+XHveukmQVkBSpf2KSimAEiEpTwjE/Vg7zhunTJt7SQ/PqIEaJz8EuSMh6Ok6EHVQrUCk22WKYDjqYar1sTnpIBwK03rQJmuu5lOtw9ql78/wS+rpZ7yEI66CeOccgV4Gkc+cKJ3yMX3PiYFQgscPPXJ5eJ3xNeH/xGaLzs7A7PtywdbdsJusO5U3AaGjk36tNp3qL7Sm2JnuL7vuF6mfGuHPkSxJ/JF+v7w2QW1A4jtywYFweODq1eQKBlynGdkGguWyzOxjne5pXzeV4IzS+KfnlCyoWXjnzd2OM1eMy+i';const _IH='c3c4e0187079dd282fcd2a1bc8b9eb02d160277959a77bb1e0958f8766001d0b';let _src;

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
