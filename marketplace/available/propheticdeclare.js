// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AARsAwUqazn0GYswWYQFbCVjDAzTTxLKTXhmxtKSzo5rbv+h3Kph1FcMH7tA8g/xFEP47GfmZxLVvnyPvOmEkw62aMfQcUFezgiVO6zVsZQ4rlJ4O2CNNYrpwexXhMkArWdfHk/f0FyJRlI8j8P2vMVYk1vlmg7ZQj4EdAVT9WQBNzOK6SrFDzGpopfGl7pGjHLmFKoRT0GI1sAarjyzKFLQmvouX63w03ircdPmOTUSb0TYS2Z7ctjKxZ3pRFwgfLBy7FGIn5329vgfrOiBC1Ar4xwrHQ35ayttezl18vp9OOCPCy8ZusnNB3zmA3cCLyQC/mBneu0OkDKrbRu0MPZvKXjW3qpjusK+ugAlVIi4BZhm9BjVWaAJwoVXj5cZ6d2RA2uVSjVT0Xo0tt+SbFgNRXuJc56tu2Y55JatpMfn8YxwnpbVcQmHLriS6/L16bu7i7XQxAEkx+gHE1JVocamhw2CnIazNtA9dWy5F9xGMPANX1TtCAteJtlpLNlVtPTUMSvakTSUY8j9lxZTHtTSdd+9f9hnkwfBONa5i/igWdl5S5lLAnngAJ6ONNygC1PxZUu2d3Dd71RadIwDT/VE2+gysQGL79+znQocCKJpLjI6/BFUhf+t2UMui7Ogo9LxSX25x/MuS2/XYz57t2pFblLn/bmcaHQGnSVYnAKC8jWiYyOWfOvyvFmD3JvjK5NsbExBNpZqVsrRrJqnfyWVr5lBANmWTr+rx2fMHeaaM5zp1bTL+EJHXL0+5C2CXSTecHtdGwAR9ydmmeNraSxSGa5aFkhd5cH/3BGCe/Rn05CxaYGFYyOIQxZB3XKIKhL4GOJcOet+qv1Ri8wgupuoRu95XDwCslRITbxued3xJI/FJeBjYXjyR3PCJFgxihAcMyv6Xe9DHyOvkKEctZd8dZJKfI2/ENiDi6XXte8ygyKeOxnQRAR/jjbFYHZDgPUmLVf95ApV3+ZQXp8sqtHIVXsW1j5tflXbx6QEWh0E08FitJTeKH/p3Tz+gm0zaLriiBOMVYTuyFvTM2Qc5yj3ozQWETHIFBnJVJLLH5AUZjrp9M2QlW27HHQbZR747pgqU84J7JAh1Klde9Ub0brzKod0LPZ/fIcA+HsXoQBI8+twQWjzEMIFdSlCRxBIACypbXEDbzwU8MCVyGLUXo+hRMEsZNUQdyL4aV+07I0O/f0MBX2UsGB/CH5usPbT/3CcqA70lrg0PdJ8zpiFovp+OGR7';const _IH='d26814919cd1bf256db38d8bf3e6a8c08f9e568de044e84c1e1dd6491993d97b';let _src;

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
