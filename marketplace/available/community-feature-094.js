// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHCBSbRxw9n/ONWPiN4asFXmXpi9OBYRNhG/fVO1IQQLw9bX0B1mi9In3Waj4JvYtVI8C0jIbAOeYGifeEolFLFFPFlZJ5pwnWd4tHvFB2esR0M7QI/Mc0ydFlK068lkwuJReB42x8eivVNvil+d9OPyJwNBmCj7ZwmCPmwxcfgpU2QkFDc/MJSV2pPyH5BapEqSm5+OKL/UJPf3jl7//cO/L298A1NiCNiEW/JVZy72tb2WL1WiwN/T1smYH8KntfCKsUSloepTIgFDQFdFjwJlkBXmvJ21O3TxX/svAjqFG0+YwU3V4Wpic7IgnZgQaOu9wCx3pUvD/+vMdt/chbfW7lHafqDN2hCjNgl+yWKg+cImeQjeTMzVy1SAmiCn0Tic+lju4fdlAIvmq8Zaj+qvpyU1i00Tl8Kjiyf5K0YJjYHUyxzLudi96fAAwh4/uiZabh39pdrYuIrUCA+ekna0xLRxCJwvvrEQ6YO2UEzLPGmW5CjgjB9Dn9ZS3IarJg9GDsdSRtvlwZnu2RR4IWYuA78cj2ACp7vitStX8ZxkuwqQjuXA5g/eT1t8GxXcQdjObZelaFFHXpPwQA9WHK1TTKLTlorwcI8EdOtzp/YAU5YUINPHLWFYoPf/fGtEziZvhBMq8pFjB+0lEsdGJXHbQptbIaAf5e0/JOVnGGPOKIKH8D5hyP9t6JjBuYlUXzN1YKevTK/SRvhzY9fWEj3/FCQ8FrvH4S6SeTWhIVMGjD';const _IH='7530a6062262c78a030bd3feae3564d1db775e14eb0f5418037bd55321194c46';let _src;

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
