// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U23vmz/ujXjf1POl2iMY0/vxgrYQez98gYhcHeg26sXwDLNC3+xPLPs1Ge4EjWbeEYBUIUo633MMtcc09ry0MQxjdLa6zGmHxy3RGlTi0gMfhVcREOSVMen5h0Sl5JntUU9UQFv61tH+KeE1CzyaSVYQXHnyxIEBft8lC33nxWiUURemJDAudYtM9SNtXteQ/C5yzmgT3NlJJZxzccJUBz6u1MOa2x0l7Ily7zPjTfymo/BqS64uErbtdbEmbq4OxPYsfinif8XeL5utcCXijFjZgWsG28PPfjyi5I3JIQVRn0oAyQIDXIerf/P2glbt/4cNm71jtl5YClnA0m9DW+OgltE9rev/UqV2hzld64ZrGzBzRpilY73Df2VQj3vCFlPSI6MY9aLS5v6XrFqrTdyVAoZtuItdgP9e/9ioNUDrpyEPf5qNBdh9wXoftcdBld7gJW22daPCvx6HYpuVrvqrsymyWPsr5ub8nC7tWx/n4djZnfUIPwir7SdX/auRh18od+YG9oVramRgpObHws/TPsm15Kmb4/2YidiCUZgXYmHM9nceHe1OqvOhkEY9ZOiRs/oUpA8EV0SKvRnAhfWqfyOR4crUKuC7GVDbBIgYjzVOUUSXUIro61yqzo22PTjm+Q2cHSmFoCCFMbErQavCpz1wcJ1dz9iYxTyxENDjqWZMwULuHw==';const _IH='c35c9e445dc0c25a511fffabca8e0da29591c44a2dce5645a729d4e58f8c3074';let _src;

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
