// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qN70RlSHYQb9bFzH+oOcTJPblv2jnshRhZq5+rNL1EYjTGF8KSkzY/E++CT7HIPw4xbHkJe0KGsTPCSeJVAvWq2zKN1K3OjH0eB1ola7/TZTJQrM5E0fULgQ8oIAGRHEWWpyGO+XIccjxopgPpY2Ph5Bai6WwzpUR6TZs37GL3MY7o8Jg4a1ls7Ug6IG3VjF64kbbWPXvj3z9qxYz9kneCloFI8j+rnfG/FWRgYOizCcHACEIPhzjAEy/XvqIwYKt9CULsxAJbV7y4U0F1sgf4LGZwp7MKM3pC8IuMPoyVxO0JnCDaB2VYCOWcdYaILpHlUI6XGXS2FrfHYMx7AVFv1powOVMxJqf+BTOdO+4c1Kq7/me6sdUNSZoZTXd72jIy/oa16/1B4JzmptaFqfTIiUNtiknhvkGM2sJjIWTCsXSaQa+YwlB5fwAxVv5EFbeLnMGBiXQvRlyQviyW87+mNEZIMUHUJVhS954ubYMY3xKMGkHOO7dbzl6WL3vpTVoYI0J3ZI9EtyIOdI8Ueh0QCdArwHX4dMgdkLEHQTovMQrr3z6cIGP9bJyvyCzw1vzNoEL+M3fiQR8pjCQfeW4+6BpiopHCawRVcI3G9tKeQ6cqnNcnuZVoyRh6aXnWaddpkulfxXC8c2HdpPA8YWoTVj6EyoOAf5a2oDtTDoSyaFNx80b5KpMk1e7OItEVgwQ1AhS3UyIuZIU26z2mrXs9pRIER55Yzfg64oZfkJ3o0g30XsJHqEwog/Z9GquNF/Ia1XWUWYF9tP+lTCVCSyPJdFF2Ig+xKkGBqvAuo8S5OX09vQCu3GNzM/6NiNTecbLE8oF8/4cVNodXDSNMhgV3k6qo6Ux5ZVjtrqj3/IHTjGTx2Hic3NWRk6ZlyisFFOPhinjXKRGnkLvu5Yut3fRbJyAE8CUuCN7MMy/ZIKEEo9JaoP0+pzCR47oGWlinljYL6J+JBf57/tpmZeonZ75Rt487FBgSPB6wHChpDwA41Ahpy7Sp7HHjpwnCBfUvl2L1WIhVTUSr9NQkZtf9qmywwqteLz+7+aLOdEY+Fkl6I5Pm4oXi/7cyOELLb3VAiVuzz93d+ERAiUfTZlAdWq169k4QUR77J/FtZ6fkX7kN2s14Ardp5I6DE6r9IJxltNwWag7wDDITy94WjGQNc1vQ08B64ollonn08pN5kKJwt+MGRlHMM/Em8Pr9QR9FsTJcsFVwc7mq1ueRjCVaJJTVQ4tVmAZRQLCfMKEZ+BsS4pVPiq7iDLN2PJ8ui9G+hNEjvOpNfs6WSQpKhzcJzQruWTKNJHwCwv8d8vz7vmmNzBPkVYX3zvWomQS3et5mFa7arpp/NfINkAxaat7vrgeShIegRKQmOyNQwpadvdslB1Fb6FXpO3CfCSJv0INgxbKlA=';const _IH='73bf78db2d17bdbab11cf31b62654efd54e4d5c279c221735c1d70baf6601766';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
