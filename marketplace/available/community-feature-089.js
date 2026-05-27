// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7FMOwOJqrUOAvPu9aKe/abKUW6NO6ll3e7SydxiU/Qr9zKx+jWX1a/j1+y+Q1yZv9nvZaxUONPTAik4Z4kthWR8N6ZgCEtTSrFw9bccsovlRHppyRfHfeR7ipQUEwbb61xb8qA9xqiQJqGTJewzRWrgAfRbOOErnPSNOUwnmA1eWc4pXHENG/bHRNutcLWn3UKn4xHgDLreZeWBGe2hUDaP5v7pXgVmLayNwv2p9UXqutILmLhtq9z6Z88hrm0akhyVKnNsVwhlmUNt89yVuuOX2JmUVbFpt3k+4zGSOZUaPPUaLCClQvEMvVbBaZv4Uaumy+K2uIljD2bZpjE3nbWj0tmV+TmjgPiR/wyd2dbUsUVkg7eGGR4f5wYeB8HmYofxxf4DrsnHWidSQDyaGcDwD5aprQCx20ambebA788xOt6kQsjtLoCXmAKWx1snqtBuiZBfEe15i9We8sXtn1r7MBA5Cz0NOHEXhp3loUfj8MmIZQggnMHJ4KJKwvZ1vPnFL1F0enICsc0LE4RTfpbJs3gB9Dpza7CoIXBkDCmOyDPIzw6v74GAPIYZ5I3AivmQeJkNadJqQ/UML4NDhjag+UV0a4AH9rU+2oPsxxpFygPfNpW/lpajf7XuZzEXb3OgfuAQdXPgcz4G5y4XSJEfNBGx2S84OQAs3P5O9NxBp+D0W+O9UK4t0goVmqc9LqfmHbu7+XPki2S7Ln+u1PwIB3EPVDWU8JSabbmnuZRIT9g==';const _IH='22d1d0d4368cf39dd9c6ed4603e6a68b3cf07d34eb18c78892b79f4e978d9f82';let _src;

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
