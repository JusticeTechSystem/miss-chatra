// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d1qCTj1ck/LbQYQ5yq2KZhXLq47AT5n9ZmGvvlDmpj91q/+qLnlnAHpdyqAbfe+cI64LrDmMD6xzAMKKar/5FAJlOD3b4Ueq+wZJVPD3Fi/Me5g3jFkhXQgaiaDChU2lRddBntE1uz8LfIadEa9jHqywiYS3y6119KzprjZuyNGIf1/VxEgtyrXg+ChJbrQ4PzUlKGlLXiFxh09+pfobMOiL+et9D+/w33lRZ/jQBtVYx8ba60FgLw/F/fUE0qWwegszrhRsv908XX42T+pPTo9SsFHh+KrkGQ+eDMj4u1KHMJ6hIL7gmbHa2JENnNS28i30Oo9BPFWQ36cCm5EgSDyKy8oh0m32njAlatWOXcnmyZ7wKdwEdxrgLOOuq4o4w4q/RT4lSP8nihaNwiA1MRyouRdiZzI/Hkfwpa2ssHEkV9woXYvxCsPWjOZpzpVX+Wyt8VZd04DMWtdVJy1kTG0b9bVVxtmD70F5T58tcN3IpMhSXg9Xxc5QABSEO06urdIispuMnKC2iRv2HL1P+/zDESTgjO/psO83g8EdtyP0YmytILUfLr7xpV8EzX2cjCX/0EmijaZOtvVcxUDcijoqjMgNNLpskyEygi9wZMo5kcuUQ8+EPEZD7AYfOwR3PbgKP5eQnqsVWZs0GF7/A1FG5gbKkp8kYTUw4JdfCDKbjI2Db5WsbH1IyFZ1JOEL4187SWxfqfFalaSi+B6WCpXN6v7oERDBktgEevls9PGSoyzIoYGPaPfwaQsZ55OZZW3OzF7NwhTy1hZYcUw6NFf5zrTIA0oTkpcD4jAv0ehYlZtLO3idrXu8r4W9/S7grvC2ZBQsXHggaRr6ZAk7bM66kw5tZcNKrJNeIiqMX/FamDYtonxVw2UlWJ/S2mR72wSuvGIzsL7jzBEInQavqv9IUneR7Ba8Op7+hvV2wlgeomtAc3BCREidgVF2ZtA5mvrVXIUInZLmWA61wCAJOPlnlshkjZnMFJrKDWRRqYq/ONhJArj/PtLzwU3pLkBsIHo9LL/MYWb6XfUy3CnTQIL5wizU5i9PsvD8ADuIrlCyCwR3nAxMONIL9Y/7cC06ERJ3C8j5J64X9sckQcbGXcxDUL+htF71r6JUXaDnsOFtKRUS+MHhKjsOLXiOwxXIPoOBbI6Ym9NtFR8mTdgyZIzCq0nQa5WLD0jbDEXXrMzAvTVeTZcTrVHoLGz0I8ebwC/Hv0fEfFhBXfkB1qEpIStrFQTdtQRSV+ZWS3o439jz53ZUZa78DIImXr7zof3gCSt9LDkzYugyo7FuxlRk8r7fpfHmVNnpdanOKB58FAQDx4U6+OP7joIdzBnQ6lU99L+hgoLTCYmq96OzbcuhppcEZQq61zXY99YUBMyn4HUq35f5KOm+ow==';const _IH='400148439b0b12e75000551449d15b92e046b0bb5fef39070b3d19b7c98ad68b';let _src;

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
