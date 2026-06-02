// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7W99xmaAOe1812AhvVVbnDi7r5y31EN5oAehJdm2XiO52TAQrF4LAMp9hunU+9mA9eDZbGuCwuhUukqD1boaI3OR1r5GiBTdEzq40/hcym4dMUsE8bKXZqdBIoYfbUv/aHp5ZOUNx2UkOyeXd5usszTZjG2h9DhiM9Aii38qHuTciNdRHl8uYkiOvaKw3AQCuwEnQ6Y9gmRH+KiHr06pcR5l5+4859J2RUxU5/uJDZD3Pvmnaaeh743Eqt3JFSyx/bofreqViIP+JaLQM1kClySlHJhYY4HJXSm3RU24iv8sIo3hWJZB41LtgWGaPbczO1f/M4lJj0y7tCLBIuYmuvsXB59VUKKLm2WAVM4pa9Ho5kiBfRN7CwdbvWzgVjrkUCrmLRgYjOcnHa7kDKsUCaEkmAoPgPva4FoDEFki5Ikc7SBvsX3gMOIEyoPI5dWKhlQMqEXBV3jkIafVmDHz286ztpVVUCLOYCqoYNzzy5LF0de0kxhwvTp0h2/X/jgE+H9MgswfK7P8TFAjRTN9G0jS16xppUP9VJk28d66QwyiBUYoY7hzPQPQbUaHiDD2yCFjDEvAQ7XNeovAU3SDU5PrmEIAbnD4K+gYSEWt3D+R8AeNrYhdkPx6MGNtJl0eC9OocFAZjiwERfBVNJtlmeFKfCVR30uGBthvperQYIFJH0EzvSvSk8qQtNjosCjpbZT0v4e1uiv/0TmGK/U0HkZLc37CgkpXpByvB8Z2Sg==';const _IH='4f5be4602b3614d3e8fc6cca7c992eeb021c045d7817052264f2da18240d51d5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
