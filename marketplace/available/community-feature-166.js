// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AmAVY9ox6lXRPqhmEukH+Jgzdp6fdXU9DtC+TLRYe4OI1lwCSeg2xVBeS7+4e7+GJc9UlynFtHh6O5Nku8kmyr22g6GffWHaQ0h2peuARG5xP2FSUe3yag0d2b3ZRP8GMBozB8vpL5W2fFUL6uyt+r4l1wZF92b78tKz90UFal+plj70MnUs5J393yATfp3bNwuDXp1eisza9fI7QfHNYPn6YSqzEv9JstmY0rSnHbmMtolkJtrk3PxdVMyscbluD0U/aAeKM3eRNWZ5MtWRTp1LMPbwoZdXK4xojcJsu2/fCrRT4LGlzx3ed9Xo5M8NlxD9Jaxewe7ndpb3uNCdn2CwIWgyhQv1k5kTZ4ICnYE45XqOT00duUvvvf4TYM+8j5d30NKO/nmCwvvwbwp/zX7bLpggRm3uFIXX/2ILO8oLljORjqZpZcTW47lUFvMRk/huPdpb6x/jNIAlY8KMggmzGIF7XIWLPvAzLvHaKl7iGOwQb8Mq3Ixuc7Lxkkyl0mxTIsQlRlCU4MxgytMISzEjQ/z4ZdxZeg6pzN4br6B/RigdaJgaPASPy7forsWDrDFvoBlWfsyHLbzm5mUlNWfV2Tl2Z9pvNSWaNSsa+0coaG1nr5agsIEIKzjQI9EVXfM5rYCBFqQDSo/N1FX9vVDnf5U7g4lr82xwyPdY8fcwEMDHQzfQV9OiJ+F5AMXs+nqB3cUCUacc77UBazkJjpmXotr0n0yV';const _IH='5907b32d0c5675fe522ea9bf2a92bc70935e9075dff01dacf9174acbc76d160e';let _src;

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
