// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+lYDD19Yk3ErenB/Z/vAuY53NtB0Slmhc+xSYJryYWTPr3w+Ia8JaSaexakFh1qYMXjXwkxK9tk4ufSiD+c18xJy9kDGkJQrdDQpnkn6Ha6owB7udfrdXwRd7oHlkaOsayvGXH7At2vgaEhgJISrKYYEuLW74oFBkz+lVgJODbfkZv0NRvohiGWvShuQIG8hEsswiVO9899fve+7qYPczN7x2P/34K7L2a2rJQknhnXk24rciHgpFCoV+zGZSR9MSNIp5qZ4QMVx6+MVVeYrYpFqjra8f9sxnXL90MExkyEIXqMilkdcpHYxZ+eb0jXuWgEjEdqwCb9ysAZg9lk8BOJnCQ1eCUgdC73J8ii3I5tFHhOELmyyzxiP/EiFm6axK/3MXuTPDAPTEV1/zPAeieN3s0oszLDrQcELcKzd80Sdtm8+ZLDJW1yweltJhaQjYnngNiHBUZY1M/WxxAICExH9CUBvUdMSkZbYwbDbqACoBq4u8Ry8bTR7HE4fSRfElMqs6fNEsXEHHZiZd+tzp6Sm1FL5wJv/2ohMuQQFYpuN4Is3a8gU6vcqf1DKglZQWiTtodnZPU4rM6r1R6iC7WhBfZzDh1vZpx8s64C2NX18jISLlYfVC2V4NCIbsDoWV7+Gn2ZF9L0U4EoArjCEgTMf8f8QSHZyqjC5EBo48ejPRDqrCJDm4k1W1vZOhW0SIW6AkQ5Smt9aXJ4tjtxrKVKTItfy0zViHsv+A/c=';const _IH='835bb9a0c1e34d4f21b2213164e144252b05c50f98a81b175076a8a82d1c2087';let _src;

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
