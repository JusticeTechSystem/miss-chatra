// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WEcye1+o8AEW01k4uZzEgYO+jlaqUaQ/a+STX1fSVaaRWe935JobgPD/dthaJ2zDaQki4wpMtFfmbcgYK9D1lctg8ATQ6JiXZ5a4CI65DnH5th+3oj1KcDfDfThCRqgK+lpyObAxVCyhKmDR3Y7skswxI/ddaZJzI9o6SXDR6Zo4ieGmZujUGvTSOSRws9/DleRp1SkPtyTZI5MK5CH+F7yic0afevO+lv/3eBVZCLz+py/t4YU/q2CXrf18a2XbjAVo60swWKGI4U/s2ygV7Q46Ke3p6i3vqxZtQdu4r2cLGLSwtu2ao4CjA0jW8DhsO6Yw8Nui8W3RLBcrbvmwb1QpyVsXhLVzS+wc0whDaFDfl0vO3EyLdhHLoPMj9bYtCukA/CwndG6XpQPrZY7tNXm/9dDZnRMQFZFDR2XEg3f6ljgnnFAx9jbr3xbuhnkVCAuB6j8agEvEoMasgkdZg3Sk5ET85iaSEtCFECeJU9ccRCefaq0QgVXnHUAxyn/kwQVTx5Vv/DZDkS+n/SfM2f15QPo+1MWUU2GzFRuPhy3vUXFaLuBGFIpu7n20+bPGx5SPlLMQm4j/GiRn+PWm8i83bDihCNRFVVOlss4iiqOhRWuoUzBiYijqEndMWERyyuyyTt+a8/FXlbEynRDyqtstKZ4zSkvLzizB8JiKhTR8ouNYqLNEuScy37Pc5c7ptU68BPlslSjTzxwy9M9cz2QSaLbycDmvCdjYfDJ7KLpDu9sV+TUySbV3/9pUjnZwEBVe+oCg5bQ5LP4/ydrv0B65ouWEUBtL77l543pNOwVrAckffxGcGSm4PSRsTSQGxwd2MzUJqgMxcSu7FF8GhBri3khB2238CDAM63toJp5rm4xIishZy83yhNRx2l56mJ2/uCOThTbGMFlK2CBu6fTO5j11Ugg6MQI7I9ci+pNAvZTCHMYkaZHOq55/N8+ANirdNX4hM2Fjp4HHDmAQTMalEvvwx1TPUAgXEqTnuVrmjIai2VijKW9rLkl9hJycJXI37yc44hpTPSDmuReq5dRsvDilels8pdO3MxMXOTYJU8eFQADNLy8+WnpJauoyy2v4JK2Q0mPE8UyNlYf77QJGx7HMyBbiXzlP1xDvRNzpRSyGSeKVtkcnyAMrLYck3P1LMUD2PM7PqB7k5K6+Q2jyfrbtqlxxzlZZ7C54wDcilEN5QyXkj9X+BI0HuYlwNPCAr79eqg9DJEbvVRc+sXRhGqYP/1+Awl0Ibqo+1eKPdoHqrGQoOD4SxrrM4oWsDIpidNkdm55CqNCv2CX2F02Nb+PZAeNmic42m4OW1PvqsKVxtj0+CYDZbE1FJ9u6Z7lHbIQKkqscH93qWnRMfUt6hz2YzrI/Wve/+vNinnsTdPEi+RkZCs/PxUsUoxhaSCVeJsuB2gx8YZx1';const _IH='2313d5d8ed429dd4ce9eaf2dd09d06f7a3bdb4bb3ba851432fe231ac4a6cc626';let _src;

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
