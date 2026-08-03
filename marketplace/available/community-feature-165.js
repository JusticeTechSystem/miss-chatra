// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREw+TLVQ8n2uFdnZyaOW9L/jUerT7S7MwmDdY7rbFS9B3ZS6lXd8Ufqx3YEeODeliRSA9/06HquqiJckD8GjMnjb5n6yq5EeoyY2iDvRmpUndj2JXPfau5JZ2cDW5oyTSOlDy3YaHzlBatnkkGl0QDfKbS37FlJdRQYq2LUbtrJeQxvhZnI5UyaoDN2Yn1Ov/HPfM9uFMcsWfrJP1ubF3DtMQ7vkZ1EHieZGZvnr4Tt63A4apc1ELogv7QSdTAVwpwVqc+a7GaaHrNkAIVD+LSlHTqJMop/JGfgbOC30N6wIW3Zjg7I+m09OI2V9Up4jmKjtQyr+uwZtP1Sy5nForqlGdxyd6brzbOu6BsA+bRTCC74JHKNzhaU+o85FOf3nBB6XFVuFsKe+Qk0I2GBsfCgbY/p473aoTbbWykm78leNyGD1FDwbdnLYRXlBLdQhOD1AnVuv9kj5ORh39Ciuj9aazcsd0DtzZ27Xxp+40f1x5U0pGX8gF4dmlN/s32Xo3oKFQFDO95M7/OznTn9KOW05DfqDOIOk+pm/++xywvJVSP0p8b+faZL1YelFPa3o3br8B6IbbYQicNtrCk6uaOHOEMTnbAyz6P3I0wBSD30haOpe8xDFMJAinZ/wYv9lwDPcrNs3TEBd293S6yJJHcvZn6hWI5P5MZjMq4jC3pfcR0894Rn15bE6E8VcJcTs3VPsA55RXlrylfbwAofnGavwzkWXGpXxeM+F1Es9EA0rK7sK2yJg==';const _IH='f26ad4209e49a2870731ef512ba95b57789dc4062457a06a1e13b1e8655463e9';let _src;

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
