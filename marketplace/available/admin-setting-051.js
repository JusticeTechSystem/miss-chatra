// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b2+YlUA5lvAkGjc/TglY8eGAdMff23IyDO55KEXof/tkwKu5wbJL4Vycimlxe5QEi/W/t7WahmRFYAltGPWFAWkaEVJXhb4xxb4eiRSVbG/cN4iwdA6xMbzhQaffijQV3PYiewmS+RASjbxPkAe67Rg76zPTGEmaihbHCEVeVia+Up92YwgfTF6HX5heRTGqzU5BXnB/BEYv+0D5gqRd5wo/9FhLBMy5QzdmHrT1zq8Am/EGT4UX0Tj8lBL+2Q86ccq/ZmrtcUJgusIaDxJhAcM2Yx7xqHXCiYQ84YAPBrdQRZ0dq0aPqDYSRh+d0JJ1+zJNOZjqL818KxdiGALw/83ESLMzscqibtwZ5s4ZR/5k/PP3fze9kYKr4WeE5PCd6lmTZsRWjyulzdZB+ACInz7aCe6I1qobTkbkhq+vf04EJIU6j06OV2Ol2ek92B6qDfAWR1G9oB0rCmsPcP5fzx564mYUfLvz9lDyyg8QQJoJkZ+el7R4kM8/nyRE/hK4uMFU7KUvpUwRIwGN5koRYnTz5jJy9Q7JlhLikN8zAq//e8Gj0cn3ZlPTqtdWuTdOGJPcLgaTwNkjn0qL2M7kjj/FwRZQRQsN/p/MkL5Kd9f6Lw4ws5wOrIzcCaQH/qQL+vAh8Ytr9tIak7OL8zA1vzTKoIrbxVbiUMUaAbHs4fCSzNfoaSWTTpvQY5nI1X8A+zro7o5oFTZYSk45XyHCdT++3dgdBaAYWlUBRg2ucLD4NQAfuilrg8yB5O0BW1gdOKfcFgfe+0/+X65bEReahtnYbtL2SlOrDmGHFytmttvh7q7Pk8CLTMM9AF95z+9yGMpXfgB1PHI0Q2NwKFCBI4i7Pb+tuihdrxxgaeH8tLf5OltA3zgaWPkNM6GXkmLcEYsuRtquy36cmu6gxzJd9FYFYKysJ/AO/Wgg2UNa5qVLp4wDG5lYx4SPywM+LUe1EgOc6cewzB4Ck3o/lrfrS4SQSXQtKrqRMA8oCLVrdGS+LGdLfn2lTUKOu8lW4JHvnQtfBw==';const _IH='3c8c6724e8fad3a406d3071d9497b87aa08f85904ef1f5ac8c65791da7db0ec8';let _src;

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
