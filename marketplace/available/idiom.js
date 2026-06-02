// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PJO8s+BGmykl9BRV9ydIZnmcSFWy0P5iBEtvShwp1D9K7KlNqGDLjJk0k12DFZLny9Xfc31RZijhLA/QFlPXkb6lSg8PqgdKIUYMFvNHQYLFVR7sjMFqapRm9f5vwP0hdPIfKOfRHKCMdtk9pXbgapPPmm+j2HFvAGf4bzEqgl6GPEQndSxCa/YXKI6jLI46OGPRI1BLXbDH5awd3YWaoJJMfzoIOzZ4fhOzHdxj3DsZEmsFypCgPztwz+fNQdNkndFUl/ljNJv2OsWItpHAcqqP+Q6uAg+mw3Hj9C4wmXqsxYP9xtT8AkUmj1+kwMKGhdHYIl9PeqJRsu5EptRLZON866Kz+rF93ksRluMU7SEKq+tVAPBEqdsQINyPYRqjwvr0e6wSrlc/+4lvacuLVY6CHSIrgRYNalPWnaKpSnkBYDOxtrY7eVLfT/Ke5chFJSCUKtpnMyb88CNDjBOMUTcOkHoxZS4GS1jYqC4yNJcDtDcLyBajIdlnZh7QCpR8Ca6FVAzhGPZfNd00fLyCPMV2XNPiqL+omqtVAd7FrSPAd0ZnxMkxitnZdbDbnXsa2fmtCdSmq3Rn5S0suCU2x268a6oFN/aqaO3/Z4mATeE2DUAPUQHc2fP2ohwBIjEj3vYNtpuS2o4Wu1IBzz/3VdglxRBBjQq7Ayc8y+rbcGBiO169cDOkZe8tZSDIS65XI1oQBNaCmJU7HEh/OKvrR1J0Ix0tYIxtUwIIL+36l5xRwIKOghj855Lx7CepmNOjaT775B2su9v2DeGlpVsg0p3c5k/71NjqwYYkv45Lmn2CQw3Cvh9+PTwyeEzIV3j2fRL0ncRHQDZPoKLUhhf3pJCQNTg1j22ZeGa6Lg+1Xl30YH9/t++5cqLFRZLAt6XxjaKrlIIt/Pndb0Z2rwwccMJbLsQnfPMB+Hj7xskQHx5zvxyacxIf/EeuLrdc7973q7SbUTVNv6LCthndQMefwJdDKo4AGrW9HSsldH9fNHtbmhjsLZwF8vc6YAO544d9weTu/37qFppoPBTrOA2oBOvzSFnP96ErP5QbopETsvXG5oiHQ/lirmFTnzBIPYe/gUWA+5ZgCU9qGsQyJwZcdF64uPAlINNDnweYn3p0D6oenN1OAZeSr1g8gKF9CqY/+kps0haKDMPmQoMLCHSjMbK+GV2HSODnnG9Pv5e2oDsvbSvknV1e730oIUQ=';const _IH='7bd8a60b6fcc3f447eea1fd6e096a429cf16cb0dde567b8d2cd5531ff68050cd';let _src;

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
