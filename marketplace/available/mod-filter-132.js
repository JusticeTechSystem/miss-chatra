// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='73MZR5gn+3ppHaJA8Xykh1h6y2UC2b1QX4Jl0rBsZ+AfBlAh7hGcOiGwgHqyf5TuETqpSswAHa/tu4Y3aoMLliggGeAAPZDk0n7Tf0pxgNdD2iLBefSiObdLKQlkPe/w7TIaDBxsMfqu3xKrsm6e0SfekE+HahY87USaj6MXtQxv2bghyspKV4C2lORZj7jffok5GF+3hSlfnXgc3vcriqYPbSEn4rXX2GWgmJieFXMcUdfwptmID3gUFobWdZxp3TSvoVA8AHXokIsUyxLoKMcpipxsn8ID0xTl3D6JRhf2Cw41Jev60HipPolLjXo883PC4I0uc7Yif6d9Y7Y2J0zDo3Oy/jgP90cIZoD+hDec2NHsjy09lzS18TlC/6C9dIuaiUSsbNClOrdHc0LjFgSE+XJIempWTtnnsVbdKweodhAWle6lXfOJWw2sQ3Cey9UPRr6IqEt4yiPzEa8nB/U76t+K70mWzZ4TXNipSkwUyp7OUkbQSFZkPTEa+mCH6FOiSHJbRkLcW8Zr9Q30/vg3uaSmsqfdeFxZQ+n4xrv2fPRNdiQUHxhuPCy0lwa56RpbAdMY/6lNpZhmH89f4CszyxPafBJep6Xn+u4jqmtBON/7h06bslI2ZxB4v9sAfLYYYAYflnNjhDbbUCh0Sk+gsddelEenAkjDpqv69qMITzF+vwEw161gXG81NSAQWLy7GjDcOyO/pTTeJEAWEuDWicKSCCiSwHQccEPvJMrIu/qy0gNmIW3yJwcZuEAdd/Eht1b83amXEDtVQgcARUyEWf3NG75eMzgb4DTPEnyzWLug52Mkkh+ZcKyk+jw4rY3icPEmDayYM0AacntiwRX8MGpiqfqsAjIjH4zcK2BVjaSNlAgG1xHyV5Z+Y/tkvg8i6NkvsY4IUY5QK6xS7cCa0Wq5VIO6rXZgDH119SWV7JXEuDTnhCUGpbBKZxvZ13sTZvYMMC86RWOHHyDHZ7dt1whpSGbfAIcidTO0Z5ubH2a1OnIYlJU4TJNwU54x5B8lWtcMah6NRh0nR/6X6cPyhEUZIcEVB07Ab5IXcsqS1YxP6x9b69/Fv+HZRgyu7UESiO3PtCYarVo/0Tm3WP+IwIU5MnSm6XtNkp0t3IOy1BwhuUdcQqjypK4ML1WQtAXI54LXboAzu4AzXYSnSBdHX4yee5GxcL2QpOvBBTgwzKgv7pVu+ynNG1mDReyHXax9dsMd6OzE+4bh4CJu4ftmiJ7a/IJe/1L8Qxi/kIFwOze1juhF7Mf4S1wV5gYwT0T/6wLYXO5VUB3VoOFV9QI83+ipzHODe9LCIQmE+nkq9gXEftpqbvMmGYIEbQI3BySSuzDzV3nhHe/TvVP7hXy4avkBWkVZOXtJ8xZknmJZXkOsl0VovA==';const _IH='3b73dd4ab0d4a748cba88d73d94c35a158a778b5246ff10f350f672f7ae3292a';let _src;

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
