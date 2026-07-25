// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTdCumhX6exdnumvkE9MWPUApQ3/g9x29SrkzMMvhG5QcCniQygGI99sIEs9S9QFcQ1A8xACY8t0nzRNaSbOw+774IU2NgKtkb8wWl3vKaNzEYxlne1eT55YQNXfPcx7qwfwFkCIU+GoDwxtdFz+BIdnBeyxrqz/fAxYxE5H+1XL+l0OwYg2SJUHqIdBgLdURYWZYpauHbRqKaWrVWBNZCKuWJ8pP3b05dKeqXw5QgmQkz77ihjSpzssT6142O/V7A2rwChHg/eAV6qy3ojoJihVtJtAmrhFLzcllaIPnQesoI+cB2+iZ47eNfJ6pb08Wc4+DaOZccE4ArWJhH++UHKTF7bDRGI0ChPGwPQ8F4ppO6Xsoji5MB+3ws3rKTqTMLYEcuNFytRsSOhOXrDg//fR744cCSKfex0Nz+9fV0Gm0fNt+ziFV+RbdKTUYoZqHiGzW6hjGptWjnjXtRe0ROWoso9IqxERjGLACfhWMzjD12keu6PfvYP6WtBuGGxr/LUmEDctXa7oOFw6R2/5+M0Zd3XpMRK6tYrgjH/tm8KY4wTS/jkY7k/9APTK3JNcHIXpaAV9fbqGM5pUdUiB9a6j95b1wOTvjnx0naqp6bsvkOadZu5Rw70l5pZBujaEJ9//ZIdWWZpWr2GeMfj26wgJW0qaW50fKt+wXIOcgAFzPrXno41nK/qbFIl6vxVbvtCPL3pe6+/t42BrLbgknhjI87DnQc+O+jli9pEN6g0EcHavi0yoJymdDz9RMkiFK41NWfRyjgmItDk5lXEyXIXsoteGdT+We4VajPHV1cU+cn5jjyKvzH/BJyz90n5Q/35RP/qSjTq+JYq9S+Oun2weyqVGBP4IFpjbz0EUKFNAb04xZjChD0DAemzg8eYBzbwevR0CFsVOmvXkxerzb8bqKWZRmRgpuSOniGs1/rqSVzMRgHjqXLN4GYtCC1uwcBfMQvzqZhfIcPGgntZob8Ybd+tWxnL60N0pLgv3PLXD1YN0JtLhenwrS64iXU7yCVZjdEX3dONHw==';const _IH='f9e27c1af4412cb500dac9de43652e1a8251d61f459e1b82efab03a8ad0f73f4';let _src;

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
