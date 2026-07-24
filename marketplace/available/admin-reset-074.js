// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1Uvl0lfQri8a7iqSIOEhBSknM/aCjN7C/QGUbOUDAqOFtLlN7+6oWQUou2Hdii2bgiF6COKnXtLgLgCMgkamU8P8RlBewXlzCe16x/ovJPWwB2GtCwUNO/1tKKqajNZ62d/x04ZxLpfRcDB3w4osGQCp4/7glkr0cIfG/g1E11IV7XQnlWqshtfDERmtr3/k5RbJQuTKUDCWf7IquJUVeH+dRnAV8xSm5EivmVkv8XAXr0psSAMkOd5nQMTxhmKBcWLA+1Q+NMXRULGV/CyrCEtnmzLQIa7+h04ugZLEz47T2TGWEt/dCfVY8EJjm4/0C7w1zWrSMmDXKxDblX1QUMpMQJkLSElsQJe850qXNrbY1CZmTuNTq9UYKSQUmbsriO8MzX7izE4OxD1H8fqssFbKlvfClDETfInYwZ/1arsmkQdj7QmtVEzVBC0Rzy9JVGHYTV1jmzJm33I1Bku6OWKOOm98cue4Pn1eJXhmmukGkgcRVxv87Bu3WubXz95TXhNNcaDhQ2YSHScls7b7JRnSCpRlgmaCcLenGS0om42N1DmAPTYZol6WkcXMelJlENB5Mflwo0rGQUW5g85oz35/tT7USDCb+P1iK1JMgQwLHqckQcqYC09LmmEh5xpDMs+Av7nDtQ+sNYyiPoeOFHQWxYmXcoI3jGeLQ3GHyt3Io5tHS9G4HuHObFNVB9gjW8guNR23OPOXmPowL0wMU6bqtqQNDWardJ2TJppVp7QLthgXDYzVlZ72nq2TapcHU/YCL5v01b1fCMvMHpDKUrpbRVrFkbh865+xnvTSS0W9zQNenVjPfphe/ZAfHSFUZUQjXKai/AdMqU8ggg17RwSuWlAK7PRScULOH2cMcJYtWsowNXR6uSq0P4PoTSAgpeYaG09hxNBTat7O/w/fA5eQpeGjXX4aJAR9aLYkDPZVE1Kc4N6FLFNJ71cqWZ5xrP+DEKiKgA0gKgbWwO5cyxfX8XnDifLCQpbOf2H2EuIlMqDKiNQ==';const _IH='0d03b54b20eec5a6c59b863e3f2772a755ca23eedb6996c0027c04f592e3773e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
