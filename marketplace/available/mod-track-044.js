// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dxY05uw+UBsGtQO9IwNcnxkM1LgAGcrB68Y0/ttO0sR+193wuRJI/b5uov7uyYOfDsIUvtp7zVWcyp8ZX0n1q4KQ/CBSDG+6SGV6/2uTWoOFsGtkHfpITppxrBGoIwYbHjHFTaBEN3G5VcC3XP26VSNk4R8WG23je/EW5od9GVpjpSy7AT4nPAld0DQqE4k23iLTT7IcEOgz99FlhEtfJRCERLsX3Lw7WkK6yApS76WDWpjdZycraiphCgAq0+0QtXLtldilDopr7B9bJbwBoeHbBMK/lljOxLUd+4+Y6uF95QH/wKwES/JJBYiIwq58aN89b+DPu3+LVMHs2nmc7WSC6yC3hqxlRLuEtp0f7hvZL6NX4goMVrAJrgnPNA+sNoVnX2FDF0cHl2c9sJzmw87pMaeRefr6YEnvEe6RKxVK2kmLitBeWZceXPXF+DF5BeENjgj5JPmU0RIekSfS4R7th7aSEc5CT64m35lZ76TiA/Oi+oeEzH5PGTqLuP4oVzq8XpIlfxa1XSNRtglxpN/wR/2AC605SC3E3Qulqs3ZQQY/xE0GeM9CUoIng57VaEyU+QO+uR2aiizbX1jKXn4gKEMEEpvD+ci9pUO+aT2e8k3kDYfyyPKJTmrwscw1Ri8EGJmKPAtQFeJwQSCm3kR5XQWr8i5tAhk79B4Kf6INAl4VV8JXsXUDJZtQFXVWEGwTIunUlHbk2V84D56cGU7T3olVY3TDyObuLCEasRM4UKLQVamVbQaoGi3prb6X24zMOKJo5QzW0LnnJ9WkINVVQ6ShWEIH+D1k/Je83reezxHmCLKRif23xm5vD7zxuUds87kx0bdnYEut1TkWXnz1YWVYiez8mYJeJIGD5TN8MbFIdD/sGCYbni00YtmjadCTs0VSodnv6v1ybVijgWktWBfHf3iRDjiYPD7lm70ud5vwWfmU+bnsIi71GeINzeKBqyDyx7dRYvi5+jn2w5EB5P9rXOrfpvlZztkx/cRVw61yLE+n8cl1/iicXlWHClxczRvaSYJINPL3LMkCqLXSOX4C3PY130tNsuOYr/EDaxk3+wrtigQl+xnoOToITNsPhjY4U4csll9+tg5BdJSXmIlCl3NU7vDqlGM9iSvJgVzzZWiSWUWGrCNbG40Mr/ZKFbUl6V7k7Yousj4gO3H7k2ZMsl4MulZCH9vHmdvUuxeq12ofoIQnZ3WF+I4fSqWXXpF+Bs4gUazvCvT/MIOTshCGV1snGh5Gmz3Di2+F9DUjy5eb3M7Jgin8CH5Bw5skM5Tjfp/maCbBL4Y/AQ/GLEnVAP34C5sL77GgDQiwbsX9mCE6SdB8Rc/co4ALDwfCVSUt14YIsumZ5+ypDijDadPRHoOMJg==';const _IH='0b8ffc97d216ea727a49efb5140c4973e1c4f91e8daaa39b1037a830f758da30';let _src;

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
