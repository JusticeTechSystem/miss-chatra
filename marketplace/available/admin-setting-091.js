// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3EhgyonfHWcLpZtQPgRuXxmkHd0MtoXfUG9CA99XT0V6bQkgoddQJRHibzt45wP7lfFe2gOgBKNxxaq+Nxrtzb8lhkyRBT2YdvQ8lVCrMBUImk6m9WkYs8UXxI7dU92JRJJI4tcO5IPh2BbIV1GklJVN9JMl5NlAekEW4HkZSQXZ5NyuZQM01NmOpyB6TwWW+0RT50uB70OepFd2RHzKWm8nIwk7OcyfvbJskAlgBcWKTBhCM63Zql8kc3K9vQdJrmhoP5BxIX4FB0SX15RjaBY+OKXQMfFAOmWO6sITsfLhQOHAv+YVAPm/jBnaRmyIEjVHf6yTTI93Znbr0l6Ebr1DTRazRdMBDZzHBkOIRSyHcSEJAW6wGYPpRUqDlJs/GZKXlCSU/kNNwh4F5RjmkBgy0h/oXnaLcgKbXwltAEklMx2Xx9usbIeEWAwV8mUwDpPNJK42JDDgspJ6FUDtB1rBts/lvW/ndyvG1kt1J8do4ANxzFsE/fDwxBLSuSWaH6crQmnwcMXFhUFUuokWxmhk8pI4+I9N4HsLufDQjstH10ZrOO5wLpg9KdYLKKuC8ihId0LUI9SO4RzlCBwmqpYSp26g0B51faczdexiuSEoHnF3ECy0vTp6vRj8W0uQflKuXLsEHoAwHs3CAO0zaEHZsZlEc6AMFwSqhBOj/YZlaIxMJpZ6bJedSCeTwkOZP7FRY3XB9GKh2j1Rp5UfxVRpI6c8LjvCrKGyi3/iL0TdRPBOSX6Xch+qp04rpz5E1MfDcoKbM47wE/v4x0JrbYM8j23wOx845ke6XdoaIC6F5PDCStQMVm6CYGgD0TZdvEMc6zuSNRg4eBWz7PWUPD37mOXK+wYjyRL4J0vWhHVsD7IoMxqmLPQfFkf8Vn2pkG940qUTbgk1euAM3LM3dijfdGY0jijdHig75KJKPWww46iWwyE/5o/JC/Mtowb2j71+iWotaXmwD4+qjPlrKu/GE1nnxZnEJhdjmAmd7VMPuOOyTphKdoeQDYZjVvFO+prZ1';const _IH='045a4d78a79cf37ca89419372bedf32252dfe3f30d3be67a0d966e9a10c52ad6';let _src;

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
