// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oWoOdmBvjQ1xZoqDMbCpYAmwUBGSC/B0LcRUhdOJxG+juwHr+h2aLzBcpE0FKOvPTqm5TO034JwubwNo9qqEMxNjKZwOY+pMHG6iFETNxseLe9W238lEw5O+gOc3ioCaTGraDaWUG9DWbftl7CFN0A30cU1YB+T1hKgfM178jEsV3s3B3wF9MIer6B4N+1kybyiqQR5o6enTVDy95qngj3GI6ASAWsJcA8C8y+jvsGBcCAMY+J0O6E2jy10kMaCBs7Knkwnu0MjnabDLWE1s3g6zLImqxnK6A3qinb/bSKu0YqEtqWO22op5XCdYrT8V6jTlOE7mtGGK9xGK1V+oCerSqFo6XlHol+hsS6bA9aiCQZL4ZFK3rt3S/2Pv7Onv6v96tGh1Z7zlTfCqztkEC6Ej6WFpAn7gd3VU4brDtg1U0iYIWrraJ8qNKfcC4Wby+fpIXZ+biZdgJ3XCql4WbN3D8psbiT75PNBg689EVTKD6HKifhT9jH6sY/sssRKV8Bdpvh8B2S7QQSkZLYtWhuh/6l5WhkHul8E/QgFQjRrXJqRywWw2uJshFCmLXJ786Lex5tCM8W0BZDItplLeE25bWISqEKnlGduxzygM1trEU+udFworOLxxwyIYmugKhfya0KO7VbgV6Vp96LTLKevdlW3Pq99sYuiOPCW94UagQcBhWXLFEkQRNkmI0CetSjfHwTg6AJbVWaDAzTUIhOgUmndDCRZ7a+2apimi4DsMNXFLB3lfpN9ZwtP3yGTXom1RI1VGcQEdzpW7jbVDascJ/L/qZbRvgqIYeSsLWJUJVTdTGUMIFyMpwFbbLsY+J7cLmp5T+5gsoBXR3nLoXIMxVRjnUfMMaLI/1nW9QH2dP19TfF2UBHtT0vFLBGnpowavDoDRiErFztbZIoi/Nku5FWPHjmeodxyEI4ROSFIVyty5S+1KJvXTRrPsCnjjB29XmqPPm2NQODWIKrpe1zzgN9i1+71bDEJsJZ25LQYHmjNFlauyYH7zIh5cHwlg9eO6LWUlvxZaBdEklcLEo/y/MSKFhtPUrXrOuhB+/owVVfg5epaD5Bue9lc7WLUuzJhoq1NH5zaBhaai5t2acBtrsw70AWp42xohNNzwKpERCIKNXXLmOZUKxK3ANf1RlHeIf+DGiW4r0cP6V/xMkxuZ19EtoFDHRI+eEomPt5DTQKQdPp0jsk8Pg8vfEU46gNr+K1r/QJXnmvtuAsTH4ThpBHeaalSjg9c7Zx5yfohG7jBaQ8gRQyzEmGXTdm+6dd+vwXhgCwhW6lVrH3AukRgxN/c5LBdt2UhPNSll5wP0bGqjhEvnstc1cSDUWj6+t8KHRtCBgEff2Q==';const _IH='cd357fd767e24ec7245ab35a3c41801ea6fc485b51dbb768cd339c969983c0ba';let _src;

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
