// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9T+EBQSlawemm/9F6tarzLMBaPv1QGQbQqDEo2Q/PiC3q3rE3ccMxK+H9bJi/VPgQI99OO4tTth3+7T3f3/to8kSJx18OqF/6Su/gSPkhSNy7agY/lJy8hes7xRusoIYoo+Wj+T8/FC2uZ3BnAcKeYvWKy7y1gMnJPccXJ0RmsKEo2u+66u5U+nz7amon5gefb8/lYdm97bVS7gQh5JMS83KUTeOVuvkpEp/NzuBi05+fzNBXQs58dRJKqBHvN2X3eEC015K/hDYImcDy34Z23HugD85Nt1Fbpf3i6xrCWU/79PzCfxBfLGSbqtCCVktpWc/xcmrl15kNFtRXLm9a7KDLeQEEmvFABORXQOAiBPv0gCoP0kuFClIUEvsy5IfH8/dE1t+mXiDnzomTNY9rmeM4aoMU0tHJRXRr8pCtWkXsWvhiwXrWWXEEYKrfO8BIyzbykmEet4PXJcyOWpb6UQIArZkKsDz722/tTlkiZhY/lYN3r4ImR7pr1dITZn5aVdKqRz3w50j5Igk6SPU9i24KtixS+doQ5q/oOBuO3K1Jfs7/lYEMlbFIAVAZzZvym2+KK8KFOay80mawb4JzQ/8Zcb4XyYcnx3i/IS5FKDkqGazr/uLDngEhAlmmgvXxnOmSsVrm1+crLWv5oVOtdLa2h8cUrmr1Vs4OCGU49y5pivfkUzTSGzOsIqrs4MLFi/ohVdGPgB/7v8m2c6gOItLYeaSwG2b35eYFuyAuQTyq3wtBnc=';const _IH='3e45b14382908fa3c7a8abc505b1ccebf40c0c1ddf8ed8f51a524d323655d7bd';let _src;

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
