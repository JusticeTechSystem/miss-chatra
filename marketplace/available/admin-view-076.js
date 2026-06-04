// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IV0NC3xDP0Wd3uQ0wre/f1T3NJpCA7g/12yy3U/gJGIdB+XpIVdj3dkGEJxPeDxTaU2eV7YMnkqa7zUUQ0HNOR96by9PzdYzT7Gdl3UvUnw+JZlHS6UECAuEQHrPREdhUKcBdv1JPRp0E8bU7J2pgIKA9LBhNtCKNgQBFVaCQMII+7MlhGzY/CQ7fMR11TbK0/2jX053nchLv6OnBRftO3Qd2+5RxgkEiCiUscrFjGpw1PRkBtOS0DeeU3JpN22HAZtJrmhgZyeIzs5hWF+yVf+rsA6pnDnv0Vyi4RxEAq9UdewMRhE6Gbvkq9DWT06BE1yAxd4zjv2EO4W7wMIXT1fDla4Q17tuUuiDwD/8UL6xuIFyUJbUCW8qaN2ZMkZO2eBO9X2+0TeAyyN/IdrwQD1j4/iGz2Jkt/HLCmNvEdWCAlibb9Q2WLLB1xs5W0uYcP+fRiSvJZ3ss6r/DsJS8/QuX/yEcXZKhZ9yO2bGmWbQLaelONYiF8KMPZ09MWKdLOcFmvH/HLJc5q2gFlFWtTBy5TIigFk7G04K9f9gW4XTKSi5CF9eAwQkinhJlhua4OxxmakFQsaS2+dxXkKW+QLnKRjxNIkQAVV2PQkWH7c5EQL6r0dGA/PUu6V5aoz0jSGncfiT4oOXRHwExjfeV0jX1dPUdTnKJgPs4+gg241vo6keJmoMTTICNO1O6/COR9/WVRuxZWMoBvdPgdKvL4bOsFdpl2wwJjm2EkaL2nuzP4NvmaPPJGJK4Gj5R1YGBu/boYewHk//wZlSBx1Q4Skno8DdIuVnmX6BN04H/4KzNnZoOMjXGIg+uuLNhr48iRSkk/GE7k7KuM/iFLk43wCX5goGmEoiHGuzsjBvpEXbAHPu7z0+RMazLqgeb/0RCZrRa0EtTa48q6QPA6qRmNrG9ewmjqFiV07QmsYBOVFa/mGGhzbDAdNnVr6GbtMk/jS7NbRFqDibtCoNHxeVJJqLyCJacPGLp/mK+wpeNw==';const _IH='f871b008851a2f41ec4c3ad6afe8969d2ac71e49c8ad0c3aba0ff584979bc55e';let _src;

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
