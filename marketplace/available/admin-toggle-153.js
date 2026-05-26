// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='78DKty9knebDNPbk4Cj9sPyMZ5BVvEXS249rXdy7bsDrJBnxrFRjRzUg/eTP1tw5+Nwjwt1FiBFkNzSn2WGUa0fpU0ZceD3tGdJiHRd/rB/SrK1B0xBCUOccIzAn1KL67RWpSZMJjmjTzNLCS5W5ZupSmQ85Rj89z9z6CT212s90uZ+coYuimwnZPujcb186R5GUvff/WIYK6YdtbX6Xon00c+KkUnyAQJhd5HsvObssDzOAhiRr7KAwEAHlVDU/RJnoGXJ0QIgzNGMI3xLkdJiZc/8ybSBQyFF9TW5nGf+nE9B+whgFN7R8zT7abm6NbsBpxaHEnySuKb9pyPQ/HWbBFii7rtHJGB/7+zlR32XqZCV2f7lXLdJDbnVZrN3JDhCJ1Pv/LeAbwuuzr7j2kQ4lsRcovbXQ2dwEbcaZFBzLsVpAhIcewKAUD7coVe0EHy/YCJikM1Yv54VaWd7hz5bPXUP5JH7qQMnSooD7yjY9lRKmL5OP0z4s4Pp4yqVpQh+keaTNdmEbGe4P+ecIYuV5oZ9pTuoFGA/zkCwCknng6TjbFKl9LcBvh9KWVCJYE+sKEqMQQMWlqLRJ9p59bnZjOB214Q32+FOJJwfhw/lTIzKsfZ1lCvkXMHESLH80Vx4O7fD6hPrYKfPkn03Iw9oG3eFxnfB8Jp1ajtKeAagF2CpgKb/MbvnjlAn+DEUcq/ee5O+RqzF3NfCqmfoQLjJzRlB8zSgdVnFryXmIu4QLto+gop4BKr+FmAplrt81Bu8huz3L8jEf+1lwmIrHf3FjpFUPswywW7iz0JPV9WA8U3tU9z/nhtb3JL3xnkoBPyLgKVCxhxpK6yWL++y0XsrySWK+8IuGehke6go2358ivrZ+VPUhZs1JDpHJ10B7A0QPlPFv4fv+oqUuT1ND9mzzGd3KjFYU26I9/wGp3Uo45T0uC3F+4pvnTtW4Wr7iw+cG/VN3QI8vUIn1bC29H2Qt3pa/aeEjUrltelARwOKK3cuDIMkbGCxWrO8INKtxNg==';const _IH='82237c1d8e9ff979620cdb0b5977cf3bd7268bb536fd33f3ff04b5e0cb4bdcd5';let _src;

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
