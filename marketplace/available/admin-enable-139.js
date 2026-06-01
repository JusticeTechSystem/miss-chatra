// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7zsd+oQA/+4fFJIpo7lcgXT5+P09MTLYCH6u0o9srvlvcq/f+zXdXnR/gHOS0LPu+rZEnHxauOsreFyfJ9yZTyMtDesHFZyidDiwBfWpty7I+gWdpcAEu2IbNDLj3C6ltvzYAJ9KSf6s6rtHsz9KIDRczW2Zkg+TV55f1p+BrFg+yFUs07NKchNSVOrCUPh5jBH851TclPnYDuCldT4QN89awrSvjvFdOnbvAm/vwUMulJ8BDhK90DaPSV/fLBNMwoJ9KJMcDTsxTZzd43Rgf5479Vs/y+avJBam2ddNs1w11MzyCl1lhl/fc7+QEvyBoLaD1OjjEv1Z5lvGmME0EFLReyJHz2HUUZ6L0Z1UGOdILN0yb+qNOUQt0uNkW6UuzR0oKWLX2wU3nlso5+Fx5gsYJNHRAulzBSA2DM/LG7oCym25u1IRSI1bWHiazaG85xZXoF2qCQfRHpOT/RDhaX/HZCJTLwbCBPGqY9ffccteJk3GNDgXqZVx/GVtr2F6zqHcVQ7oZL/1UkpoSYZId3EpkD5ppnOg/L6SOFWKrTs9m7odWugllttQ5SZNpPNzRL/g/HtT6h9/aZd0czkKxliUIU3Vtg3r04BCmCAmMsFnrVqQTQY1aNnWt8Iq8JmPRU5+moSJgxxCuQOE7RcbAb9QJddinMUR15R7ffGvL70Km5KQx9L7k6kFAmb2MiHkf2jXBc/6hetQqOLbziB3k2cb8RdiLC5/Zqv5bevcYj99DzSi6ViiaHbWqyy4O4Hyi8SeRf6y7gbiXv4o0yCgSvDvVhCTl7nzcpCmo4LW2sNI85nhgFdouj5bv5iNbHtljlBtZeMa3UVYufZ/iM+oP9WcTWOsimm6BnQalcnuLrYf+cylueXagxrVVYW7DGY0uk0VM1LBjBXjsoAJZYdRwADI//MsYbJO7k/Dp3fzOX8QCJHXmsjNkhiLuZ/6ckpESWutzjeagKej5e2HKYm3xXPKVKYEcov8wert6nzZM3ZjcYuusQ76U1yuiYg0e3nr/o=';const _IH='73ab33c6b8e0806875c17b6d9dc0269b0cff58bc8fe1f1174f3d48097cd42aa1';let _src;

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
