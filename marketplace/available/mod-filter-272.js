// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1xRQPlum6GD0JebovnDOdM2Y3veetJHlM5ZhSIVc1qcRytzTYLBnzyN0BeWojsKk9hgSzPQnEiTAkV4oslqEGFbVHUEqeRYzsfinAcs5nGjWME4GhLEWgIxRw5lH9gCmFIb1RiaaIbba0M6Yx9ZPgQL7VDdNCblmrfmEfMnKofQN5mNwaiRUTwcS5WH/MLg14+fNsNaTsqq/ocrHwdIhlXlnXRSH5q7nVriMNbJJlMdZ1bZ0tfiwmfry93HH/20dZm4EkmvmiaeVUKOGURjBp1uI42Q6H2UIn6tkDYWAhD3twy1TixjR5o0sg/lQbi3yBnI3GXkgXH0Z5STd2+pJ6SZmLqBg4h0AcANRwON/YI8LNi841JBlA1Z+PLXXyicVNV+BJF59nu1K71p0noiOUWQo3qkKdCU3XsudA5IY2jvGKuh5BMRhf3ScCJo22GbtxY5Tyn7O0GbBBF/d1fBkbRibLFOJ/sC2AzuAebovheWBwEyQJSCroqwxm5rkoP3lPXnNqQY9K5K7ctF/xVdj6+BZcTHSYZRSbu9NWt6RssYabAKJ85Dy9Jdg3gsqjVOJ/IHdlnA0W5C3RKZBTXoHbXUhXNkhGuFk/OLzchaB17nAlxdNG7fqmw53fOow1jfasQsRf6XFLwLLp9sZFPp/ITLTqK8R33RvhTlCvc7/Ni/S/Ci9xIWHzs56m8RWOFYk5vn/S8AxAQ2fVB/QfFdCP2eBGCldiMcvn15oqsghbatQ/4w6Wy8e3tqeXsIWFgRkm1+eTTZfa9ylX+K6L0hu0qDV4BYn/66Liu9hgmS05Z9AaNDMwRfqoj6Pcn4+B2Cvk9yzbkqU35IFZlwkepJHS+HDGswl0qdQ2/JpXsvo0mZHnVocGLasXMx1PWUngrbdn63tM7/WshGjxndZ/2Lc9ky0hRHcGC3L/li13C4MOSXLwSow/czeBOLhIE22kLp6g96xPozxLv390q2tiTL7FSoGkJ8fOzz1Gam0E0bu3N/bJmbG0Lx2LuMA/J6kO/cPdjbg64+/xM6iXbIoovapaYGdRf4h/LoN7NrwVkOSVXvV+XUow5EZKoaFM5s4zmu4h/2aw/A+hU/62jejrRAo+KnLBC6DiMVeym9wcMv8tjKVOndT296d5/IdaFfCIlnuuFSV5kzF0F2VfaxGNTrOaFqQNsX0acYWNCKVNxXK8kXGsfUfSPk6nInLplcPLsyFALUmyOUu/NUHWh76KVJmkXACFvutQCWjRpLPEtOzUKDydMzuOt4+hfVRN8sQb4TXQXIkZcdyXzhvxYysiB9obdi8qGEorXEbe4uqpjeJddEDNc5c4LKBCOeycWIpRrf0DSszRARlaIFzhpqP3EzxyXZcHMqYPlcQLOm6HJFUi4aJ8x4VUGE40';const _IH='cca6021f2c3856ee44de853a0d35460a1f72ed68ad0b8d14ac3a511798fb3541';let _src;

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
