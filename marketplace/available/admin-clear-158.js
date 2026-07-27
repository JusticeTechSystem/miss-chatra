// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHD840BYQ3No9dTIWMrziEQeLKhOTj1NPl7Hy3OcdS3CPOqUSpn9lFsnu75qd+zYLtA5V+iNomPpAtvLWJrSd4MLDOXyIJ76/9Ox18Rl8UO/St7lVQFCORtUEBO2d2sjuBvrfz3InxWSA3/9mXIdR2Z2Tsu4IH60iFtcS/N+ILfCmEickbonzbIi2XOkkQGo+vMKgP6cIjuw3K7+Ayb/Q2s+91XPep7jcagV0PuHUbG8s9ZdtXhJW2xsrPMtkD7OOFymG7Tc+68jDwUws8cOH6E6MPzsachV+miMh4U9KzJyMX8Jk89ZbZ3htks4fUZ/svHnISL2q/dCXwaxhuGg7Slqr4I1ZoqDHmpxblc3kBcYAbkjmENZvEoD4t6JUPzWgTjhZRCE1qGdcmATxcbj8Jvw12UqwAppgb+Uan+mMlaLGhIW5TBM6msgiqx1Qbn2H54ifCJ/ip8fbTVlnTsCRJAZV+q7IALIpgbs4ZGLH04lJirSXWlG1WUiKbqXUBKgrOWIya/MmPkhSfvP+Mg0ifesQqDPZWCfCWn04ODdSbT2hCNZaLD/S2AHXhN3pCL9ADms175nC3WNidNDre12UdtlA/8VaTG2NX4XDxYJbUtL1LMlsmADpOmHYbxA49UDZKqE0uTcavqysylGvHiKBGWKg5VFAHDhLVaqTLhscuFxe5w1Joe6eTqwkeC1QPcSBspR05bcB90mJQVlVFsf7oIwnaUCQtX3aZfvZLggOaNLsW6Uh3nQmksLIl17xe+D9mzmfKbzadDCbhzDG8cx14WkHDlYkXyBBnc0UWmom+yYPTZeyWgvV71ZeYHZ9ZeGqh5mg8FZ+swnTu9JyeAsOhi66phDTl9C9KhC2Mbn8Tenx4VPZHF4fp93C67q/YLVQB2lxunryNlEWzDXaFafBmPQO5si5KXHH6Bpi0CUBNe5HmcYZ601AVBQs3ShtVoCX23Z57ap4szyW4hG4lwLmBibfTVpnKGL75ay8ioOwTvgSNJb/jg9cRP1c=';const _IH='fc86b9626b3f4455432cd86ac967921e78a1f4b2f8341ed5b5f71b7d37003490';let _src;

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
