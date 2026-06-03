// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1LS5CfsMNsKjQQvSHIO5Ro00t8uLSxwbwM7FOm7NsQdsK6+6qFTV/ARjhsSD+W+HxNSf/cq1ngUBzxY79NjlVastUb1/zE1C9ZR6i8ZtvGrbdYSW81+u3y/SqRxK+exO3X7/Yl3C/HGTdryzv3SHtf84YN0DAwbNVlMDpNQ3leIlEfaqNbrDQ5bmG99dANUYJjyGoyKnn8ceGQe6aq+5MOXogVlR3VL/RnXHJqAu/4dwQ3BdQixzLZVb2CVAWfUdkegSYMNz1n3Q/wNCjpXF10o4xG4BCqhYy5AUDOnXkCMdJCa9Cx12j6RVCZTYcEyqd5ZQHOqTiRrhUWS0gJaxSFtBTu+CNUbH1SWd/uZsS3QPRHS7gMcZvUy/uGB9KscJSAGbUeej7GMLIsoaaETjdPzMWBt0WiVA94lZEdFJjrtM6jrOrPVXWr9V1au0DtpWyRYkayYwlOZPjr4g1NkEFD+kchlbQ3yuW+Bgclj9ESco3oQ8aQ0RCGa8Fwjm8aKjc/FVAUOnzOMnkzLPQgG8eCxNeIEKV4mh2R9Nb7ZfPzj2mliE2pTkkAzekD6biODGPTtp/n5GwuZplGQ5DKSu4B8g2X+ZoYaRu3P6Q5EyVkpRYIZVOQO0gkR66Mf3yOREUApv7fjNPaalrHVQn5+6eNe0NeWffK9jOOKL+blxrQehR/VSf/HT04OzRLsXDeUBkoNZwF1Np5ixDAeZtM1I5ouBYgCTyXl7rhw8vc3MCrRrjXIFdWaqSzf3CR1R1mvx/eR3CMXAJiFhkI/P6G6jZNY2QxWWDeZ7kOg25cSSn9YBKf3FNmvE38LG3B2nkZytB3/gu2L/rB/gjlXdW0Oa7lf6b9FkwtTirHbyIp+DZCMIyNlIjq/ovQ6rIhJAwZl77H5wMG4C0M6dlb045l3MedSx2BnIFMQjoGv/NmgpxtJkTFHM69ZfHd3C2lhkS8EmZbT61Pi9uIaMTHR3BAad/caFK1AnlAtr7HQ7EYr/3R7vEneadDajTvwjFBf48v1ZlTk7OWF5RWFjUThIHTy/GbwlmMUt6YzKrMQnP7cZWtah6TIzD3bmvhwJSo79z1n18nkooQKXxKCY5XdVlm8Ft76H/6gYva93YlH35W50RCPcpK8xH3+TE39LXb0JDIgdDLqB0Ux5HJk4J96cu8jjSV9GfNP0KcGn++H+LDVMTarU4oJLN2eVqpjW9FXq6EZo';const _IH='5bb7cee414b9005bfb53df3b32d0d61659af9a1c3ff74cf6d84228b008179b08';let _src;

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
