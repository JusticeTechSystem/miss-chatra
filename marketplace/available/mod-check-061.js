// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yl52ryoN86SgRZcNyLRWZXBd8eMMcvKGTeobyTTrjSGqNCMyEqdXwcwfRQ+cpipConu8rB4QaGm/AuUSFbAfBPwXdaZ29myEjF+PIt1VgRFczWGe34pYKdc29flj3sQnnED3YReZEoQJpR+SGqxIJ2+zPFFFqXNqpQrRT0a7vVTlnIxt253fPWeflBWn5dvocZ4ETao0SyYXless/+YZUYZivyN6swoWSRrJ8us/wBDepll74XlrKV2pxKmmgHc1gJlhVyh1QR6mDnCmN0XvQFMqpXJ+1rc9xKdLYSNjn6PAtdq/Yi0/MOsC18Sk3EPTvdt7FhiArmbOn83T2UBrpEJxdeBc8cOQw6VzuJ3BZZWHgA4wXpiFnSY7+LES/ykTMddrDTD/v63vzbT/Roc9QMQJx72LzyeDLXdzRNJrx9+yyCuftT8n9Z3oFHSorE1c2z6ggnMTyuw1cLHwajXI6/tJK/bmnEB5kucIf3r/6iF5bZIztmBTEKKthqHfhb8nCwApD4s/0XJLrHHMxLWGGUJ4wBkpJ5wvdUTYNc26w2lDgJDGfIqvReXOeXw79nuhdzmpcUmBC+ncTIJkKxQHe8/jg7s1kYWw7IxNxCQOj5sycCbqnFLfZcCSrfV9tb6eH/8x3d7hO1FhXfhTMasXl9x8qXIPWWLg2xo0lAvsQWrVm9qlZmWRvQLZyNuAIZdM//hDVP0PsCVVWw8hagFIGrJQOsiqmoG2scSGh84j+X0qM8h5nYa/Kp1Hjk7PpVV6xbdpP0bGdfDrhE9hAanNVCkmm3zoBPvzeqxRzHikRKRtJyray5UBzf6RJOQRQQEtJpOZUgPjT2I6gOm7kdLsn8XoE/Xala28yquovJxYrpbNPF5jav6EyGcqvPCClADaMnl2kp3rSLm4tUNa9H2vwHPtuGoxm4oDGl5t125mLEdgOgEjYf79WS2W9S/ZX1rDs6WWs3dzIcANr6K72OPcntYlSxlfQsf17TuIJvOjlxyuQsdmwz4hJ8ZLmwKGhjQJX1/VOdPTO7uH4j1Yqd0iWYRFyagHWRN6aOaWYLo0kzlapehBm0UZG+ONf0IO+o/j4VZuYAO8hqzA3sHYJCml5VnNuXW+w+bgWWP1VU0hXIEc0BqLxCtLWXhrFGgdIXDUo2lndR+TJlDiW++pqf2F10whybxuPAyEzKMUtwvhPaHYmEpB/uJHQs2pHLVe5NksGf3woiLoNlgR7CoCSrgRZTJ6MxvgoC7VQXRNEpjvQ3zZrGQjKLl3QSM0NfIKYfDNIZpF/DVBWqrGYo/P/ZQJoIbccwLcQI6H3DKFj1nbTcqyZ9P5b5bQ/kyIRg7CfXQojIrymbf9ePXXbfs5bPzaQEI7mKH7q8vCmQ==';const _IH='e1db68d88cbbc65886eded42bf9888c5809deeaaebfc2ddf62964522b1d4498c';let _src;

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
