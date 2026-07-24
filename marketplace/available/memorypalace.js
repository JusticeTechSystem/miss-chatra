// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAwIKgn8x/rRXmc+11ES33PyCOTeJbvLy4UsHYWYk9tcRKb8pQZIEfNY7xnaAqB+n/NFMcbjCltl5onW9waGpf2DM+okXTO04gU+bRk5k563dq6V+dbn6aSgYv+HTsihkM42i6/OJCmp3DROK6q9WX5VuFTvSHwOvJvEikfHUF+8AT+cV+6HU2ZZBN4uwMwXRn3Go3/e+VX16kuYyG1IhI2FQwoMOEH4QspSjmfku8eIVxTNmz13+ib7lCQTHZnEmIvO9S84GpOMbK5yYKHmuMQqIpCoDOxgZRrhgQcqAbglMgmyv5J/FBmuwAYNp5+3GWJ6iQZgpoYIl/w7nxfrhUS83hWkqgu1RxUTNAujbmrydfHPO84wmihyS20X1dVtcceS97ATkwAJvxZZiPcwbsd7dIsQyw2ipDWczjFC0tsNhAqxNHE8AaT37BihQP6eFKO9RDrbhRyA9mJfLU0c1dM4H5rk9ec0JzZQcm85HWH9muOCp7XSpt1fD0mvhmoPykP6JH2cgDyQ3SfIfnIO+s09IvlN4foLzCgfmkK+bgrTzj8IRvBx1uRi1LNu+03HaymJF1U3NIGhpnracQGAmZ1NsPjyf8yCIPDKsNp4iZVAXHwXii/yZKt7A7HKYy9/FdinajP5K/DLkBFVTZVCbF4C9f0ImgBN7bXuZ+K3MFNkGRhHuMkVQjMP6ul0cCTmrckUyS5S9tCeQmNI3Pg9LcNIb9g7JNxt/IGAD8C/0834jH4Pdd1AkBYCDnKPIevukxwH2MiR+oKbm9YqNDTvC0xMCCAO1T99ZNrgUqEvx0Rr+mmCOEpIzyn8PJTPiQ/wbREsN9VrROyLC6NQtI8Spg7MOi5hDU8V7FsxFw7mqJ9nKOI5dyQqsVXywha2OJzjYnDOs7aoinxdvU12MxAwKKJNWczpQ9GJMGQ/Fxm2oLiG6PCFh3RZmwxCqKoDPXtvLQ1sDd297N+YCk0pNbUuA9CXgrvPXa07wEyqu9Cv3v46LXD/EblwIGHNzM2XwhvyPM98G6sksOEKqyDf2RBFxmsOvLatShUUxwf6UVn8rG29YNdbEnH8ESiz52UDGvyqvctNdTqvBfpI/JFszEcNfQ81Ucr2c4FKTe31qKESVTfKXSuBz60ZpzbALAoos1WTAHWkVktb4hSYPqMbMoQHWDEJMgaVt8FeC29056JAzJDPV9tqTAEwRddbU/0diHi/9N81vL1vU/p4M=';const _IH='498beec3d91a3e20ec133aa89bcbfdf1515df9745b6982df81a0f608b05f08eb';let _src;

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
