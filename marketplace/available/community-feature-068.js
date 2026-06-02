// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ThTKifVbo9Q2NFhDWkVg+32g7NYen5pxD3b2axSDI2SSLxAkWNBnLH+k6PJH8Kpg7cwqDOGQjFGV4TgdbYKqTRR0LC/tMhGM3ydFSs8+R/2uYtyY32oU8QJNOG6/zDAvUOgrY+wIDYBiXn1hbqDUUPfwx6KbzkcII/PjZwsXYGnM7KojPmOy+FQmNToi90rRMEv2I4H2tb9wwYGbY+MbRpxqyy7DUjwVQVNJfakJF4gF/rW0f1LnSxaw68K1ZyqL1loNV6N1LyH8c0pPt/Ze/XVkTP848tLCtFeQfD+vK3E+NCEXb1Tt6zwjbbNgRqUaByR7nBzA2wF1XP/2WtT42VL6EpQ2sE1Cvn43JBbfkulhAaR2+MLOUHIGCT4y+IueE57HmGcOz0FxgRWueeCcBuIve0MEOcn4zdLwnXHYanZ21uxnagahkePZcMZDCfN7hUCYXVNwgfMy1GVufXJQXtFcUwHVRAEvBdDMA7DJI6QS4m80SnedwYw0oS/qLoss3T8ovXXykq0W/x2hP93DRyFwflYZmBUITAT2yBvMlQyRV8+ntPl8vTvBQD/lwCTuRdAJawxfVYX0PDklnMU/rErw7CKlhCZ0xyfZht2GW5he/s8p/GnY2iiK27OcYabV9Z56ux7ULGNVdcviWrl5OXLxcEaBeAmpwKTKlCnyUbD9EXLMShGAn6ZqEpoSplfH/fCZKnQFqtRJni+aTJD/JILJZIyfr/StKA==';const _IH='16ef9c39d5fad62ec7ab906c44a53d0ff5fe32c6e9ac6f65708126cbb98c07cc';let _src;

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
