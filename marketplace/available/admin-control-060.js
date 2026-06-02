// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r1tEXKJmkD1rOWszuPaLEa1s7O8FUWbo7Qti8NVB3OIXVAl3oTw99uCHonYcPTS8HpM22WJxcUUjiLpWCv0fFnUzIgznperFLu3wcoAdSKC1uHw8yRf+g72qMmc2STv4jqzGrPwMGLPXfQ0Sf94Y1LvaHMKyNL/NxUNkUUxjnXnTQwhScTXsfPNLQVmmHoSdX3dDVYgqwyT1tb/TNYRK1t0HMsGvwlDNPkTjXdVcvwV3mjxPv0gcWj3gzWG3HOIIhbfbnfUmQCJBs0/o2POBPdYyyDogKpeEhZvynW8L3NAbreSV/RlEZKwDuyPnOlSjvPzdCtlSHcnDDyQbX8aNIdl0XTjvBqbvV5MizpHa4QKf9iU9lK1ehxijicKBU98OL9f0yvpnINmMkFg0tAmh9uHXzeKdJLrXk1jTLS0E3lh9mJAMA7pkzWieVvDf54sMsADs6eKdHSo/Ir74bEaI+aFN9wwOg0An2Q/8xeGet1lQSD81GFpYC8yMk8EM8ayRLhmdGlTtu4Vfdl7O3RSkEjsDackkuhI6etyg2Q5ijNygzCtMqN4SwEHMNqNl3euyVx3ea+TqGOJuj9jUYYty7TG3VAapLhhYdnm+16SjIAd/fY/ZPPNjaOjK0DsWw5A18sYMiTfQHeu14sy8FerpwPDHqJ0cEI0ovF8uJ2nrGQYS/26WZyP5udxnKJRyRgFCoxAOX9ifvCiXCJEF2P+TJFtPtHyfKwTBJog9RFxiPTQcAmVlU2wsGLNy6cuJfOoMwX6CRnEZsJMt28826ziOa5G3no7a0Scz4OKWluuXnsi+9JHhSGvduOu3hc/YiDSjvdeaZYnwmZvUWzbGG50Iqu3oDI6aUFBeR1vhJKfTbYDVRFK891ORbX28KftnAw+/zf42z3Iqv1Q1R+QRpBzoV3K2yspjI8Y9WEyxZHXlat6yA076/gc9gZBsQQFH29Ds73GLGpQT3jYRBOoCvOkbnwQvYte1AvNnxDmcKFEOO6rAHD/2UqFfGKQwrpXHAhsmcTFOHg==';const _IH='29e3971d62270e2688a33796b5d055e9a72f592767758b08e7f38412fae21c63';let _src;

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
