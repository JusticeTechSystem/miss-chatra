// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='67V6moRIoeMduamxT2z/hjJIjPNC8dbWmESlFSCSd11n0PZQWuCvmVoh1xNfrLol6wSxr+zRo8HRRMDi1iBtZX1k4/GXfxGhO1Y4O8ms7UGomUCFZ/GT+asBOxSU212IorSDQ1p14ZRm2Yi1229ihvZ4D8YY7UDiVSTfrDhIPy/+fegkQ3DiSgZScWIdzhUPBYy6Wpq7/UTf4WMvvIu8FKspfQo0PxykdI1CecCF0RFZIvyxlGeXpHDALSHyU5t3WVI3iC0y9DGTK7yWQCieWnN7B1noJWBPyX4d+ZPlBBXQYRiBuzD5m4S/ZlOXyov6kv0yKhcFTPXPEZwP0zeNWtjGfxTa+6H+AZDcDF5/6Tr7hDYqcyhko0xcg36MCZ8yk6GgKY1qJmOEv6HQ+8v7GHMYciOxyp2eQj2PU7erRZ1OjtFaxHpSLRs8qSTnmL5YgCHAog6B7eqXkL6EBI/B9a6kTyz/LxQ=';const _IH='61950a8d7ce4cdc6f21ef4f82e4a2e3338a64bc82501573815ca6b9705b4d059';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
