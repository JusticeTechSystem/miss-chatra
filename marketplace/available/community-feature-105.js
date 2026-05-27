// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4bWVU6jNYDyAIN4SVN1phGM1uh5KV8EWLAMF8//oehy23oeJGeYDtZrD4iW5icLZ1rPMeVndPGT38lAwZjUTXMUaIsEg5qc3UsL8tAtBzjZRC37WlzyvMPF593xfPT+xamt0UlIasq7te17yuaTTcTovc3E3+d/amEo2OAmTMfgw1I0bVwytGtr0QrmvjefRQO5ySXhuywV0SKXpMqOK+onft3oaBzrMAyor1pOQV523yGBw3Ry5FLMZtLz1TkzvMDgSBl6yNJjaljYz2qSlEcGHsvf19fY5p6z7Hp+wMtUYMJ/Vt/sJ40iqH8o8XL/GYbtgqzO7JlHC+qIOZt2AdorBrzgwjaCGOa2/arNY1McMGH/sl4sP39oNbpOVUjYJsKrpoWWvosxGfZEJNKXrMbYUVG4qY/YlF9GkUvW1V7xdLf5D6Pg+vkxuNVEE7JQSaFQMw22P3YpfKcnJx53iHdAkwZdjZ8Ft2XqbeIKYB4Bmg6BvKWbwfyphvr2E8jsG+3O6g9Pl6/oIutf1R1Hz4LMyLdfdmI1cWHhQ11+FM2eaeK7dfVkKtGlHE1vip72iY5nDwNIS6xxojIl5acDqZdD/7mVrtU1qtQIVEKpZVhXfNm9V6xIb8EVG7s4DpAd2PjpzEsCapRtG81RJv8A+OZ0QsPoi9bRFZ/6mXELvK7IZdwp2KTsCkRSSVdpSKYePydPzduL9u6M5zyms0W9RRSfu2yRrk45Iewi2wZYImJ3UxYWNy7HYeeKK';const _IH='8617a578ed654addf6594ce7eb376972fed9d7f162b75a7acf0221f429c40818';let _src;

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
