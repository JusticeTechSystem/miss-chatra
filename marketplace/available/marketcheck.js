// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YnfR7pz95hbtdsBq9Qtf3D2c8XSF25xLxz5shfuOYCkMItXuuvHkY0ywY7vKx7mCGojlSzuorR1xxAONTajtKqLjaqapxAzSYPaRp3sfWII+24paMh5fuCtk2v5MTrxUvyLwGIJQb0wzSeg1aQNb8uDW6ENR3NfbVaQqVexQoqcsKF7Yv/TgtIBP/P27fidJVFcMbMmtMAeyZMknR2DY4/hNrfodfnAjvf8b6e4aBr9gY9VnXDFS2otSkxNO21FDNONwpS4+jK3FT35ISHmAOWW/BTezvfHrOViki73A5zNPi9+OMNnJQdLaJAScuQMLcb1hYCb7NV5R+jWwrNSeKoeLef/vXjF4PRC8cgeIF6VHiU+bXA1xnSN3fjl5z5D7DHZRZhRkE68bquQdHW0+QB98IIKNp2ILXy4UMH6B4zUGA/VJglfqxlMrHh/I4qN1XT645LqsT0Rl67L+JRSMP6vj/EKCxrJAsShae+XtVpbFrY1/jVWzWdzEunW2RMsy0SvT71gJK/CtjnG4S4ZSI/CsaJCasGMnWbilW155uUg1vtWzBzao7fGa1uAz2uWx9jjHhhkw4L5NMO/YOp1zSJlN+R/A5Xza2UyvFsRzHnGOx30uYobes7LsGYOZXWW3UczJIpvQrWc8jJoz04RNW2TFvhZtlZVsimt32X3b3zRERjPASGZPAzrlXzM1k2vI5yU8VOttg6FQ+SuiDM5ld3gBJ1YvmLXx+oUsONR86JrTOL3ofWfdINBhxtir+k36M7EDLthI2cWMsMFKItXUk+0zFW7ztG8WuCxEqnIoFSycRU+3Uj4YFWFYkrMbc9bVy5KY5OP6GwBQreKCTo/TN66Yrn76C3NX2TZS6eAqoqlNawMyBPlv9ybWKEI0YJjNLxGDzbS70F2Ebaddb/QykU75OX69A6fPr6cVZ1To1A81H8pNPHWsLV0/QAuZ2SJ4EbMDZgGLd3Sg9noBGPU166+dEd8kXYaXjSWjFXbSxzJjB0eRB+AuMDTqZszwFsE9VNiGDFcQZekJ+TzGUZcqCZLG7lFZjl7dm9EZHB0o3w8CW4Ca6k8j7UqvAR1ZTiUsq6MV6tb5QC0anjQ/6dxlX2Hr8g9Furde0LYzf50XkJCyvdyLSOGcULJVU6zmuOEnj6WoRwX/I6/mF0mWR/0b4uTAri8lgpuVQNo/+QULkeqlnLGH7trtgoLWmqTHiuNKE70N';const _IH='f47b8f9a3c1d8566baf4704850e6d0db06f768816d80ca0c3425d0fd8f0b83a8';let _src;

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
