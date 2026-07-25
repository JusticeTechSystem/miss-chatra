// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQroq3xtvJparEkT7akSA3BBJuoez/Fhb1PEP4ZjYz+Ag+629IS1FQ8YLHy9jORxMo+fAmR30cVlSnRViQir9Sm0uYNscGFFqWqQTCrbOFMrVVgFYdZ/4OA3QfzlAiifjTKYz/hKKDSwbTDF0jtkQB34mWk5p778JXXArnD1Iw2faycFGtuTc+eUyYZlwSy2TaCT5qU9DxYxw/lM9U6mmJhsbzV+dO6o4KX4d0Dyk6KnjS8b73lZiFDqPHC7JFGJ7LoTPW/AxMR6T3ipTAVk9w7YnKWLSN2YNyafjif+wMHKVCzL1C3scPI4AhNhXDuMeMCHyrTZhzNW6CfmMUacdORY3P7/Ztu2XsD7zzs3kortTYwvHlqaCRtFmaeJx1Y2D3cs42KccoJ4Ud17DNk4KxXSkQ9quGUtq8dPjkj3NR4EAm4coJ5h4rqqL8Z0SptTa0P+M86DNSY2BNHuGbM9bCW3hmkgkryLdVehwm+ROLFGV1Ex4p3W2tXKBBISs37MssSQ3xwsrGkvxU/7i7tGRt+8/ReswF/TFO5pFWcQanCcmATjSbJbPRgEZn9CsQpa7wo29AE4TcZQfhX14S235RHsEgZUF5x0Qp0L4vxFbdEupU6iitMOjbPupY3tpI/Q8tOWOtxyisVSMVTYqhObo7751G4/2PaFSWfs5HGp4eTbfVmYJdkWqDOExZypSu6EpY+tXLRmIFPGMFU7gaVEGTtC2gZrbC7XrJ/jVjjj+bhKUg7d3PSgf4CARsNcyQUS4zS2sCyqE70+FYqI29hoNLI+xF7Z6JpNT/doWVK6Mfo86hBIFckCimZ46gWH/2QweNeNBvuQpqBv6APEIgLIKtW/r3QEQMEBnHXl7nxXhK9TQ0OTmcYgcpo8cJsqfk6kYbgCdhP61tS75QTuMBbGsDlsoyj4m/APn2snioIq0+t5MiFAsKteJjg9UUiB7/a4tBmH6m00VXA5HChLRk5Rh7uhw41q8jrx3/Xp/9RfYqYR0ubMEzImakYLFjomSWOGrUeoYw0A3ka1zV+Rm8CiHOYpJYQsSCf05kgPtjS/omapM3Fxh5gTE3yUfRnC8kIobNjkTGzkEKWTXntuwIfPHcv7zwfJoJW9Mye3r5QxhimzlO3J1nLMMkGch9hCMm4zKeuVo++i29ySYy36bOTHB8XpzKKwtfQGQmGhA1q+qr03RP5LgxYcTj23vctlwRRGPLxSJWlk+eRxNpLfj6mE/cAsJioDJQmXyk8AXx3HUvFdroBBmh6EmCtktduwB4ExToKD62/kIM3wQECHdgQgnzP/nszI2XboYgw64O8a3Wofddmao8yggct4+e86RXoW0HlipHOyd6f4HX6Lq9GuZJ+FKs7+MBf20wFGfOvmQ=';const _IH='5deac7aa452ad55e4cdbdb9927746f99ce7c39f9f8857b09f575cbe4844d8f67';let _src;

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
