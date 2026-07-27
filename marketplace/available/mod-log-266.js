// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpO9TkqE06vC3NXYNbMUa0ozQhImN0Ti+xKUTQqeD1Kz+Xuz49lgYqwanHeldwXJ6+lUYh8MQKNtE3BrwNMvGnHZsQV8hxaleIEOMCUNgT+wEgdb66XrKbZ4R/5jGEo2jeRgQK96xNzKwoO8uPPOkvO9wTkKn5uq6eqPgxNzRHjzvG+v4Q4XWo7g3nN0bxjXCvdm83cT7YVzLPUyQANDUvB60rsxrjQTnhCvFvwUJ+63jllK1/uR+HqOEkd/4MAytJvnbs+Qk1wWRkblBDnQSU4znjZv1dxLOh4LqOMkQCliQu6nsMZJDgUjbmPRmmyDpaGnM0w9I5DePRxHhwU4MALVB2CYea5NAjvxtvtFEjISe/JA73srAps0hdtkIX6ybYezX+2XU8/8ewdAVr+w48CEbuY28Vhbl2xvy9J8GsPvlutJp2H3ytpOwnuOXs9+pae9rihmsnKVX/CxuHvQ4yAh9eUsXSYiCMU2FsnnioHsRdODxcSXU0hr1ycdkI0Hy5RrEYPWEEylphz1VJ5HNkZwER8BTMPqxgG4O9KRtOPO+wwov/HCBiIKMcf1hgRFxj+gJuTfQGL/tA2HnkOihuAyrALBI9i3FZ2v598H3/ay+BPYEl0dBER+chpoG57Dr6LAFdubKYytVz7HQVQv78p36wnfqozQp9aQUPvyc5g3+OCy+XpxmFE7nb1azSY8LqttlliXyVPrcLLQ9rhFACQ6AnsMMLYj0Rf8YbfKnmUjQoJg+6T58/zUaWDO2MGoF5xpRIBtoam46j2kK1v2sgZmhDkcEMSZn876pBZRmOItDQlMQ/ANB/xgszevhedsUu1UG1UZAOllm38sficYgkUgXOqVU5hstZtwerCc/Z1wySvXUynQrDkPtmg5QO51GYG9BoVzwEmrkZ/7hoIKtYIelqUz5FUoQ6bxMdao4v6hmu+rgD259PpSk7HCdfoxOe/6ghLNpBC5uHnROTthH/q3bbeCNBsT/vZUAtJ53K3YjiG1XBKNjJLmXX/csEbJ2CeTrNg27rUO9CF9rwXPl1L8PyR7KUHC9n195k7+dXsvuoRGBRjRIXN3YKGmQ3SKV8TO0uMyMLdI0hkP7avl59yMQag5Ue3tyJfsID5bx+Ym5b+G3LbwafrZOAipTCnrG240BJxCEhTfbDlRxqZa8Vw9K1t+WdTUrZKd1p/PJcGZ/EYrsLtnNTZD5Lc+MceGHRqjtOZezMpM8dr2rWCJas/FF0YwpHYI/5jJAyXllJ/7GqNq1k/O7hinJ3AW1ptFKjyDZShOgEiQRNmWF80yeo2owhdVU2aHfEZhBDThrrXYu1NqmswMj7S2fKqPPh65BHt1wY2l7IS97u';const _IH='3217fccac1cf990b2d21492e0659a811bec5ce6b8e98c616211de53814589f4b';let _src;

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
