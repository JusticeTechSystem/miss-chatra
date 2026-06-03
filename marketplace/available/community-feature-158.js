// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W9OJpuwB0AxZqvuIiKekf/N7ezj/Z93i4cQTPMXLFdhK/8z4MORZcRAKKUz+iuGp67p51iSxKMUjwmBlr0fxU6+a9K9Cl2/s6MUzaEXyYyG+xVsUM1MOinawxILglb2js8IIP9xf/9LpmfHekJDSgkskpXLzHUXnJ1Wyox8K0LcZnKacmm7PTchfvc9m03zFpeebXSV15kglgfuJtInHH6chdAjFEF3/o8LGoT8zdcP0+uo3DeHd8/7bVci/dNOZzfmZivunmdy7ebb12DpHqO/CKQju8pTFOZCjByYYpQXfK6iA0TabFg/ope3W4XArpERh7WmzRKqXngDCfsiyenwo9sMZozpF33xk7WXCppuYDDtNv9TpKsXckJj7WOoYI7xUxkvC8I4adjew5r7WoqKvRoKw9PwJwe9GMo7Djqehn9EQQSYykEP6mW7zna8HV+tae19/iRFnKGc+KIfI9hEUizhLeoYH781vlt2/LvvgsNa+mGPmo/95W5ivPfpGfIVDURweVpXEBj72qG1VkV2bOhpmQzVBmu1FrTgjk5XBAMsgBzLSzHrkaC+Wlnd1ODfSRAJBuv9rJfgf7ha9oTA93dd5GqnyliEPEDSD1RIH/ptePQ3c1uZBPwWbWmBZhkV35EcuVa4xvXRqAPwC2LaTo5FS1/apUMeyMACQKz/+UWVAX4P6dxQM1hX1izlvuRKgRk4ZbAUUmhgMEoOXZEOerEQ3xEOjxJlNxMk=';const _IH='9abf9f4030c2ffd6129c54e9925052b1ef8a723601a450f7428bc938b8cf992d';let _src;

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
