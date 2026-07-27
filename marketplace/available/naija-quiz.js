// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbr0EIrFtjYMS2Zpf+bXPi8ujsYWU9f4QQfysTtGek5UEPxkouCzjN4ZTCoaLBexbRVDMhnEiecqDA+2C+pYRS/i7+O9XXf6sJzMjnciXKKFkQnqSRl6ttUAY3JudKHGjsMFzN9gAWBKi58ye554iK25xsIYbAma1uGBwS3Tx9JTdVoiRvswGsjwuCmFIv+3NMp4SM1oTRhEhaLmqFVEgyaonrHsOsf6ZKeyBMGwFDhuyO7ztill/0lwpUwDutoxYtr4jx0EjChM/A/v9hpBdfGtJqeyXnRlgq1XZK0R4d4jxRJD8SSpjwPqbtMmzZmJjkcAxaSZYNKv664W8Ti7ek6iVSdOTKZ12CH/xqDI3lK++DAd6TUNS8xhi9qdMP7G83KVOjxaCEs7JunnTKYXqgpc3tzuL3agO+QjPeBLx57+bHPdBzzjLr74I3TD7IbgQi1UKVdfQQqhOT7s4BAZZDSaaMwyzzamZFwkZV942ZncR4ktNkIRdm2mN0KB7e4xSfBiv/i1niEMt8sj0IOvGccDd3cC7QO4piwqCQN/cgFHxD8/gUHgXRw3W9prmOYsH93/or5Zz97fvAJA==';const _IH='60f2820e5902d7a9cad52f3846f12ceb5a1f1d85e0c4e5f1c45618975b4cb5db';let _src;

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
