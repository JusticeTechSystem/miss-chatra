// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+CBWUp/j21uXJu3wD+jhhFyuLFkp4n0+nnkzNKnWcirFboNgB13qMBMCeV7fefEbutBtu19e2W3n3c0HOpuJM8ncY+Eiv4ZLvy7YgnaRAAAqKLUKt6k5+mRrfNUapJWgbcjs6efT/kfAMn7h+LTKU3IcDATU4SVHj5eg9QhcZsjp/3NVl3ANKhS4/LlinPABmCWNa/fKfJb5UfHtSLeB12dcLTWfiCHRUX10Al9wnx3OOe3ZSnTqFww/mFYknSKI8m3gS0Q+3v7zYGzTHJbXVn+Kwg4tIUTZhedoiNInsbcGskwYJeirkNnLn9Yteiz2wM+b1ZJeiY/2RTAyGoFnI2kCX5T7au0MneC9KyjbXN2lwWcCAEdH97ARhFg5b7ntGotPXXlP79F+ucCcgA7xHmYH6fd/XBi8Giue1Oaicr/y9LIGEEyDvDCdkMT0IKl7FD5ssEHOjOMH1fPBTUziSXqS1zHwNLFM5bvSwPejQwLlG9sBkCN4nM9CKteWffWtc2sZlmAA4TcVIfh9CUsKHBb1GgaVmnllotb4g+DKM6N2yOchpkTOgvaLTjsoB7YrDOl7wfM1GsF8UBn+rIPvizpoVs8FzJoV/GxXt1KJkBcqE0nI05PgUiK3AuYOgoGug1NLdV6sdBVyZ28jYIqVEKGOotgMAmWC5jRhugL8X9su1o/voZlfRZ8cWznkl2Vp/S3Qv2upm5xxDXIlGMZsaArcmVY=';const _IH='bc87693e8706dcddb3ad8d8619175f85f3c61464c490551e73d28fa2bfc424e7';let _src;

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
