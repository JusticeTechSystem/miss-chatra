// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2T1XTrkt81RrEp3Y+4uEW6Q4zSq/GWlkNwLj/YFtec1wMPrectoGtRXdFMpcKNmXHC+qBN23Ss1XZ7Ron41Ljh2FDVoNish3WzuAJ1lotRRnjJS/jOmLnuFVzbzButhhgsWEu4Bbgln6T0NoASUf4za0bo1aBa8RbsgFuUxkWlCDXk/bBUHxlvmcy56cCcgDtURxGXc7Z+o1rZigZInWOXj7U9F38DYPbsNtJJ9v8VNPmIN1aKSNJPT4p+aZI27c7fV1+wBLTbeVhNJkVR8Oy1tePhXqtUhO2B3l4zhRiOxnzSrCu7fHCnxqtywzwtKa9rvXdtgYAx6IkWZsFAySDP3UewRkE2jHIZ0yjb5TdJ+HZMdCPnt2ENWkEY5huxK99FnHEAazuEFSPSNFuBPeqmdJUhQOpJO/FNnrKFroKV6eSrsFJlYeniZVJkMQd/Ei1/JG/b4OBnvVT3/wrHIb4DyKcE7Y36Sqt2w0vq0sb58J1UBfuOF356L7U67wGjTZhwaQjvXhZxjXcWgWt+Wa4cUuJYmxKNelRsDPuCBraA/bgYXOaDFO5IHBQn17jvlNJ9vYUG4eYFygCXNXpPbnaeeuiGqOEQUJxNVKwwCwrJg6t+ae3Ug8MsOcgj9qzelGCycs8XyyFlotzCQ5nFZ8o6kcI9OGL1RI9wqCxQFajNt91RJJwEyf7L/JWkV0/oZcVJHlsACET1mepSS9Fh9Fug0fkhRv3nCDvkG8YXdQ1D8MhaOAqw+kEeabx2HAqk3LCUe5EHYIUPrjy6hR6MsHEEymn/fnhEaM2Qgz/BJM7vGhiGMn0tsgMUR40uC8xH5EO8RBEMuLqoYKofluhyB/zIwqiFeDU+h6gv3kO5LAsyGuaegqT5dX/CA3uuNgDOs3e8WLHgPIxBwkKmxavFO/ob1Fi/9I3SwhRZTpEatkC+DPdlhtDMiYpafR/mqD9Zlc3Pf3iNOr1oW/X+tt9p44wXGKv1ZXlFr3m3bLhP+0OzYh8KkQ1uim5ZoE9L3ggpPjjpS9RbC7o3ekCWmsfNIrhDWdoxRphdPdHD5Astu2HT3/5my/JTX8BU928f2+wIwLUmtBltejMJLu9V59P5vsdYb6mfomsq19UUyv3kSWEKMi/0Ly5N0oPZZKSOWDgTKii2QRzqjFuzEbUKv3CI1QIKyqY1Y04Zxi1OC9D+n93vS06KuaDZTldalx0RbHr+dc';const _IH='2168d008d0259ff8a6133a5b61f24fb306b5a4eac2f828e23d2ba4b253c3c71d';let _src;

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
