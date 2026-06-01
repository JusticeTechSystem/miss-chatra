// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwl0jMlPSYesC6wdpp81eKUN09bdjojqmHMF3G3EJFm20+eqpwAMnRJQtPiEURHAe9yIBRpvTf4fxoD+gvP3Hmbs/91T/6DmtVoYk5qJ9fa3RO3WGpRILD98mFW+UOLYGXcaM2ta9JR+JDUQARFsvRbYWjZznX4iqw7kZENh55l/K/JvShmUKaPMYvpF3sp3AuOG61ZoD7VcvFDSFnPt1RgisIWljBBgrwMwOJAVD939vCIWPC9q/RQonU5Gyg454TcN4Zoi4r+2FAtwxTgMUQQWGQ0YJ5bOT5JydbyO/U9zXycFHgW2wrXP8zuHQHtz5Jr5TCQCzkb9bOELrF88GdQQXi2d1BPyEX24hndkRKpo9V7YyDoKYNg1Jp8/icAJotysla7K5ZGXTgTDWTEsssft3tIj5cAOsROEkajJBcnAihNxsSuMlqeTdDQhVfB3z8168e9RITh75TGlnk8jOraB0l/P8MIB1PH9hndYZuvbetsJFRdqOf0J51ISsn0X52RYvAFiCXg1tFYUuhHCg7sOcs9v7eh8JyLZqQ+0Ymaf/XSix5evj5MJl5zzmwgpbQisevKOKhSCqJdhtAhTBcDKTFnYqAzFeuaEAMPdvc/9ISPtkFEu1u5/wsthzzcbBbLxYmdCLs74Q+MSACMVqChsBjYsp+SnPQLor1Ne6+JQNJ3z41lVA/FNXxvTCwrlZCkdybSOFMuMwsq6Lds47tRt5HBBUkTGHt6orOysNGnL11oWhUuph7A8XIBcTw9LnnzhasSugTSBspUD+TQ+ho62gJt2Xu+OeXYaE6b0rFsh1Q90vKzVxOFZBbLiWPFZPgAjMYDbrBNsd0xt180ekEHzjzs37dr/Lq8ePtyqunb3F8IL0/feEFuoE0QeeISEkMCb0r/6eBUgGSWvZ6dq867SIPenyXly+Epopg/mPcDSAwmZHz7nbQSIRPjBq+7kHdUU4NPX5nQ8pIi4jFXcLxm6LnFKT23UAZ6IQ1lKT09wKaAmlqiYahWDZAnEKw==';const _IH='9ddb73d263ce67565d1a5b6fa481e8ebab9a123eabd20eafe0d9088b6f62e9ac';let _src;

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
