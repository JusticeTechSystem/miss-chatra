// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ivupnNyrkRbE55lyP0L6RYDFFhMJhNgz/bH6xkbbmKhZDPll04jeJcynRcXLCkUhVwLIT1f7k6e7ZCu1ynD9tRDCRBkJ4ircSWue0zrHPvYWSR8ZPvEchA7TTI/L2swRjJUQZzRazesSFV2DPmKORfBlUykLGLtyZ8Yp0srfRZHm0RPHOfwl9VrBoZmT/PtuTfqhLCkmftUnqJSefYZ8r8DWc3MNW5jkMq5r/0MmDvasHYfBRthETYkezilT2XhKD2zHdAlmOnCq9q686qhML7o68b2Vqql0D+CDXhAjpV61nLV4XM9B1gGTJqVyINIoe/95YWVI09vkUJb5EXXskQhENjMWu/8NYAvXFZZMeg1Gqpy+qswgLsBh81UJsuDWmmEuGQjQVDuv6ipEZnlPtEGGdw/Hrayh15zH051GXZm2TdcwuCy1WiRNVW+8q01RLKEM9J8MJCid55uyE+j71NQ/QICpCLNorCf96w2gD5ctKd+5EM6iq0aai4rsWVQj4VvZ9RzYJEW3ME22+V2KU1x6GCWurCnOxExZRPP8OLhKTOhKcrsguDQPLB4k4btHyUzpPUxj4cPtGrH5G4pAKFb0hdcP+0leSP5KJoEk0DI3j2l2a7y6kq1/qfqiib12UmAeJGgR0JhKpTkjxYLc7YQLClirZznBoi9hIxv4R5i914nkAsk4DtXR8kobGD41UM+Pvuf50gCHw5P/oRxeQ+pLDW97d+g32S+HEF9HbTqjbC6O38L25wJmYwnkgivg3gyff7SeYAbG0dbNfUUSCAtiV9SFqRZY1Ma8OWaQBE32hPSIN7F8a7bp0eZ0aEgWYBigAvr9WJSX6h2ARNYvZZmobFTOA0SVAX2d3veGlshCvpleGpF81MYsyQ6sn5UmHPX0RmEd6Qgb5ExgEBqkRrpWXIlwL68IdQVwQahzfHYENfUEVxsLjpzxl3zQPwvN41gyCgaa5JAQUa8jlP7ejb3FwMs5CssZBGj0sGhbYUTTy+iSZixssIGYEONw9wvLSMxPkHp7+bSI3nRDUJiL54Z2HFnZa2mPHs6TVe4+TEZYshtWOYeZLlkdneIJNhGSaSECIWgJdSrBcAkeeffOdSDonbCLUsgY1/n9PhxDWvnsl1+l1nlUKG0PLKluUDVW+Sng+P8jQWMogrk7UF56USkatsM3ytSgl6+TZ5SMlZBG9CDXZKfLLyicpRAAgCxJcLEVuWn7kwOH8RtChti1V6y2xG1ET7Rmyotv+TQrUa/1CG4D3TSjMxSLsWNjIZL/oxWD/lnPukp/2+Usu7MmiyNvy+Iilie73R6ZxkzT+HS9KC0BK4NM6LY1LzgWT41Gmnb3GGYkHsBzg07fpyxrIb0gDhKHH0K6pThkRYqiyv/bz1C8z2qeAgV64M5lDNFX84ChOAhMiwW/qmQxy3To+fEwRUttb0nKGgo9XLnBIEXWxaU4bXcDEXsl88uFV+ZHIa9yqGsHpEExembvT19excccjlr77GbH3myliXf2cOjzaSPw6fRHTOMxkufgg80CK8KTWw==';const _IH='5d7efb24fc6dc7c506901eb259388728901f0d8335fc056767cdcb830118d209';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
