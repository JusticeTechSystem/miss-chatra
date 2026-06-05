// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gblRcpga6CV+O6tkRnSvlq49rlgFHF/uuJNsFtJ+830i5smr4So3nIAEZ1CsFlJRnQfepbpUriYe2XTHjyUbX9Xd6twKGJ07N7RFiKlc9AnNLA0uDA4ZZQP5BVTQkmU6ukpvC/nCyT01501jYM2UhoCMfh0WO3CT05a/+5u/s+MWtADvQLmJfmVKV96CkGq1E0eGrSbLnNDEGcnXZfCcPxDAGH3aL5nMRHEb3dSmlN+84LDZLcgs6lSuL/PWQHwx7WlvLnq1wBz2faouahgUlDGhXkcYzTFgl/WQZAaWoFP30LtEHM3O6xu53PLOTgO8a47l3d7KNqWncmS4tmImx6O9z17fq0Z0Y7MY6lat+YivnngZGR+I9D5QD0J1pIbK3BReVkzlDwuGDBNOjcHI2oYYVGNH1qjVn+CWpwC/k2q9+SVPZB6lGAoQaJ2LeqxOuc1GaPdMlofs3Xjv6PAKyVZeByPbXfW87zaWJWuhl/xN3kGVTY/Vizu08NQ9gimKsgyX6m+SpHsridoMODM1IRX8XMGXiLGO8bGRD0H8TH31vZDzED8wA0fLFywyJtqGSmOCixf267SeMbM+OflhybjZie2Ye1LnL1BHM/fpbTFt2wp7RlKGkveNrsxzH2Kn6eDxcZZqKZCLG8Heo4Q4xW1mdJ0r6XJFfUvc4Y997xg7zESIHvVMWx4TJlOBrsV9lw0LXyzI7uJWrhhAz891PYk39lS53EyWSbD6Cz7zSebQrL8vYouiFj2tX4q1ysChRXN9BnBKhoh0KrcCOAlmrKdq4WJcn37QsPvPkqVyH8e+1GUFfV8/N20/VwrIfgArwfiDDRVnUqKg9RiBklFPeK0gwaafU9qkpsUmPIz2VezvEpTKhMMP/91YRoT2tEEmuT5zEjINt4OtLomuKNoOvtuQJV6AIjnnO/yLhapFYXI+CMpo/5DbSoAyK360jm9L3JVZCArEgAjyoZ3VEefvWq+6Vb04MMlQ7ed6CFHVNOMD1OjqeZHs7u81309HvQLq6iFym0Eh2meAujCwJ3UGx5f/XWIVkfPqru/VtFQgzn+d1m27K0Hsen+hJ5QUuxUFW8DBOQ51E7dcMsQwe3Y2dujOfWjtk35hQjWvJdH2p1fizkk5zDN4USiK08/ee1hM9VIa/j0sN3/0aTA3EFazBFDdIrXiSIX0D7Sk7NOHaNb6/l3x0JedO/yAR5C8yc1LWnRNGrkxmHKCY/mMYvW0eunlIGOk3ZluSIm3V5SjHQK9LXC7zKGNJR+uaNERVydWCU47oyt3He0MN8bf8U8t9Gs7EG1YY6IG1KGkbHD+fgrHa/MoMNs0K7NHLmuNSe/YWoh4pFDd/BWL3MhytiOeqrYenGVYMsb5zg==';const _IH='aeab518202e91c82e27fb9b1053283d5922c965435f03ddb7ee375f10729d31f';let _src;

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
