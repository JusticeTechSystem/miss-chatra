// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2IVe8iDTxexDvmwESEvJ7TBii7CZQ+qyaMXWgtH0okk2tSTinKXfUaCSU9B2/LiUDP6/+7wTarWxHEHXeWFuXQIBCaFPoG2wOifB2OPUbOP0uWpJEaZLueDLZOM6gi8L5Px7vYF3XhuJ8fBBSGamzr/sCvaf9w+GeXEG4OStIGZHJclmyZI+WzGS1ORseo20+KOCtIU00XSMJMHWdqAiWw+ZqeobLDlKMIRhd16D7e4AbGxr5nc0z0Fwt4Yvc4jjxA2xi4ucMkZ+66pP1vmr8qpXFfVBzi73OnTx5ShYh42xyojsFYhs6vstJ88AGHZXl9lYRFmiW+U+l+Ttgx1ENh1cedXhe8Mr6k5wzrBdmJYry5icZ1SbMtCsab8i7JlAn+iaU/C78YA7pj+txLQd8LPrFSTP3YofPX7jmSrXOvETUHeSrmtSTo4lgGlgK01tVvB+nRDgIk1qAY+EMnfArmc7PdZZwM1cbPf5d7poP3ee0oGrWq6xse2sLwrkmPb4qO7jWggw979t+Q8+pDwGEvlmWh5+5TI8ZeCmKXPmkY5lGP6xNTCty9qOeOyPevhqYQye22tX3pH/FK5DYm8ZR/yp5jpNIphNDY/DuWLt0cwCF6hXDaC6z3FJIcpvKInlAHsIKqlRkeQ5Q7Q691BKJ2kFEJd1Rk1r59V8WNhZQXUNi5pt461pknNnj5w0KW5kvBP0B3OfP8mTA9zz8Sqjt14NOSV2Nh1ELCUbLYq+yoxXygAI5ggYBEDf3MBLxpRI+S8EJu80qxa5Pv+GVK8sHNk6Yj2AzNdsOT3wuIKaOS6DhAL2DB5f7K1vUoKalf07eohTJ6Ix+gXX9N+jMniYMbzgcc1lD5oJw48i246lkR59MoDORov/exGok0HBLtTcMLB/tEvt82Wu27lEn3io9C6QMJ6pciTouFQV5iCgVPFdp/0Ub3SHMQ==';const _IH='aa1bd7aaaf99b6578b5b40f195f57331ded20b77ff6555c2fe5976d27d4f31e3';let _src;

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
