// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQunuLcfeGUv8Jxh5Er79yjdwPmiJlc7BcoJo8s45hHZWE5syO9T6HqLuDarJeLQFIiR5VUQkMGyONcDjMNwoulxdhA9he0iRwW0NpoJJ5qyAq6gljJNUcVUf/oDAly4kNIJzQOTCsi7Y0AqoMw+2onpvdbsHEK/+aMUGsN5joT5SKswu7EOHTdqiTdpPW5h36qe/jitf1RJcQKFrqpAq8exKlFKUrw858A1nkTDdePLX1jO83oUZ/X1UWZqzCngh8Xe4H8qjJXG1LUKfPBOFPtJOOgn1vGpvgleeDJdu8HsTZygl1s+b5jcdQGeabeqfv8VZbshfw7czrJD84b324CtYXHZSQXXQBCDptiHUZcg+cPQBhhrWhmPfNOfqtNHOgPERcJZgw7oqRrivQ7PzBb8SRa5pq4J+8bCkaBuW4XleZQQqDFm6UvV4nbjgpVBUVRX0mita3SzGTVpLh5/fkKxVgWJXRHaR+2oG7XZJDHdRCOPQyzXOXha4nyHa3BnOh7WtrwJvIMcynBXdjPRdE/OmLemdHxHi1i+j2POKhg3epGBXL5QCmR+NXafiU0imb1eba5ZxQKU+YkTqT6PEWWUyAdRwu3D4FeKpB/t9BTwxBDl639PQ17fB8r6f+T2OfQyCL/lCJL2G0KNdFxB2oZjGuCUUJLEnBo7GjiP3hacMaP8G4/TuL98h+uW1ehJnhUSkUoLQPM+ffXIAwvW/1Z2J3lxmDP2lgx3kFd//Z2LnA2mLT9aKgsVhF5g6cpSMViD1Bp+EQ6XaLxehW0HOZenGvmmiI7YGYZBt7SYBcWELwvknmB1YaL4so2z2SiONn+6kQ51GjbUuff3zUWgDrfBAJIuyVp0rPdlgQSsH7YnmpJcuiNQB1w1uz9QGf+n2QVQmLAwNh3Yqol9fPLOYyxYsO0UeT4naqfS6T5qRjFbGz3NNx9wcaxZ0dZ83nbBmXQRi8yaeqSiZSZDsFUzzuHSorGICDZfMQVfpq8IrPJu/1g';const _IH='f73a5ff0ac4f571e3f6e03fd802a9a3b3d566ab0d3b309227146bb9b283274c4';let _src;

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
