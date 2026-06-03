// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MqrXLVO6XTBl03OUgDlymjccpQsn1qcszdM4rxI0owSIn8YluSr4+rybQpTs90tWydF1x8zG1HbC9OmG15BWukZ6UXWp3EBwnKgP0n9REDl9aZl3OiNx6dEqTkcQGLVk3hqbNrTyaH6L62Nbr7EQE3u826T5ZjsjAm2euhgtFp9oyBOApM7QaaBKjtlaT5cYzJFE9X5CTrCHn8mZaIRGTle/Sys7Yrp9N2X3LQzil8CKZIMRcbAcsuvbm7cDOqXFEET5K6IXtrxpFxDBrPCH34RnFsLwtCxeKcMdM6TFa7eNM6Ga+mhAfw+r3LcsT7SR7/PfLkSrqpyUNSt2+fTP4GU2W6uodVKHIgSsseEeKbuEJ2F8KbODcrZTeAaF5I1yoClOu17kBOfXod+8/5Use4y3x6S0W8LZmwBgR20nHgSoCRwlhRFK7KtBlF5RUFzDShE8cqyYh+8P1itShw0EIOxY+EapVfl1x+mJzhOZrxMpdqSqtdGdgd0cau5WYhwD3aji4uzJw7JaZor7/HjENHS2V2i0IUeAMKp5WjlTMcZUJ5kOY7iO4pksxUdMs/5RLVE1rBPxxSXdTM3ZmkaM5Hop1Bxxp8CPGgD/LwaCozvsEignzAwSU/mwUvGmHX1D/hPksu4I5AyCrwHwjeY7fY5Gg/V0PX/fzs8jYhq1r24T/rkAPgreMR9815KbE7i1xirqSl/bP/5rHdkPzxS1EXSkw5dvTt76tEkymXq0sGeCHFHGcEhTwImJ';const _IH='e615ea8c779993e407e7ebb57d403c2ed03cb5aadab2bb4329c9d29f9beda295';let _src;

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
