// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O1gKeouxOyGqN5briFw6hJAj7zKS0ovm+BQ3vG6Bz0QH7kde7mtWXEpLWuxAvevikeJNEGcB71WRgl2PX9fM1+iYXv2qW4hYRn//+6APmvxl30ZjRxAD0EGQV7SnAMFVk4q7rq3OvFbpet52pU5tGmKA9CBHihPUjXRppHBPwqdFh4mvrfFGhuNqSmlYkEy+EvMzdhhwk8d4NPCY15Go5nrFzdJAzBcyvn3bWgzDHsAhLKQHkATRanAdsrb62spuK5ox4qw5PBaJpsGfFSPpdyJh3baziVsxGs+Ppp8y7B1G6o214zN+P+XiVP5KUBFSaugQZFlM6HVnR3yvQg+sfi21zeQtbRyvNBaF6S42xBHG3tYHkbxLKlG7NvO2Ikiy37tag6U/MfK4cjwq7rVukRnHDX+iNWqGLlzL56DbQaRNq/H8yP7kv9R+SlNNCBTctr4NGtEwegUNZToiKF0JW0xd5xLqxsp2CD0Q3i32tDIWK9ZQ+zZoeW5MmnVftpinZ5jWKHrbpsBtl1BHaQowkJ9y6X9cCLF1C0e5oxqgsipQgyJQWP/Am9T84njlsPCjE1uKpbRrqKLWRlaEVEzrPz74Hncfd8utknrnKekV3Y5938+XI6c75AqhjpOdHs3g17rsyXRLz7XxdW8jscKe6FQEFVx3Y4JMjC10uL/fnADZ7mQhRtZsItzt2529Z4gbGNKgTv9B4+lgL3hnPq4fgZUcQPbsT8TNr34+gPNIGPjAE/0afbTfXMD2oxToa3IjmLxF5ahSA14m5DSBicIJDs86d6mCGIqP6DAs1DOF8+JNwo+mSz4OZCl8XeWhy5EyzR2OFAE5Lnwjm1Cjnn9vOpGw4RuG4G4HaZ9gyN2ca3qsPXXrrMU7bBwErr37W9ShnZKZbsrgQrJ5prlAIukArugQaGY4a81Ncm4HGL1f0lmKnlKPjv5ZNc5KhzQHO4mlJNvbBUuqbhSnC0gQpRJ6FiBFJLKqdLzPLsH/Gan2myRxIeRRsfAUFqARMBZsIV8atnAtRyHGtfxzwFdT8J9eiByK9j1lB3lr3q7SxhpFPwvXyxqIbBWjFnCB+PYXYQEHI2JSpICyD4wTBX6T6d8kiEJknA37RYnb3cWvd77jilH4PEprcUibUpcMkWfRRBndczMxRRbqHr9SF8Gf4EeZfKdPvgxG9Hfp15N1i7DcHcwqucJT0dDkcN7pp4C/K22Bp+CqPTl7ljT9R9uwXYDBmbyxYOeEvdJa24lgsA==';const _IH='05a344aaca833c9c2aedfb5ccd426a85ddaf6cff7356ed45de9e40c8fc03bb98';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
