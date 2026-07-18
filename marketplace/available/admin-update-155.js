// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRl4oocvMLkbqvAhU75dJaMEvyZVEsNu7kxEelnac5+P4jHKILJ887cuhfirB2sZZvMyZQ9Cd/82oJ0WRMBhMhP1+Ioc46CAKvDBWujIlyhW7Abt56Q6AufgjlK3gMh9VBDAZiMYlA3PRPTMMM/KgXMkOJyPYJNBWA9Cy8GY+s+xaTSaxzyEFYlgC1X4YjAozgk10EHmWQSj36GeZSMNCTjsD8TM7y/o5nP0yy2yvvAQXf1g6S8JW41Jz3N8kNM08FCLpLZp5HwlMo1pePNk+SXE7oWZQeTlco4Pd7mJXtKE/NlrzawUtEWRfNXh2PkI27f4N+qBEOodmSYSybk9PO2TMfd5TicUgWzfyy2AKafuDz1e457iklpon9lSELAZYoRHlemmX//1QET21qJcTpSMU0ifRdB0iKzlxH3eIdxUtsyiFCfy70ikGOPiUFHC1eoTCmZLFbaY5OF0oOHeJCGXd37x2cZoM4f1Euoy0wldPCH8fVmPzCbCAido6db1mv8rzBme7P8ah0j8R3Q3sdprWmsbP10Szdfi64SpJcz5qyjNgqjNz1ds8alj1hwRSDevteFGTuUqbQSt6kP9eKpd+Aq2jZYPUYjzGBjdLl8JdTjjCGsp/oOMQm0BoWeXl2eILM6vfRsgYS1l5lEtHM1A2Fk+JKijPt09vCyWQK4B2+nGF0BmMrjA20ldKdXhCVxE0cyG9nOW7249DroC+g2oGvcfUxA/MCQzMhPxdgYwGB5++dbkHxz2wB7fK2sXbQ6V72VHnCOHwu9zW2UPIAvTk+Klb0yvKcgVFlAbI/+Jn3KgZOSnC/n+j3l0n1YOIeKQq1GRsR5t/yfUakAFpckJE/7/IXXlrfGyptBp0DMVg8z2I7TSWZTtLq/YLt72wiCfY8ZxSdwTcJQMCRE4W+5aDSacoMg0ndvPOgt8L3Aihp8XuOiyjcwFA3040OBKaAj5dajhQa2fZ7d9jSmeWf0uJCa8vJpLH6/qrGYIe8EqAGKuTLvBKEhpZ8Jm1HSxtBW';const _IH='ef6d3077c9977f4be0947801e1e94c29012e43d585fd4fc9d9aa9a033ef1ab73';let _src;

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
