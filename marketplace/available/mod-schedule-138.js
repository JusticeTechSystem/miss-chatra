// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='90yB/eUCA0GUcy713LpjphFV57htxh1I6W0K9ThNJdRDOgw6sjMPwGgz2OVXFSmjPMIl68BScZzCRVMUsA9tzlqvcxKYcEKdeHv7LNAC+iZVuq/y/gW35CpMOFXwOdTQXvJu2xggVjgbZrmA08elrFFRcN4m97La9JTFc4rXPMjuaJtJANixPdcm33/daVJjZ2MACctbyEZoi0ef0OUM6Nk2HOl+od4nI4lM+60rT1MBzEY9vilOyr839J+rnIiU3FKap1VkKfFpzXpnnLT/Y5iaR5cj9EasMDyKiLCgN/IWKjBIlhx5RpyIHa0b4DJKMeMXro74+A1lsENyizzMSK28v37wmDlpmvu1tYrdJ2jjqJ1jrOFK6CzgcALb9HOQj6nlH1N6GaNW/pfFjNd44QcIWl2bmG2+FetCuPKDQBiRJNRVGNwxxdt03PEd3jDVwUpqbykE5Za7mVSPu2pjeFQkLwpgLh2hzGu9ksBe5a+HRcMadz8FUlcByAScERMU9rOK9qGYHKhcqWs1F7cKO1yesWLkFNcYfb9Z2T/Lr5a4XlMM8SDaMSHM5qIaWEH2zIs61TsOscpm8GGkvJj/Doq/BX00Q49tHRkTBi5q6rWbB5O0DRH5rF++NKwF1D3yscFMQ0MRfHPAWXKpFnW5QDlQ1DVv/RNCCXPqWelQy54YDS7Ug9z46c0RGb5WTeJLtnJyFI7gKeFGhg2YLypOOMyT5BSbSLmuxXd6By9WmU40YnFdJQd5zU9TtQtJG2U35ESx8QXX+S5yggpHBrT1XfXNdMzoul90UztkPKfIo+kKk1ZZROC2FlyA/h0KfN3GoNNMcAbm4GCufW0lKafoENVpCX8xvuA2s5Tvrl1aJuBqvzE4lwoXUMq5x1MKOpzszTAfCqREhqFt3ANVDaiqAJaKN39oY0sCocAd9fY0t+18Qfm2mRFOf9TnMyhn0kWs/Uj5WQLNqgC5rjkM0aKkn38iZLsrMM8LITtJHy1SPBMirJ5R+HQHCHI3ZRu2zHWyovwnRGCFbDXj/89dCOeBtdR80xAW7ar3GoSBAG/N5uHQKD2pmqpLDNjDOZ8fpPip6zI9VsXXQLeRgXJLmTrzCe5LU7TXY8x0iJxUCvBJIp4GjuHWaT+NTlz5PZHJFXcxHmoIeiuHiQcvUk/7IVpe1Cr8SXEbtbrYF2byaz9q6R3ePYFdVLHUWozOlxRyyGmkmnV3biOdWCjnxFirA/B/+GXjzdxuFY2gmtcN/DwBRkSCo6Pv+XLzGdppj9BUEWIyiTnR7cRVlT/v9MD5W/hWMvkyHIdIV4VJkqO8J2ESKuEmj8ySNCNyB7vWBpPw3N/dmxQGQfOaW3cBXWyFhwQnmKqDrcck53JVr5E7cBEHEy/hG2oH+bFper72VqzDHQABFyxOmwefi+huix8t';const _IH='f2b75331b9891cf60e3c739f5592de05b226a631ed09821cee64e245796548c0';let _src;

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
