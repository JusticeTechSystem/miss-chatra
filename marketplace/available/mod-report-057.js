// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQUhZztcLk8jQ3pYjdNUKypKFzd7NAqqvZGfk/MjE8x3e3utMMG+G/8nLDInYraycp2f34qzSe/lJRvapc5fWvVd7TdPXPTBGYaHexINF2LACZ1YFcPn4TYQG4umd8Ga5u8radKJyY0urro/UDaDTc2xYLjoTzwDrZgUkhU3KIsC+ZoiZadge8dqpHqTEbdxZ/cBwDGVAxaZLyhA151FL2wTn9qMTpBb3nNsUdIkZrDaqzFAqS+oaFRnoviOlvAyGrmon2jNgg1LPKe3i+LuKW/fm2B1RhbffulGEqeECzSHOQeb5dqxMS96yPCVVYQaThmjA70hydjYPyGJoFBpsLOiHJo0JUCjT3/hTcPG4g40Bzte5HqkIBFCKJCV8PCf2DX4hH1gASm9y3BGn1jpgkLvttOyXsD+N+eGxyrX238PAJah7kMYt0Lw0rh9ZSU7mUUcFNTlJWlaQeIYGs+MXLD8ychKxGemgSiSWytDYYD2OQmKb6ErWMEpT7IPqnnZEuj/lS5vuXyFWoP/9cRdCXkwtR2lZK75Q9bFkezYFz2x+iOA/WeyZnOvgfzwZ2xXS2OwlX7DJFK4zpz8W71ek8ZDtkrQEvzcpIh+q5SRbnl7HWx/ZA4oiT0vhjS0V+CIFXxa5RZtCHPJB0lPUoUv49YXtJa84Q13Ptdgo5fTinxhsRCUVkCfnWAe2//jF5S6Z2BV6KfOuEKKq2AMA+K8uFhhEYQmvwgAXRRoAE/WCYzTlA9OBEFxAlxxehLOKs5xskmBSccZd85x9T9VQIGfHmqTwTuKvhRiCJ3RG2WLhhHUwG/LVYsN62bCOwIfYltOSaIhrdkf2aHNPzJLyqB6AFjYQccNqNs6qqc3c2Afhbi5bHFxrcOg+8k/0tXNLFki+AuCC2dQ9nTIUf426x0csRe0s2Rbomjz91Sb/ZUHDu6Vgu3nNrgVugQO1BS4mR+HPJ6rrSabxQu/QD9E0vIXzOyrmaDk8NpT8TFIEnOlOWG41A8Y7/WLLbH04ijzgTPklNrrCJALLiSUcqyXyGk+JlFTAHKq5z3J9MbtONczJ5bCwaPc+x3MCv3n2sGDmdOraY4PGxPcZhxFb6ouay/ce9Z1HuOcqNiQ1VFlZRufMCw4rspKv/NvaCIn95MsZHL6XCv2mcUbN+b7KxbBNRVEXWcfpryn7384jRh7SXJJ2B1hrQnhySHFmaeLeMrInrPVib2Pj3BQOd86NiDEOVrQ98G6z3rtBFTmh56C0pzZGS367A9e9V7enfU4Fm0FESMQf7PFiKZIKBcUAaehLj9jZbQMK4Y95IolBCdL6QrR5/DAMm7Gi2b/nEds3+eZBcLDCYekoTBOQYDoaHBNDdy8lMVNPuuxb/MBGxT8epyO0q1+qplVg==';const _IH='70a152595ce389b1547a4c0c37e7d72989633d6624e97b2d93b118901ca88c31';let _src;

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
