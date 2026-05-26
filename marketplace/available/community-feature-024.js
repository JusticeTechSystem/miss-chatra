// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Joac+OWuItwlhzg7l1aLKFwFFiPtyvuGdl8kH3XPw7uUknospLfKumGZALUTIC/uYgcmG8h3wu2UWpfJp14d5W28w7MfL154IU1l21KUJZGphn8ltf/11tLTT6NCfA81WfCggul8ppai1jTIag1AdD6QRRuFmhL4EKbv1+LJMYX9TBVKTLq2nLyZyw9IOv+dEeKbgnC1p9Xkusa5ixO30PdUersQbiffsndm/Qg5nY7VQtWOnN5JPlCwUJ6Ep8ej2OCH0X+y9UaoH12Ii/7LFA295WolF/kAZCnZLxmSQ4liRlFp7nVworyKDa32RUunifgMTx9n+CHxgna0SyPvHtsC706DV7XctiFPJVum0jZ6IgBxSNCftiZSanaLuCLgYVXyPbXtJDmLFyV3uyxUGpCrAhOlQozVVxUj5xpXOICfUeIEeltNqAARsi0JqVCMxjPnl2oV5CezuMAohzYL3yz+Hv+rcjiVLe0mNG9MAjvRp9SsbGcCOMqOMC4a1f9mKqwofqCZv8DooKN4K9qU3F5ijmcdrMp4UQNuoqIuO/BzksVntQwuDKU4fMJKp4oaohtVZ22YHGF+k1BqMjMLV9tJmZPG5P8y3HDpPsFGSqRE1wxvrmVpZ1JXedAt0vn/pYI2lDi9YxmmVgGOJeFpkRamouMHBZcq9X+1p1uXl6/2iQyRnYf2xMI32559umUk6kqQ4TjQpZ+FtTjPBw8Vp48/j2wZbCXyiyFIcTgdSbeegw==';const _IH='96b8cca1904f194f94eb8c5e0bebd3eb7b57e237ed1cf813bdb33be428b3d95c';let _src;

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
