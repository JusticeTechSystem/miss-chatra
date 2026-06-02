// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JIuMx10yNq0fUnsbOA0TRstDCgahB9vG2DTmD37c0UflvfoY0bQaH/OUz2aoIpw0fxkqmhOkE1oKzo1leViG7/jCrYeEBtWN7yndhb1nqpbJ8KGnJ4a6LIKjPre+t1SJHLYb6I3jRa1QtdZssXffl2g5UInLy51Jp4dSDFllTlljycGfqcHcAojV4YYgJgmHacwQoVV9rOwWZip1bUue34WLk9bTxFuLH8/tpZ1PdPcq1WOCEpwEqhQHaU8I1qP26ngQGjEBpWItrMDyDy6EVh4dTJaSzxHMerGcVVlzzwnGM8ci+QMt1spmzPUG8tUQ/+p4VQCjHTXlTcrukNKwb7Rm84vMiUsr6ixIlHdRm1EvNAyfoYsu6r5n0Z4/WMhXZ1bKeMTAkjFYgWeJpOcci/XT1STphIFANSH6cn725nfnqJxk5wPUx56ystfl88KFX27n8HpPVZrO7EQ78RbeDQBtodSv+Y/bZ8+tzIFWmGNpSqAUA06gxwiNADPP/H/s1v3pFB69/7J/2UtvCw9FmQvqIn0i4Tm77p3G9hvCD8Yq2rAq3Hq0JKMfUR4+vuTkvB0AV1wv0QY1i7uTGwp3qTKj8cTIMPFGjLIfdmkTSRZ9eU9LJL/WdFF7DuapMQTk9d4MLuscQmieUgF2WaMiK4oogVzN2JQ0fdOwpAUWanymUEN9otmpoagjL7RBN7KUAea8CVu/27ovR28EuEJGOiRKdzdE27XJGPJKDOKPjhRhfTXORRPufTSgzguxVLnRerbnY7RvRk34t99hFnrWdix5LZmn4hV165dE+KqsNFBBqR7baeUYqThccE0c1trZJsOL2oOhuispumMp0VM7pjsROUez7VOThcdzKaGggsr0fso+B4tIdpGHhz9vzUuHiSYRlB9Qp9uPgfOEhXm2Wj9pOb0/xV+K3xw4HMtiP2SfyC+SVWci9k4GbZsc+1RNDMv6NsX6ryxz76Y/SKTHfHsxqqtZPxjfWRZzKEeQQryzMYU6CYrRvXY5ZGITGMaeBGy/CTYMFNP3EISNN+mP6qKSYBJvNSz8uUIuQPkxOW0mklCjH4XPEdMxEG4v649y/B4l73mdaoyZTUEvssoBq+yJ5LZkQv7T9h4853P5BiS39OMFdVDUErI7sBH6Giie4ia1ZKITCktpc6Z/o0OUN/aduLS9RNvm24mV/O9x6e3AUypj7CPJALyUqLxLAEBcJVOucmI1WMXRvuuXmY6RQyFlSeYsV3l5Y6PYvOiya0FAu4ooVJLT1JD7f0bHn43tGOK/pD3Ff5SAIn5no2dr3/Z135FtcByCDKIGLK9oFzNAFazeGR+BhA02qgyoRmAd9Pydz1J4bVHJBnbZY9madoUG5h17OQ42bqo5KhnR';const _IH='74d1973dd7ee7f38062a0b341d6ba176402ca6387ca8bd17c5a7f2ae2e40a71b';let _src;

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
