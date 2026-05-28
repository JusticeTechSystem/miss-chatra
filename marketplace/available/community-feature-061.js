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
  const _b64='ZaP9PFpHX4wE7pN74Vv25G3xlQBYagK+pTE0b6lvfuBDf3ttQhanWwiqxnzNcrJ9P/PjsE4/Af8IjPCZtJT57X4buy/sqanoUoHoh9mMuG9xK+u4+0aZr5+E739zOF/s5I3dmLJxPjlbrT1JPQObTaH/R6GfbakbeuwVHYgdtDeX5Wfq2YIU6retDwKsJIeIICh/DUvLiwuJK82GfFbnOKvzOWF/Akal/a1kOoJPqcGy4B2bNPUaslO6syPxXl31mEFLBYHspQHsOrcqQo4fQbJY6Xlm7v9Zos5+6utgeDUl1bDaMZURseKsBXVZjlW82uUIYrCrNBo7PCv6k94a/bPQOgXxOPJZdBvWqhddoV9HfAAnrQxvoUpuKbKdkzuqrbMvviElgvRLpaULlZdZ0Wf5SrPtg/r+IJiWfvB6+t6B/0KQI3y6hwVKrSSbng8rmnkJn8KXUHqU94okT4S+UHdjDa5L0nPUS948kh8hfs2W+PSVGNnNwF17iLNpSKU4An4lRJ1XbsE3awTLIZaQ/gBnj/bTJZbrqaLRFy4+mstfeqLuj5hkZeHa6LUwikdGOfmepVj5mOggchYJizfRy3BiXnPA+zXjuN+s+yJXauXm4mbAr2r6sbx1mqAdALd0Yi42RdWtgSs0wc+IHSnlYoq1buK6X/LEnImsJb7Wr8SMF1jSaOaFLEqLl/r0/OTuN0Oywk7Bko2PGsb/PNiZMVhdUtk=';const _IH='2128479420d6cccfed1c02402e35cbabdf54ae60fea3cbdaa2d6001e7f9b3dfd';let _src;

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
