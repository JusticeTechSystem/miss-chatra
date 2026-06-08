// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XEMJUHD8/qwu0gI5L6IGEg4PS4EZozpmhnqMdkoWDnEp3xXKIQwanDuENs5WmVpA2gqW+lj+/x5sde16kxviJHQ2ZFepS61HV5SaqpKk/ZOK1UtfeoA8bMAlPDI/UGiiTiyHZJStGfkpNByuYjueeyAetZloUy2LWLPbADSi/xl0V5TNM0zeb3bvyRDOgGjFbyDJ/7nugHpqf8XY1bqSvW+x/blQKf+Ig5JGdEHN6k1zNj1BiXpMA+fO2gDQSH8XjpK8k8z/mNRmR7/oKR1sGMh8cMXXuIC7X34H/7LzA4UQAg9CxNVjM1l+31wct4aHVrUEgxubfFVMgrWPbuuvQLn6ZZA8rtp0qvKFDtiWW8ZSeybpHRA/ld9QyFDTxw6NB/3liCJt+tK2SIPQno1fuqWLYjGIwCX0Z1BAaORzB6XntLkLApBad3ISM5QY0ooOw9YB2TNoqtv3BfSiiOBGNoOigmfNTI78Xbjub19Z8JonG5Y3mKnse7jmqsBZpyq30ZLasYeOgvdsg6qVU7OMBq25EajIPK4DZ4eD9VdMchFW1z5kFgcKin3ByRgnaB/bi+OXsXHG9pAn9pEeULb4jGZuDG/Ee0Tcuk1rfOO0tjGvdFvIfJhX3SzgM7WsBighZQPItFxSFqjyYFmJhR/4WgVnZiurxRRFY89M2T9oLzKQfrX8rF2zaMpPsIJPIViYoTWnkvOj9cYmBLwASQDYFcM4+3gNb9IgT8Bb7B0TcH9oCKNLa3FRvUpP53JV3GGmzQ70TowCX/tPIP4Awn0lVPfVB8n69rxRubIqoYY/DoF7vZZ9PC9eBZvFxqckZpON1DfIuzSsTeTPpqRJqVfPBSBcd9MMQDw6O+BsdffaGvf47GIbsq0nKrE33a54WMRulGtv5fnnNE2Q0vAy476zxOc4IoaNJpUAdWTiz7JqC0RbbiC2LHyQp9DKwnfg8ifD/U9qieDS7kGANMLcSBXpTcH6DPCfVEmJjCm6g0xf3D0ShevMJgDIwsHGudw7NWCBAcB/5tG8OgalpQsDcGj0HCCbCKfoq8yrYPESLpBKIsMTjYNwNP8CbRD950Nh1sct/3bmHUw/E2VxEfvqPAL02jYhqDoMC5JXTB8rAd8mkYcyCLbzyIktdbog43ZvOnJg3LcCQ9snVBxZeWFAmcecZYDiN7qoqh6aANrtFTVEWPFLcP4s83QcqOfz9Cav5X04yLk9s5utAa/SlnQwwl6mFbUyFlZ8P+89KdUvqQ/C8Qed3yzo7l+ccuohxG015DnXxkrLJVSEY7dg/z8qvdRcA5+ILWu7wI03bWlytK0p241nDrrx0np2VWXdXSB7Msc8oqPeWDpLmJh5H7JC4HBTQI8MiU2UjZyCc2VsM3REZJNoGt5kpkUJjw==';const _IH='42f6a87b84c6b7c2957a5f1d9aeebdc397255844e81084efa3418a923195d02d';let _src;

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
