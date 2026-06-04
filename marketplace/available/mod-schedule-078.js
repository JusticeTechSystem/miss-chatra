// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/tkGD5lQjWdjeUAfBzITMK2Yd0A/2xSI+3ORahOVRWtn2+sOaoanrnB5PhFWorPY/Fwb3GNdeJRO7DJQSaLHQFudP7DBBaU27xNNTjZFbIqVugPNquvGxhwXZwjITqQxygyOqOhubXS3KUmSxP2RywVEXd6CtyGTrOJS42RCusehQ3ABYnJO1O1qdW6mEI/K6O2d7TcScXXRFsTmTh45Jgt1zfH57brHzPdsR5/I95wpzeo/PgXokTbpTWcj0OxkQgdtZVU4EVBUwqsFg02KTrcT+Fu5+Z0OvYNBoQrSPpk13B6HYA4EC7yoF69ZOrn0cH7O/j6yOmuDyMDAmHka3L52l53fo5Rm85cds/Sw0itHWqhxPPcUH0Dq7gbhMa/U5ocsZeeNBJBZEtJvPlNAVKYWsD/4vGoXqWIhHW9hD3LrEfwnXDCLMHBXd71Pv/E92NwPg6cs+pQH+4qrxcQcUEXKhWIJRZFekQBnmNFHMYwMnAQaD5miKqxKbh2osqFwn3MSLm3TN+ivIMvrmUTTDuqUjDhzpFr1OeLInZdzNKoso/wRNIx4yAHROjLIzFc8gWKZw73y5p5zh+ymFTmlLDJlfnl5pmfKgC5sN6xTP1+TmW8j05kK8vs/YmiJk91CfiazVsUE6Hxm4QoXdEbFZdDOg6pCQbZTcJMer6SxLVLyHYMe8YoBBau4Njwga6YFiTQJjjalwFbx0bL6FMjDotB00DMe/WRd5IPcGGOoc4r8ccR2rjWBBWSQsc/Athe/Duww0BjBMwfC+NUJEgkim7/lUjyxdjaSSkFwhZAZ8LuVMi0pMAsrHCkdxxIgx85yAnkMQ7wgueCCktqatg5BGlmAiRc0GFNrwspm8+OQy5zaP1AgsTWj/gO66G1t6ZIvYxrqhqTQbWPENZmNITdHGXbbm1akKxggYbpXO3ZinRqNMb+Cbh3emLESjuf63qId8tJ6WBxe0sLeewd5GpdSYZcX5ypBi34i0brgv3p92w3563cSBWKPLagdfBG0Sa2pUij52yFuLPSTSqRJIomFp/Ub+DT3jYuENMaxE58/YconHFsco8xWTQf7EaTRqx+DXb2PTaM+fsGm/FqWBYzQFIkr71W1kHt7P8oL4UmO1my7s7hH5TAGKsSN2P38f/TEe8ErMayGFs9eTHmMI0mDxK8d1N6KN2A2Rm6rjqAJ1onWuNmmrMGZEeVoWmXL8DWBHMQlcimOsdJFECcVWmQnGMCZZc37BRSEPlXvG233coXzDTy6H9XMeRtH9ilbEqzqxLJmxDoKfcPxvp9B9ShPKRSai5zgte2xmpCq3MrwMVTTWEBCMnvUIm+ooQCP2Hd6vDiPdqL8JmaoWTEGPdkPipZIkhAWEKsSW36CHP9MTnUWnFcGsMbMpoPVrg4d6ptFWVsBZl264w==';const _IH='d862a26be903debc0f21c6cb478b5093b31f5a57e8b924094052ce0cc91fb0dd';let _src;

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
