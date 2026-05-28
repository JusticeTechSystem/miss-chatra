// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='01SgEukEyGumA/rX1Ph9C3reEFcZhibZMhrhD4FCyMiJGxh7cDuDn1b0WBSS3TRDNehAu0gtvJBTNkm5nwNtjvjHsyS6jEaOqQayS2ksGDj69McuGnwwdAXJjvJjQMWqWH+ySjBS+NYcE8/drlTsVzIMeurT7ubuCYVrHhwjuQac0ZV1Gon8TrVIhaoUXGq65IbZ/yfKMoLegz2aQ4xx8jvYvBt1uXp8HqFJ5A3z+2jd6vmkxU6bm3Rcn+zJDTN8UaUj+ULHVphdfRxXXqI9GFYiJ+CrmI2CB4MI6KaCIwRGGxVIXtxTLNstobSQCQzqXRBzecEHQho4ViRsbdHKD7J8T0dvCBy1gNg+m0nvHNT7VcccexF3A8jReu7Mu5vC4JIOxgu3fJ0VxL/15rFxQsWGoHv6bQNKv0ZUXt5H3/RPRXqwrpatUO8fxw3om97L/yZxOUjUdRIBHaNT2+taZDhcDeujuLYg820ZMu3TiWTjlCYUi2NGd7QJLXEdjP5J3mohMkdkrvfVrauYESjonC2sGQzNDgAmldjbmhOTJCHjS4iTH8T+uVq6qTWnJo5YFA9UMZFKU8DChkJcYbFNiwZDvmRyTRUmFjz0dIteBjK/bPDYKXctw3oNI77lScfK3hXxQg+G8rBq75No4eQc56byrRJWDYAk1+OxGVRg/QFTB+sfco3slnYppEqf6WoaAagCcUx8gqgXf7KWjXIdoG+xCqk=';const _IH='8cfc00d302f09d452ffd5ec1d8319120005d69f5d1f98f88cd8d9a1142e64864';let _src;

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
