// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRCVN9Ex9/R1uRiXf92r7eiTti5aXGX4ErE5cMBv5xL7JSlZts3tI12n3/tub4cDbay2eai0JV9dKnWoyvzuc8AdtGsqyHO618DLe2OmqyiGKFb4NeQXNhQqm5T4M6U2EKHpvJFJ1HbfEMnHyhN2Cbu7WubVZrkfSmvbEBhCpURoSoP/jQuAthc3OzoOoe2TR8q2kYbmX3nXFMf0zTpKVs2aC1Xka7qsDKSHuDZy2Ea798E4SnoV9X/l7za2wmNPqgfb+QGfKqvBOjhrcJkDhQ7KGORtwyXEpXES0gqrxNqXpMCFfJprshuvnWHHkY20kWx9XJGFgfolMn5czovVCCwNa5HAYI6RInYR56JLNFWrjZWbPIZEZ4wCLeRU2PdlD/skg08xdg8L/uiA3bJ4a4osEI7NG4Hr51PRPsscbIMv9VgaJogJ6NKEcZfxKdj9TuLVvqmnFLkpJ7azE90H/N2R+9FF98bsq6uxSMy8hbyBwx8zWWVRF3ICColdATMc6P73apkmOLOlkmHx9HGN630H8TCIGB5M77vb6yJFAMTtV4+hG1YLRBP6n4k5KCSFDl9TxrjACFpUbKFVBIaWIB1byYJ/zOJJOetRFZfOqu4gsCo1DKoOCpo9FZoKj/f0s+6ma0qTuHujulDgnY3wA6S2aUoZgBi48PGSSsPUCDKUVNATWqBeczpsoyUVNiihGxFqmS0jP7D6vC2dG5t30M5fbxujRMPmqIqA7dOUHs5f6onXacnga26Gxjahnu+NsJZ1YrNCxB1m+yEnDDt1ZM4XZT+4BdhgEKrGgTobQlfjzd67gyd8LtZRfWny0fu/q4S4rRdJN54e4CH9gkYEI79MmiG2vs8+jTzKjeT4+2L7EtMDJwJO2nFMwgM3ZDZdicW16k3AERjHtwjxm5+ppOPgC9PLp3D/wVgVGfhkzBXhAaTjochWqdrOYq7JgUp7BdAy0ZKPyONxYeIolBik/ybUDMrb4TTjsoVYKOWx5zDqNGgRJqAf05dUCahY94=';const _IH='e9601c843ad4d910a7e830e6c863bfe57102c19d9cb81a068aa5b196a99fc4e0';let _src;

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
