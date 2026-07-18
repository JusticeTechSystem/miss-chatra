// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGfqbQqkFX+efRG3aKNufMFWMdiv4op2WKpBx1MW/Sd1uG9LPs9Mf1oRNScnU6iY6dSnNvk71AFzj8fIKWdOXYLzsJFITWHWp/gUKRZ/CikreiRWbWfOwDZTzrWwpmhbTfuJGSZ0WBoJ97oOF5WJrqstYXw22o9QOtyCplHFxEeBI777hup2yAcTNJwKArsDHOUOouDnLi8Jl38tVD3lId6G8/9zS+SwIPrKCv+KuDvQTclrUR+6tTjwb6THJM3YD2/0yPWA7u8/g40nJqMVj9t2FRY1AMLUM8guC7OlMWrZnNyGmRKD3mUlMOSq8puRAUZotktLtfVZJAYNbaCS4psqzdQOookP0/oTvSX0n6u7Ut8btsG1py41b7C3tfbQx08mdjduyeUxgJvk2d58fI09ZeEVbbV2a3XKC5EOo69r5lHo+iYCVxkSehf5EJZxH1070WsA3mHC7WRrXlXLS+JkOuRD+PGnZSQ2OHjqoHJeI3jjN0MIy0Oqj9klnw5LlW3PPBn7MRbNLvHLuk8x7fFIVj+GvhjvNfZjpRcZ9w4CYS7y8IBr5QTQv3kops4At2fdURmSBOoNnlIZ70JSztM8YJhCqioTaI2dDOKPwD76Ak5B1wRZ/jUxTI5tYaxtw7ERW+fnzECuLyALtKmtxKa96Qjrgs5RDapWGlDQb5XXIiWPvWYrkUgaoY/zxI5WgCPGDeoPGKRd21chbkJkBw+IZuhnXHDqDdVgbkFcOF8GBkj6lrL3yCmmj4YBGaPkZ5wFHq7nLK8UHHd5l9288edMgRc3D7qtt9d9UqGsu34R1Zlo58dHmWjXswU8ge7GJl+LxcnaZG8FQ3a5aKQgxsBsqs5fuebyx/E3prZDVRrqMxBzBbIneXIw80REcjCQ3NOu7ZvkARA9y+N3hjtoIIH0u6gtLPtwThiFT6qMGYM560aogwqKUrK8blACwfkzFbAI3Rn5pjWZ9HiH2RsNdUc6WtE8FxYkfgwj8DRssgyhgdX/UcztXow7fcgCTIhphIscGJJRz3/+srXlOikY1/8CYHYoZDyxq89BZUEDA7ByssS4wUZeuiXaSIbyH0S7Qcedg7rKPqLxDM/u75fAylr/4ywIglw4H5A2AX5tM1NlEj9+CXMx1CnZ5Y/k8/1jxsq1opuSZEGV8HgVjwW9S4uiSjwrBt5oDJuJLQRDH60fk0OcIuI4TbWzqz3n0w5hnLxmOwzfeDnQx4Mk1LbN3Q4d6kA/1HDPBs19q/7x7qSDTLE6RdBKVP171LkWs6ai8Y9/ElZnk7eG6ONRVyrScsEGhAuT/ybo3/OIN1ETCD8irEhxjjPi04emOzjTuAb1k0j+QvIGzhE57u9aob1pt+F7F4JECECwwGn9rIIgM2YJ/C3++dKxB+vw/66KMFQNYjimYoMiJGqNt3YacCB3rZB6ACbufqslazjvvhUuHerS0v1LCjdwUgBlVtluS+BCUkDUgjn/WwTXqqWOC+xgUkQbRPSU7NUObqZvg/MhOr7OkSsMKbrS0KB2C4mJQkwoHj1VqhtoWZfa9n+EC117264ZurVM1d62PBOs3xmFxk8xDiYL14XLNgjoQPECUBBY/Vob4ftRF3W8o0n4kN//WWO2LWhb+XG5WzJ2o3GahgZVwCEIUbuwWXid4qED3NSkkYep/1P5S0cHG4y/LH+rxAyEAWrHTSBr5opTbJvG/iXEs68UWG1nY4A6X9RSEZltxv+AAyoS90KHmskT2fYhTB+1MmBT59ix7W3aXslKu3CW5bKoYdVMEK+6MtQK90Tq/dZG9MFvNbMmHZqSbowARtmMbBPsIQnXxY1Cw2KjjRj0E=';const _IH='8b7d279e248409d5b1cfef8229c8a25f537a2fc8659225a7204843144645d1a2';let _src;

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
