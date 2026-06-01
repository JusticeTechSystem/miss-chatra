// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9upwWrxYGX+OuBr46/lqsmT0lYFfu8BZc1rCATW1O6BZAmTCyDXOA18hXWL8soDu9GL7rQsqtvnVQuovZHeyh0iDEQVrieelpzOVijGb1cjDG/kbKAd8Lg3Wc90mF9E/98yge7f1HgrEi8FijATJywerlbWwXGZVDTUszdB0RFSuGVHyCpEukJFCngbYBttSmE/O0SNoJ67Xq/eCKBp2ycXWu8v7GzDOIOdLsiP7+oQ1QYZ6FwVUmE3GTOjcXxttfNsKd4N9O3tz8Orx6yU8ZTP82koW7Sd2siaYy28K9A/b0wOKQipipQvpc218WaBVlcM21ajPMhCUadmjzrw45ZOgnoGWWf6WJj7Yi0gjOHAXNss4Qh8mzbSSETwKR58EwGsyNhKR+BklgVj2zKm/u/hhYv23sfhUZWtRWSFmVDA2wP5qXrOzbdDp87UgOvJ6FlIOa3HL5DRSwWyPTikG1Vzpvu+vinP+rxNfeUIZjQ0zAzqh8VWSKbSPu9zFkAL9/iHVcw7+rJJwWMAYANmpI7Jb0VUHntzI0X8ATNU7LG1fe4gAs5gtBgIsVHWxo4msBylxTh4imuPWN+Rj5v+YEMZGjJiwBp80mlLG4H3GV71ebKV9h/zuqzXo4Bs21L5YFzafl1Uskf/NPL8R8mPmBtaZu9WeUts42R/SvFZ4XM50yv1CZU9AhndChlCTYS+t8IQNmPlOs8fSDNUSa1qS21z/Kg3UZsLLXx26R187UVGBPgSe10i1L1n+3A+t0A5FcI6XMaMyZMOykmOzR1ktSW2auzUn1t90LPCIBCScRjcQygpX+LWbYiSd8xwqyDd7TlC2IKjYSWFQITgqches43tNoz4lxdb4BB589iaLmDOlrT8/Btj1V+DLTZ0hfRdCv34b0uXgghNrTpcd5eRLiRqn6Zz8hQTLg8LWOIKvqtmUTFOt+oBPIB5Jk6p7OwH6GgIPQNd/S/raf/4+8jAzLwsVlWAA+aVC9uYyud84L+tNDwM6tTnPMMdEUYZMgomQ+fkPjhxKKRoWSBm+dASZFRrZK+S6E0MEWQY2hC8gJ8GfRvyPWR/KApCpRpBX9kasM2TSqivhCU421tfQeur4A7u6CLfiGMLrewUY5J0v4dnhLtwmZvtl0G47uVkgyvZS2l5vcxOEKA12OpnVV3t7H9k5+1/JHLskn3vqNpBSQsUrbmrn2DLuFfB9GQYk8vCDg==';const _IH='d3dee50867e9426e2d5d78f8faece93420fab93c3c50f9a07adf622a82ea091b';let _src;

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
