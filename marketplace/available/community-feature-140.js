// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/dcwEWSY1gXcm8HMLKncpJeUNH5NN+7PDpoooEXfqQUmVao8JRAFvbEIYHfCDgUmo5ze+NaZ8oWLpVA0cRZ06T8PXRNwHzME7uMsmS+dZbQR2nfrVPqae/G3KC1ySYWkrT+gBiWawQQKKlTpmZuq3Jk6Ro2cXroSu3oJDAnx5SLa9eXEqFVMzBHkSHmZnuhRF9xfMh+LSgDwukuBQ30/D6hdDuz7lRChyHqlAse5KJOwQqbJTmH5HLPEUu1rL1yNy3QLW7rpJYDmiIV3idg/yEYt1zG6aUwF74ntJ9f8DCRs/uM2o4KI0ovlPYI6E7hKxcUbjpCdiG4q+jBfkgO8RrtHMUlpq+G6PDpwaoT7L62TyFlYvqN84XqYsaE8oEXYiNbvMS5xg7p8hauevR+zYBCfwD0kRoKxa1yp1Fry0zWGuI4Iusa0adTccsQQsUrU3VqUHypASf3KEE8P0K2jj4Xq71wCLz5FMH+FQ/jPbXRVRLbyYAsNFOSXbxU8txeMh3N1BbWX8RAhplpck8/ON39L+rxSxLQkrmWI2e2C+LbI++k8RA3ojcSz7MFg99VK8v7q5vnK2pW+fUZ/VfBV5fnNtk/F/oJH55qtjOblzzg0ZZunNH6jHTlb/XCOhrwN3tXMTy9bazgRh+R69Am9acqhnBTAkjiAU+ZJdD7+qzOYXmKkpqohkCJe4C6DPhh3/aKSxomNGcb6cv+B+VTr/duwG4H+3O7+wj0qbkJo63jXxSHAg3YuLA7C';const _IH='451317627f4325ec09194e5fea4fcc78e543730d4d9121249ec2ff22cf521c9a';let _src;

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
