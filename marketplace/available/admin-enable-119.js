// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0uD268JtAFZM2n6oq/NFHO7lZ8A+8NZkv8mnX+mN2zf3rwe353lbCb5MX2hak0MtLW8l3p83DtUvclJGinf8uKAosf9/0C+iW11YfXk1DSN670KxFOdodrzLUJXAU/rcG+HJqeJHwk0X5yr3F4dR9ZhHC1gxykxeUeVP6nJCFYcUvA3MNDR0Zn3GNbJU6R0ScHy8V1zyWhSSBuK7ISMBL2g7QfI5FsYsftmZ+9KNupRiaNz9IK0Hsjy5wrhSob8cu6e3PTPqhCCYzBK7waxu5jmecQ115yavSNmoVRi80HBvXCbEhAIzHtvaaFytFc84E+UbkKkmrGfTZhuvqDFM4NMcFSVv8KeiBwx3vUYmorwkoP/vu0SRIYFLgNVQVHjKR1hKqDAAHMYMjcgDLEtcJgzz6DcdKCb8GIBqjVZYVut9oUxwZaVOoG4uHbbpOOMK3dR94ATLlpxyaJyqWfi6NnVatnUvw+Ut6H1zaM401IPiIOlzZ1GEp3hjL6nbvNuYYMbqQjuUrnUdLJk9o0e3TdHLRb1GafbBIWWVCmOpE6hUlI5VIud3nJwBSSg98rRca6GzplRel4fBq7Z0+O/StZ0h90cfHJd+LHdIZvNILfDhll8uu0gABifiV7/YBJdM9G3YV64/wgD77MRcgxdSC8yxxB03Q4s8gRVisrtfVqGdtw9SHo273VIAxRWbOcZ/grpeY4s0z7TjXbWXPZj2KPy3YVrmWzJ9T3K80KHVGk7SNA8DKErystoDAKAaR+U9bEQm9b/udFAXQlZLJ4Z5Gm4eTSB6YpXjVX+BcoUTZyuIEo6Spl+aBr+rtjo6GsMudGoI+2oJNfFro/3WP09ZIs6kjwEB3M0zkw9kIO6pPUs5NErp0y1tuSyrGc8LngH88hMTrD4qGPOdAEsP0J64t1ngQnjOHLC/kYmFVJa/qa0sgpivMDjBFsZT/Sp1f4H3puJ8yVhNvhJra+3XEnGW3WEDJaer0UGKThOj8JOH7Gw8r7henEkvutEhNhio49jvII=';const _IH='c07b3c69b09f8a61d2d766c5a4528f7e6325609c628ef69a348d36015210efc1';let _src;

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
