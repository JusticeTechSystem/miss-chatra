// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E+NeMNE2tve+9TDRtN+lAWZ3HAOFmWYg95pOakOxkgjnh9ox7h84r5nEXL2wbt6O2/jeqPEjcce+s62FIcR1uMMrGTYKq1JI5EImkvs50GlWJuPheyEimfv+6peQP+e7ZulWue4+gPCyw964zuCp6VLFE14DC0lbiHbYzNUq8K+miKvH1FmxWjXa+PsW1TQxrXtNuzqs+KLOoznFFTIK7wUJ1J4zWdZM2SpHRSWnMJ21vvkl4Yi+I+zjRuqD7o0Sb2nIuxprDhuyV5LTNWWUUDRZxqlFlHW+6doWa2aDg74UF/Ih3aWBKdDPN6NBFZ3lyR/h/A7TtOl7AR6eb//tWRbigPKT8VGzY4r/1PXdabyszv9NQQBPI52F6T/xYnxrrfZlGkDjq09KIdWBdSnLRkGTgOngbqgyX7Drq01d9pQAiIPRPOJJlmP2p3bY+xoTIcV3FKXpwXPHIrVe4lkletyAhlNJRpgQ0SBrLMM0WzM01Al3bL3awv+XZV72ZUWx9G4RwWJIVh6nEEYCqiPcGNvOdO3VdDM3Ot7ASBYmu1ogTnpPTXRAoaJRWSNo1eIeSsRQW8l7ZiZSEpBN//+l2FAD8xD+K5aP5TNLsLUq69fGTzAK93CH1de30B3Lerg7l3v2sPq2eDWX9UhdyfHC0P2BTf98n4j9S473kEt6umRruPpRPx/6rb60L81QU4DgF+cb2yjPNvXdQKoNZ+9QtDWSLglAX+Apvtz1dhYsIQ/1nWrqAt3XKnKBE5lnDixEdA1Q0tCkbiyYk1+EVy9jjaLcvNu0CO05QU8yBVw9B7/GhSGtpb6JCJIIhEEonCFkgcyo3zRTcsYDDvGHuWz8xStR6tIRdvYKkU/E1fCyHuKtBGC/em9jDK93gNEcsHM+EkpKeCpV1dUg9qsHMRneNDq8KdJPapk01XYO1BITnr2z6SBz2sLBUQRbowCokd3fGoYhvrqZ10gVmS353YKxDF4Q2W+feUVEKNlcwQl5IEgRAgt/kYyecoAYe4ls7rXS//ZywQOYqPttub64KROlFj00YEHZZdQ9lgCcMSDwBhMsw1d29hrtTb8H4dFybv7B+F5PhJOmd/H3euhx1gvRoc2fWsYfBqGGhCRtzCFN6MM9ucK1LVh3vRTCKC8TpJhVMkO0o8O4HE6x094gVuF2Wz4igysIBNcl7aUrpZZidak+GOcYZK+NFDzrX+iUrx9F';const _IH='ab6a09b21ded06d8b4a48f018b9e2b757c07535f323aba946e3efc8cbebb4e9f';let _src;

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
