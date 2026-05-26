// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e2+wIf3/4dw/zXPbmISOdWM3Iaq2u8LQ06nhyhpDqC2GZzriHoxpl+Eea819UTOY1o7mkqPJXqO9qDgTTwkBThtTkcYmKE01Fx2ZeH6xJPWr8tRq7A4t1tP3xiDP0Qi8r+Q2Lo01tWYGz6+BUbAZeXhqqFZMnD9puXGw7Lb+IEDQocg6bwNSLhxn5Z+ewav4TAw5RWd9ppR3qWS3O5RbvApIWFXwPHTpRUjTMdTVon3UCR/ZHNWqbbVzKWezHvu1GWUUY7322h3G+qGiXc4MxE8QOz1aU0/3Z4CdYQpaipuJygZ5aS7+gBlckOZ71XbzhCiznMEfuODacEiGzIcGdfH2YVgvoFeBszZcFyKZ485xVT+6VG1mYqX+wTKRQusJkGSYy93M5EX81n4JDFZa2tIo7l0vvQRTj4vM4c0wmiFP24pbMvIYeXcSbd7bp/vdWI8qRKYsYYbf7CY+SNo5j3SIASsAGQTLyJvVszfNG6RBb4t+GgzinPTDAcOfYNtYahScVQtAxab1fOaTWRbqNK+3FdLEH7iVuouMpiMK7HYMMeN2zitrlCiRqa+JHA0IYEPj+tjonbLANj00mf4ubTcJFxkzNwXtEGW63uWkCWu7+A1Y2AVv6HRnTk6u0oouRkNZ/0OTl2B89pDKrYPrXt5xXDAEUidIPPZxYiWPMqHJfQqw8klD4LKLow1oDzE3/y8GrBhL0G7MdJHQ1WF4wpyA7xlY7k52nY570UDgV2k5ph9qiT96p7yhzw/PLyO1IKzQDcIWyOjolHtQBYxf9SSoFnFW8Gxhu2zgVoP2pjHF/rwXY/HztC5jTU+tyQJtKaC/rhG/dwH+iGPL3FHKNrwyKdSg+U4dBGMd1605fKDER4JE+rUsxosOBhPm9ULRZhL8aCFdE5hoAzVqoJR1eBzqhTt7WB7Qg1ebxc+2pqkylB8r49xdqNdw+HiUBlUms2rmf7lTfWsO5YjSuMJKwavK3/iJP4Lpr8MyO0BMMFMB3emHtzLwEcLN4YK8WsuZPg60fPyZttCSqqXeIcIPtQ0Y';const _IH='59d46b8e79e5fbc08c154a3aa16bf3532820bf1c5f3ae4c402f2765aa0185068';let _src;

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
