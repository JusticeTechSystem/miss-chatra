// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYs2HmSabRO5YZm1FR2Hd+CT76jxtS7a88gH/9UN93JeVS39NOi6wYaRvwiInWXUAPN2uQ4HOEdvggVFM+bqszeKoI0YsuctKH3a6BMaEpJZmDc1BMiXdS6WbQ9L3rjKZCygE8GY7eNr06dLjVhiyUivHAbV3lPXxa8DHSUSKh8lxQmvQEXsqMw2R1VSbN7PKNcmh5hBSUrlZP97iYUhWdh+wICFMBh3F1bbQuETbzJlMC2pOT+dEPkaRyd2dBom/IUafZqYJpmZtLGqGA28ZU/uPueS035+TYe7yFDgozJB6w8yZiiqbdVBEbcaoKMSCjalLN3G+u0yz5tYXJ/8FFWLBT9aBF00Kp4Bah4mAea1k45CrmaXMyTqT/kGCEXW2n7//dB3Epghkfn30sbjiMzP1RrrP8hFg5Oudy1hiwMwOORpeKFjFsujGgmVrO6Blldydbj17GWM2ct3T3Olz9BBPvML4HSX5NHxj5lrAT/YewKicw6i1yPb3pEbXtovrutXpbGvHIx8GSKFfduXZPMfV3zTJU7XVqhpVT+b1z79EQl0HLUw5BQi1iniPaupABtSaRsBqLuTm/oR9RlqqgdvbHpMFLGhrYgS+9zQDaMI6KST6xU5rR7gv2ZLFYc+38NSMbxhdCIzs3KQz6lXEKpww15IRPQ9m1qDW4jurTiGu6YhS1Fo/x4ea+UZsIu1dkXdkTEXf5EGeAViF9szAwwbNOhvcPk5bqq6zKYIgXI3AfPbtJkI/wxDWkliZFOiBHKgRyOvVG8h4m5CJyPjLylVDyrvbFYUp4RhHsD3YMt7il0FMP/plMGAePRIakmR1RY7JzWrGlt83fyGee/58x5okpY3fBRYlAa9gLxnbGKX6bUkPE77qTrmdwbtgpcPGu+825bBiAfVY3PF2YNWyiZVSrwRBF2r0DFmxSwKRsMyD6O7jLc4a4bBjwPflw+tixDfEyiL9bew5wwdOn+eLp5l1m6fDHUY0bX37mkwMkaZvRusBTKaq1HqqS';const _IH='d940230066cbfb9c42711d33f8c9a8a0594734a5985119a90ad9fcf20c2fbacb';let _src;

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
