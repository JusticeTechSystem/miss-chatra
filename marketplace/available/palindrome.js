// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mVreBgd78jvD/LKfQYNWQdqYNysOQKE7CT9pReH5/YjiJkYTe5IKh6Lfu9/1xjqB1/ihfJqeLZU0pEvGq0yJo5s7FSX3SB2SwWRFi1TRVWx1oy8r6rK/5I7XplMjf1G/QRVamgKQ89/2kxJRu8b4pYe7ZwnR0qSVYPAixBXL9W35PiquaTRRt3kUjXB/URgAVVmJibQzBVPViaCx4/J70gPycAUtwRiqewFkL7apIQI0sz6p0/ek5PPXgym2BMqh9BuI3h79M2KENZrDJAqg3aQLFrmcHAD7gHJQfQFJwkaeU+9uMmyRI15M8PaQLZ/96gDTWUqE7cfg/bJV1G7rTj+jVxGV1W6laXR9K3Mnw6qDJ4HdxyGl4UJGbI+AKrDLUCEciCjghvvAblvdepIoFcukCnZIC2NXITolB+06xQBj1WfMV+BEO/yBMWyCU5sh1EtY0HauXJar/V3Q7UuzOlnEZitx6mVKHoXT1MmtiAUxSDxkgoI7gyaSyO0BqpeTPMb0FT/uhOWF56fQnCmjFYpA2XrXdQHH4iP9a8KKr0/QZGQKTVMJqygHAHUH2u8VCnvHvShkHWhmmaPHfrWBVoQRA5i3LaMI2AnLLxGDgpwNsPMi2+L3AMbpRLmER63nSpPKEhw/+7pVCSZAhNS/10dfprPWoaXbROGqh2gebDdh2rX5C+3TKtHWRH299P7fGBT4QUYTy6PZvDOU+Dmef08dCQSN2dkrTJ1zGbu85Bi+lR+ROJZkfPU745sBFKi3opqAlSe6+2eKDwTsTabmAbz7K27WCSn3hIe65yW/ypoKT+frWD5rTwAqmpupRe4g4KZCoTrLF0E1AOAyB0dBie7cE7Wf6TtfYFP3T4b5xONBdAqWBLJ1I/UT+ORivO+JRVtbYsUhBiOWBD3k7Zh3VVegMy9sTH/2qegEbXea9uexqzxsFcrfgO8Vf2aajAMh2g==';const _IH='bcbff7c60a726c077dfa7032fb50c6a9c92aed46de3e4f6302b876a75d329b4f';let _src;

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
