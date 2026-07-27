// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvfqGu3v/m1PiAa7l4/gsBrOK4A6wAhKaUKUJIxefdvsQDwC+KXW++LUbR54FlkPLowAnpePVoGGIa/JVn9PXx1+WdroOGBvUpgEGoADgjO+4UjypF1Xdj/nc9g8eSvV+3QCCJnGbW2iMScppzv89u1YY/dSbz2BCAjbwPhW1/3CRHkbm5qxDybJ9fvxRNlZmY7TFVwTyHFIGdXy/wBiqrhYebc3DyUmPmMsmetu+CDfeC754CpVi7jEt9n20gxZ5oxTADrSJJNEu947VMjBHn5x7QB1jWu9WYaIlzlnlWA5DDmpGpjITSoZ6C/ZghQeuXbXGhHICKxwXBlGOWGGBzO2J5o+m31dH8bg6Lg6kqZ8fIkCrRAvBNdl7E69jm0xZPUQx4+hoGE7PeQNWACnoMqR0SbbjY3BezMkdxm9P39VwFmz+ebPNAcXXcUAy8W7GCjSKguLGHSuPAtAQNIniqbnw/yn1Pe/kmfADWQvsf5pD4ae4nRKWvv2w1XQMmp+bzgfaK7WkhK9ykNBMNeS6HQKAPgyfx4PSnrjng5Q7oqn70kVOQDPF49kBJp/l1GEDKqA/ZYSgfKmR9XQsiwpy0GFOE3hDRLDrjdIAR1WrmxsZuOQljT5R1/7PnbGFjtfydtP0V76Z62mE5SGGx4HGVxuslfpgdr7YkeSsGBUxKPA4S0hIwStD890wUK8iGV3SJ8O+0Cu19SoxckOpyWGrR7izAntrY2tk=';const _IH='40a5a688c1110826a520a0f2ff49ad37b70d203cbc9934031dd4c8edee09fdee';let _src;

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
