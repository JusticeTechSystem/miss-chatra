// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSEv6PvbxbX4e++Eh4zNivO6EyqTxe/yWoPjYs7ZaXoH3Mt6JFfhsKSPZDciXayq3Bl0GIBmisI//AIfXL3SiqWc4zr3OgqIkyP10dtIb/5FS/POVhdofTIJDfibGI4TIMqgKDt113s5+kM90cnf5u9ZTLeGuOYL/Dh+VHDm0x6MhFZprMd9XqWJlsYzalRkmcyT6EPtfQA7+epDW7TlPFby4BthBhyRh5Zmm3UCvqFPDoTtPc3afV4d9ayxnBmh7tAf9Vz5A26k/36WHpri5ggiv/JeT7tbTwh1SiFtU53ei2Jc4ANGszrYGsixEtApgKmaDoG5ypdARq4BLVK4VYCN0Hi1PWDdi8oLH/OV8AhHQew+rjlGAnd9IHMCLHbGDq+04jSPnccME+sQRXE7luwu6YvJmAz9VOf8+ghtLcDpL+2Si3rVNONrILLXdQPJL7OKbWBFkkyjUv+DbumNf1S0+PcvF43QEo7x+bKpaqTTyGwHb5hFDhaAksdV017XMallILyF8RBMYpZaAoRHaLnyD38gbPdJfiW86BObfKtHJNaKKzgKcqa66CvHDO5o4LeTCRsN6oY6oE+bWFM/HtYJjmZQxsx1cky+BaMYE2e/V3xb8NzrSTNWIgzUa18WOLGTL73Q8QirAnwEFdKrXkty0MB259COQktXVzoHJDWVNnOFHvq24TDgpJMUyeMm0EsW1mJANY/f5UVmJm78gDrtn9x58eQ2YOpyCv6MRNHvogh/68wUdY4F+UPaq3wEQFcjfZUNBldEu0iYtVsfXuGDGNTzEXYDKpQVr2PY7knOUC/oHqCd36hrX2b1phrf16XTNRnMxTOhNYkR2UgIOwwlANy2ZtcqhtXbJu65CMwFQ/CZVoSTgC+wIikfPfC7JbJkyXxi9UaEEDlTvGi2yS2KpenNl2/tcgWQiuaYGQKfO5TutGq909KQ+AQhjZKpMaIUsD9PMfMOWL35vsWImKy/dtSrImXbk/FZ/6F8pxtwUI4qa7r52Tbh/m/f/YcXNxdPXpxvDoXoNeIoITOHZgA2lyKxytsKQKYsGIONLQuCnQD9h2dkbNQSgOUdl6tlfWx92RYwKdE3nrGt6Pm2Lp8nYyB53E8jvu/z28GAGz094yf3v+XjiZdtcLW9GC+Rit6UWaKvCzqcVWaJpdXPRM1oXul7QQHOTKaTW844iOw/ryUVjQDC4vVSqPq5yzI7L3S4XWBhcocuDTJGfTYeQcPPGnf40ROHGLfFnc+GWNZxxYD2DAMDAjCoAq7pov+eTnqdJeUIemej9N6PRYCCnTf1py1hJfPZz3i2f+NDN+Bs2bPTCqUhrNT5FG3rWNjuj8wNtXWJXBu6X54WuRtGMjVIVEUrh61cN4UqtSzQnuqOURBGP7qGI9/3cNLbH3lUrLNcaRziFQ+';const _IH='9358f3e6adb527c5ec36e0c09274396cbf700e06ac42aaddb052d48c9db0640d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
