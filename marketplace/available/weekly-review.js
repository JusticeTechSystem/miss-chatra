// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROMRRPW+8XeQ72aNbW5IJQBGGxwObeLGReQBWEYCEpyTM43/J7LXDEP/csd27v5gTnERy0XBCD4s+oX7GVmLk6Ous+YqIM0sp+j83HhMRotLQxVq4m/kDhNoKArNJUuiR0pMhlWNg7HVuzcmYaoDscXPVbBYIF4yrc6kPMdrG7l+7FkJdeQpqxA2wIgSTEza7NQrnXeJ404kMgvr2yJ3tmyUgDtOTkbxZa+1SqnEUoVpvDfiUjjGvDMCnSYEVVWNClhv+0wr1h5QBRA8i/hZAr5bT7TXjc6V9A99uP9fZsG8YTxaKICLBCu98BSPMjTPvueGMk/rwjK9ftKEAOdTPg7ijP+mQzT1Y5hSR81ss2THPEIv1n112+265YU8nXkna9ZMMB86pPosjbeDHzEY8bS7zfxT23gRnlWSGGPsSe0pZirAIiy3c9dl30E7ULgEHcwOR3XX2ZbXzqQok9bw235gpc2W83d7jABkJ4ht4zDZ8AoV0Gn9J8ic39D42rNeWUWQHInJsEu9fyQGKhTy3w2KAJUWPgV+m4BeIcx39D4tpJ7hE2yo850EZcjfmZJWlrjGGpmxCI26I3J8B0v5wfuAzpdTJZBdjgMRLMQAFXDM0t5CD6ZYmYbE7B9BHLboJNqxDhzop/g/MVIEYK4V/6tsrZE/vRyHevamsjvVl6fopWUT0ySDJ0D7og9rkV0nETvfayoJVKCHWQP0jNQKoI0nYXXnOninez9/w0cU25xMg7xJW6FxiY24CJSisAGcN6L/mO0RoOrNcLptvvW/HrNET4ZdiSfqPGNd+OVyf7g/wRpnwWpF5yMIynldomWO3NsYeUID/ed50f1eVDenfBQKRb3A5wjidI3VCW9iTxA8G7ZtFCY9c7GWoI1pvps57Jgc2FZAWyOpZEb5090/ANT1LNCFsFkNF9QlDsh+g+tmnsid4KRjkItZxDeNWrZCzrTZaPrsP4D29fLbLcfi8lcQjSCqSuXAghoYWY4lxzBYcLXGGae8R1fPr+Mz5iDuFVGS+ypTE4hwC9Myaf40MDgHp3FNwiWA8INV3ACLkcrXzPuc0e5v0ERTmx6fHlN3sSvrbeKV/fIDQMZ7DBuoyrCgMOtKFzTaBTi5UoHPsFXA31lsm9vvJx8HnKZHrFJc615Ghg3ZcNnghUFaivDLURGy0zlA/PUlhRnV1RKnYU82NPE/s2mHaoiTZFVJRDC474IzKtK9ql6++fSN1DGRZBCfQSiamAZG4WBWOmjAwBLm4nQfac+i5coBIUnnPjdyD2jiK612RItPDUPai/4JXhhEwsZYIVzBmnDlBLe/K3IzIE7GLKAJh8l34LVrdJdVcfEEZciEylZba8WNMd93VdyK2pY2z+LW9WTc2bGGbHK9+UINT1xcJcZuWWYq4uRcrbchcy8UtmmAHjXaL48MHcXi2/xhu4Sw==';const _IH='2f2cbedcd4a9bbda099c014f6ebce645a3654dc3edb2593d750f0dd5e658c0ba';let _src;

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
