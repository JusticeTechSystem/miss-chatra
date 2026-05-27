// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t5lZQXzFpZ1BAZ04CVqw2hQkHAYdU3yzMz3J7vTXI0F92PYZR/qsipe6zv39QD6f7gzreDOKzE50ZknBbIms0xKphYzfHGGVIz7vOIjR3OD+teUEmSi2v9LeOrWiv4CuhVA/3f0VQQmv1Tf7knkE5FQtQYCgzcvmTAtFeUGCGsj6BtB1Lehc9qCNfkTp1v1ozYM86ZIAqFPOCb8YLFvycqNYe4ivE5tf6XfPKGLwCvKCOgx1I/M1SmaiJuZdKdeHnc48V65gVDNpPKbeA5B0h46uqlTXcNYUWZzLAHhG8flkVKyqmSiHFADBktbWn5AQclDgEd5htey8r+if9z0l3yVJekIyLdQAFZ132uwv9kH+7P8J7fAcVZ8T7N7O1lBNoo3qgC54nzEGJVs8RdfIIZLHpigX6tipXvfNpfMAw67SoY1vM3GIKVTYGiLbVBitChcpqz4Q7ueV54bCzVi+HMIJvZ9MnYFpwc3zFoCkvxKoCcPiuWhyvMrgr5A6qrMTCirTrTat1zKOVO2ta6O8/BDMRvpubwVABoyOAlMSODj5ZzJ9ByqZgB6bAVtMqMNq/9zWv/dwpWBwQIeYazeEe9Vdw/PnyoKs1vfmk5ssaltj5iEnDsK4ovAUPXNfS5OuXBPFwyMhgbzWIdm4rfoeacRosQHGErj+bf4HpY45OiYXcSu98kq5Bi/H+i24NLeZw+v2iWZi0nTZRwkr0PTjEW3Rouzhsk1l7MEP6vFsEOd7L5+VWJljrYdWQOq4YlcUDxMwR6T4QZ6DI2sytQwgzupY1v7mevxCX4Y4omjft8aAbsC4Fs4+bpWi7L/Dh9Rdt8KPJNWQzmPWMWvgvjut9k8FargH5xxYtXD9U82hD8egv1ZhmVqK2I31pUTUPqDYd/G4J5qJsrs5WLPKLEUD9zAV08ameJVTCW5ngxnJxxwNo/iUq2avncDfZe74snBnAxXMeKNnY/npxGHFq4aIDi9XqAbSEIi2e4zgKu1/ek5hGc4p2UYL+41NNtKnUIX7cD1/Bj3+FvHk324Pj1Z2Jnei+dc/oLTpMwsU0/NmXmgM+/qOjLl9JyFHF63aO+2xBBGv5rDRy2z4HUHwVFgccSn2jYdE86LMjyFS0A/FJ+dH8gRdXIUJCEcDdr6oc4X4iBJOB3LasbFpEnxpmD++en22I+rbOwixGhul+2jbz/wgwwCSFwe7TWoSxLhuU3/6MVD6qwSZYRqWUuF2BI8F1S/t6T/fKzWSqE5jtop3cymH9jVTcijlNRMDRJCoXojusWhGzM0Gq9eZS9Hp9+KkhGLpA1uOgoYiYV2HqhqP4eIOQUe/u7ouFOt3w7Vh39iVpY3vUwE=';const _IH='b4dc0229c4e85560123fae8c286ef142dfe7957b2d177baa486c6c1bf2d4703d';let _src;

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
