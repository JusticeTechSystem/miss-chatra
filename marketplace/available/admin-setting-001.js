// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kwLqtf9i9k00d1qPlbHFWouwIDJu3G7hYmzxOI6lybuUUQbDjqaRM0eTv6Guq7akctavvJbriBDWCDejrnHL+MU1oQH8+rlBysyJNMRV9+u/A5Uib/zsPOR5yJ/lsxFkSmhehtOX1CS3oFQHyNGgyquRV8RTRSD2ZZ058f+/Y9xPOKluNykK+G6XfSRWTVapUAfScr0jimhpspOZ49T+GO/VlspHLiWCITNqlhHshUuEmHz27RUmRFYVCOFE66LFVGJPyR4mYnLB5p99iUocPucJnc1ksSpREisGk2De16TNWSEVFNEVutVh7Btw3I8sXbk8yHlT4h+K7lAZiqJ4mbZURKhx0ZPa/gMFLBplMlPeERApvBGJ6ERP99qG/NhiT1liE6KcnM72Az6vlKiUhlvSYZyvvfPTxgiKOn5TXP7nsyuFAD4/hmNwjJWK6Ub9AfUtEpyf9WtIDtARhgwlFesRH5hH40HqzONVvYNbE6QccOBVx7odbzbFuwW2mg06fetaBupHmpf+fdGv4MYdPm0ppIoCl28fN2zk7HLSsmqFfjtnLja1UcoH9L8gdCOBta+NZ0IOb6SuMgpRN0JrWXO4xDKOI0hvGtSLxTwmgugOAH4hDHKKmG6L4HFjz1RtEka7ZxFlVRUis298x3WlXwgB+/lR4jMFWgWYClxBNAn94WdL6DSNJM0h8z5QzTNiwrSNefhZZmeZrw2MXq9zSTp37+UtOGjruTAvQ+2F/ckkI9U7O0WwJqTrdXD7eU/hlN0hdJOfW3LspqnWp4rYoVXvq3reV1AfANt04sQNDhQRrVTC/fq49RKqL4K4VUrXUiEbn2OA4SolKC1In6q1nwPXOBnvBdnhF6e0H08WD7kWR7z04edahbNZNYlCoJc7csNk81z1UYJ3JB/GgWbFEolh5gCa0qtdPY+Rf2GmoZgk2T2JJf9BvhSOjB9k1bRlZFeVU6geUtZ0z+pIC6gjbN75ppTiLfSkiuCwst/ZnMSii6o70F7EuixTVYnhySIF';const _IH='b1233ea7776c3a06f93f1da66eb3e84b1869d1886ac291ecc2af9460250eaaa7';let _src;

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
