// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOhF4YNZ4qR+GaveRJ8Y3YUahVPc/Rkqe08sntnxjuTIxdKUSSLMebFH+FW8gvPHBe+FDLTLEvV5LTwCa8SUggALlgCCsoyBXo4I///6MAe0GLe1fuBOwHvrJt/TxT9KzopKDmfzMWCltOqFceu5i/7OtD/RU0ldUu53x4dZYjBVKk2GhCf3nAigOZ3O9++AZgwY5n4pN4Q7sH1jCMI+duJlLTXPAE75Xfruivkv3pExldkKp3szGAG3IXxro+ZSGADtpQViIatPcmKDZFC1Lz+GkE1ruS+chKJvsGUAhQYhseUJzAqPsHjYqWQ1MOcPnwAsIY0E9r8Qu5CRX+8BWw9dtoGjAbkCpilyMjGzbEgoFc///9nXGp8tS7PzwH08Sh6lZWDhvO8KfoCh2rFYUmsD+KGc99FI+RCrxkQfLVdW24xklN4XDo48+R70nZHyMbhrJh/xmIE0b481jVApuTH4b0nDssF8GmuziJ4OZ79IC6e2FJVCmQg9xthjeWM1pFGnPnoyciFmaPl/fhLuVLZsSS7baDitgKCBNFeH1ANNTxJnMIQ38veJhuxczC9oA+ozzSzF3dy7GRkbL5zrmQjAoniwo8Wx2V2OTEqgnPVlDPy4OyFnoCzuptyAU1JjyuMUK9g46N2K9xaVmxs3MN/9u5LvqrQX4O+4N+06HZVNoDKAuZsSC8ld+EwYZ1cJAiAuAdAAeMeKCjhww65UtpJTEvUrxab1gb164cELQ629qgCR8xUpkAJNh9zlygf4TPF0zA9A8BX+1wXIaonaSU2lnCv0dzQ78lfQLG2kYeT/U5a0wkiXG+JkQIjzSSKZn73tbvRuxclGcQllhlVB52R3ciN1UQn01kBnod8SYaDPSwpCt6LVVA22m7yw3LcIvvQyooqTss1FykFnQUcekdbh8W+oyBWkn72kHUX2U07QczOwj+8mNSlm3nOhefjQ+j8YPJGEciv4WKPutUNYSHK9GSljy00I9SQyw/ejB6WteCPYg=';const _IH='8171002bb07e3bacbfce501807d20a707410927f6eeac96eb419b66de2e944ca';let _src;

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
