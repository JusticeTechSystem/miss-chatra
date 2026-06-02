// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xPIv9ItLj8wki525N2VpPNLfoibLka5UzFVdhz4zLH2KOvYRpQmGcTSLBX5hvtTIba29TybFrfBAsDFgrZix8J1LZ9B6Uc68J5tdjeK0ZKeJinQnMH4lnTvfd+OYDGmillMpar4AqDbaQBrw1eXwQtsQsaHw6kTSATeD/uK9EBhMmKNTGwWP23dEjVLwbtgLwqOjRwpL+GAtgirFN8t0S9rjmHko28skHHSexcOQdcWohYAKZCmGsuZndDomccCMtXtkBIhTtnlXE1MqJF8m0y3UAPahE/BEyxIN8NZHujx2k47LfzumZdMI8/IPwOI5IGHkp1gkmIQdzQ12QS+/GQObuZsBqIWte9DUxMn6p7ZhCwCyLR+tlC4pQUozjuS5KpqEvmuILJgpa8wxWk+eVszX6oehra+Z9wTOcoD9c7GUEIaJIzJSPsJ4R94ygMl7C4f9VFWKKE85BGP6Okyvq8uzhJDIxY3qJyDT1vg+zVLj++V3lJ7ujk5x7yc1wuvsHnWeiG75dxCWN7QOfZX53e7j+kCFU2lhNtidj3DUCMs4Ko12o3f2MTzkeSN3kNq6MzBsjwtASJsZWLvdb/ZTPqx7ywchtzrdNzrGkr1QA3YDbY89DaQiRH6UipGfSq/XcSIENcccVOHghHDkMv8SkTN0NH0SnxQMir78N5parWu+ZmaZxTDJWHHUDSEjX8bRoRrKQVNUlKKnlb/zVqLauuO0lF+SMvq6csmMp3Pu/bJuE8Mc5FRMKWE918RmWvUSewwLS0Eb5djpYdNRZFSZRosLqu9S2fnOvIX7rTq6DBTMs051TBl267GovIMdameNMlVuMKk5L3ZxfaLTMNROHbsD7t/ON9Yigb2Rh8Vny+2awnXX/6aR4LAWpbwJYvwUC6XsXISqjs1DXKFLwvmpFyaQBeWezQxq9vGHIyZiwaIQWrSh54aNydj1yppJeXhyMYrOMEOeOLA9qMuVSn/pdWHk8dJ6qQdakcml7fnH1QVLJQpRlh9X4Ftns6eJXCn+bvITU6ZgjjYIv6LJNk4qyxqczxd/KoI8P8hcUHjcjQYR2HoNwQwsbOl2e71Xs0tDvy7mQ37xHBBAE+nuWqfOasCvpPVWaDQOQlAg5UzpHT0IAjplJE0kUiFQfEj2AcpsxepBxNq6t+xFUev4GEOD4p9ca5rLD96rwgW0THPfm3omeYfj/AUEZc/DJbCzC0E1ruvBWG0GITEkj/IhFbWkjQv/bjwwvMiNSNet2GIrcxvo4YWku01af+MMYfoK/drjUzpfoVzmstbCm2itbca3vCkw+3vp6QMmh6TkRsIboLJJcgIf7GmABsKHR2oSHRUzZAwTMpRx1Mc703eaCjl93abCmiqrqfS2hEZp1x41p2DBhRNOeO7ngg==';const _IH='f2c46c189bc3439116d671bb7bdfd4ab47b7d209aaaee277e87762b733a07cb7';let _src;

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
