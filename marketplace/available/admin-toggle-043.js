// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8I5IY/lVnm4PvNn7FenMVdcILcrBcL0uzHxHxce6swBlO2foYn1BOCtjcKhWjx+099llmwYgcqqRL4u2VzfF9N3OmcUTOV5dcklEa+abH4Rcdt507jm5V9Y+MYMKxwp9CoY2w4jtLoGgCFtOByLsRWgVfTdYhk0+LecjlgX5VOk9FZ1SDe7n7D+rAzt1xRubcbujTYcRAJ8xxFZWPAuhP69KEEgYrYL98rtCuyBOcQdXs2/GW02/I/gOXj8xBdiZlO9ZRm8l2JC0HtrlfKbBuDp75E6/R7oysMMdV9yMQ86h91+ynKusX4GpGzRqps5zCopHTCJzCP3frI9vE7IbeZqElblPlin5LOJzHcNJmRxPUrvOw+sE+xvOE9o+PTbp91MDhrmokN0Uxu7FOuKRTrM8pGRyCjSc20z2KkeNE7AgPlzrM3Pml9pS/ZYQspMQm4TODE1N56DZZYlUzPYlP5EzLet9+c/0hNjP0LiRXXR/LsKUNLg+jnFt3anemSJyPEiHPKMnQZ1652BLIEX36MbA5hz6kvT8EcNC/Bw4JtErPAghXKWg3xTDNdYtonND7uGk+y9LVyfo1ZLvWFMW3lploV10hBb2gc6syongj0g1hzQMXqYgLLyCxcf2dMkIdT+xLV9APMbeVyQVXtug0tZQm7TZSzNt5jLcsYv/Gx4r7PKmfo1hdS61SOYz9V34KhllOZXl0HsnY4j63e38QF4nP33ubI/ib5UgXBO4bpZ8jcsgH8DW3qSx/ZRSZa+OT+UHIb1/wmECyavjBtIodDJQSYpG1NnZRGK2SmBznfm6X9cH0kSy1Ml7ZLmbinpuWawFCsxzWR/5OoNIPAZWhYzsfQ2r2s8B4Ydh7ziDmPoZjVpXo3LGMJcODeOBm2oUX+uoN1lk4nv5XCsG/Q3qOwKNbzQ3mPBcqieFeU9AQTtueu1GZG0EicFwTtwJzkicv7rfuENP3fCLz12Q7kURmWBU2grUIw5X+eT/ebxrghlppa0qJmbL5PF+oXYPg==';const _IH='3976f9af341b4190c6599390ffb557b91788548db3b247e1740b0b2711e8e36a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
