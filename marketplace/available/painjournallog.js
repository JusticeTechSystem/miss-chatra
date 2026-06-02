// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DuVkvu+S3qwRAkn3Ym3bDE06kc2u2vlyl5FcvnjmIymwIEyfCPCzXfhSYD1OEoAMP4BIuEs3Xcq//eH52cY/V4xvaP8MAs3Vu/DS89Hktc8J3FooGPRd6g+g/O9euX9qxwjmPsv8fHlh3QbFM1kEH+tR6ec9hHR5I/FyoH6PvEGnt2/EF9G4BQtK0y2tl7zN5OEayVpenS+jzJYXMqUwmxXkij0iaq1kLEbvIhWKYznLCSn9aPHkXcjYtFbjYa+4ekG7NOV6nFDWqT8CWSUyPRkGdArdYzMTRjZxH3rXm7+Pu/63QTwBGAiaepdvtfCz9Xz/klyHR8QChIIZxEUOy9u7xLwP6QaEhG9ST0oh1PNvjcZnsnEJzwj90k3INY4XNs1NbUVmBeUC60KnZBmq3Phm9UQDVuH3NhNGq9hSjuqGw2AnAHHZDj2Yv5ISgwpnUY8uNNNtQAQ5FPCA+iE/7a0/EZ5lPIPB8nypgjXRwXI4rQEY1epU51HO96R4Pvkzn1rC34TelmjsZhLiilYv9c7i1U5tnFQBMdgInd1W8NYnzCdoSJDUW2B32396rEx2wCVvSb7ZZa3rqF0B0k/uGCQ9mP+gF13DFHxQOEJcbsD7c9M7EqryFmELkOSf/Cc3S8StkFbWFiNLFzF1fSgeTnEuCaY6kS/CIXHZ2w/MHCHlKPAVxTBcIbksdOfAY5ipJ/d3O/N50aFozWNKGcUQ4bQiECTHm5us0zjRX+8LkV27ZCvO6vF5jVacpiKSoC3Zp+NTEfdtGC7d9NbcAW3dU5/TfG0uCO16lD/G8BtXb3HNtAvdzisqqmcWR601Yt/nimeTuFzGSTpbpxS48v11ufX77SlCDAMxZ3BY30JURoyCcAbCNCIVi/zHiBM54VaxMBX+5G97PkHpm+Hnd0YC2S09n9USSDvettbCv5Tz1GWjOQ6evujUXeAnFmmWq1ItMK3Z5WnsjCzuoexvncHi9ABtjma39X+bmmJTxw9mrdHWFnU+1z+C9Z4PYY0DQcisGTnoGwU0hxu6D+IEMdg2E9tFA0AlAdAxo5jNOND+aXJ1pgm+1bW9X7h3MOmMt/i0lfJPUl43OagO3Da+O8zEakCJm7Zvn0C/Nqed1lXACd7hQhjx1G95qKOK58mtJrcSWrrmnwoZceu1zuwyFzcDeO++BPiB3XB8K23vg9CMCrn3aWcFdvsRAbt3PMeXSj66Loq+qA/MOzL0pPY=';const _IH='3a0d77a058cf7dabef47fc06840787cbf272eb5942db9347b97e998f649e3dab';let _src;

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
