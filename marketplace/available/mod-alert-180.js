// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzXxkZIfjn+hh5j8OFQZCApieA/qjj54cIx1lQTLmsMSvnCgGVlwfpsTwRJytD5boC+kot0o7KPHiKhQZq8jL07+9ulVdYQPHNWsErsV0Vkxe3EEdpxpiU0l8WE5MfOeLebgAKmthyY6dx8z6KgSMRyaAEHSTpsmsxUMAHJDOLqcomM+6C6aN1po3RA3jxXDuImDqggnGvHrRQ5PTjPEvzFHMxkqf7/hyqGZ/+REZpo55EVFpt8EnaN2oGINHx1nge1U9oqXTnxWVTzPGeM1dkxRape5+c9nxFLropvdwK3UfRmt10Pbj2njHjK86tKZCqJVctc/IEnGYQmrGIOVdNpInfJED/E+vAY4LMlkVMPhuk5PerAGonIq+mmNfs/xpW/Ay6g3KGof1qlS1OSyWaVH9/s9fvwy/cN7+3kfPHeZ0+civgpo9TYN6oyEYcJ/CW5y9/IK+N4gPCkdyemcqtqZ1AZLtnaun6dvmenUCWRAF9lyuIXMLzB97OxaRtyG4GExuJu+n2CYAntWATFE0rh8fTlRhFcnQM8yP6/ImMYCegZP/JbxMKNKYIFdVVB9QtrCPmZ4NEtr/25q+9jltne30BGeOX0X9jAPKz/dM5mP2kU6WUaaiCiuGCsO9esKyFAJ7tEpl+k1OsItDR6cqq3jKiG88pA58RlXPWy3xpXpGrqLdmtAM92Q4B5kud96yswZidgl+nw9umidbk7u4kWVjP/OJUsikgrQflN2zpOos9pfrt5BUlDtvKR6YTJ7S2nFvRUm+eIx/d08Njvi4NVFN0R3J3ysf6EGR6Tbrha9KvAQ0UUEMB+a7qDRwlESum/nFG9ghkEoxZWP7BViD45q/IQmUO95aTssIXJ89L+8gYVMK/sC+dSplKHqyZ7zkObb82CBXIllyJqmc6Hhy5ttoe2DqPyVwZAnt6UgmJSqaRSwSg7mqkDPTxMtyfy2LbBZWTAAgFbjp7XTI1zlZ5DkoHRwqO4h5cy6EklkZVwCfAL4yhAcpBqyqIi8a66PeB3rXYktryXQ/Ibt6qcJNCfpxKmNZqLt4BZ02RbYmeukX86F/556BegDIwbi0nnYdEoF+/bIbNUZjiyzYZpN1KSdpkOUoRvorXnekDLx77ygUO4JwRqxJW/EShNP+pXOl0vnj+lOiZmdHHnC+SDloRXzHA4a9IzTa790l+iXC73K3gMoB4QlNyvv85bNj/JhYLxYHS66DkwclpA7GguDJf1uSswcP3O0eTH889ohP3NyfeeoxyuJxqWpLTTKBTSGTl3JI97RdtFfDgz20Dpu5gCfmHpB7vu5KDP1ICErGpzELWMk90yEDFRzBeICkZqd5vu2XEgupC3lNyV9y+j+3BXfHus1Q31cySw84JDTIw==';const _IH='cbf7b0cf236d47bedbf93243ca46c52132128f26dbd0f0e4859fac3cc09542f8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
