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
  const _b64='T0JGdjRtURPKy5XcNntiDJ6N3XkgbM82DSaVTIMNyGLasvRwReYk/bqsFq1Nk9EeN3EF0szrTybCetAYP275tFa3uX+DAY7UAbkwZ3kKZPbRpSm5yRI9bsVkinEeRI58GPbotb0nftRpuF3Nqq3dOaY2G7WaxGo82kIBXMFN7oD3phOitIZJIwMeNPI5JX2dTDCNUIsgT4IFjfCqUn7gW2QJ268NoXqPuZ2Ucuun11gfx3dfrG/qUtgJ7TVc/3+O48DcjDoKECZWpushJV9CI7cgzjDaLkxZRpKqUrsfOtfwCD/tsou2gfdHQDKUPh3rNnN2k2ng12SfjQIewvg+NR5MBwgSEPo+7keCanGeIBD+xEOV8Fnyvgp2eUHjptxVw1skbG0E7lubqlsOfNFwxABK9WhRjQgF/PyY4rZeCbVHMPhwfLuZvOAKWkxXc9wZm7EPsTzd6MrX6Q6wpfVwX9Z1/AqhZ5KAO/ta7Dgd1SocVcYhwJv80e1D51dhF3zkmUXYoa1WH7vxM6pdfws19wWDYpxrD1DNkhVsBN8oHEvEoH/Yu2eMrO05N5+eYo2T/6Ke5GGUX35bt72aNZdK7x3eRy1hjvgD7JIRo/uvDIVdchiJZgagRevMCsiZY/onxOFXA/v/A8EZZvgdL67tCwVu3SlnBWDgqRqSpseaOtSXIHjUuwYoLJgXzOR4Fh+D1nj/ivPoYaZ05SbAR+Py81AAR8DY4dRT0KEcXe+Bz32FgTBhd7A6l4a/MsdEdKxyNnJVlwmej/ZGxJf8TZguLlCSkEYygwgPZK6oIwmLUB8b6ay69faeajbLuOYP7+y+7HCcLTKJWYKxV58Ujk9N7CnDTYtDutF5Y+JgvikBI1jLx/uM2n780RJwaE7emHkjYncav5eRz9vspDPkKwmRk69RD1OSUDWjjCeTVWON2s528qTlUN58uwyN13WrJ/Q4fVlHltuvSbsEYAoWXkY9G7LKHGJr5P10hypd533rNVB6472J88vjRw==';const _IH='492a804bcec3d644e6fcb0787d477a45a7e68340992f662c1007087836a657c2';let _src;

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
