// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwNUyT3wJ0ZzPwON4lS9pee9nmUvLKBn5LIcr+DZ3RC/qsUpfFZUhgA7lIueVvYJc62XAS6CCaeZ4yLksNJygrNU1OuQnvhC79yCRhAsbb9USCEoe0ttj0GYAXKgAUmAWryjdTmSVaP+JEOCNLLzdrNeUfMU0ORpRJ7JegBofa9ACdKyQeegaKRdTvaYC2t0IMLX031q3pCQelZxH1pcmc0QFk2+LIbpqGRJoSRA9NOhms/8Uy4dlMqSXH547adBmQNQ57VyCIGdEhJfAZbLTrYeUG4vyQIv+U0hrcs8dRGM89EFJibAlI+kpJfAglhQ3w4ibMt43uAHBPlOM7mQNnAuADTxzde15zEQDswfeyAQalYAurzuUpLPoY2G0BlVjysEWuVCm4a223zVfbynSJkAKQMVEHnP1++N3EztQHbFSg4OFodpsm8FpDkrwlJ3CAn6JDKhYTX8H/vaoOcYTAoZVbNmyurO+MlfmBh+UrzrCIvPU1aptmKA0t6ifjNO6R9TfnK4wuqA+PUbrZdVBSawDo6vGQSnUURJVnho4iTW0ZxWCI/K4OsI43Egr10QVSAF56/VNLsbGD1mcWKvJxEoCM3jY4Ux3sEKwg6WYwcwy8b8/FxinypWoHlQNAjOoUQig9d4OQ3k8DU76HEwdyYeYSYURYyswFCIjFmLnJR7dbAyEZRjISZWhYwqaJMgYwO6ymrulekJTYel0FhAFKAfhqiMwd65+BNxYMQA==';const _IH='164c6c22513cf5cdfe0f858f4b935669e3bc39ca28b33a291080bbed5bb2913b';let _src;

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
