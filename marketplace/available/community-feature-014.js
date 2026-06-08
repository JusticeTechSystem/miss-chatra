// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NfS1gBF6VKgb2eRX1bKJ0177W7kBHcxHF5d39dMOTrCzqfedf1f4PeH19gUQDTpvBwhlHcX+XE3XlgSCqWC2efGOFOPMz8C/0f3XwC9ux60elbh8ak075ahP46QL0brZYo1vOyWeNVXQP3Ib9o5kh+k3SKNW+DrWD1nCTsNFtDu+eTmEtEMTwFct9K0g4Jln69RcZhsZSGkzgQVXt442iNJt8Xhh7+NNkpFUgQFgsxiwJreZ5eQwbOlcx1uIpxgKK4ahAmyP9I2M2q7Pc5MMvwAoi8gVcSWxTg2K0B2RX9JrgKIzphDvWrVcilJSo6nUyLJadnBsB+mR51RdYBST6s/6mUZ6TKrVOB7kDxVhySZLGl8kN1KEb+EkUM2sbm+a7e7cLUw7gYX8XCRVWspv1iUK6i1InjD38jO7I91xUfgLTn6VyrOFC86XIECkgWiglHw6MW3AJCpquzw403A3IpRht4bwtb2guTGPl26dZg+rVxQuqYiqz1uMqMrfCdd+D2wSz6DixkAUu/Gl45dVjMKSVHPFxklEc6lJdsPW0A+7c8HHFKTKjQwRLXbm8w6ZbCB2NJG7rsXsQ1XUgL0FCZKst2ll2orGKq5M1fk1KNWRjHqivEpNIGjZG5dNrBsD8/UfWr5s2xYnwXEcOCCnrSWAmnWH3U6PseN2DbtETyEyP1lY+1TlE+jHmlKMpqZwBVvMvN2aeJExPnhQ6u7Dp2iPURiIkJ8O3hSnydp0EoxwIw==';const _IH='c53c0901018b5b409cc92542b4cbfc12a85c842cc8d160d54c43b5522310e314';let _src;

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
