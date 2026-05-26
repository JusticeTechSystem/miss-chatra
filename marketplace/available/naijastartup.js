// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oas7C/8iLp7igP7yKS18fAQLg+56Rx+Ybo2fPTq7+dJJGr1VlqPhnBPb8R/i9nqIAPlhqKRFy9orL6zKNgO2ZQOq6TbRbhXfipbJ/pwT4fC7sEn3oFUpfR9DoqeZNTVISvn5KdjMY6uKi1taqDEFWto892iKB8Be5znaEudRuPfjRu5WyYxMufomCQM0uAHcdhRr8DHOa8uuidxsf0hbR8jxxAaG00EGAyNwZSmiAFRWWvVgATgDYIoFp97RxGysodq42ABXo49PYGu6+/M3SzDCSNf2PdoZj+9Apl0ycex61Kbad2cTiyMp2mGhZjkm2dRM8UnQY0Q0+yXPYl+Go+Du9ipiW9806nD173T2YfgWqcdVpOu517EGEAgU1zp1zCtFKyOj98xRPqn776lK3/7EGnJFcg7UBcKmABfVRu7/iKqAWGE+tWT4oktiP5fKmI3Z8FM/71WLTCOR1Xlm/uJzyTkgdFUl+MeGkjsT0bNPOCcd50sMhtCx0ZeyTxG4foTgxRiiO49z3qb/5Fm9ukY9s77k7eFrmjqZtgFPWl4itmxoUKBpBjEy7V6DUf7lUyQcSDzBCtVm+T6R9vwKa6ECKJ13xpm/0A2lTgMtOVJ/UrJF9LQ5Yup3OmbptFDvG4SAMOYetElK//+XMY/oMVdTXL2gB4wAhQZP86NWTqNwqVyZg4VgROAlX3OpJyFSPSHDY+mXIoW6v4leG838fB1lvPT1TS4qWZ8YHJIKRWO5FbwQsYjqguSz8s6rjB3EyWzAcJyjKcxzO68XEl6HUFOHpPJ4RFrLl65dyE5qaaZZbOYPRALUFZM+fXj2r/ldu+9NGvHrcRJLI1srCAm9avIQbcqUa6x+MTr9P9Eko/T5CrGixmts9I9x12a9ninpYOksqw3ymtGcVis6Yofl6kHdp9/gnvXdMtSJiInp+KBl/GwwNaD2ykoJl7k6fVIXploJEIn9WsGMJ7YMzYhIUz+WyQqWaciLNort/Npt4JhufVzrfEHI7IfmkuGgG/hFbz2yyv5oKYRQuZTakme5oHw3BDgZt0movpdo/NmsGKZYjusTXAOM0yvMJnUkVLfFtYhR6gyvVO2EVB75KT4E7vkeGm0I1W+NQTiJiP9R71CxKVWjmooiDZCAruwV2CebnTDLo1dqBU/q753vBobFgw4UwvBhm64ybyQdeCPwKmTqrPq75nX2VrlOS+nn64zaiymd9dy1';const _IH='87529c3ebb47c9e0dd9c1444a81a085ed87975f3911a9903a5bd87407ee732b0';let _src;

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
