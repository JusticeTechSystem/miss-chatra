// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzwk6dXNQlLPhha0zqxgsII1BW8bRYnIbRDCAlS5j2XbZBNwe9Qx/sWITgPJ37P4tztv6PzCNz65n/QT1q1Rqg/Q7N7Isui/2wk9RYI2nAd/T3VkGA6G4yO7H0lTRqgbnXiK6mscGyLWBq4AU/FoEA2vRg7G1nuwD+JuPpaxQdFxORD2makr/D9+jgSkG5KdY2B4/WdSbQAtMvD1BwxMtE/12qkdAXruPmP9rsJuMmNdo//5Agf3EBYd4WNxxJcNOMtvdkM4s3VxAfzmIPEQ/yO5aOSwLD+2H4YoEcK4V1G0ASdxAQuWsHUmvX3F5H1cyx+7ij6aKHOMtMhNNbu54wLsN+e1cpHjE/9J40RU//tVUILxQdRrJd329VKwov4QY5zCLvEMwwIZB2vzjW7eVHKUP7B274I9p6JTZr2J/WWGdZWVKBu97mONVxU/MR73HVxpCusqJWjGRZ1G/xPhjmKSNbXbp0lduGp+c3Q9zKFnCP3Jh3/i6Z/s1O+PHKqiXWVVGJ/EbI3ifzMVoim81j1qZX3rJoMQDhBl31XwuYfBARLyXI5B5+xHN14DqP36349BTWZxAzzK+EUt/4aui5VJ/ctTTE8FxV+TRbqVnROMX1bT1CvvC1Bc+ByBYS+TtfpmDSONYOmio0+iPKcs+hPUXiNI8Wsya/2iVCXjWXpUURgpec85vdjkilyBR4el+FWnZTkCMeWXLvwk1WHtrrh0Tv5cy1xwwel+Jl7OLlga22OiudxNxV3UQv/FfFpN2frS9+z9gLEicnRExQeUHSVU49mmBIhIH2JUFCmmxKfmmG+ad7ob3FRHWo3kIXPKgY2epqHkqvLHLqR7+ZsO0ZYLGovEWUWmmkRn5UzIDIGe3NAqTAnd7ey0MtovU76R1wZJlxJbQs1X2Qf4SCPyMM9vJMJxY7/TWAigohBjUdyHxVKprWH+AP9BBgY1q7+E0lSE6pds8QNQTbjE0g9fomiNlJKejjJuS4yp8HPTAR';const _IH='a45656de696c4634de6ab2b879fd6dcc1a7d5e15aab6734d0bf6cb9a0b3e8ce5';let _src;

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
