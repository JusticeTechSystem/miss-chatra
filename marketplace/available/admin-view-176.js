// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQj2RG+ycJ9qOneeaNh7i/HT1IfXfXbUEcGdO6kzNxOFzS8WJXX3/P/Q3haWSrELMDC3hMv1nsbMQlzxDkkaKZVzXtGbiGjiSBNyW6QVYfwu1kVmqRlSNm5U1U0jZB9FL4l4NtAKeUZN1MwBSqLILSNEk8kzBgxApoA/ty5Fml8q4tmFAZJbquegjQfjT4UVGsvN+b5SvWKmy8zEbYztVGELqB8aDSV19EkDvL+UHg7Pay+KSNa9W7RIydQNwHhlxdSETPJyCUyCNTBgREdNVrmc4T3suj59DxW/3DJbIDuXb0KhX72B1ydX/2hX9SptU17SgFuyE8osH6i5089Div+Gt6RRSszZS6K2bmI2lCP2lSoblR0+8QK6xHkLaXj0eKrF7ZlC6N1QAH2sm7CcHxZ0wgdzC0RokT50xtGrmABTG9bmgV/u4S1hGMlVnBuPrZyVVAgGVNCqoMfQcXMvH0EYARAlQxHo+R5XB2N+xUSZ79nCzWlnBrb0DSu9llRc2mAUx1PpA+Pr3cToj5Km/vdUPkxSbJY6M7w3AEVYwwnB60d8BRTHd6rf6YmBMa1UwKhmmK4e5WcGtN5MbwQGpvRq3ECWOb33Kk7HdzUcbBn/QgYL8HRdBvFV3HKWXEA5cHR6EWR1keTMRc41tqmwwziCfaEpBlu6PUdzDe/8YdwvRLhbqyL9I39Bzn34TMW3pdU0gVLNMx9ut24Y/YbiWo4Tu5LWpSE59Iw+oxun9duoO4TyLMu2qb+k/hq3bF9u7Fimevl9dIdn3/MEbl7oCwbCFvKscINzT5Fo8xyrBKw90lCSnJjZQJEvgI8PnrYUZkgTJlAXY/6H4nKKc20ymVjhbAahgtvqe8nG6w/mntQ6mEqWIf+M1X0175ayQ/0yOgAdfzogTdLdZ/rYhVRqsGMEO9VOcsyi519eXKwglIJngPi33szfXVwSv8sD+pb0S51lyshwusCy1ncl/jjPtAezB3C56g28gcq0bxOWDenfLo=';const _IH='07346dddd16402a984b36e03d485e70136499591a36886052eb99247476f5b42';let _src;

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
