// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LPYUbKJqDRh7TpaZT4JV2rowHjCn/BKN+8Eyfyx9Deyr91UeJZANL2EerZpf1q867GF3WkSR6l8FY0Tpzfp8WaULCliXda0bNWS9LEDjmua7NdMOt+b0pn/dN8JV8T38OWLZs0J3FdLsmcr47sAWqqxslyP1Ae6NbCNpDm0ESR4Js4p7r9aFwhAzYYNc/47PA4FihOSQMfBVdKi9YzGPDWsKxjXH2Pv6TiozLrOXEh/JI5r87aCb5uvq/aeFzZLvSbvfKBwSTS8H1AvdOd3pmUPITJdqc/yQbEpMuELSvtd0bWzDKF/RutLPQGhJ9JUSitinFO7XAcsn77xblGUlzE/ik7SgL0N3HAMw8Yps9iKaxghINMwBhpfpe8XZVQmGRdvOLNiy6TVcCtyktjIniAu4uOw7FjpdtlCTBFDOWh0asDit92+iZOlXF1npEVcHVeOcKXQjXDu61+qhhUBrKn3M0pVU3fHMa0XC5flKnn06NuhFLM3h7B9mP8U6k4Q/MFrgFBBS9y3fFQJAWNsbeRpu5F8UpSYIZaDCRDcog8bzn98d3DBUpYxhqMlqR9CivS59v6OK32WQM/Oaf3aI2K04wYaVyUPmFRCy1xPuwPd8powFCL+utxACxLJfO/KvMqeneehcqACpOrE2CccYAWmCMVNfYlt6mmxwqoBpLCFDhGAl9T9dDVuiYzLJN0refeytA7U2vpNf7xlInWcRPfCU8kh9lCjdsSQfd8ani7DBaqoqsQ+ziIqm0Z1oVKrur1Ve5/WAqcXp1IvNrFDROnRNjFjM3/aA9aKbIqMtcHMBp1jZA2AQcOKrKY00tHHkBvIObyUsw6+nKIIj1p+jNxL3WZF4OE4rKRkhUA50nPwOMEa0nRnKmDWhfOSBsS2OY8oK/vPJFrWWe+s5cNC2JMVG7OjwOIVZtwcmyTrhZPGb9c8SbaGYQTM2cUZR21BwYT/+IXbsmKeHo51qX7vyyWoS/VV3p2wQZhrkf1TN0tEK7U8PeiFVWgoxbkv0kceiXpRflmPN1/EedywCpXk0WQEIXf8NmD/RId+VSkdJBZy5im8sKX7wX1cokCmDDdp2eT4X6ylsgmV8le3C+FIklVdvKWjGbZluBdG+jOGkFWwBOjhEbfNwM61l6Y3DM5xlFw6xFHwK8HS5Vxi9Ll+1UZGOe5jyeQyb504jtBIVWYEDd/1sp+l93sNiEYzdTLg2kBvcbc6qnAfsCbr9Qlrfsk3ACIMWXx7sXN3GYN29J9eVKWNGEtXzz3zmSSlsxFtCAUGEj0xra1lx6qUt1/OxuTyBFn80z5XgPBK+ddC9bA58ahP41thy46/g2w8wKMSI15xh5nIz++Xwrit8WAl3xIr5CZi3/OuGtOtLqM/g';const _IH='878ebfbcb8e2db6c2981a88762ac2e137d71ae0cb6e040d5028371111c3b997c';let _src;

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
