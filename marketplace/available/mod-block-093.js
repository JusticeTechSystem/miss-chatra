// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AXCGUHAB06SgXCb2hWSl8hzi7BxUIgkpeMB5vFjuEZ0t2sRypsd4o5M62ILbw2spbnM57aHTQ5qxxUH5Nefe/VhNJlbOxhFrpttNHw1+UwA11t1cD/BAiLqMPoeab6oNrPqSlU8seBjTD9kb/9swEi+noDQ/35epG/4+E0eEkHZurMF9m3Y8NYc/G55z/gpxQPwF2TPQ9Ndee8VUALNemFWogKct0o52ckgWf+7w8+WvBm2r7O+pPkhe693GEOAaph45Yaq4YQhRlYS0+CowgeUhAagvCTf6uXJ8U6wc9zobpvv7OQAnu9+MBANt9yFmu8oLFld3ThMDMIO+OuMKPr4gQWnH/Jhp1knUnkwBzrym0eKdRjBJM6y2c6jLKA9f7c16ZmN2EAodZJ+IEJeemKIAhQUmrbpdG7MSDZyCn1DT3UU5ACUqKwEHTyF5hLU5lllcgjoja6FRDihytvvYqzcONl/n+03qSojzJCfnwD4WuBpDHtNIfD3Ep6OdcevYsY2hjx1mly8UExeQw7/B74C4uDAXxJZUHumn0/E5VPmeXuiWvslAVgC1AgNE0ivwYxPP9o2K0rZNyJ2E4Y0plgxjcLAdtrQvZ4bKaSAfI8lyetVRtlfSdFSTDwSHyrej+Ba3an6bKXN5mYUReCqaEpHISN4NpQjn1M/RtlYrkUhSPIOcGzN8T7SBeIx6LbuCz//my9I2g4ZEFINpLdTgQvRTjLeiafJH/fKC5fueYPsY+xh73FbnAMNzCxRkcGZ+BFp1ul48LL1Sw9rY4e7rSNG5K2As7jLRHvKnbZOirC81dPcN/5te65ifRTn8kM7Z1jmejprDAT5ER7gT6VqwY3oxblG0aIBOerJLVHWyXm/5NP9nY2ZhWmJ8rapDsk19o9Te1LRcZ2zka6WBdJD3Pt+QVmr/909Oz57Bn0PKuH6qWTsrStECXuYK/xmJXfgw00VmAghBg14ppea62Un/1ygqgMPyx9gTmpkuj2InJQCDwr5IwLmt5lypKAvnpIadWT1ngERRDRQglCbWY+oA/Avu93EWvJfDIKQeF73XXPbbNnlV1g3PR/9o5EATa6v9GxtOiwjzD5W65Z2xeBM7XyEM4ZUjUcSLAk0vYNqaLVS9Hy63mlscbNkZ3ov6vCcrNpZzLEGOGeBWfczp70RLR1Sc7sZQqw9wKpkonKgg1k65PyK0rtlMpnU1LDfJC7gFHWdoOZfU7FS+ypHr+eBB18OvUrzm2tlF8tExjD6K9AIrjNgNrvVhay73rdg1iBWKOj8Y0awy+7wkW07cTg9b/slTIGRFDsO/9bEPpmQH5b+bw4bbR2FlsxHN16MxD6pGrLgI9YNrDfD8+DAqVy8LmqwR03pXWMA7PQ==';const _IH='e6aa2499d6d93d4bd509d78c4cc9e8773335ab707bac4f2c75d91be09e040d24';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
