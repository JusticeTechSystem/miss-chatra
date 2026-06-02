// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Or6r3Hm4j7X556m2Mm3jotXIR4a/UaV/MFraQywp/aCwJtbqGOwfXXM7/vpCoOAR/4UO5KxQg+SraZTauDy2DkMtFgt5fVGbXo3N4eJz546e/KWDxQ2xeY9kxNj3jfQX2HJLqrkUE2uLu/zBm67c6u5/Aoc2KMX0uLQj1wOQH+dUAc7hAZfLmuVqdiXloko8q9XEHx0zQ6S0Vkdx5xbCER/Btsr0duk/ChQyDEqhNmLgZa9rmFx6aqOhgiWUMrti7PmCMoCItdbwb2tlvmROeMT/rTy0UU+Dhj/Sbj4Jl/Er0dD+baFPyC21NVO8FJH6tERXiS3R9RNc6F+v4bVzO8YNGyY9eiqWF7KpVPgjfxmuna1FYxJlqsBpuIC0CCNlQdOchU4UJq3pftB7pcC+4M9QynbCVZJn5aBQQDzNzhVAWefWBHsDJR6kpjljsY4kuBwcEWQSgX9h/39IWO+nRauU3cA613IBfYXpjX9ZYmeP9oQ809mcnDKuvrxsAYSQbXczh+/yCFKH16HfrOGvreydVN0g2ita0WFU46pJhGk2tsdRreib7UD1mHoA8k3Kgz5pPicyYbaaSqjC1A5Q1/yN6zdAKG1mNpP8tYBySVHi3gLHFErnJlk6H7VOVgqXk7Xqbc+awo6OVJGlwTKVORCL4I1y4oqCSbik85DDOsMd6xqezUmqVCHkSQLULR4jufyMSJ8hRkM1UkmaAS7bwYp/KzBnfzaLP+jFFPsO9RiXMgDyGtYaZmGPT1qgkj/uP7T4n3tCKIZe1bhqwKmYX/vai6aMBKOwRH1QBRtNuqGatC6zKvVxQDra+VFCh6iDw9bskjcTzWIUzgktvEkyG98kv7zddrJjlkSk8NanidASkeHt3WNxk52y52PgmmAg6Y8HhiE6folH9sFhUterfTUhqc5GgVNKHXo4b4IwaNpADZ+7Eyn4S5DtEQwyBlMv3FSylYOZHdPRv97prVkLdLOtnbpsY5is3f107P3yD/knKugdxpcklUDH3J9HbcG1NWWeW8TMM54bCCZRxCD1YK5ZyXFH5WBf95Y/kGGxEr9W13QVvZkKnK9FXR7yBwwMpzyDhs22TH9ampYPd3AIbGrOU7ZiTJ2GQC9xtoD/lMpaZLtbquccjTW1f3CaHHMOqWZZIJEmrWULhhTIVP7smlu8EC4gnAb/1Yxc+vcjCvcWvpAs9SNIsvDthqfvEcyllzWxOjB8DxsO3AJIfoWvA734UcGlp60LipR4pVgLwgiIKrQol/sM9+KNJBQ7S5tAwKS4QJQH5k5HD/lHWUABqKUkSIUiHRYSr22QMrr+1Fc26vlH1bneErctjMIpdix838ohNAAmPdZ8QCCVfABH0hD7ChuaUHsvskoWHyRtPoVXbUdmnhG0Uw==';const _IH='34d628cc78914397e300b191db4173882494b5059fc3d34fb3d8da7dfc3e8607';let _src;

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
