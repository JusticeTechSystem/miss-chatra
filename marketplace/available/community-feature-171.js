// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zDH532ipbdZSCtOAIfGMKqtrV21lSaeesW7NOZYPVcqnI2gm14xrBxe9Y/OzuFQNHQdpnprqKmsfYYqiR/RcKEDm1GzMOpuwwAWB4PiurjQur4vEAjLIe/rnHzlM497l7cMegzTogFCPJEA304w7r9qo24JuGbwqR3MA8QK1FPPI82gSEYRQO5mR+VS3TuWEyumi/HCicn058g8QBoRPbYVRvZOJq3GULFWK7D2mpYWu5h924n0RZQArjCJJBMKGgis0ajZcGYP6T8eV1ELSka6AYj4EHd3xlXLc7PWz/vcXYclPIXq22NuXtgJzMi+63Y6V+aumgB/TlVzndxnhoFS53XTkaHDs7qQrW8PIYTS6I36tv1RMIXllJyRYHru433++bbFPxgb9mUaZwW2uF/joR7mEzg0s7znKAAwDN2g3qdV+ayeROTxdN3tFSBsStUqPpZisrZgILg2Xy1OM9hANjdHuPSyUVyR7jTn7cQOt5CP5n+7Ege7wwdCiI/t4uqBvDiWRjGLc+DFugA8Vx3KWaHg7XXrY1tw8oGfiA+iiM/69t2RD6OIL125NuNzRlCc14JzrpdFR8Brb0gVlzXTEBNPDXDFlgcx5tGKxYvurwibBhhWRlnQ0dFspj5iDCNyoqlw6gen1Bh9FUAzNkYYPUzUW9o2syjNelnuM1iML8WBFrilsUW5GZsKs9vzGOaQPwwoX6sbtzrk6jOaV/ST/RWzc/KzS';const _IH='cf3c31ca45769f6db364cc33bc5dfea2693767aef594b76f82274c7487780b24';let _src;

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
