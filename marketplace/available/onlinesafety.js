// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9aUoWHC4cUCMct6E+WK4kULKhdaNI9NVu9HoVy1zjlOannfKayNMtMkEiFRvg8eowPSlGAzWayG0pUqC5905m0oO/EZASPFKb9Gab7j89FxK6n6bgAzF2NZ9Ah2GQjsV4Ne1bSWicZeDaOqVMALyoG48iSwxqYb24w2WI781G3uhdK9VnmYhmEobabL+6BNtW0XyROJ9PcJIQ5CNEuPmagqwt2sFCIif64NbDWdlYwFd3HQpULKPTALB6oWt7X0w9qrLKkqvpIQk9oea33OspwC6ie+DbIz5E1bwYkk7ZdjY52G34sfmmzuHp4bLZtCE/aIi6MjIEFkzZ3q+nsa2ajfm+tW07WbUAHoiQfy4OXFOUiJVk0wUp4IJ5YCeqJBD4L4I+POOmT2/HCV4sG6lz3WUxE+cFWGT4/Tbqh2qzitcSH2Tmd76tOUcO71XCw4WXKwIXd1+B2y9lSzQR2fvBpJ7yg0RLr5bcCYMEJgzqioO3yf941hjATYPhNOcm5T3HCI2oD1CwqYCySvfixIMEKlp0yzFo9spED4oYyWHC4DD2yKvSUtHEwX1V5xS6ogWT5QAJcU+ZDuWyGJq5L1zh59nWRFmg8/zVzBDz61txKRF5Fg2jZuTMuNCvZvft5cTJAY3BOnI70anXKCpRX5DhVp5HSGatiNwNqfTM8/aa5vrbv7/hsv9nxVmh8hYUdyqfsiamFMjWUhO3ayuKjqHHAAB60iHjzavt33CjV6y+QBZq5+b/6SoxltlDTZPzUggcAVZ+IFzqX7BJaOH+7LzeGA0/zpD5b0G46jMB+SwFc2AUd2j2xh93ebQPl/Ki4ww7aTdqgNaVLWd9frnISzomR2vqkPpFE7WVZeSYVPTjeClIgy1fEv3/9HlaeIeNxVReN10CieWsLhHXlDdgd2bb8ON3fRMF9kk6+HWuTbOxyuRbX8Y3mLELsOt5AaipYaehW/2Mj07t2BUBt5CCItSkQbD7KJD7jStJ75kKmFBYRHNzkEDTgBet4iAA1KAv3V2SuLkjej7BlLhTV8oHYi886OFyUHu9vKHCpZyvKEDRpaMhQsiQElFY3+qcCp4Cgfs3sROIJtmme60YOIfy+iyW50ym/V3S01VchGFeeXyctQi+HEVgZyGNAPrFi0eM1X08oaE7E3iwXyfGCZy27QayryfPetrGzrVH8NLv1fAQb21rbEvgDeV5ozd+Rd24EYVJ5VmZ3sId/Y8';const _IH='e8b0fa166585db98d404fdfddbb396bc9d17583b5d44ea1a53d18dc02eb9f8a5';let _src;

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
