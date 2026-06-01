// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ//0fYdFBPJZD6pThlwW+5aCOD5MXMpfjZSSvf+mu3IVsqpLu2vCN4zzvqtcuPL3ULe3OkI6SISCwWQ1260OAdc+OR05vj8BDx8XxwBv/2Z/SJza5OqGxItrIIdlHFdcwmCYOctwBImqSTHt4uYnm1kspHUCpqF2oWVjpDYDdFjrrvz/aSJz2T2l+OGQuQvpU6n0SsTSac5SzW2+m+G02o3CkzFQZhj8ZiT30b8LA8Q16givrZfJpxdTt1IZZzvg/cgxw9n/BQVn2v86gsHZaX48iB9t76i5r1ksRFSXHPZgul3nx1eyoSpUN8uRcWTNDsM6cvsMFU4mZTCZmPE8p/jLS4P/av/FA24oDN/lK4f14JQfQuHW71qGg40griQHy89QSXHb0hWZUCE3eMi067wpYYkPvPsET/hiOd/6ZGrE4MfKwRITrbsik4PXriscJcyoflqBO8hQsKHXlQfsdvcsCuypaMUd4qfr2debWGeD8kqn2CLMPj5DZcUaVn7rAavUhQjHq9bDQhR+ehGmN+xr03v1fF1+TpdRMxSTfsL9ev+79FXgNpcw8dvYm3uZDcaZ5reMa7azvuke0rYCO0P9olnDep5C4Mcyp8lmjRkoWf/a3CCtP2uK5b92fiE8Hzei1zJD9RjSlIjZIArzPtEELNImDSaUOvMtksuZNYtrpxjvBEsVwWspRSySHjMkJ/gm40Rot2reFJUOatpaBdiLEumElm+oYQ68s6C0RovXV5EenQwvidtly5TntCLmKZlFI6rhq9rA1nwieoqpqCcIel3J6cUidtnU4eVzUc6ViEcYqEGDNO4VnHDkDlTlV6aThccCofb07f27A36mHUGzrfK6J+vr0yG4mgOGaUtheu3dakz7dI0wALfHjVrxGQrjFccb4CrgkceIZk9OuVAlEjVPtn/OfZCTGdAxIaKHhIX7erct/a73yK2rZ74QcNwGQrWrKw9WouY7LCd+06vEyJ4AoWKUalt55Jv0BDs+u2ywwHtWMQ5NYJDyrE9VpiBqbXzT2dP0rhpTRIj4owTOTw/EaZM8PsQTfrzZfeqj8CYPUFUZ+bEs6SBHsaQeq5xFMdb7xuOcxxw6NIOLtGXd5wymcRdkCtUgYJUEbQNXCjbEhmcysXnx37xeyNWc9sil4OHK0asByyWqg+hyd23eCivfxOYtH5sHF+g7q50wS1ns10b1QiRFlpCf0GJceDjttwzgdMEMDpFhWOHZuDDoWvpR2RoygcboS7/B1E4UGs5epDoZb8D4cRdSnnvJ/Ohvr1UAj2fyIUIuz42MYVzG9CAxHF5T2F+7BJa8iBNUqoNiRJNkJSPszkLCN7Kl6MQqZIMFeyZWNjBvLvijbOeHahz/EFL9mchgKPTt5hk5oYdrJYK+wfc=';const _IH='0b98bf4d04d336f7a9c85980e62346d4c793c489c895dca2e09a0d2ace954e3f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
