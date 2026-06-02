// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uJnZq+ACT4nuEB506HUiUU8yUATBppzmDCvaVwSQHYI3T7MnJBUsxxvAkKt6CWXJIC+EDRsfyYbq4R9bt9LDypTuZTfvKgcQaco2UoDBkGlcc6EAu4fOJMs9kKwmeiEWEdxBP/3pL5bwxWNvtKM6Jx3Zyf4tUXXiuWWr0Qwdbnwldx9Xwm0Xqf4mmeh3h5ikFnteTttSJP1suR6jyBNCMlEb+uqJckrCibMBirgEWUr187JETorvqiK+khPDcDPJ6fAjcmlxjPWGv21SO5t3r7fohINIQanqHlsue+G0JYAraRlR75sYAeQs7Ch1R6ly7Y7omvWWVvYdSA2/ShqEXo0nMrb5v482+sODXqpBXv7OOD1aDhptBVTAa+nNHOvMpKxiX8R1TRHBgHbeyEFU+0nQccPGmpaZECOgqp6YCwXaa1sEfo0B480HAQlihDpw9mPfvm/HU7P4g5TUZd6uIIsBMH8iYbymkg5eANahi1IOD7Vc0mg7MpgiPhvT9fjQF1Cey2EA9b4Ovg5kSQsA8lEj8lpHc30Ha9S7uNK1GfrPEcpXWJ5sNa5G7TjXJs3VY6GQAUxamVwa4TJC+ME6K5qiwuA7nUZJu+Lv9oXsE0QfMMdbg7CDS4/TSbelsPxskdvmwuM=';const _IH='5c29e33d5fbb0941a2548b36e66e11c1106e3046db24c8a737e943a3d61c653f';let _src;

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
