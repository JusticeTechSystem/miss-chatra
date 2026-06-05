// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R5uBlsSQQQCf1Ea3myYVYEhHVkj0jl8vGr4UqfYM+z929oKcd1s9cSbk2qljcO80y5YbuVY5FJ3gnOGnGHWAoq17/yB8JIG7+HiQW1RdfOdF2W3rO8aMEEDnIv/h9L3WadFt7J0v9zC1wJrv7tHEAws7PXyBLuCUvR91gC67wV84mNwjOQ/f0mU7lTDnMS8OzmKvwhEwiMo+HWqblM9BsM/MHZSTY6wyadleyyWgPKFEEck5EayGi2cOmMSt8H2eFRoDXB9J9aOs77gnkXXiP/ge+L44kgy19xtOhKpReYszWZPQVmmEx0lydY6K7lUVeLE46m+n6U0c9EbI24pM2KyjeNXF3Qw+wn9pO2j2+wQXXddD2zfUtcgEMPq1II0OM47VxqVpemKDjSbubd2ocOaBWmRlOgasF1Q4/3HcuF5M6STYKQVeR//NmMG/CFpRN42/lzBzhUYAtdoaXBs9bLg3KogpkBaWv1Ah3QqzQg7IZBhsvvnJUWvKSA72zx5KSUXVURtrDrTcXP/8rORGIU3zXmCq0Xh1ChuW0bmdflGYZMWI3oSInCAiFPmRLz0PK3EB8AiK1WDXxgWom01FvCAShNwVzsd9aHel4JOjundgpvA+Z9c0LL33/HsB6uVDYngHY2nDgJVZ2jJlth6PqgseK2cgBvJ4OroR3nY2n3CxRtBaKN8QIHnK057Muf0GcZcLMJp3kht5IYiLvLKr76jRC19WcMPwy4RFLLWeYrhIag==';const _IH='03a8aeb4db55b5b14d8a246cc274504d2d0c1b8f2adc895f6598425dc6c99a61';let _src;

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
