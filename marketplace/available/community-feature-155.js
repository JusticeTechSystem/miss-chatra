// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzZhV3FyilFmpFSN8GEEnnsSSPqE0a6kMANMXqTVreoUGPsatJ2AQv65UR5k3dPqm3DGQJem+9xwIF7CnO7k7x3ravLA6P+m5P7DMrkprOUEMilrRb/2c6gBZpFbgBbCsvrIVGSSAIXcuWBhiKSn1daN1NaAJCcZWpzu/ZHvdUFL/qQGxNXPlGPVBe5fQUOLHheomnVD9zEOulBeJF3m4TAXRwU3IDsjQm5lwR4LEtr0edh4c/ikJH9/b7tpB4TQa0QxuV7QfULONc1L7wPJetBH8U6m68mqSFNTbhkIeNw2iD6A5eL22LJF3fVyTG3tsxNKC2Bi5VdURWbYqS3hhUGSt6YXgQnHh4NhXMlpPtFs3PS+KNAiSHOUAuEee7RDIKRSKIkOdcADRnpnYAFBJnK0wV/N9YRE9Gf5NlF6ATAhQUhrjbkkzpob4PQh6wPzlFJyGzrxU5STrpmsRPDiHBdJPODUKL3JuU1MOrRDm5URvpEGO1UadmRsey6DZBJeH0yBn/yTpDBp12qyvgTgd2CBLq1hbTvN6otcB1ZhJGcaDuQkkWtf7Fgegh53SZsbZ/4Q5emQbvCy0RhrLK76f/lNrFJFaq8qFGTMsCE+NlYKMLlFadOSKac1FZHftXwYGKo5kld+WlJcrXtvvHTHpiiVenES0oeNme7mpZZbQjPoZwCyZg9xaT/q4ESX0ocV85f6fwCYwVE6xHG1b30MYL4wcqwuBgeR1/BMc5K1BRL1cQNTp++A==';const _IH='64e3b3db0277babdd84cf9afe90cfc16223e69fb011132bf97ec9a883d336373';let _src;

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
