// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KNba5PV/gIji8QoREkWe3XPt+Kcdmb9n7z9rFJ/6dTfYtE62oQjbJM4xvyoKoLhVbT4IQlpLKPklVAkfHVaLHnwKpviVhIGu3eFsxSfI8XkkAZm2NkKhBtvQ+4mVD8KoOqrTzZAarg2qhAPFeodWgIf4OunytamPGqx8tSkvL2ksDaAW4Olr/GDEZWYtWkRYFRdXhTF0VwXz8TmFlqQhgiKaQJ+87zwylLrJBp3DCsAsBgLpMZGh8VlKTpbN49JKTx1G1MCqP9qh2MP+vLQVsO7YxpJajrj4EBMyBcnvD8iBhztvbXMr918HwpWP5eVvFItXp40b+co6LuL0bf9+GW7vnp4UIr1+qPICBsf8EyafbbXcXYcu7G9tM1arc00mBE0HUk8aMx7mXA6w/95Tq4BK4fbMYt7rWI9kBotFBHTUKVUNpT8YeMItRPPjpsw2TtwEl/1T1/aa8Gvr/54M6X4oo+gSZKxtEnAeN3MoIyabf3zYinA0fRi2JAqIOZCi268lUgJMfCXfX5p6hL8RAFTz3aHXY1L0UOT8qVQsDYYQH8nAZCnDwPCfBQevjvSqFA4BZ2m0EmDd8ECivSYkPg1Yawv2v4kVYk98SULQXgcaVdg9clATsNbJIJOEzwJFZ3t/VGEQQfsQWwcvfo9SVUsL/py0rv96GdMk36XTEocBt/Z5ka640JQCDTCsvgwy6JRVlr2Wn2+2vg3oPoecA1GWcy/Al+f0XaZuSKBmGRISMqQxlwq1Bx9qkw+HoWmKwt8Fit3YWEcSEA9P+i1cH5evVki8MMXzVMxYChpHH8TgLwNpncfFWeRPM/TxPfHFEcVTuth8E7Q2pV28JqUg86oAWqdNh0ramCC0/kUa96Kj9W1ihBiXx7l3HwVYNMTPmTSSZWCkLWHXpZ0OYIUe0s2qsNGZc6rRQgrBGoNkc27I9FR8z3vXSRRgNYc1p6j/4wCXq6dVzDz6GaqvW2slEFnSgNci9lcYFz9x8yDdG0a8iMA7j7bW6gOqDiQeGfkm7ObVomqP3ovlI6slr2f+zOJbXnErp45ebSB9nVson917fB23BHl2oBi2VgQw8qcjr1jHorprLLNQDM6Oi/U/ki3mMipv9kdctYhBM8OT9CgmsNPAZHZBozm6IS2sCbEBGQSeh+0VHTf81TVjqCQ7c3JgPUSScVT0MZnhK28Zn58Ifya4ZNmKcvBl9DQUaD2e2v8I8KOk/PpbhFLViog=';const _IH='49a071e6cad2b54876e06a1e2613dc0b61ba75164abffdb0b53e5bebd871ac93';let _src;

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
