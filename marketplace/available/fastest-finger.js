// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0MZGs49xgjwhR6e7yXTQk7wtCWNLHXBmVd1VlmKzb4cUupOVMYdXPqlZfBLXsczqYArXDOTwEIifivztUfFcMtGoI4SKDdcjJeMZEHAsCV5jK7nIfh6IoGpkfQcDG0wnxSQr/ImBBRsBKHu8vI1ejwOmaICPRIuANFMAZtyrrFArj5/tcpVOpQ5Isvi7eTQCgm0NgdV60N0a1grOL3/r4jzH87WNQ3NMS0NPK8HjwS4D1cROo3YhUUz+SNiWyHADxKFnOw/9/y6eyP6u/ju9bVwgGdUzvHVJ4+448cSl4yKMiR1Chqy8m6IExWOOtHY9h39WX7cE+tYSAHJTqPBNYUth6StqB6hk4JGTeZN5dsLRvT6vW1JDxoJZBhbH38sTm7GJrqIIYZBQBVBrWWhdiyVozk1dPc/GZqEYDFPFWRZH3w0mplNL2UU2kNv0jvvzkbWvX8MFBipBlntSIInw6Sz68kdx3eHwsz4LHfLKsaJ+lb9wSmip9LXz4qzyhP5EX3kTYmYtFOZp2SE1aE03Jm/PIQ83dtCFmNlb34ToYjvxPZYoBKPHdakr6J7ApdpmZRSP2JVBXecOI7I3p5sogZfGuOIP/sxWm0imY5buq+jwGzozAcO4FmTZ7N7rJ03sWGvC9D8U3osR8hzA/Ggd5el+GvCngefC+Z9FiR1Ab9a/32U4fHo8MT3DS10OIgWMOeFJ0+u6Hq4/t5lwflCpky15ER0KsUPHt2bhloGnkd5SBHfP1GDL5JE9ztvQmcNv9BeR4/3Kital5+8aXjDAwyv8uk38QkmBp+7TP96dITtZnHgBj14fMGxLukxK+9Wenh7hFJWRjQTZ+pm1djiJBRYYgfoJcaMVbhPm31VoV+N7vm+FghM5RqxQZ84w6iQ0VKnmXPwmvE6aInbTQCvvJWysp128Wm1N9rs3O2xUXhIsMya4wGRwWGBYDdwN+LzdYaaOwDgRPifad4x6sUgfXKPOPJ65eQv0lJ6TGPcj7j+eWdaBO4xenlaE3EmnGpy2rK+PCKCaqvezoMC1JUFyqIFTtBpvzDsMCwF3qR7+NDHUrS5QHVsF3Towj/5k/p6FJco0lEuJrCOVa2aur5CvY0fSsaQa/GEAGGbesB7UdZ986ptnJZzSKmaQfTdwGPZh34iI8Ab4xB9RdDW+n3FHFKqdcvMtzC63c+na2r5sw3geJJqjBKJWUp0G2spC/rbJ43IQdF041mUca7+z+jLxHx64n8lYFgngjgYeYssP6UrOWT01qHd6bjuMdmvPVE4a98vAxfbcfDdR1/3n78OFUOaYXUc9zcLnLZUPv6+fd8RHncTQ3wz1zhkFyXH/gf9lM1HvRNoU/egfyPp389cdI9qrGpx8QZRsp0zuIDLVItmf5iqBlfgQa7ddojLGSM0HZq2zek/7K53u5SjzpRvpmkxUpjAdHCzSuQV62sMZaVuFS/MaXpd6fIPnVA=';const _IH='b4914de87451f88621d6e42b3acedd9f8d4b5a8867267cf00dbc36b4bf56ca3b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
