// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nhf/Ce0mKxAZ0OEmTTsU9ep10x3jYF5f3Qct/dMDiV6Wl3PxzeOw0tOzsabG2TxpEKVxyt7yBKNSfIRLh/tJu5MY3ndlqbrDwHCLUUtff+RFojwb51a3w8v/UcvRyDY9IHKnxFXZ2Xc6XwmaJlKv6uNotkIcyPNvXuDPbFzSQJ2+/+DHWJbAoFnvTwRxjDuluik5NvIA5nxMzdZgwwg7OeUuYfdnSgpoZffy9Atrv5yZ9SHK+/qPbxQE0W8Pw0EQH0YVKZQhYZflxFDqYaGN/YE+/JTk228jbpr1WryIJZgrdCFMFYQE46CF7S2c3jPJuKw+wr5oyFdumPbN8D1BARkDTKdOZUggGWQZCriQCYpe9nt4YMH0uuXHX6fr1rIHa8Mqm4jvWHITIRTzK+lAc/wCW/iCNiNp3918/yr9U+T3zczLI9L/n/iQZ4zw+ajHfRZ+86h25Y73fd9xJ/a+i1NlUEoA+ti86m4Tu0/DkenxI1OvNEFxWgFa1Yz+MQ1nSGR68wAUQvTSsD3c1YYI2HTJY9i83ospACZJD9z7OK4erdhvFaaUG1/nnrTYeJ6/jE6TQEcJX/jZkCPkVXZ0nxPuKogKqnab3Dbn4t+RdEmI53v5e00vgJTchMK8aOnUEpvPoA0kYQfnu+DR+mB/5YpLWRQSPqroYjyRs/TgYF7cdtoMJAsBTLB6/xOx88h2ezMKJX4tw+CHBKqT7GvxnlxlEphj7uYDt5Srvy87aNXRXsg=';const _IH='9a4dcc91dc48dbdc67076d70ce2b2fa88034ce47b8fca3a159d1ed51a214680f';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
