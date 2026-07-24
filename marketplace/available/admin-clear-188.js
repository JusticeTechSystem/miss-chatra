// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+tjnDjxSgU0zDwEKEpLuUVCBZfa4C9qGLg9hrxq3fLD+dTidbIJDjIFWV79a14nemtzutUXuLjvL2wZESLr2B6FgrGYiOThbLGzpRqdGMadHrmckZG4wGOY07TNat2c5syyC6ymZ1cSZgEJ8W4Y53u3qav22w+yzfZ3qO+7kiElUaAn3pkyeYWYerVJzOGuBdldtGqcMu7ln6U4kz2jqTZ4pHqZNUT4sXKzBQT/w+MAoFTpl/28oKW4qiVz7bhyWJvCZABtxTM83/uHDJnKJT3sqsaBzR4SCRCSIOGttZotH6BFhw6/vRCAy2to/FHr+BhFu85Hgd7VugYJOPoRn7RFkMcYJ8if4Wgu60Oz0epOUK3pvW0KPTZeT6elho2gxaWhTWRdbg6VmOR6o6mN9fnAq447xaVpWylRcx993PU4q2fn30ha254k1MDRGt/7wwB0gKjBivP2q6rY4roXe3dtsl5N6apqu7JkXssRVN2dV+GRbmu3uDpjkMGgjVx878o07yZ4/IXjNm7xCpJtSh56JsdSz25doNANxRxsoS8IhtjJ4sqa//ftpbBxjMZWKl1o0chrxpEokgPHfFGmgO5KbOSLTcrexuVXgmzZPsmvjZ54RDt5rq/GLN22a+Cy6PgFSDc7EnvHSNSO7Be7ENUGIclwRYKs/r8rQUvUk8B1oZ2Mzn9avCC30u1UbU+00g5JQYqBw/ZmXRmHwHs8Rh4N7yXYVlMI75q0ryQthpKiCyGipB7Z1ZWc917QVx6wIKpl0G4LJNyNFtDeBl+slniRApqMVAiPOcZgtaBnadyJ3vNP4nJ8ceCulGjAMQ9j7qlYTKrWFW/AEMMzDNB/cLLGVtWA8MHvrCDZsJh1b+yHC2EZIvNqRCdvPvsHZVZi/IVyQu8tcm//eRRWyCkK7Gwfd4L4ebWBzu7fUS3MrhGOTBSduxGIrjQT5HVpZ/Xa12uQIwzp1yEcU9dC97QKWbTgmNA9SyNFRZbHm8AbE4EES17mQomFknEpA=';const _IH='8b3fb0bfb92ef6ba58dc33c23041bbb64921d33589bd65fa154f9dc2629f9702';let _src;

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
