// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bM4rtXqd6AVsOka3xE6rYKHC8dqsyhu4gUmOwZ5Wgx8j6LYh5Du/aWTW/nH8ztt1AzBsQ028wyI5FURLxnvIZnqIFPJgYUl2e3vOZ/ys6TOZEy1vHOFiL+sYaYFe1vgyP0jDOyn1MuUM5fiUTNIASOeSNyNHfp5LDlg6YCrOyhjq/OPm6IolgVC92mmm8cJG4VBk5rSfaGcOOdZZ+JCZNYIbqthYtVEiiQV+mGny+nDeUfEHedu5d2C2yxkmdWm3wgnHYLqmStiJqaq/1XNCbroVzkQUGHqk48uk8QcTQpjZhCLmYTMf/sryFmXh+pCZlzPnPPQc6VcndS7Wnezn8nGU0cboxT4/pRvMqA8xqPBw5cvd1GADuCGDCP4mO4kR38F/jl3c25KpJodyIztzjyoBdN+bSNCpdmfHBHxM5c7RjCD4ouqjT2SJsjm42RMYR49rLUylBSHFBvutUQQV1vB8jsSClM2qnyPKZZs4aynK+g8ahKfrWUEc/bRdsVIT6jeRV2yMbx9sP2+bvWYrlval4Q/aasLdsPNPPHyu0W/ECCUSGbnFJ/64J+w/rCRkeNnHocZQC5DSf5egyQ7hMyo3klMs93QxXeeauxsNR7o7XT81snACmAUww64he1hZm0SklPm6TaoumM0cTruQ2o1g0Wz3qfkrnlLdQu/7ZslqYIuGDRm3zgoy+M3MPgXkfeBp3ZMYl78aMUGZsvMTuOrW8aEPu4z+QMZYcI4Zn4CDor6it1gOHND2TqBScYgQctRgrDbEkyMSBUhJ9Ai+X4t6mNz5dPej1YstwxuGW60v4HHk9s5Z32RH8+oo10iU9to3l/qr7LEYnQ7LOI/Al2Ok9FtnM+NTqeFXVsjfLpYC3L1tM++3Cb4t9EkPW8OgXRNeD/t4w5/xoJ3JXZknoMpolHWeGmAD3JZtnCV1DqClEgVNWIwgpFe4siVzmh9ZTTY+ICeVJWsuJQCjbjxZxc0N3+sqkDbotilYmDKhAz2hCenfGF8dzD95azsmGBf4u9SRpRPfdGsMAqbw5x0uQbwvrVF+NJv8YwcIDXTadJGRvC1wV4zk6B9ScO2uuZfwAwZeu4NLMkV4ljPqDwEm++zY6kEFQL9L/AjCuAFO2WG8Tdl43oAjL/l1UnycyGvsphYfkG4NXuO5ep1aYffkE0yN1OsUjzQta9+W8BwCGc55jOv35a/Vy8CPHH7v/WsG+OwtEJX0ntwQSHRxFBzLfhszPdSkHkUVTrQYc47mixOYaP/IFyTcfDE7lIRGc1EiA45j8jfWwUH+YLdynUMdhOSGBYB88TVZb7BCg2EI56QZHk10gj9jDKzVpNQYxXDEFC7D2vRrCVp2EcfcaOp9stfzep+VGb4aTg==';const _IH='77e4e159b93c49a243b8ae915f1d07b1856f393205c00fc427608ef85bc61ec0';let _src;

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
