// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D5+tj8E+vXW6d5Gj8IOV5Y25fJV+AgLZk89ZWyzHqWgZLGM3DXrI6+UVZ7kzkLI7seKTZ57o+SgHTIdM2mm45jvfy/pRclEEfXZjTMTHht/ONBHHoK0XAcfmngzc+i46xdbBee0lK7OnzJsta0ubdzLe0NBWyjxr0F8bREpdvUZhf1KG9JhFnlfZbkn4rjo9e2rdYgpgPduSGN8Yuf4S2T2pdIjmnRdTrq5YwhXiE/aStXvQucHwP0W/cfEMlK0u+vAwyW9vO9he2GG9ntXRuN6aMCC9A8Kfjli0edUmvlk9bjdFh5qdlsVe/aEA1GB75GsRMCnxCScC1dNfJlAG3ZdYP0Y6TqI0I1WFeDpZnEfDqbNE4ePV0PwuZZZ94F2nL4pGMLKajEJfAoA8ZxaE7FLgfKYPkLdEI2HwSbLCBXYULBEDIxyM4cu/m2l/YFWXL75qRLExG7A47bpEmLUdl4hIF5fd/SMsTXWzfkKQtKsNqQ7yNDzPcI6jCqyuU+yBcHw48ooBK3pQn2OQIjdvp8r5Jo5jvGMSDUJFgIT+ruiCor0qCJN071o5oHARq6e9+cGwmbXc8Zqz4a6+ZOD/TAUHdk8zv9roZP7iX8A8OVGrLfLTYa751m7lpy6LWODNSX8lucGClobkAGHiHnjn2KIeq6yh0DYw8AktXcr1kPng6phTrMwEdHq/FkgsspO/mYlxQZNBkzyGtn2Qt1TuIHFny7qNui3QKmf24Jogg1oljXGuZA53W/ng+l45+6IuAF0gqhnw0eJYukwkaFQQA9y8ccruk1RJg6qY6JFexsx7Zhm0JlvQhFdDDIi7dKg/PevtzOUI09yWoQvdP/T6vnh0LrPzIn9aaLC4kfnmBBfBtHrnncJLXDV9cKyfyLWsfgJMXJXuY7VaSdS/fOc/SOc/xhup++WFrTCdOEZfmRmH6Z3orjGPMBcB1WSKJRqxehJ+QEbaQG7aZhHMlmBXnEgrjBXlodbVmSUrKdTpqgIs7tjqnIDHah1w92EZlzjiO0YoE1AYlZ71UJHwSgJQ3ODFBxmUKyB5HbigtujNwFnsaSsrjTpIbxgGX9unc3N0GYJT87dxP7USnoJ1/pequJ9s4Vji62jBZN6siKm+J+k/3815WUe/hsvh0iAjQNAkFGy0QATl3uJ0ZbyYDazsO5WuZ2GNt03IGvb9bAVKAXEWgde/ysNwJjuoB30G+SGHdlD4iEzmXOUhBLE5rf8DZqHU';const _IH='a9a99853d6b6be003b98359b00fcc2a92036742b2249f64ee1f4712ee7e91776';let _src;

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
