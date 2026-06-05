// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='15GpXMGQ+vyklTRC4j4Lwl4P47pfgzaiuHFDQLOUu8kYL63+UKbBbvooTiKZ+Bx65RTfWPn27NjGipzNxW4phnonqdsu1XIhYzn4k/ULwQ5L4mdbnZtsc8jMU+E39U1/5aD3IE5bsfYYQpkwE5MIo2dAbJXkx8wtbLBnY2st5kt6S7Q5ZXahE77e9/FUkyAVOq58CbyqeYfLfWBMlazBwW30YMDgI3ag1Nxfad71qFrxS32a9wgRxRehc1goM8Ppp6rq5dLt1niPXIQYVLVMck/hU/zguq0hdJTUu96qz1tD/JOhczuUVdejhbgVRJiCbYOzHDv2osUS7BsSArtn41d1JF2olHUWgG9zg9vZo/+jgMTPpQlx+Z3nswrn48CBlJ0Tob2SnghtbbsFpfvnc1KnGJMY0jR72hvV59l0WQjbshOyxbmt7VZ/a+WnsB9ChBEi6WOXLLaGS2V1A4X/Peo2Mr2sNRhJuYWwyRNFdAZpems7Nly3kASZKmd870jQCZyZdg+ehCVxCaKxP8Ojbrbtj/EyDocZ9Owjx1+YTcThmKjqKX9KP4m/2LlFuO2zg7PP/AhdwSB9G5T7PrTg6eb06xHH2b/cX89GQED9zSPQlB3Jlreh9ntGzWsMJndxJ/m1Ca7Vz867MkfA2pyVbtaOw3B88SsncyOzavTSjIIqnkFpH1JCeG7Em5z4opMIbgQb+L4IjoL/AXaP2UqAeGbKp7ObGj91fdBICAxvKqMIm/kC5YAIdkx9FtBb/ckQJXOEXIV417qlKH/1OZpbD0zKJTKaOoxgCS4bNGRYdKJm9PVdtt4dhGtBJu5A69Ejy12NIHvlb2RCbH3nqaYnavh6wsgYH9/Z7IoExI5gYronU/ShAdGPP9r4R6Q0wYh1tZ9McsYCQt0fjYOTErOSLOyyLarFphU1L/IKyVUR8ST+ap89XNka3jXJ7NQe+0LwfvYb/m+GkAOYYiv5OppskW0jPJad9QLSisd4ZmI4/UpD4IQVxV7l+uzIoLPhoAtg+Q==';const _IH='e1ee0ae8c7e022b6241f40aac2cfec78f2df00e28002e34aa3d76d21b1c269e8';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
