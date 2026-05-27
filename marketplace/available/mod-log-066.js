// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1ICM2orZBgFlB3Rb5n52cSfCCKZyQV0ziz0MPL5O4LLjlQ+9lXMog8DtsbE9K0Y5Ugo+njjK732Jms0VTIAOBa2sbToXXEnUo+4vdJNWgdnrEDoLcAAYDlOeQcpeWoB/Z+oDHL0Q/Azg56yDmicihdWSJv2iLLT8CzQLj3EON8k/KpPr3X9bfVz70BJNZDCm0s8lFf69jNjtzenWZiwYDeZWynIWSeUn6KgkDLqDX6s9S9UjI+J7o0o2d772loKAm62f9ed4cwWHSRY13+K9I4/O2ZCAN+Ss5fkPzibbwWoWklnp6b+8HBuLS2yuXUqT0Euv4EVj8X688yigmvjTLV/tFlKs9EZmO8qQkUrn/lhKr0VFLJSFped/IgessQfl5j9iuGvidk8E/xx1gIyL6JeFgx/JJDVV091vjrv1GASxPV5UxD1gqNORnMcTXp5MdP2fjo35QO6x+oLQHAiok6/adCK+9toBa+Sl00wpi9y7cbvN2n31a0kXcZH0A1wE4jBabAz2zuMlzATyI7qnwBoZPktaCUwK4yqVDnhwAAsrTbBH9jRG4fJA8K28EzuwqntPdZ0/++NwT4phNlk9PyxfEIOsD7kh/JqifZAsmOQMjivF7lxeyQ5Aa3waxp/c3ts8EgWn1cXtZ8EpvzveLa73HeMzNNoarTZDhYi1Vy4lr9RdOVJ0Kg0RItH3mSaN+WabQFOc59IYBUnAXrjRaGclvCGBn5g2MlsvVPdQirBbKxTh+rzkeK/fbW/zd5pjc1qK/xWKd0VUGjzT2k6ds06QaVHnYEMLG5+gZjTjbGUeNU7muTfqnHGELLZLuPdDoVCVsfbFaaZ+Hx4Fyp7eK9VJ+mAQcMDCDOJ73q/G3X1klF3uoi6GBps8QREX7jrDoW7ruOqDwquNOMGiLHPnHSHl5MAlkRslqtJOYBTdG+fcdi544MPQEJFQGTG+Q8rmFnRHQGnQEOgROfJPYlEoSOmIFCHn1A+1pynAntteaJp/moTrUZlYmGtr2BE6HeRi7yfzzn9MMPZFrvI1EeFyyH8axHHqh93cK+QkpmHr+8l3FJRTp9uzvkZV9QJJR+Uo/70gn3LjcBRpIhsnen+vWgmTC8Gp4WNR3gz1TKQe2nWGCuhDQuwh78ny/mOyNqx1d6iPd5+YKij1uF4wG/Uo2yZ8iQoy6tccRokuVcetjJEUroaFeF97wUTegF8JpECLM9DO4hm03YPUO520OB8njNdgNOulLIH5c4Egr4X2TP7vM+zJ4qU1knE63tTrQstgHnExdb96vZN7FhVeelILfbFZ8KA9g4Qz63YO80fKDnxvc6N3F6Cj3kLANAGSswmPQ+1upnQ=';const _IH='22d127a276380457701aa006deb3c86c9e721b6635c8c215aecdd7030a32b146';let _src;

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
