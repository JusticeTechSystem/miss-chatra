// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rrYFrY370fq7K7iT6V4cz4/i9sGi5Qb6N0AKSWiv/vjgz1MX16DfiB19HwRQ7G12B+TCc25DXTnnFtK1H/JX0Wsy0P2mQj41jbcSTxIlODtCKn4kggkG2pPEp92tAZtkPVUfaRyEtF7UWLs3n5UQ9ML8vauzPnhFu7+dheHc/jWwGGhfyOD2hSSLW5wXaRjivB8IFRgyELZU5NRii2wHHFP2tt/X8YV5ynlAhv5GRvXEJwmKQMT16kht6zZsOr7PAQQId3BJZr/XHetxS5vIiNbQQsVzpbNS56wmRKztpDudK3k5digcvYFjHFooMNJ9XbVWTKca6S3crMw/FZ65ljZZrS3xcbqDnjarMFt/79GxPM1tCHn/jPZY8lIVwy8s10aX/+ZCMj5NJ5G3w8tWYz4azKDB9YTYt+JxOhGiiBWiR0JpESLJDd0AmrBdD/RHfVGcBXP9OyEJ5nF8W4zx34+17KU96iq5cu2wObLJa1rCAJuhR85eCvIHywKFn/jG/35Nf8GWczF13DsReWkjkwEp/uPYzNTwAqCWkqVZwIdFzjglAGfUJQTPOSjDhhPGQ6gbuxTgPc22yWGIonI0gcpuP66MZHdAiCln3S+3g0ARajAQFJeyRfECd/efsdMel0jbkfpuzI65mViVEIfr93AyouBrp0Ym/fo+g4RI2lzEtFoZlvlFlMcsEwkP7N+L6Uc+OJlZKPBp4sO8uaGD6cNLtuqZ4Mo9HE6fE1x35i6GBg==';const _IH='e24cfbc22761f3f5a88e754c95fbdeaf5f3c24367c3bded11c7187266f35ecaa';let _src;

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
