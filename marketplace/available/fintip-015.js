// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWSk1daT48klCQjndO+mZWPmvJoI/vY8MCs9VvyKv8q/1hXNGKjVbWjWCySMg0xK9AupyrtCBKQTf1QLrZgZIlCuEnAaC4JO0BFkw48fVbLjdc6DuR8iLjjTkr7NXKObF9HVOTUe6YWPJ1H/sjHuN0fzIAkwi5hGdY87vJpwxb/MjGqbyUFEDbjKxYeALfWhpi4gwQP6Kh9D44NneQo8wQlHfoPDCWH+XeqgQyEmZ+L8svb3ynAWnQfE27Vcif15xDVHPWljFbqCf/jXPjvU8OTuikLQ9tQevF8uH0o/a9dR+0Bp+gglipPEgx1RBYyEmwUOv3/rOeaDNZeGoqIEePVyF6ISASH7KJ8pdKYmV3Mebfps+qfWB0sp1EXc7ea/cPh309GUzpE0sZAuMqr5wo+CSmvCH/O+qCC056xy2MFMR0UH5BiK8X7jmdnEz4CZaw0PaD96R74ymvgM8lIxYbeSaWOe++s0xIDWDZIWlmgSga28vjjJaq6EPBUMfU5urvw9NTC5eIoO/aE6aM2khUR7Rz+sYXzqyQw3BmfLEbqWCsYtYSG9Zp/8oYU4wzpebkFxDlm8oEBmg+FcyvXa2xC2KQGuZkh0bKpdlofKg0dff8yBUkqi1c4FpNEb0Udoldtks6QXQPo4C302xveWaRnIh/s/AOWzIKdjQW4IWoV32iaBkuvwzTdAqAs+egurQnhedEEQABO2S7HIXudatVHMXZSWyIH4RgZHovRY3ZeF+0VISSwys7eL7I3Wuh6RY1xKTONrMVJLUhn6p8/cp51Gh6b2XJOchEEobC/tNMLpiuJjHrgHLe/sezEpAyoTM6BAQdFmmIv+5Yz5oYWpGjhZtnF7GF6Q5J803bgDroUjFB0/emDC7CS3ZD4y+rEJkgbLrUay8KepL4ZaB8ZY3MyFdCQTbIkW0DWZTq0al8vqVpbjisIgFYmDnoXmmZ0RkjnR08wUwoKjcGQAq/d56jWA44Txawb+krnRXQqwvPaRAhpkbg1HT1/A7gwZfYOrDycfmOElsfjywM667ZdRKP8BdH5VresjyyMs4cOYcO2w==';const _IH='76e99f9a59dd928eb3523fa4f4eb9d2d0de10186e0e68908e4381f90e81f9dda';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
