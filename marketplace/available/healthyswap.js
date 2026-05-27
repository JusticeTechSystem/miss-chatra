// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QSy09wDKx497R3/Re6RKrcIyCnJeZto3XAnsZKAVcUwt639H/u2TbPy5lbefITZ7Z176fQmkX2OwVWeyqmPVAB95XOjwPBiKFLXtAMubdAzsuMEj+hlnoc7YjtCgKTgpTPNtoujZDPYFquAMOYMaf+awmyVu3lpYuI5XKFXtcdLdFg/0X+9StAMCrJnw6k4mc2Swl2M4yEFK/veGSxkFIm4j7CkGkCspmBfYq2VBpGfShKjZ6sOzD+os2kgGqfB7BcannGeit64MRfxAK9LxweijEtV8F4pEGBbFyTkrBMUhjJkwPsoYoTzDMekxzDIs/eAiQA3RPoI6eOhe3olAQEC1bpwO0AGRniOwiWJ5+XQ8M4l8FJXdc6dG9JiakRRYsO818SnLZsN8GSUiJiHOPAzu/vwvA4K7SwucJE+piMkBL7uZaZnCLtjeA4oPza9s1wAZTEt50NNT6t3Lp57eHkHgxJtvTH3OiJMn2wubBuMMmfSTio0Fd6SQB+mW5xjllE91Se/1r3bA7F8+PmnBM8nhk2ElzzQ9hhyX3/Z+W5woh+p+XquUBa4QIcHCzpNHKGKdvePr+efVZa+BD9/XFzoUBPWFdvIRlRcmUM24VScPHUmYKT536pP8GZLB0p07sJouKS36o7eFPOpeExYxZ2hBJ9w7xtLkfbQ9bk4I1q3mL0ctR81fO5loJaPWvJ7dKXQ8jVy16MunTHnGWSgQPLo6RqfcUldxGa6/vVLUwfJmoIozYlAKpPSBcVr2S9ul6H+dWlcguVt+vrAYEhhKhIR7afOhIKULffSrNQWfJkrFcqSgHuQJOxSdWhr/k619bYPMVeXHcvlWfUuXfKHjCoIqNqcZ8WXEmmSAV7nll8UlCmUJiTzUgWdnMdmwD936wsFGpQzPmmsDcsee78cw5aJWyzwTvgVCU/YTYdYWARjcV4cNRSuWM0HD/23mUcRklfusn0ecwyH/Ay977sItTGujwj3MBYw1KSAULWcmAIfvBwEx1i0kaAeB8x/XdDZrY1Nqx9M0e5pj61cGqsoRTLGS0YCOeKbKKn/qczBuQrt6Jodt4dc0gJyFj5qiNl1NVQfUDxqhdhVMc+ymE5IjDRZ5dnTHWWCL5GeyNMRoRZSnq3kfG4UiFCkEqZu1GMhIKdOxuGylf9ghtEMOEKlCmkE2RrHoCLNsw6XUH8VysjiKt8lw7Q4JjLEebd5Z60sQuK5i';const _IH='5abd714092d2a586787e4ed027fe30dbb919e5c22a988c7036d27c124762840e';let _src;

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
