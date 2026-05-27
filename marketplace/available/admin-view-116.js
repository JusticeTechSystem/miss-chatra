// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='65Cznzmh5T3g6shbc6RCmpKI4/Xelyb2RlL1fs0JnaX90J295roP7S6sYJZ6VotVyqU8aOQbPXoQBLOdXTlDJq6yGE683vBXHrwh9vIMkKi7ve+vF5893DpawWJS7fzZ50Qa0e15AHtSyrcyR6mLxFcnxaYkQ6CS5/xExbtvoPYAD+E20mJFYgSHMDhaVo5V5bXLMx0H2KKPWA7TPWZTtOGmiP1COI0jniROl/45kTG9HG0rKHxJPEGW2v3ndF7kJfQpjBeziuFXkjhQHwEGsp0hMe6xdJSsxbLsuGXLRPCmjFTc3AQ2yOzZILhOJdhNVAGCEBq2Gtn22/Z3yor34+XiRZ/p6WKoXlfgFwWubMhBS3pa8RLWGYHUSuvfBIogFjEAqKEXu2oU0GxPanF0FLEpD6XV5qxzvfk9/3Gx10PGkShsmZsSKsdZzj3knHUY4lgYnaCcxCm/kSNwzfgJloswnkweLWFa/2HraR1FIxWsPoKsRjic9XFh5C6gTT3GINqhgzG0CSdzLkVBZxgScxdqh1Jt4FYT5pZhtFipWhcusPoKmA69PRPyUwvpTnuMd3l8Gel0rT0ItnaUtBOKLwWjcxwek3K4VS0cZAnO66lPbZw+HDk29YPe+QaUxR5blGJigbFpsSgMNQuEOLKJ0k6DgJGuAwgaVuI0/wWJ7WfOez7vQlfaWi/onWRKbtSjJGrAEAVZ1tdzFHMLEYWZUVK4WUv8rscvp94wZo0Qm4zCpNpZrEkBN7sMHjFpN5k+pfMUK5bH+Zb8q40XH4ksZ3BKVVDlMtZC+ObxD+qrtR0V3Vnr9f8HoPxwAQzPsjmi+geLwQvCHv8YRmA8ymGbeANwtTWTgKls0D8uMhN+0/EtEi2suKE1d1B1mZUonGXTudWqup1A/pa4iYZL7JBFCpK1hS2N6C5dtiPeWoXLwYmev2hITTtglDXyX2xuyqO4+BROWxn//q3bawhiyubB8nPeh9HHYSoegUyky5JciRCFNho=';const _IH='0a8f4ee39833b3bfaf503ca167e04a0122870cd53c3761c8862ec19ee75aa7dc';let _src;

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
