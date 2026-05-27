// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+IjRkr55qbtWYO0ulbZEZYgcXsX41fjk5GuU+FENHDohw+VoMUemfNtRpWbtZb4ULT1vnPDgUadSVcZduY7GN7X/09nnEbiWhtCJuylNNXaLnH3lRB6ucbdlyoJIrk2ra2kWmZx2lBnAQQ2uyVMUknkqWAyhgwD0/uYEHac5Kig9NfET7mKcOmSotuYxScydd3F0Nl6mhLQY53s2Fsy/xF5vGcq46Ywx+5N8V6i2AFz8YzVezyBo4dZeMgUfKqnN6v6YBnOLx6CDDeVCJuJHu8HmFPrPOr3TXP6AO0YAqoBWmnRgmRZYvLAk9TQYNvhPOmfNE8IENX8nwUjo9bEJDK2fbje3ZGXQAsBPtEHY9dfuYaB/U2LTPxK29ivDZl3BBZ52+75jgiFkQ9mDJR79tIBPf3yGoqE2AANqaLmgRdH9mWZJoBadVjcFwaZmOfZz3bBAGYdL9EA8pd+t92xJ31b3OZKKRM2DvCrk+aDAcGJ/dW1ap30KXzAwWC8rLvVHspOkOFHxwwY3NGT2+d2uREMzrpC+dW2qBVHlqMSp5MI5Dq4ZWSukNLAWrYiyoBd5MOB5ocjgnkxpHmQ+K5FWTgudukzPNAKTfHlXD3Xt+iibC+4rqixrrXL0ITTsNDjfpDvz/y/b6epLdVZy/r5ht+KYIH5Cp/nD9dA4VewG86IDTmz2rwrwci3WPw/e3wUvVsfZnWLAzxjzsH3OIGkAq475Z9aXZDQBzLPEQdrsWg==';const _IH='2399dc40fcd96bb42b86f4f6f3051ba036ff81e0a934e5900f54cab4d3d0ccb5';let _src;

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
