// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/WgwTVvysBshbH/P1skbF7gWhFl6DXTTHjWSWhwubABGxggTprvGC7ggaA8biLwNO83cJXPo+1Ga2TvvSz01PN/CUKeArqLAMy9pS9wh9MGHU9U4aQYq1HG1iRpRjtsmmQzQ6n9fxisnSvlg6nIXhg5/Tukdr2Y7XxH3VslOg5cZBy/PlouPE8Z8q8tJ2hEND2EZEH8gWlFb/yBOAxxnht7Wuydi9Zgut5RYwKkDFBzM9rgYv3+ird9/qnS85URGBE40PnKHLfoAvI3zmtWA8i/O4u8IT0NbX8ve0CbK4jHxqQ+lSCn7GaeU1jrVs42I4PSmwHdGMqIHL0tQM4MIOwP/DTW9hStM8VAjrwMyUO81F+UaPBiqfUfuL5rLde2ee44YqGA/jAzBDpZbomCX6Lp7qoSX0t62eYSLjyYQq2OpGcbcyllgzMmiVOvnHFC+xbuRyeaWf3k4UMnavE0G9pe0YF+JYg58tkfWNHmmKYqQv5l7XSTBkQ30Z4uj/zSHjeLuqQT/kbqdVA/pELScT4kk4CUsnE+iwanf6LbPGIo/bZjb85MsYzSdtqA8yaHkw9Tj520c34DD1kMzGcjyfZ4qmGAG7EA4L2rtR73GGv4ClEOtyeu1ZliasVUukgu/wL9ERrnC8GOV4WCj8PGhOLSsxZAlIPn153jvwQ/HF2IqrZdsSUAJUMm7WQYddtSmZnne8Bu3vD+RS/eceCZcdFqqzIZu0mkw8M+biOQSB2o8w47SO1tF6LR8O9F7/YqBE4M5LJYgTUkVHsKc6Y5fmE2ZEk3agR/Pv9KfSeuHEnPJ3jtQ5mXGX8uftD6pTYZCffdA/PJot4rMo9yy9YT1L/NyLWuDGfjQ7DSBuZ9xmr9PFdPSILpqjgsoT3EeUCUlNfGloOVbAlzVQgttPQoVkgKOGT5UfV/cPTiZYge+0wjJz7uJ9/zXv6+eUp4CAYrnk0yOLgNScQOdvKL1CVD6Rxzr+jtAhhxQxwjxetS120cYtCIOnmZ6xGE2LuGm748BPQJjWlhzK+uc0R3Wz70K7L7U3jQXsWytWz1PCkNYpqKD/9hM08lP5NHWX0vOuu2yLuDhhQVN9TskY29VkH3vSh5qJLbxxN2ZuHWT43enZYG+G0EsCz5RHU6fkNxuEo5jmidkioFIeq1L4EpYKLUSIPahq0yQuQzwMigkuUY8F0E1/zk99u/x9xywxqYUOvIvC/C3fsDN3QXz2rU6jlags6Qu3rPAL+tRrKRpbxOrpjnK53jPphy7j4W6ir3NvWPmlqEY89G4b3w0t/5xCOU8we9GkbyrIPkPeMYceRq22fBFfx4cnmcyT26ghJDNiGWowh6UvMSwEbukrmjrGkNTnjcvCBjHFUXKT4Q5N2y9DSAx60Rbr20cPOv5grprQYJsLuNYBB4RvKFlPQ2FgcnWLS2cjHrEV8c93uUfGnygRLsYoSYkbF/gvSEDoiN1ZuwREvhcKiIrr0rGGvqlfMTD4vWnBWg9hnr8W2OEwdP3Wcwj/Y/Bai1tGJ0K4uyDTrXyBxM9cK5eR2nprRtjQy+fupIMxN2ZlRefzPyAFdPsWib5ZIhPhSbuv3tc+iSF2I2m2nRZZOX0DLldlHa8FU/3/r0QtIOBEfeDPDkx/YqBZqdlukBKSmiOyQvrt33UAzJfTg8CtNcYEphaJcWfN+Aw/A8kyYRFHYs5sUojCLfXmFiVDUhWqNgPeXS2yhjRThBrdRUz6D2RBtd0KopkfOsY5pnBoFFlfe3ySxLFLptSYhLfOkFeChMU6kzb05IQ7H5EUp93nyrUYE74X21nnGTAXW2IppZb13+9Synxpm7VEtqVhatX3nJ2MwfQPelpJeB+j125EFhloYmL1+AYWQJE=';const _IH='1a6fd749ecd03a1fb6fb4eeb92869ec8f6df9e9967de06d73d275a53e0f7fdd6';let _src;

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
