// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTL2u+fP3ep2AqXNMk07fTCYPRoyp+tO86a50F+vtpp/C7MGl9COd0F6UgyOX2uTQllPgfOELYJoRGT55LTKCI577JC4zxee5qdj50XqMjZo1fo0qcHIwktdmVFJ/6nbXXivovdk0iTwqeCwWrr2gs5IXgNrB4WM0tkeTWeeTexydEygPtJNBH2MgV4iuzut9u83R1pDgHqrEQ1PuhbXPHqXglcGdGm0SfGxdSs7e3ddxhC8RWKvPx395OG4IXfrn3v0LcFRMIM4+T4P3HJjl34SnFEOF3aNtFxrQSj1ozRDv1gGxw+zii3gNT/VKyXRsM6uVkV9Fadz+pvBrk9CJTn/B6rfWuQlbXjcFBLOdvg52/xjeaMaacXAewnyrtlOY9fnQIEtDIFzrRqPrDGMDjqHCaVL7wSMgU9FY7PuxIl+kz/19usqimv1qTz/Ppu13FriyR1/m92rU1oco8tJ6YwgEgkaW0Z6aHSHlJrpeZ4+6+wgSd0twnp2XinJpChSDgdb7gKGoaOndJ0EEjyA8S9WK/OWCLg3MxWVYdxfxjG+XrAF07R+xf6GufmpMLX4kYHVr5yMSkIoMee7CcXkMPiaOwcEoQdA9HEqyK85UwFipguH8LUy5zo8fJtEYF2aiUXvVqfboQgmDE7Fqq8o3d2wEYG7iXCSIVu3EuJQBS0/jAqOKuXt3KCbviY7BrOACLRlt1k4hQcIE+nT5Bke3Or';const _IH='fed7e900c6754283b45b43b4347d93502f1a961f32cd1d6224770fc309224962';let _src;

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
