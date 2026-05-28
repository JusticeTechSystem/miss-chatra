// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X/fAJZnFzCjApeHq8V4p9m54a14W7SbzNn1Ei8Ksl/7ffvLl5SmHHRAzy0k2w7y/Brzl637/QXr/3jptfSTMq23Pi4dRdFheTd8SrFy5IFbSB19QFIAvGc+u3Uord2VFHFkf/dpG+j9YGdePC5OlTfNm8XBOIXCIoNNxzMmLEZzW4/FDDnDBlYbjh3X42oulSE5jBhje7iaDTOwv1Dc55CPq+rTjhkui5G6jYqZ6yhRlOIXkCP+TS4NRVMbAYS2VQ/58+E5nVg87dKd1RCGso+rTnIceU2AUnx0nqqWKKQdOKBY6Nimwt9ysAsNKI18fDgyQ2Y23BlMUiLL1rQVlgXTwJYiF0qV2l2wQNYYqnfITw1nlIU8brmSHNaAoS/J82s3MClGYyMYxUj+CDcN/X0DBPhAt1vh3GPmfhQBrhwALJsVfg/nMGEbfw4JlVCvnPzp10TPOTVyn02Kuk0r7Z9fT5ZI4QkDGNpne58TLAk6VJElRHIZRlUf0UcLjirAgLiaUXzsBw+e3o1+mPcFsHI8kFZmEHst2CkkmVd9PJJOfEZdY5JTRY7lHaiHrdZ38RAad6ndlo4tz94Dy1ccF2jFh0wagIwIgL9MyLqpNz/Sgz7Qne2RMQl76HLIHLqwIEY8UBAydrrRpdrUdCBiXQZLdqKQq2ToxvaxaKi9AIYB2YbQEbnC1370pykZYGxe2QHzOVGMb952KJPhOKpSR2kPbYT7bE+r5aHL1W4peMwAUV7wgskmMIT3UWqJkm2OTrzGAsQ5LO2PdkL5BEJs82YaF74nCWkebvDh6SSj+CBzSin3KMXNuHtJ2awNdd36zduLwLFEbZiqBFvlcJlAlkms0xx+OTSuDFv4qIeiUqvFDd3Dz9udaZ76xnzDj+eltcDuMjKRcUnLR7UadYvKIbqxuRjoIdd1no8FSQi5uPQqk+KC7dFhYd+KcxkLdoKZxkt9RTkic/Aeztab7yaSmeknK5fhoQoi+wHhI6ALcPhunJywjhd8vjUTEXiMlMQxlx1d/qOkrvU6H7PJJ5L6IxCziVy1Uw3gLuwNo8dxAh4t8mMfIOo35BXJWzbL8UjVYiiIl+MxUKHr04P5ZpiO1i0XpSc/W3ffJDHQcZf27COsHwEIuAxNkBvAt5QJfsnmaTJ2AwBb9xTO8900EwD/8PFR2zHjRzEU0Y2JHWuFk/VKZjw1hBMpts9E7otJ/cn2StEzCzcN3XPcHtLCyltg9cMxVDPgqehBbh1qNApo2PALfGLlSbE6wROJvbZN6SiQJvG6jqJcbsHZgBJcDskW6zWDMyZt2MyOJWw2hbsRpUcQYKs6DYlVz/Zb1fjmjyXR30RVPHdwPQmKiIMHLeC7WXbV/FqpbulBPew==';const _IH='985b61d2fd74139fb87da6097e7b2e98872cac79d772a07711409e93b2228f79';let _src;

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
