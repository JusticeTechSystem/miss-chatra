// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HwKWvD8rbVJxjWVMecEi7OK0sW6kURtRvKSq9jjUYfGvyBiiy7J+xry3W6ck85qjbLR3UWscR+FJLI/DVZGZcplF90UDAKL2XyaCHn73h9uiSmZLw4n1PgLAFsKhB7svCompYGqFD4/RitD5uGpHDeIP79n4CbCk8xtB/d495Z39HyEE4XwdmYBQ/pYJ35CVEEMBnxQK3xQL45Yglmys1/v91xLMtjv4C5fRkGpITdQwb3CFUqKBXFHuXjmf5i7xTj95Z9M2yC873SK83WFEEGl5OpL57h+cW1Iurv5Rbz6cUqRDd4YGPhiVqA7cm/SjUQoRhbKDcBzNul/OaoGk9i9/CvIDM4Ppjem7vUiLgeprygPqXllr+Y7x+djVE4dIkU/iRwiVUUbHi2nrkVR5My4IteMik/T5mvfBvIhn+qUAsHIIrEguRo7z++fR+I/ZmrQLtDb9qTteZh2XxCfhekImXHDZhLLDzJtHj02xtc+DkKvMbiK+Tq/JQ7PzUELM8A7V1EkwxSp0C3Moh0CRXWImqpp+IibrlVVzg1i+8QN1nfYK/1Bw9iX/dX6jbyPfC+wmH4cSfnlHrrjFDg50rEAmg7Dk4agUSL9wQHwb4fhMl0hu/COa7nTQngQlD4xQEoI1HPHpo05npAyBDdFIEu+F76CbxsXtz4Z+axOeMGzJeiowPQhHw4F9n12RN5J/KtKFEmL2+PxY+hAzQa5LK8AsaJ4RCMgAglyOHbgLaBa5rKzMNumHj1inVYU94doQzhQphkpWslveulM1khdKQ03ed/GMNmTuA+MtYmFBKNNwIDOAD7XejQWUgyfP1MbBwNthWXNY9WUrgwEFNCie/ZvVbJxaUNLbAn48vRVnNDwS5VE+UzXtgP3B/+acms248xYhkeAgL7QAwmOvwGtJsUY7c2mpzZz8wHl+DVfkaMcYuZWJrgmgcQgmPeBG5Yi5+W/kcq584QutCD+dD4Acspo+lOTiGmq648tcVJ25TJ/Ui4v+1jfPuERvQNbJ';const _IH='60c011d9a3c64b9456852a16dfa03fe3dbaf332d8754e5cdbbe8d9e71be6b569';let _src;

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
