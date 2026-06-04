// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XZUYE3nSkx1nj+StOO0aX0tmRpawQY8225W7UMKChZadnZThQeKlUlLUHCua6kwRnwg1mSdQQkq7U+iHf/R5P8HLa8VOSUV+VoeGF7g18zGffNIppZTLPoOhFU4ATAvxVAiGTNTWnLgsI86nThhzg/Y7szm8qok7v7RDDKpc/qJ0TMaSwQM9RYYLQSF3vVRaR/ZEmwIUEQjxLG55cUWa9OkXQGv7x2lP/Q0JcIkNAGrqx7pxpMuuZnhR3KNbIbR7oOiUw9tKiWu9ttFiHYhXy/Fp6wgjIPA66+2Afx7h4KY4nl3nteNfpeLMtAYfUWCvNKLpd9/6IAd10TpdapiUKX9SX9aVMlS3Dt0JzsOpKML7XxBzBe+v6JIQoi3QkJlsEj+UmnqZV2b7qywawHWlLjzLNdkqyid8dFW+S9bnbHny5sbEbzE7UGzlNd2/PYCDqDciYK/+OhXhRQyYffSkQBSgzWo8KDQpvF2/Z90IFKvXLnfmpllEBkWRmPDHWgWDajsLrVvqSoWcGIuy94nRKjk41h4LMSRx2e0CpAjtP5Rl+TsqAfughD/aLNez09SUssfrguUuFq0vvamJNeQluLY2n634ysXeAoa9TeF1NgbJ1WqFLBvF4yvbPpwdfxJEOh+2kC7qm8y3YT9RjTSuWAaaUG1lOxUHaf8dae86Jh6BPW86OvZ4YAXkJSJm3U736BS92+Ad6T198MjMH26176SE7L1sm23BSB+ksGgipSStop2O6kwq7kYMS3Bf9PMKGHXf0XSotTpd4ovHgI1cr6wq8G9+ZznId6rC0tTbiK2nFz4fPcMed+frSBhgKX1Z4rbSP7MBa+0deb7hy2WI9hqWOynoA9QtjwJAnrDJs3q+4hjq04ZH/+kVEdHiG4BZizb5bNvTYi2RNXAYevfWNkaNCDyCh87WVq282fcmbjIBQK8VUoFdNEAyFGf4KEUq0qm+SpQiC8He7bd4AIhBd+Q+rq/CypRKVQyDmXDmmvE3FSh2ZCk+cjbwASjQC5Fb5fjEqVmdeR1w61Gcyxsbl4db4sBy/2T8dHU7VEnGPkXLv57Z9+bnFzzXHtxdslxQdHdcYYY4EL1szXSdUJqRgUujWiGg1UY0HiCYOgqDa12P3F+1uqERWUv1Q22VOrP252ow/7kbuyYJwiTwPwE4hSLR08wa7Z8g2gGTygNFIlmSMltIAbKBm+mExBunVmNsjzElFQ==';const _IH='2440ded01ed7ed4838963bd6cd5b3634233cb9d7bd921fcdf091223962f2a0c7';let _src;

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
