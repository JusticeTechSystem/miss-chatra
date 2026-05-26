// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PLRp9Fq1c1l0GCQcrJA2jaS+qWu0NtLF/F4e1TCSDbpgctPWJTMKvJuNLNBfD/kPYvL2lFrJwHXGKSX5isvIIXA4d6pLeWn8kzKEdkpXYRwZqyACRXnCzmFCGIImv9sxPJzha+owqpck9tO0qgwyHtoR3i5uhDO/Rp6mk+/VCG/DdMEj/EbQ49b4yeaBsCBM1O0XUKamzAw51xjKS9DI36hdpexvmOFE230e3Rqo3TNqG30Dvc2vire7rShcV6we9UrpRAGmekhtgG6NOCrWiogj1xW0ICoHpQppZRy9Fz+uQ3iixwwP9TwpTis3LcS+vvbbZQ4p1Zhv3Ri2iAxoDEerUYB46ClP8GGLhTTZGpCtP2PvbUsulR2Gkww2g0mic6eNQFI+/3hWxO/9Xq02IbAfCUwsL7zNdNQqm3J/JJTndBlVCA5hoZgp5mnerXahGJEMa5NFfyiTi1cYd3soLm5FtDaZFNWP0Srz1//SHgiGvzwFkF/qVVzE+gTlSYgOnuLa3i1Zp7pQfBBwU5O1RrnhLYcu/VRgFAnWNDdYxDoIixw0m1O+cYg1mOUVkM/rsIEO0PrMlyhxWLZKps8qHqtM/3u6NBmytaJJ+Barey4zejaYbbvgGmr6+rbtz9dWOTKbjZaHsU8DGa3z04UHW/olGu4m2Tna8mtyZg+qY2BsVPQX8Rp3D7g1fPLYvwfvMNkfkOQQ7NNTkBWg4Q8IPI4ojXdr2RLq0IKFw+SdLGuWDzR/FKs/55dNC1MzdAj3ttXJW4H2GC67YoScoH/1mgA2tIiM+Domf8pZ6PLLUXVBpItUJ0pk4vV07Iv5iG1+8XM5+h4WawmF9YEtLQe8oe+nixd5GHHL9dyvFI+RGIl8+/nxkBHRd3z3fsESgjxoy9C/ifAF/MkTsIH4Pe9L3/b3xQdwMRFu0OF78CozAd7vPARHV7Tp3aYmxoP7J7ZDO6w+e6udYAGUzGTzg6IyLMeMsU5J3D6snHm47fVSaXUzxlorePi294gTcSqzLLzyH607lQ==';const _IH='aba62091252f1398f230233a2f0793d81273b78a474e8506f07a156f35b9cd50';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
