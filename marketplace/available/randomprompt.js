// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmtPFWAEn/H4oVMkI99xHeJyT0jiXToCZPigjBP/GB5TuWKIjyEmv3xcYQssNusjpXa92xtFa5A9utJe7jSSuEo+jrO0642CCkDSnsacaTfJGFOH09HRBIKUeeiAlOyjOT7EQi29FxQJUb5TfS2b7G0EedKvsclOb0WBDe6wTq3RHuRyCf/rfyD4b5Nx4nhyS8e4oAEteG0HmuCRcilEYiV/8HyOYZBHZPwaARKvCMuNVSXy3umQrrDRmP8/Zg0zWQNnJam0P9KiJC0gVuQSig0MwJrvpIhvJ9sCAhfsNHPWXOP+PQWtB/jftV0FUQmBXJaz02Fa8R3e3Jr4kssVJZiR4BcCx9MmaXSwmPtG/Wkj75+fuQhjRouFbfYtadCI5MNcbZNwb2I9C6DVApjaWbymkdaJawlo+9rUYt4NZFfuI9x8mtYy1D8/ljCWsEfG9wjNS/48nrXVGVWfExAxdXTuONmhfZU1nmK4gjyWAHA1jFfiVSrmP4WwJqe2efcBiMSeSTO/kXFnIAMO4YSChNh0TCVoD469qF38C19XnvA8pzTxaCAqOjOHed4wWiiYqWY2oEGLkH2H+5/PHnWozNdFpuGOjqXkI+tiDmmNy+ZXDYoJRUwT0WrPMdFUo4TWSeizaCa224bCaCLXMP+c7rJK/CcoiHPUyN262jwESMkIbBs9gzRT17HrGOf2R4z+Rsozrvwbuco8+VmeAfAHZo9JMsNFCPlUmllNZSLYhc3vXODbF7qen6tVpOGnWRJml8lISXo/R7WNO2lax7VPlT2YQ+INm2Rx3xYI3+qYVI4DiaGORr2B52yrKFTWapMLIWrmZ+JW1sDVsSUrUVri0u8tbXHUkd2nEO6r3LllGJj3dMhvYX+0ceAtTjtjtYKoRraB6qCYnIy0YSf1rpArXE6ilp7ml8yWePNV5m8ae3gTVlDNZ1pi3kUEDHXc5AA4GAgPaVsbbgSCeB30g/XkmMzolvE/PhlB2rGI7XophxwpoppeNh/5kbPB8jHlnrLuI8MVGo9QoZwioS1js//IvVLSg7IMAOAaTWCHy5/o5hXSRmnXKnvSzeSrXsClyMAf90b59en4NBW/yV4EYgfjeEwmLuryp6XFfMa8xQMvcZNSjUJABNAPw2jxXST8mYTkBxeInPlCnJTJD1jFTn4sNGEgMyuzbhDXcqq+KZJJjHOgXH3wsBqc5MrEmfpHu7rLv2XxdkUXDgDI3k';const _IH='dcebb51a3135f16937f2f0b944fba4119b066fd29c19c42c39d89dbbddcab07f';let _src;

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
