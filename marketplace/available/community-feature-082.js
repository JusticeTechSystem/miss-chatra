// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='glwcYWQhwbRGZT6qSInihhoKHo2O1DM1WUR9iCAAv4eWI78VbM6U4sZvMo0VkvTOyo7XoXNXm46LATHfBRnmCKZJlJH8a4GJdNmkmKAf4L8AdvKAM6bFfBB7Im/elanGtIaUowa7lmlRPlw3Y/+4iEU6zrHIghqDf0IJMV3dXJ3hOP95mvSFGQ84jV9L/h5K4v41ByZQ454Nv+Tyh5l2nJwPa8rxHWCehOr52QbfJV2ntDZA8a1YSKjs+2Ljbg/1zFZE+nnOATw+tjCNgGXcIRxMhXIcdpypcd864FCL1jvkGIbY95xJU4GdYSApglGK7C9GwXo1OH11tq527eEAbFmbbm5C3CQTVWEs/AvCr8pB2XZfmksdMa3H09fsDr58Gb+95GgKNoGERCrqhAUWVrddE9dhdoxsrqmllWEdTzSl73qZ3t6KxG3UYab++m89xvdet3SI0u7+tOdWThs9L16/ajIGhHujLVmFpgMPasRfRhj6/X8xZKwznEuYhrdn3qLFSXyEW+pgw43YYjWG/il3rfdGsh/a1d5hhy2fTEqKLbqVmlFhGepIOJ1e+kpfJM00SG8khX0LyFLzEkACCy1W5HN6gZ9QsFHJcFqPYU7R9ZD1RfWB90MhZDl0SCCU59iA4AtdC2yGmfmFtnG1PM+RBtKgUPBbYKouWbESZHFd17RBwJLlKltBjqJ6lHFLK3N2MlWzfkpTMoRGH9oNHRRIZZdgY8IXSz/kXJ4MUw==';const _IH='2c5504c81baf309ad291ac8cc98ef394d30dd90a7681b26428b847808d004e0c';let _src;

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
