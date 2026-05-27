// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5y+R3dpXQQGfXAHKrc8mlXjPaQ6LnilTNcgSUDGhcoPT3uP6vtuFm90+BlGJNgoXfN1R6Y8QkxP91i6x73gJqIJT9UwP8iUOxItSP9d83T4pUSi7NUUYvfnQiOl3T325zrpz0rZ0QsnERCAxNbDocO5VL1r+g3IdqGijNEDCF9ywwu9sGB2r8z/PQttbJGiZeHF6nsHdyd+48dOzvT6GX2G0XgYWIkI2BXbGEE9ig5qSx+EP/W6iccskgOs8KtIpgco5QhfQv7zU8CpYqP3qTPC9l/L0r/c4IdnW36eVx4Yi3SqS/p3B2sD4mGedvaLudsa73PWfACt6Zvl48cUFx67YUR4Nep4cG03wiD98KWFdx5HvnfsdUc2spio0ToRVuqJPwqL1TzqUsjWuAz8gwsyuvZpwafPuR64afcvOxJvqm9tMFQHzPlD1a33AVJZk+6K73DiwFACC7QY1ZDTm8AqwVmYphB6BS1dECvDyo+iVjUEv8RgNKS7/NUiQsRhrUadawLhQZA8eiq000EDvlmL0xSaV3WYRkPeLOD8cpOljx2OQz9JBsTIL8PaqytRxgLqq35eBulec7EX2360Y8i1Zf3m7m0TckAdSegvXHFwXYC6MaQPIeb7BSVM/kXZlo0scDcmf7CU+yE4nhDWdz7tnkhT2ODyHx6BB/sQIHaQbFI/Dpa+XDLJeM1odX2hxzYrfKELsFtMFJtemkQb2lYPWIdLjSTNMKQJgV+Qg9XRAy7AD/eOGbSUjobsYv1UO9NvwgkE/tH64pdW+1qiY+Kcei4k3XBCOtuI3RjZK1+3Vnbw07tJgTkxJYTqWJBA1TjqTh0R+uNSLDtMMxAkfuv0sbye1S+3seUqucNKTG8zJ9k33w7niRiiaKb0yq0W6olRv14GZeGQiepgvj5XhqdWiogTAnp/y3wVYBsoWiNrt8eEOxDybjHsdSZ6Gt7eLnESoe5rKFUpQXtfqsoe7hcfNrndAPeZBtKfn34bCYCjedULHAfY=';const _IH='3efab6b2a2a5e2757f16de92c5b5e64b59761eec0f427433df646d7400149a3f';let _src;

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
