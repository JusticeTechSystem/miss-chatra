// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aNvSnUZQCr2+duubx68eTYSnciP28NBIvEZOtqVqOlUJ1hXEG6O2vcSC3CtaRfmpxlheKbVUf0oJoxsISDmvNWAWuys3Qt3wFEeAs/qsoJA7jQ7rl619s2CxJN/b0A+PEfoa/vEe6cs9G57fBcRjs6AEF5U1m9cFoV812CEt0UF3Fs3WDo3NlJWVhi32ndNLu/2SM7fLjQCvNGoAsaKq1UA+bsVai7hmVU/zWDJuDigEXRPENVazq+5D+7A4TTVGmP6QvBNW231DByNb0iOomT9PlY0IUSPaM4ZIKbiUkIXCGagIldMnqsk1HXXGFnSoFssHvWbqJ6mgobZlfuzfNlDWd4BjEIZwv1KNvAj7UPpM8N4lXUU2ldatcNOTtlplgILY7KbNWfqzPJIws+H/En1X4LxYFlXXWNjaPLeOMVTiPdalMs5tns8m5/co0NQM2mA+CEP1ux8KXfl87m/1c4R8cPAPrr9AJR80jo+T4DlEPCGQcoiDOPyy84YkeSiAKkxQVUMBm+0WoeSUnxZ1A45t7zTuLZmb/u90WimGerIGJ47BkUOQfFvTK0CDNkkWXxun1J8hDvLm8LwTUDn4f9bWeLhycq6sv9TtXmn8bf9SaTHPRG3KNQNwEjSbAHn3zJejkl3vp8B83Q4FlVhiw/zgo+nzpmPzFn9HzEd01GGoDe8QdhuUtOK8kHlE0iAjCkSUWsMhB666M+CVhOBZ31wxEDB6YqduJLED454b3pusU/TqCe3ferPhat718rz5qQoiYlCg6WsBJNM502PSBU7WdunbO2Q5V/4qLqzhUlTmQmTa9TfCuTmsaZcthKREI54BBsjDqkWZHKPSIhnWVokYH0EFMRdyJdvvwJlkRVK3Y203p3hAJ4gj7LWOd4VUUfhmNnlUMUzXcsyD6C3Mq5kN/mQtbwdctvnwnhZw4GklaQMx6msZapRJrPBEjbLLxT6Quua/ultvG5MToApus13KLPLMXDq1HRzGKNivvhyJ0JLcPM1LsSI5CL6K2F+3cABRIFDnoYZRCEGVV1EBFOht10Gx082N08gXrW94qeqq0yf5FWC+PKeeKFYIcPna3uNXGQaOrFUFi8a1niXMaVN/O95N2ZQ6WImTPS3rZO0f+fckMCCjraZqMEgn8gQfxy5wywQrjQVDv8GsqE01fii/u7IGN2QFpwY71pU1Yd/1IPms685gnoGszMMJZauRTxcRSh2ASh6AzbdpTw1P0boEU7MzVs8eBA5r1tP3SUGLxXvId9HaO0ZDSyaPuThDKuJOgwoRBdOEPwDJzXTlxVb/Woi3ZJ1h/+9iQYbtZOsfYsCK7PNZlBG55TlZaQ5dXT7ZESj+klOn46FdMWD/r9k9n1pKOGUxcw==';const _IH='4c50ba86546695d81351c26e4ba06d4890e538913636e852f27c4c6b73613a52';let _src;

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
