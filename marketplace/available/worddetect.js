// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UEsBZqbVxP0fiHw8RgiAn39FE6SFsg8LpN2EymsQkTZxH8nIeX+PmUwcp1FbkyjxXCfp6qGgzfAMr9gsCGuKFDm5/JbwO8QrJCDpy11Us0ylFpD5i2hB0uW/caLK89LJSj14lTEPU/BmaL5WFTjqEMwiKvOcjwctPKeYxPnKi20X82DLeVAF9f8HSkkdQA18Q8/Ky1wM9/lGjvak8y5SPAZSCvMsOU4XcpmFPmJAjqPc1z+RhBC6pgAYKEVslLtWwEdOl9BhkXvWAdCtzLEMDoLtuhgQFcsp4qcJCfapRB0MIabhToDhbrbv1JPgnX1HErll7HmIdlO+0RxM0Ie+HRsW5+wgXbdPNEY6/s0SD/TUZqX3PhDWUrXaVkWjDy4vIwVAHrh66wMLOVbPQ/j9mD7L7AG/Ju3wbnIEjEPguIINaO4mOftugUnSLenicWYwbhUX9Bt2/MJw/ApYQlJHfwmldUOgnSYh2GFBOQFmT/hUQHskwthOstM54QQNIeiz5x27QNdjpCSR+VxxvMpUmhSnZjAxhQ3JmBb/nnRdTugfzROReuTLXGAfM/+LyYi8HNbEIDpQxRN5CMCh16lNBLjQr/VH0ozlI0txee5jGcLShUQju9yeYbwMwydRMFb37hAwH3wN1bLBvm4BhQNKLSkTsd1E4wrWsOjLGHtwnpHD5ExI/sx/GHCewVkvaIVMWMQ7FECurPHOec2IDqZLfpuC7w8j5w7PvytZM2l5zxN0C1vV5yrviNNLlxpLjCrE/13vtwJ5VLkHlzvmpaWsQg9goDvq1DMqGeJnElaDEQsYM0fkH+Frl9TA4U2xZuHn6rLKHjEUuz2x+jdnne7R+6XHeJHAklniO+z5R7HQAeWfOWrbQa4TkHP4/HtSF4UR1bkIoMGyG0ZpwqIqBtLN2I/8AGNXDfjrXswqDmFQku0Dnb4qua3Q6bRJBYTLOXAUTxB0TqHZDitNCYbbZGWTsDigWxHauSI8Wki+X5Op0mBkRza/o5+DZJZYuYZ2qRLfbVHsVA9m7uoBAaExrjO7L/FrZWYnmqytyAVVpEcU+m0AnWBjYuznOOUmLiQ/yCDN6sAz3wk7NIhe2WUK43UVaTlY0eftsfTyvEU1SqLLW2vy9MEDgo/bDzmbK7Q4ATq8huFhTIqNx0Bh3Eb3rIvJd2pOaEqq9RsBWjHh0SflMfLdVrFMei850sIpvrgfD/fD';const _IH='0172ccada798919c7eb9f493a31bcd3ae6f2c19c4bdb43cb34919cdd3ffa2d77';let _src;

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
