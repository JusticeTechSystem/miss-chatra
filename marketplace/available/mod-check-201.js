// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='abWiRYw/Puisr5VqGKrBBw3SnZPVNS8zYdY5KZfthkHAVmQLTXfXq9JHjFdacKhAZunHA3GlT3Ngl93dOt0wEvk80B6nAawbXhJiJP1efkNkqn8uBH83xE6Yjq2Y6DbbqvzzrKvCXIPl6NP3YY6TYEzCWkrSoRWes+CclP4Jvpw21Q5pe2Fc+xjfnBoyEqGE3TgRRp7GZ9m+/yIFei09pVd0oDYYSYz/UohV0wPd0M+un70zZdYcX3df1D3wbd2BeljyCHnDi6RuIeLD5tewp+ZTZ27SJOw6IotwbHXm6lQpPycUwry8QFWisgFhkIoSSosBJguvrDQg8+/X5SOXS/Fgw4O40OZbsYP9DfW0fxs2WH0rSFYBDlRhS+4Z9NnpWUcH0ZRb6dw0N/CJUth2XWopi+v7QJonb6ueBmszwfOCayOwyddaxsPS8Xx8dF5qq8w1vNa/PF1UBplthliacfOE+p89mT/Zistaxas7nTM+9nYok/FDuhZhN0EKWDXm/yJN6xsgF/rqoFmO54Z0qiVpH71iezr27XQaHQo1fjz6/t73zjf07HoL4ztYhiZjeaynyf4coJ1dWtaudgaQz6VIOZ7yHPdw7IfepfjKyKrfi1NSklxAe9AH9OEbsm50Ucw53m3reDKeIQohs13ibVQ562Ht4dbPNTn2j7ehvRoNIiP7vnHnnFkaxVHvr+UM6Zv5uMATx68YkMQr0MgFYh/eixCTa2A3Gxmug76wIL5ilBIKCyOIvykXwutbFa/uaTcfmygPmfvLUBx/RwhC6JYOFzMRpyPXnIEsuJwTQ2qe09fJlcnir4xQgTWgBlDBKuZMAkFeTZAtV4JEhodSf4ham8YvDPUdczXCMsIF6uzfocJO9Qh234dBOoFOihEOHA9LLgZwafd042mbRs1j/n8CPeF2PstvE+QLtY/6VCcRgveMDFRKN88wQBFbOjGmR+hGnetTlaqIsH8d/HAHUuvYPAC4nfqgkClh297SuedtTYK8LcBjyaRnlccnW6aJ6uICJfOIQ5/MtMBI4U1K4A7wHvUFOq7EZxZyo5804c2ETpPqhygkFKCrMVPJn8MSJbb5f8isRfhC5tegMRYBUvSnfs1ysbpqaFbYXTEO74Hh6CO3ZrrjOtalO21BaPx/KjVARZRn9w4XISBISMEUH7nDOZuKLr9qqry9lXuy+KZ8Z/HvLxa5eMBjgYMvqZXBx/8gP4b4EdjCcNzssp9FoxtwOM9ZF2VcMqAPTUzDKUf9q2SFyKOaSPgQL9b9PiXvLrzPXIncL+sPfkTTM59+g0xfqR9HVD1MnXmnFI0PJ8u9tFiXPDCWyB37bLCtdrYUC3ZghnczZGYA+yyfgw7aljtJCyrdv79HuuvxtSk4';const _IH='d7a20fff3a492d0847f88a5a102e4c3c39284a1b6dc81851a7c01260a054f717';let _src;

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
