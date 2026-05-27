// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WcjSoSat/+IWEx3Xw5Li7qb2K9pIQtClnITjEYfdXjriXoeIW+FODZDtapXWh1tVjumy0HPQAVj1AVIkMGf+QkLVfReIuYVlkfFi0giDfZir/1CfRQ+MKso/CiyczbIRCpXV5YmsHwkgoBHKbe4z1q0FeUbtAzAYl/G/MVRJt5M84ETgTPiqm2ib2DDSMjkLALdqbxnQxvp0scUGJSXZOIWhx15CznZWipyTNlIYBe/7dXK/flUUl4nx+1f17ncHDW5HozPWiaeHFYkNrSrhrs28AX/QdzRKuL6Iqt3B1sZiQ09PUtkJnf3oZLCP8PEpMhAH2GKxKyv1yWIfWbEP7LtkZXefo3DIdtz1Riz78NfRrc7UtJnWd9aQP9FvaHbqT2necqEAFh91FlHR2nL+LrLsD9RNefdYjjg0L65/VBCVNFK+1FA0RK3neOlK9hR06KLespiZY6s00aYQHgXqzWIaFgNlkbPSZrB/7h2IT13o/lMWlb/QllRnw+c6JI2FOaHLACRJZaDzhDoKs3Ptq8UJkBWkADFvAkwMkZPVumOfFApczdCdutDQ98yGIseTEOv16MKrEoQuDCUS210tDCol/TvmGQz/z3Cbv4h8yz7tNs3CSlPbajIcSDdAIwp7gkziiToVNxfnVO8ECISXcIUrxKL+EhnkS/Hw2/h6xRv2qLDd3jGsel/tebw97+/P+L277FrF7goJC+cKLyNuoV1uSN/2GmEAP2if1ExRUb1BHV0nvXLnmEl3MYqqgkZXiDt72dN9bfTwkFPjT0Fpq2bbpW87hp7AllvZIH5NFCXfDmhC0BcX96lAerhGeraGH0/KnnTHS/MZbIp/wIrwEqL6C2W4Lb24RpyM7vcuhUg2SEY83lT2wbBbTewKwOzGTmb+FcUaQnWveDfY1r4qGuvx/X4A8xlJIN3DRIidzRMF+Dv73P9rQYru2vcpGa3jtFanYEk5uol3Z4T7OgaTeUO293q906VzVZ2TfKWwmhiBF6bVHyKlczGysPYfF0Abg5g3X+KBGOs=';const _IH='5624d179af6bb12e6041284f999e8a3871181ce032cd31a51d7d2583eb190b79';let _src;

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
